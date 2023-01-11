  import {makeAutoObservable } from "mobx"
  //mobx будет следить за изменениями компонента и при изменении компоненты будут перерендиваться

 export default class UserStore {
    constructor() {//он будет вызываться при создании объекта данного класса
       this._isAuth = false // _  нижнее подчёркивани чтобы обозначить что переменная мзменятся не может
       this._user = {}
       makeAutoObservable(this)
    }
//акшин функции которые как то изменяют состояние ...
     setIsAuth(bool) { //принимает булевое значение и присваивает
        this._isAuth = bool
     }
// акшин для изменения пользователя     
     setUser(user) { 
         this._user = user
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
}