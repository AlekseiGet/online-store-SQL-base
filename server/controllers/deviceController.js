const uuid = require('uuid')// для генерации уникльного id установить пакет npm i uuid
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DviceController {
    //создание в базу
    async create(req, res, next) {
        try {
          let {name, price, brandId, typeId, info} = req.body;
          const {img} = req.files
          let fileName = uuid.v4() + ".jpg"  // функция сгенерирует уникальный id и добавить .jpg
          img.mv(path.resolve(__dirname, '..', 'static', fileName))//для перемещения файла в заданную папку
        /**
         * resolve( адаптирует указаный путь к операционной системе
         * __dirname  путь до текущей папки  (controllers)
         * '..'  вернуться на диреторию назад
         * 'static'  куда 
         */
          const device = await Device.create({ name, price, brandId, typeId,  img: fileName })

          if (info) {
            info = JSON.parse(info)// парсить массив для фронта
            info.forEach(i =>      //для каждого эллемента массива вызываю функцию create
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
                )
        } 
  
        return res.json(device)
        } catch (e) {
          next (ApiError.badRequest(e.messsage))
        }

       
    }
    //получение по запросе 
    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1 // по умолчанию одна странца
        limit = limit || 9  //по умолчанию не больше 9
        let offset = page * limit - limit// отступ

        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId ) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId}, limit, offset })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: {typeId ,  brandId}, limit, offset })
        }
        return res.json(devices)
    }
    //фунуция получения одного конкретного девайса по id устройства 53.00
    async getOne(req, res) {
        const {id} = req.params //получаю id устройства из параметров в deviceRouter (router.get('/:id', deviceController.getOne))
        const device = await Device.findOne(
            {
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            },
        )
        return res.json(device)
    }
    //функция удаления
    async delete(req, res) {
        const id = parseInt(req.params.id) //получаю из запроса id
  
        const devices = await Device.findAndCountAll() //получил массив колонки и строки
        const deviceInd = devices.rows.findIndex(item => item.id === id); //получил индекс по поиску
        devices.rows.splice(deviceInd ,1)//найти его и удалить НО только здесь
        
        return res.json(devices)
    }
   
}

module.exports = new DviceController()