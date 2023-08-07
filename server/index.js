const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

app.use (
    express.urlencoded({
        extended: true
    }),
);

app.use(express.json());

app.use(express.static('public'));

const basePath = path.join(__dirname, 'routes');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});