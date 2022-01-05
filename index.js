const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./database/database');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

conn.authenticate().then(() => { console.log("Conexao feita com sucesso.");}).catch((erro) => {console.log(erro)});

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(PORT, () => {
    console.log("O servidor esta rodando")
});