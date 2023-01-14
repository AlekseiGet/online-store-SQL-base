import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import { useNavigate } from 'react-router-dom';
import star from "../assets/Vector.png"
import { DEVICE_ROUTE } from '../utils/consts';

const DeviseItem = ({device}) => {
    const history = useNavigate()// что бы знать какой товар выбран
 // console.log(history);
    return (
        <Col md={3} className={'mt-3'} onClick={() => history(DEVICE_ROUTE + '/' + device.id)} >
           <Card style={{wight: 150, cursor: 'pointer'}} border={"light"} >
              <Image width={150} height={150} src={device.img} />
              <div className='text-black-50 mt-3 d-flex justify-content-between align-items-center' >
                <div>штука</div> 
                <div className='d-flex align-items-ceter' >
                    <div>{device.rating }</div>
                    <Image wight={20} height={20} src={star} />
                 </div>             
               </div>
                <div>{device.name}</div>
           </Card>
        </Col>
    );
};

export default DeviseItem;