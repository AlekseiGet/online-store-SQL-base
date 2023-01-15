import { makeAutoObservable } from "mobx"
import  imagen  from "../image/12337140_2.jpg";

export default class DeviceStore {
    constructor() {//он будет вызываться при создании объекта данного класса
        this._types =[]
        this._brands = []
        this._devices = []
        this._selectedType ={}//для кликабельности
        this._selectedBrand = {}//для кликабельности

        makeAutoObservable(this)//mobx будет следить за изменениями компонента и при изменении компоненты будут перерендиваться ,будет показывать авторизован пользователь или нет
    }
    setIsTypes(types) { 
        this._types= types
    } 
    setBrand(brands) {
        this._brands = brands
    }
    setDevice(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
       this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
  
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}

//пробрасую это в index.js