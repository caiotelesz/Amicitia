import con from './connection.js';

// Add médico
export async function addDoctor(medico) {
  let command = `
    INSERT INTO tb_Medicos (nome_med, crm_med, desc_med, img_med)
           VALUES ($1, $2, $3, $4)
           RETURNING id_med
  `;

  let resp = await con.query(command, [
    medico.nome,
    medico.crm,
    medico.descricao,
    medico.img
  ]);

  let info = resp.rows[0];

  medico.id = info.id_med;
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

  let resp = await con.query(command);
  return resp.rows;
}

// Listar médico pelo id
export async function listDoctorPerId(id) {
  let command = `
    SELECT id_med       id,
           nome_med     nome,
           crm_med      crm, 
           desc_med     descricao,
           img_med      img
    FROM tb_Medicos
    WHERE id_med = $1
  `;

  let resp = await con.query(command, [id]);
  return resp.rows[0];
}

// Deletar médico pelo id
export async function deleteDoctorId(id) {
  let command = `
    DELETE FROM tb_Medicos WHERE id_med = $1
  `;

  let resp = await con.query(command, [id]);
  return resp.rowCount;
}

// Alterar o médico
export async function alterDoctor(medico, id) {
  let command = `
    UPDATE tb_Medicos
    SET nome_med = $1,
        crm_med = $2,
        desc_med = $3
    WHERE id_med = $4
  `;

  let resp = await con.query(command, [
    medico.nome,
    medico.crm,
    medico.descricao,
    id
  ]);

  return resp.rowCount;
}

// Alterar a imagem do médico
export async function alterDoctorImage(id, img) {
  let command = `
    UPDATE tb_Medicos
    SET img_med = $1
    WHERE id_med = $2
  `;

  let resp = await con.query(command, [img, id]);
  return resp.rowCount;
}
