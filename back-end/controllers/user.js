// Importa o model correspondente
const User = require('../models/User.js')()

const controller = {} // Objeto vazio

// Função que será chamada para criar uma nova
// entrada do glossário
controller.create = async (req, res) => {
    try {
        await User.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: internal Server Error
        res.status(500).send(error)
    }
}

// Função que devolve uma listagem de entredas de
// glossário já inseridas

controller.retrieve = async (req, res) => {
    try {
        const result = await User.find()
        // HTTP 200: Ok é implicito aqui
        res.send(result)
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

// Função que retorna uma única entrada do glossário
// com base no id fornecido
controller.retrieveOne = async(req, res) => {
    try {
        const id = req.params.id
        const result = await User.findById(id)
        // Se tivermos um resultado, retornamos com status HTTP 200
        if (result) res.send(result)
        // Senão, rotornamos HTTP 404: Not found
        else res.status(404).end() 
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}


controller.update = async(req, res) => {
    try {
        const id = req.body._id
        const result = await User.findByIdAndUpdate(id, req.body)
        // HTTP 204: No content
        if(result) res.status(204).end()
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async (req,res) => {
    try {
        const id = req.body._id
        const result = await User.findByIdAndDelete(id, req.body)
        if (result) res.status(204).end()
        else res.status(404).end()
    }
    catch(error) {
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller