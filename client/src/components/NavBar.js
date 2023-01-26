import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';



const NavBar =  observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    //  https://react-bootstrap.github.io/components/navbar/ Скопировал и сюда вставил, вот и весь НафБар (время 1.25)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }


 
    
    return (
       <Navbar bg="dark" variant="dark">
         <Container>          
          <NavLink style={{ color: 'red' }} to={SHOP_ROUTE } >Купи девайс</NavLink>
            {user.isAdmin ?
                    <Nav className="ml-auto" >
                        <Button variant={'outline-light'} onClick={() => history(ADMIN_ROUTE)} className="me-2">Админ Панель</Button>
                        <Button variant={'outline-light'} onClick={() => logOut()} className="me-2">Выйти</Button>
                    </Nav>
             : user.isAuth ?
                    <Nav className="ml-auto" >
                        <Button variant={'outline-light'} onClick={() => logOut()} className="me-2">Выйти</Button>
                        <Button variant={'outline-light '} >{user.user.email}</Button>
                        <Button variant={'outline-light'} onClick={() => history(BASKET_ROUTE)} >Корзина</Button>
                    </Nav>
             : 
                    <Nav className="ml-auto" >
                        <Button variant={'outline-light '} onClick={()=> history(LOGIN_ROUTE)} >Авторизация</Button>
                    </Nav> 
            }
                
                
        </Container>
      </Navbar>
    );
});

export default NavBar;