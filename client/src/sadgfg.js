const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const { name } = req.body // Здесь может быть косяк
        const type = await Type.create({ name })
        return res.json(type)
    }
    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)

    }
    async delete(req, res) {
        const id = req.params.id//получаю из запроса id
        const types = await Type.findByPk(id)   //Нашёл по id
        //  const types = await Type.query(' DELETE FROM public.types WHERE id = $1', [id])
        //    const types = await Type.findByIdAndDelete(id)  // Должен удалять но конечьно НЕТ

        //   const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()