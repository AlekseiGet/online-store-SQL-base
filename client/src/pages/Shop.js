import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import BrandVBar from '../components/BrandVBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                     <BrandVBar/>
                     <DeviceList/>
                </Col>
           
            </Row>
        </Container>
       
    );
};

export default Shop;

//"Основная страница"