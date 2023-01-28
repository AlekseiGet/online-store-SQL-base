import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { registrationAdmin, allUser } from '../../http/userApi';
import { ADMIN_ROUTE } from '../../utils/consts';
import { fetchUser } from '../../http/userApi';
import MyLoader from '../ui/loader/MyLoader';

const ChangeAdmin = observer(({ show, onHide }) => {
    const {user} = useContext(Context) 
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const tru = user.allUsers.length// невозможно нарисовать пока нет ответа поэтому нужен Loader

    useEffect(() => {//без него нет списка пользователей
        fetchUser().then(data => user.setAllUsers(data))
    }, [])
  
    const users = async ()=> {      
     //   let data = await allUser() //работает и без 
     //       user.setAllUsers(data) // этого всего
      //  console.log(user.selectedUser);
            history(ADMIN_ROUTE)
    }

    const click = async () => {//регестрирую нового админа
        try {
            let data = await registrationAdmin(email, password)
            user.setUser(data)
            history(ADMIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

//{user.selectedUser || 'Забрать право администратора' }--- Здесь ошибка
   
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Что нужно изменить?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle  >{user.selectedUser || 'Забрать право администратора' }  </Dropdown.Toggle>
                        <Dropdown.Menu>
                            
                            {tru
                               ?user.allUsers.map(onUser =>
                                   <Dropdown.Item onClick={() => user.setSelectedUser(onUser.email)}  key={onUser.id}>{onUser.email}</Dropdown.Item>
                                )
                               : <MyLoader/>
                           }
                           
                        </Dropdown.Menu>
                        <Button variant={"outline-succes"} onClick={users}>Лишить права ?</Button>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        'Создать администратора' 
                        <Form.Control
                            className='mt-3'
                            placeholder='введите ваш адресс...'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className='mt-3'
                            placeholder='введите ваш пароль...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                        />
                        <Button variant={"outline-success"} onClick={click}>
                            Регистрация
                        </Button>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ChangeAdmin;