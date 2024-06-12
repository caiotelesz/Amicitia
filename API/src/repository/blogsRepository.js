import con from "./connection.js";

// Add blogs
export async function addBlog(blog) {
  let command = `
  INSERT INTO tb_Blog (foto_blog, titulo_blog, resumo_blog, desc_blog, font_blog) values (?, ?, ?, ?, ?)
  `;

  let resp = await con.query(command, [
    blog.foto,
    blog.titulo,
    blog.resumo,
    blog.descricao,
    blog.fonte
  ]);

  let info = resp[0];

  blog.id = info.insertId;
  return blog;
}

// Listar Blog
export async function listBlog() {
  let command = `
    SELECT id_blog      id,
           foto_blog    foto,
           titulo_blog  titulo,
           resumo_blog  resumo,
           desc_blog    descricao,
           font_blog    fonte
    FROM tb_Blog
  `;

  let resp = await con.query(command, []);

  let info = resp[0];

  return info;
}

// Listar Blog pelo id
export async function listBlogPerId(id) {
  let command = `
    SELECT id_blog      id,
           foto_blog    foto,
           titulo_blog  titulo,
           resumo_blog  resumo,
           desc_blog    descricao,
           font_blog    fonte
    FROM tb_Blog
    WHERE id_blog = ?
  `;

  let resp = await con.query(command, [id]);
  let info = resp[0];

  return info[0];
}

// deletar blog pelo id
export async function deleteBlogId(id) {
  let command = `
    DELETE FROM tb_Blog WHERE id_Blog = ?
  `

  let resp = await con.query(command, [id]);

  let info = resp[0];

  return info.affectedRows;
}

// Alterar o blog
export async function alterBlog(blog, id) {
  let command = `
    UPDATE tb_Blog
    SET titulo_blog = ?,
           resumo_blog = ?,
           desc_blog = ?,
           font_blog = ?
    WHERE id_Blog = ?
  `;

  let [rows] = await con.query(command, [
    blog.titulo,
    blog.resumo,
    blog.descricao,
    blog.fonte,
    id
  ]);

  return rows.affectedRows;
}

// Alterar a imagem do blog
export async function alterBlogImage(id, blog) {
  let command = `
    UPDATE tb_Blog
    SET foto_blog = ?
    WHERE id_blog = ?
  `;

  let resp = await con.query(command, [blog, id]);
  let info = resp[0];

  return info.affectedRows;
}