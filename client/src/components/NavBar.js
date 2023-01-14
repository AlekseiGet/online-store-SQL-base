import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';


const NavBar =  observer(() => {
    const {user} = useContext(Context)
    //  https://react-bootstrap.github.io/components/navbar/ Скопировал и сюда вставил, вот и весь НафБар (время 1.25)
    
    return (
       <Navbar bg="dark" variant="dark">
         <Container>          
          <NavLink style={{ color: 'red' }} to={SHOP_ROUTE } >Купи девайс</NavLink>
            {user.isAuth ?
                    <Nav className="ml-auto" >
                        <Button variant={'outline-light'} className="me-2">Админ Панель</Button>
                        <Button variant={'outline-light'} >Войти</Button>
                    </Nav>
                        : 
                    <Nav className="ml-auto" >
                        <Button variant={'outline-light '} onClick={()=> user.setIsAuth(true) } >Авторизация</Button>
                    </Nav> 
            }
        </Container>
      </Navbar>
    );
});

export default NavBar;