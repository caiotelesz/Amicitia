import con from "./connection.js";

// Add médico
export async function addDoctor(medico) {
  let command = `
    INSERT INTO tb_Medicos (nome_med, crm_med, desc_med, img_med)
           VALUES (?, ?, ?, ?)
  `;

  let resp = await con.query(command, [
    medico.nome,
    medico.crm,
    medico.descricao,
    medico.img
  ]);

  let info = resp[0];

  medico.id = info.insertId;
  return medico;
}

// Listar médico
export async function listDoctor() {
  let command = `
    SELECT id_med       id,
           nome_med     nome,
           crm_med      crm, 
           desc_med     descricao, 
           img_med      img
    FROM tb_Medicos
  `;

  let resp = await con.query(command, []);
  
  let info = resp[0];

  return info;
}

// Listar médico pelo id
export async function listDoctorPerId(id) {
  let command = `
    SELECT id_med       id,
           nome_med     nome,
           crm_med      crm, 
           desc_med     descricao
    FROM tb_Medicos
    WHERE id_med = ?
  `

  let resp = await con.query(command, [id]);
  let line = resp[0];

  return line[0];
}

// deletar médico pelo id
export async function deleteDoctorId(id) {
  let command = `
    DELETE FROM tb_Medicos WHERE id_med = ?
  `;

  let resp = await con.query(command, [id]);
  
  let info = resp[0];

  return info.affectedRows;
}

// Alterar o medico
export async function alterDoctor(medico, id) {
  let command = `
    UPDATE tb_Medicos
    SET nome_med = ?,
        crm_med = ?,
        desc_med = ?
    WHERE id_med = ?
  `;

  let [rows] = await con.query(command, [
    medico.nome,
    medico.crm,
    medico.descricao,
    id
  ]);

  return rows.affectedRows;
}

// Altera a imagem do médico
export async function alterDoctorImage(id, medico) {
  let command = `
    UPDATE tb_Medicos
    SET img_med = ?
    WHERE id_med = ?
  `;

  let resp = await con.query(command, [medico, id]);
  let info = resp[0];

  return info.affectedRows;
}