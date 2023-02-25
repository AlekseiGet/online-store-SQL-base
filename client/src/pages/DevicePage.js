import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../index';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import BigStar from "../assets/VeryBigStar.png"
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';
import MyLoader from '../components/ui/loader/MyLoader';
import replacement from "../image/404.jpg";
import { addBasketDevice } from '../http/deviceApi'
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';



const DevicePage = () => {
      const { user } = useContext(Context)
      const history = useNavigate()
      const [device, setDevice] = useState({info: []})
      const {id} = useParams()//параметры строки запроса
      const [foto, setFoto] = useState(replacement)
    
      useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
      },[] )
      
      useEffect(()=>{
        if (device.img) {
                setFoto(process.env.REACT_APP_API_URL + device.img)           
        }          
      }, [device])
      
      const notImage = ()=> {
          setFoto(replacement)
      } 

    const addToCart = () =>{
        alert(`Добавил ${device.id}`)
        
        const formData = new FormData()
        formData.append('basketId', user.user.id)  
        formData.append('deviceId', device.id) 
        addBasketDevice(formData)
        history(SHOP_ROUTE)
    }
    
    const buy = () => {
        alert("Купить? Приходи или позвони *909 343434433443")
        
    }
    
    const estimation = () => {
        alert('Сколько звёзд ?')
        device["rating"]=5 //изменил рейтинг но ещё не внёс в базу
        setDevice(device)
        console.log(device.rating);
    }
        console.log(device.rating);

    return (
        <Container className='mt-3' >
            <Row>
               <Col nd={4}>
                    <Image width={600} height={600} src={foto} onError={notImage}/>
               </Col> 
               <Col nd={4}>
                   <Row className='d-flex flex-column align-items-center ' >
                       <h2 style={{textAlign: "center"}} >{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center" onClick={estimation}
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
                        {user.isAuth ?
                          <Button variant={'outline-dark'} onClick={addToCart}>Добавить в корзину</Button>
                          :
                            <Button variant={'outline-dark'} onClick={buy}>Купить</Button>
                     }
                        
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