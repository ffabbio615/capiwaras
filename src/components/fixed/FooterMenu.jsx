import './FooterMenu.scss';
import { NavLink } from 'react-router-dom';
import { DeliveryContext } from '../context/DeliveryContext';
import { useContext } from 'react';

export default function FooterMenu(){

    const {orderItems, clearAllDeliveryItems} = useContext(DeliveryContext);

    const refreshItems = () =>{
        if(orderItems.length > 0){
            clearAllDeliveryItems();
        }
    }

    return(
        <>
        
        <footer className='footer-container'>
            <div className='footer-button-container'>
                
                <div className='btn-footer-menu' onClick={refreshItems}>
                    <NavLink to="/menu"> 
                    <div className='menu-icon'></div>
                    <p className='btn-footer-paragraph'>Cardápio</p>
                    </NavLink>
                </div>

                <div className='btn-footer-menu' onClick={refreshItems}>
                    <NavLink to="/"> 
                    <div className='home-icon'></div>
                    <p className='btn-footer-paragraph'>Home</p>
                    </NavLink>
                </div>

                <div className='btn-footer-menu'>
                    <NavLink to="/delivery"> 
                    <div className='delivery-icon'></div>
                    <p className='btn-footer-paragraph'>Delivery</p>
                    </NavLink>
                </div>
            </div>


        </footer>

        </>
    )

}