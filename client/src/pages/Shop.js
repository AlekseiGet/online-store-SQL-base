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
import { fetchUser } from '../http/userApi';
import MyLoader from '../components/ui/loader/MyLoader';
import Error from './Error';

const Shop = observer(() => {
    const {device} = useContext(Context)
    const {user} = useContext(Context)
  
    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrand(data))
        fetchDevice(null,  null, 1, 13).then(data => {   //typeId, brandId, текущая страница, ограниченое по количеству  ЗДЕСЬ
             device.setDevice(data.rows)
             device.setTotalCount(data.count)//узнать сколько товара получили после запроса
            })
    }, [])

    useEffect(()=>{
        fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, 13).then(data => {   //выбраный тип из DeviceStore, выбраный бренд, текущая страница полученая из STORE, limit ЗДЕСЬ
            device.setDevice(data.rows)
            device.setTotalCount(data.count)//узнать сколько товара получили после запроса
        })
    }, [device.page, device.selectedType, device.selectedBrand])//будет вызываться каждый раз когда изменим страницу, бренд , тип

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                { device.devices ?
                     <Col md={9}>
                     <BrandVBar/>
                     <DeviceList/>
                     <Pages/>
                </Col>
                                 :
                     <Error/>
                    
                }
                
                <ul>
                    <li>при перезагрузке теряются права</li>
                    <li>Корзина не работает</li>
                    <li>Добавление в корзину</li>
                    <li>Удаление из корзины</li>
                    <li>При отсутсвии соединения с интернетом  как то пусто</li>
                    <li>Не обработаны ошибки</li>
                </ul>
              
            </Row>
        </Container>
       
    );
});

export default Shop;

