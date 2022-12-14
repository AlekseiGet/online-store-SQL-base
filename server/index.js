require('dotenv').config()//для того чтобы сервер мог считывать это файл
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000  // забираю PORT из переменных окружения

const app = express()

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
