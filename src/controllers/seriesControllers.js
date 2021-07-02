
const { response } = require("express");
const seriados = require("../models/series.json")

//definir uma rota padrão
const home = (request, response) =>{
    response.status(200).send("olá, seja bem vindo ao reprogramaflix! <3")
}
 
const getAll = (request, response) =>{
    response.status(200).send(seriados);
};
const getById = (request, response) => {
    const requestedId = request.params.id;
    const filteredId = seriados.find(seriados => seriados.id == requestedId);
    response.status(200).send(filteredId);
};

const getByTitle = (request, response) =>{
const requestedTitle = request.query.title.toLowerCase()

const filteredTitle = seriados.find(seriados => seriados.title.toLowerCase().includes(requestedTitle))

if (filteredTitle === "" || filteredTitle === undefined) {
    response.status(404).send({
         "message": "por favor, insira um título válido"
    })

} else {
    response.status(200).send(filteredTitle)
        }

};

const getByGenre = (request, response) => {
const requestedGenre = request.query.genre
let seriadosList = []; 

seriados.forEach(seriados => {
        let genreList = seriados.genre

        for (genre of genreList) {
            if (genre.includes(requestedGenre)){
                seriadosList.push(seriados)
            }
        }
        })
    

    

response.status(200).send(seriadosList)
};







module.exports = {
    home,
    getAll,
    getById,
    getByTitle,
    getByGenre
    } 