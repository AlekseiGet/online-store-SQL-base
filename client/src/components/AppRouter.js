import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes } from '../routes';
 
const AppRouter = () => {
    const isAuth = false //будет показывать авторизован пользователь или нет
    return (
       <Switch>
          {isAuth && authRoutes.map(({path, Component }) => //проверяю если авторизован == true
             <Route rey={path} path={path} componenet={Component} exact />
          )}
            {authRoutes.map(({ path, Component }) => 
                <Route rey={path} path={path} componenet={Component} exact />
            )}
       </Switch>
    );
};

export default AppRouter;