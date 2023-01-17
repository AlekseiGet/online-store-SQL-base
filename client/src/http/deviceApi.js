import { $authHost, $host } from "./index";

//запрос  $authHost
export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

//получение  $host
export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}


//запрос  $authHost
export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

//получение  $host
export const fetchBrand = async (typeId, brandId, page, limit = 5) => {//передал сюда typeId, brandId, page, limit по умолчанию равен 5
    const { data } = await $host.get('api/brand', {params: {//в опциях можно эти параметры указать удобным для меня видом
        typeId, brandId, page, limit //они автоматически подставятся в строку запроса если переменная не пустая
    }} )
    return data
}


//запрос  $authHost
export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device', device)
    return data
}

//получение  $host
export const fetchDevice = async () => {
    const { data } = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}