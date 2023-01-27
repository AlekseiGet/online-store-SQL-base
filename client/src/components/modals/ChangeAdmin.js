import React, { useContext, useState } from 'react';
import { Context } from '../..';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { registrationAdmin } from '../../http/userApi';
import { SHOP_ROUTE } from '../../utils/consts';

const ChangeAdmin = observer(({ show, onHide }) => {
  const {user} = useContext(Context) 
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data = await registrationAdmin(email, password)
                 user.setUser(data)//сохратяю данные о пользователе data или user?
                 history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

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
                        <Dropdown.Toggle  >'Забрать право администратора' </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                              Здесь должен быть список у кого права администратора
                            
                            </Dropdown.Item>                       
                        </Dropdown.Menu>
                        <Button variant={"outline-succes"} onClick={onHide}>Лишить права ?</Button>
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