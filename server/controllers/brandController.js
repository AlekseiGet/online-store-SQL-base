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
        const id = parseInt(req.params.id) //получаю из запроса id
  
        const brands = await Brand.findAll()
        const brandInd = brands.findIndex(item => item.id === id); //получил индекс по поиску
        brands.splice(brandInd, 1)

        return res.json(brands) 
    }

}

module.exports = new BrandController()