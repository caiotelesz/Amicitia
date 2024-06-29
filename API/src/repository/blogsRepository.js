import con from './connection.js';

// Add blogs
export async function addBlog(blog) {
  if (!blog.titulo || !blog.resumo || !blog.descricao || !blog.fonte) {
    throw new Error('Missing required blog fields');
  }

  let command = `
  INSERT INTO tb_Blog (foto_blog, titulo_blog, resumo_blog, desc_blog, font_blog) 
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id_blog
  `;

  let resp = await con.query(command, [
    blog.foto,
    blog.titulo,
    blog.resumo,
    blog.descricao,
    blog.fonte
  ]);

  let info = resp.rows[0];

  blog.id = info.id_blog;
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

  let resp = await con.query(command);
  return resp.rows;
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
    WHERE id_blog = $1
  `;

  let resp = await con.query(command, [id]);
  return resp.rows[0];
}

// Deletar blog pelo id
export async function deleteBlogId(id) {
  let command = `
    DELETE FROM tb_Blog WHERE id_blog = $1
  `;

  let resp = await con.query(command, [id]);
  return resp.rowCount;
}

// Alterar o blog
export async function alterBlog(blog, id) {
  let command = `
    UPDATE tb_Blog
    SET titulo_blog = $1,
        resumo_blog = $2,
        desc_blog = $3,
        font_blog = $4
    WHERE id_blog = $5
  `;

  let resp = await con.query(command, [
    blog.titulo,
    blog.resumo,
    blog.descricao,
    blog.fonte,
    id
  ]);

  return resp.rowCount;
}

// Alterar a imagem do blog
export async function alterBlogImage(id, blog) {
  let command = `
    UPDATE tb_Blog
    SET foto_blog = $1
    WHERE id_blog = $2
  `;

  let resp = await con.query(command, [blog, id]);
  return resp.rowCount;
}
