import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import BrandVBar from '../components/BrandVBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchTypes, fetchBrand, fetchDevice } from '../http/deviceApi';
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {device} = useContext(Context)
  
    useEffect(()=> {
        fetchTypes().then(data => device.setIsTypes(data))
        fetchBrand().then(data => device.setBrand(data))
        fetchDevice().then(data => {
             device.setDevice(data.rows)
             device.setTotalCount(data.count)//узнать сколько товара получили после запроса
            })
    }, [])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                     <BrandVBar/>
                     <DeviceList/>
                     <Pages/>
                </Col>
           
            </Row>
        </Container>
       
    );
});

export default Shop;

//"Основная страница"