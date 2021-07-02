
const express = require("express");//importando express
const app = express();

//chamar as rotas
const seriados = require("./routes/seriesRoutes")

//definir rota raiz 
 app.use("/series", seriados)

module.exports = app // exportando o app



