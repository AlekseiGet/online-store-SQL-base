  import {makeAutoObservable } from "mobx"
  

 export default class UserStore {
    constructor() {//он будет вызываться при создании объекта данного класса
       this._isAuth = false //ДОЛЖНО БЫТЬ FALSE  _  нижнее подчёркивани чтобы обозначить что переменная изменятся не может
       this._user = {}
       this._isAdmin = false  //Хочу что бы проверял админ или нет
       makeAutoObservable(this)//mobx будет следить за изменениями компонента и при изменении компоненты будут перерендиваться ,будет показывать авторизован пользователь или нет
    }
//Экшин функции которые как то изменяют состояние ...
     setIsAuth(bool) { //принимает булевое значение и присваивает
        this._isAuth = bool
     }
// Экшин для изменения пользователя     
     setUser(user) { 
         this._user = user
     }

    setIsAdmin(bool) { //принимает булевое значение и присваивает
       this._isAdmin = bool
    }
/**  геттеры  для получения переменных из нашего состояния
     компьютед функции они вызываются только в том случае если переменная которая была внутри была изменена
*/
     get isAuth(){
        return this._isAuth
     } 
     get user() {
        return this._user
     }
     get isAdmin() {
       return this._isAdmin
    }
}

//пробрасую это в index.js