import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts.js"
import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Auth from './pages/Auth'
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"


//Только для авторизованых пользователей
export const authRoutes = [
    {path: ADMIN_ROUTE , Component: Admin }, //
    {path: BASKET_ROUTE, Component: Basket}
]

//Для всех пользователей
export const publicRoutes = [
    {path: SHOP_ROUTE, Component: Shop},
    {path: LOGIN_ROUTE, Component: Auth },
    {path: REGISTRATION_ROUTE, Component: Auth},
    {path: DEVICE_ROUTE + '/:id' ,  Component: DevicePage }
  ]
