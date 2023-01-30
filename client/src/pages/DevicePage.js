import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import BigStar from "../assets/VeryBigStar.png"
import Card from 'react-bootstrap/esm/Card';
import imagen from "../image/12337140_2.jpg";
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePage = () => {
    
      const [device, setDevice] = useState({info: []})
      const {id} = useParams()//параметры строки запроса
      useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
      },[] )

    return (
        <Container className='mt-3' >
            <Row>
               <Col nd={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
               </Col> 
               <Col nd={4}>
                   <Row className='d-flex flex-column align-items-center ' >
                       <h2 style={{textAlign: "center"}} >{device.name}</h2>
                       <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${BigStar}) no-repeat center center `, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }} >
                           {device.rating}
                       </div>
                   </Row>
               </Col>
               <Col nd={4}>
                   <Card
                    className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                     <h3>От: {device.price} рубл.</h3>
                     <Button variant={'outline-dark'} >Добавить в корзину</Button>
                   </Card>
               </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h2>Характеристики</h2>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}> {//каждая вторая строка серая
                    }
                        {info.title}: {info.description}
                    </Row>
                    )}
            </Row>
        </Container>
    );
};

export default DevicePage;
//"Cтраница устройства, характеристики, добавление в корзину"