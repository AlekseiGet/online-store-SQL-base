 const {Brand} = require('../models/models')
 const ApiError = require('../error/ApiError')
const Sequelize = require('../db')

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
        const id = req.params.id //получаю из запроса id

        let brands;
        try {
            brands = await Brand.sequelize.query(' DELETE FROM public.brands WHERE id = ?', {
                replacements: [id]
            })
        } catch (e) {
            console.error(e);
        }
        return res.json(brands) 
    }

}

module.exports = new BrandController()