import multer from "multer";
import { Router } from "express";
import { addBlog, listBlog, listBlogPerId, deleteBlogId, alterBlog, alterBlogImage } from "../repository/blogsRepository.js";

const server = Router();
const upload = multer({ dest: 'storage/blogs' });  // Remover o espaço extra no caminho

// Add blog
server.post('/blog', upload.single('imagem'), async (req, resp) => {
  let blog = req.body;
  let foto = req.file;

  blog.foto = foto ? foto.path : null;

  let insertBlog = await addBlog(blog);
  resp.send(insertBlog);
});

// Listar Blog
server.get('/blog', async (req, resp) => {
  let listBlogs = await listBlog();
  resp.send(listBlogs);
});

// Listar blog pelo id
server.get('/blog/:id', async (req, resp) => {
  let id = req.params.id;

  let blogPerId = await listBlogPerId(id);

  resp.send(blogPerId);
});

// Deletar blog pelo id
server.delete('/blog/:id', async (req, resp) => {
  let id = req.params.id;

  let linesAffect = await deleteBlogId(id);
  if (linesAffect == 0)
    resp.status(404).send({ message: 'Blog não encontrado. ' });
  else
    resp.status(202).send({ message: 'Blog deletado com sucesso. ' });
});

// Alterar o blog
server.put('/blog/:id', async (req, resp) => {
  let id = req.params.id;
  let blog = req.body;

  let linesAffect = await alterBlog(blog, id);
  if (linesAffect == 0)
    resp.status(404).send({ message: 'Blog não foi alterado. ' });
  else
    resp.status(202).send({ message: 'Blog alterado com sucesso. ' });
});

// Alterar a imagem
server.put('/blog/imagem/:id', upload.single('imagem'), async (req, resp) => {
  let id = req.params.id;
  let foto = req.file.path;

  let linesAffect = await alterBlogImage(id, foto);
  if (linesAffect == 0)
    resp.status(404).send();
  else
    resp.status(202).send();
});

export default server;
