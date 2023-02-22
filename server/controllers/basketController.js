const ApiError = require('../error/ApiError')
const { BasketDevice, Basket } = require('../models/models')

class BasketController {
    async addDev(req, res) {
        let { basketId, deviceId } = req.body;
        const basketItem = await BasketDevice.create({ basketId, deviceId })
        return res.json(basketItem)
     }

    async getAll(req, res) { 
        const userId = req.params.id
       const basket = await Basket.findOne(
            {
            where: {
                    userId          
            },
        })
        return res.json(basket)
    }

    async delDev(req, res) { }
};

module.exports = new BasketController();

