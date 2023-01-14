import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import {SHOP_ROUTE } from "../utils/consts"
 
const AppRouter = () => {
   const {user} = useContext(Context)
 //  console.log(user); - получил доступ к глобальному хранилищу

    return (
       <Routes>
          {user.isAuth && authRoutes.map(({path, Component }) => //проверяю если авторизован == true
             <Route key={path} path={path} element={<Component/> } exact />
          )}
            {publicRoutes.map(({ path, Component }) => //всегда доступен
               <Route key={path} path={path} element={<Component />} exact />
            )}
          <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
       </Routes>
    );
};

export default AppRouter;