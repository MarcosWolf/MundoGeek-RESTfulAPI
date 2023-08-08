const express = require("express");
const cors = require("cors");

require('dotenv').config();

const router = require("./routes/routes");

const app = express();
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

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});