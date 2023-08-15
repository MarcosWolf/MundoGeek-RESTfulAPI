const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const router = require("./routes/routes");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT;


const path = require("path")

app.use (
    express.urlencoded({
        extended: true
    }),
);

app.use(cors());
app.use(express.json());
app.use(router);

const basePath = path.join(__dirname, 'templates');

/*
const authenticateToken = (request, response, next) => {
    const token = request.header('Authorization')?.split(' ')[1];
    if (token == null) return response.sendStatus(401);
  
    jwt.verify(token, 'viewtoken', (err, user) => {
      if (err) return response.sendStatus(403);
      request.user = user;
      next();
    });
  };
*/

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});