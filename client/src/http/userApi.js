/**
 * Функция авторизации, регистрации и проверки токена на валидность
 */
import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {//регистрация обычного пользователя
       const {data} = await $host.post('api/user/registration', {email, password})
       localStorage.setItem('token', data.token)
       return jwt_decode(data.token)
}

export const login = async (email, password) => { //вход сеществующего пользователя
    const {data} = await $host.post('api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => { //проверка
    const { data } = await $host.post('api/user/auth' ) // Тут что то не так
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

 export const registrationAdmin = async (email, password) => {//регистрация Админа
       const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
       localStorage.setItem('token', data.token)
       return jwt_decode(data.token)
}
 
//запрос пользователей
 export const allUser = async() => {
     const { data } = await $host.get('api/user')
     localStorage.setItem('token', data.token)
     return data
 }

export const fetchUser = async () => { //без него нет списка пользователей
    const { data } = await $host.get('api/user')
    return data
}