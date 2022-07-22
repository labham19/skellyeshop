import React, { useEffect } from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShippingInfo from '../components/ShippingInfo';
import CartDetails from '../components/CartDetails';
import PaymentAndDelivery from '../components/PaymentAndDelivery';
import { useNavigate } from 'react-router-dom';

function Payment(props) {
    let navigate = useNavigate();

    useEffect(()=>{
        props.showLoader();
     },[]);
     
  return (
    <div>
      <Navbar/>
      <div>
        <div className='flex flex-col md:flex-row justify-between items-center p-5'>
          <div className="text-xl">
             Shipping and Payment
          </div>
       
          <div className="flex my-3 md:my-0">       
            <div className='relative cursor-pointer mx-14 h-10 w-10 p-3 border rounded-full border-orange-400 hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-500'> <i className="fa fa-shopping-cart absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></i> </div>
            <div className='relative cursor-pointer mx-14 h-10 w-10 p-3 border rounded-full border-orange-400 bg-orange-400 text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500'> <i className="fa fa-truck absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></i> </div>
          </div>
        </div>

        <div className='flex flex-col justify-center px-2 items-center md:items-start md:flex-row md:justify-evenly'>
            <ShippingInfo/>

            <PaymentAndDelivery/>

            <CartDetails/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment
