import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Link, useLocation } from 'react-router-dom';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
        className="d-flex justify-content-center align-items-center "
        style={{height: window.innerHeight - 54}} >
            <Card style={{width: 600}} className="p-5 " >
                <h2  className='m-auto' >{isLogin ? "Авторизация" : "Регистрация" } </h2>
                <Form className='d-flex flex-column' >
                    <Form.Control
                    className='mt-3'
                    placeholder='введите ваш адресс...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='введите ваш пароль...'
                    />
                    <Form className='d-flex justify-content-between mt-3 pl-3 pr3' >
                        {isLogin ?
                             <div >
                              Нет аккаунта?  <Link to={REGISTRATION_ROUTE} >Зарегестрируйтесь</Link>   
                            </div>
                        :
                            <div >
                             Есть аккаунта?  <Link to={LOGIN_ROUTE} >Войдите</Link>
                            </div>
                        }
                       
                        <Button  variant={"outline-success"} >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Form>
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;

// "Авторизация"