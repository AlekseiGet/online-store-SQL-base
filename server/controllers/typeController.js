const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');
const Sequelize = require('../db')
//const { removeAllListeners } = require('nodemon');  // при включении этой хрени всё сломалось
//const { removeTicks } = require('sequelize/types/utils');// при включении этой хрени всё сломалось

class TypeController {
    async create(req, res) {
        const {name} = req.body // Здесь может быть косяк
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req, res) { 
        const types = await Type.findAll()
        return res.json(types)

    }
    async delete(req, res) {
         const id =  req.params.id//получаю из запроса id
        let types ;
        try {
            types = await Type.sequelize.query(' DELETE FROM public.types WHERE id = ?', {
                replacements: [id]})
        } catch (e) {
            console.error(e);
        }
       return res.json(types)       
    }
    
}

module.exports = new TypeController()