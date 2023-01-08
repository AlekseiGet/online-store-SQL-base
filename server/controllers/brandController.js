 const {Brand} = require('../models/models')
 const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const { name } = req.body // Здесь может быть косяк
        const brand = await Brand.create({ name })
        return res.json(brand)
    }
    async getAll(req, res) {
       const brands = await Brand.findAll()
       return res.json(brands) 

    }
    async delete(req, res) {  
        return res.json({message: "Удалить брэнд"})

    }

}

module.exports = new BrandController()