// import { login, loginList } from "../repository/loginRepository.js";
// import { Router } from "express";

// let server = Router();

// server.post('/login/entrar', async (req, resp) => {
//   let { email, password } = req.body;
//   let user = await login(email, password);

//   if(user.length === 0) {
//     resp.status(401).send({ message: "Email ou senha incorreto"});
//   } else {
//     resp.send({ loggedIn: true, user: user[0]});
//   }
// });

// server.get('/login', async(req, resp) => {
//   let loginL = await loginList();
//   resp.send(loginL);
// });

// export default server;

// NN UTILIZAVEL