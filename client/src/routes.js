import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Auth from './pages/Auth'
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"

//Только для авторизованых пользователей
export const authRoutes = [
    {
        path: ADMIN_ROUTE , // путь
        Component: Admin
    }, 
    {
        path: BASKET_ROUTE, // путь
        Component: Basket
    }
]

//Для всех пользователей
export const publicRoutes = [
    {
        path: SHOP_ROUTE, // путь
        Component: Shop
    },
    {
        path: LOGIN_ROUTE, // путь
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE, // путь
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id' , // путь
        Component: DevicePage
    }

]
