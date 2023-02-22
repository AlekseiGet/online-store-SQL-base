import { useState, useContext, useEffect } from 'react';
import { fetchBasket } from '../http/deviceApi';
import { Context } from '../index';
import classses from './Basket.module.css'

const Basket = () => {
    const { user } = useContext(Context)
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current)
    };

     useEffect(() => {
      fetchBasket(user.user.id) 
        console.log(user.user.id);
    },[])/***/ 
    return (
        <div >
            <div className={classses.rock}
                  style={{
                      backgroundColor: isActive ? 'red' : '',
                  }} onClick={handleClick}>
                   <div className={classses.eye_left}></div>
                  <div className={classses.eye_right}></div>
                  <div className={classses.mouth}></div>

            </div>
            Страница с корзиной: {user.user.email}

            
        </div>
    );
};

export default Basket;
// "Страница с корзиной"  