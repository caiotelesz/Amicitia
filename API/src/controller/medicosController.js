import multer from "multer";
import { Router } from "express";

import { addDoctor, listDoctor, listDoctorPerId, deleteDoctorId, alterDoctor, alterDoctorImage } from "../repository/medicosRepository.js";

let server = Router();
const upload = multer({ dest: 'storage/medicos' })

// Add médico
server.post('/medico', upload.single('imagem'), async(req, resp) => {
  let med = req.body;
  let img = req.file;

  med.img = img ? img.path : null;

  let insertMed = await addDoctor(med);
  resp.send(insertMed);
})

// Listar médico
server.get('/medico', async(req, resp) => {
  let listMed = await listDoctor();
  resp.send(listMed);
})

// Listar médico pelo id
server.get('/medico/:id', async(req, resp) => {
  let id = req.params.id;

  let medPerId = await listDoctorPerId(id);

  resp.send(medPerId);
})

// Deletar médico pelo id
server.delete('/medico/:id', async (req, resp) => {
  let id = req.params.id;

  let linesAffect = await deleteDoctorId(id);
  if (linesAffect == 0)
    resp.status(404).send({ message: 'Médico não encontrado. '});
  else
    resp.status(202).send({ message: 'Médico deletado com sucesso.' });
})

// Alterar o medico
server.put('/medico/:id', async(req, resp) => {
  let id = req.params.id;
  let med = req.body;

  let linesAffect = await alterDoctor(med, id);
  if (linesAffect == 0)
    resp.status(404).send({ message: 'Médico não foi alterado. '});
  else 
    resp.status(202).send({ message: 'Médico alterado com sucesso. '});
})

// Alterar a imagem
server.put('/medico/imagem/:id', upload.single('imagem'), async (req, resp) => {
  let id = req.params.id;
  let img = req.file.path;

  let linhasAfetadas = await alterDoctorImage(id, img);
  if (linhasAfetadas == 0)
    resp.status(404).send();
  else
    resp.status(202).send();
});


export default server;