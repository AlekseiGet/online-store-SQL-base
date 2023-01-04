require('dotenv').config()//для того чтобы сервер мог считывать это файл
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 5000  // забираю PORT из переменных окружения
const models = require('./models/models') //подключаю всю базу при запущенном PG Admin4
const cors = require('cors')// настраиваю cors чтобы отправлять запросы


const app = express()

app.use(cors())
app.use(express.json()) // чтобы приложение могло парсить json формат
/* 
//создаю первый get метод а потом удалил
app.get('/', (red, res) => {
    res.status(200).json({message: 'WORKING !!!'} )//200 значит запрос обработан правильно
} )
*/
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
 
// остановился 24.54
/* в терминале sd server -вошел в папку
               npm run dev - запустил скрипт
    запустил программу pgAdmin 4  пароль "give_me_your_money" 
    в браузере запустил   https://app.diagrams.net/ и открыл файл 123123
    запустил программу Postman (время 25.15 )      
 */ 