import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    const [brandViseble, setBrandViseble ] = useState(false)
    const [typeViseble, setTypeViseble] = useState(false)
    const [deviceViseble, setDeviceViseble] = useState(false)

    return (
        <Container className='d-flex flex-column' >
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setTypeViseble(true)}>Добавить тип </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setBrandViseble(true)}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeviceViseble(true)}>Добавить устройство</Button>
            <CreateBrand show={brandViseble} onHide={() => setBrandViseble(false)} />
            <CreateDevice show={deviceViseble} onHide={() => setDeviceViseble(false)}/>
            <CreateType show={typeViseble} onHide={() => setTypeViseble(false)}/>
        </Container >
    );
};

export default Admin;
//"Страница администратора"