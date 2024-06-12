import 'dotenv/config'

// import loginController from "./controller/loginController.js";
import medicosController from "./controller/medicosController.js";
import blogsController from "./controller/blogsController.js";

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

// server.use(loginController); NN UTILIZAVEL
server.use(medicosController);
server.use(blogsController);

server.use('/storage/medicos', express.static('storage/medicos'));
server.use('/storage/blogs', express.static('storage/blogs'));

let port = process.env.PORT;
server.listen(port, () => console.log("API SUBIU na porta: " + port));