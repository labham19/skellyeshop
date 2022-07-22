import React, { useEffect, useState } from 'react'
import ShopContext from './ShopContext'

const ShopState = (props) => {
  const [paymentMethods,setPaymentMethods] = useState([
                       {name:'PayPal',img:'https://149448277.v2.pressablecdn.com/wp-content/uploads/2022/05/paypal-logo.png'},
                       {name:'MasterCard',img:'https://pngimg.com/uploads/mastercard/mastercard_PNG16.png'},
                       {name:'Paytm',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png'},
                       {name:'Visa',img:'https://www.pngitem.com/pimgs/m/1-15674_visa-logo-png-transparent-visa-logo-2019-png.png'},
                       {name:'PhonePay',img:'https://w7.pngwing.com/pngs/345/591/png-transparent-phonepe-hd-logo.png'},
                       {name:'GooglePay',img:'https://www.xda-developers.com/files/2020/11/Google-Pay-logo-1900x700_c.jpg'}
                      ]);
  const [deliveryMethods,setDeliveryMethods] = useState([
                        {name:'Delhivery',img:'https://multiplesequity.com/public/images/portfolio/delhivery-owler-20190909-132150-original-1578292717.png',cost:20.99},
                        {name:'Fedex',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/FedEx_Corporation_-_2016_Logo.svg/800px-FedEx_Corporation_-_2016_Logo.svg.png',cost:19.99},
                        {name:'DTDC',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7JAYtgj6UQ1Y5vAz-IjwMtcZy0fvvAYRAA&usqp=CAU',cost:28.99},
                        {name:'DHL',img:'https://cdn.contactcenterworld.com/images/company/dhl-express-the-czech-republic-1200px-logo.jpg',cost:15.99},
                       ]);

  const [cart,setCart] = useState([
                       {name:"T-Shirt Summer Vibes",img:"https://stylesatlife.com/wp-content/uploads/2018/02/Beach-wears-Summer-T-shirts.jpg.webp",itemNumber:'#232XSD',price:20.99},
                       {name:"Formal Shirt",img:"https://m.media-amazon.com/images/I/41iY8TjlLdL.jpg",itemNumber:"#5462XSD",price:18.99},
                       {name:"Cool Shorts",img:"https://assets.ajio.com/medias/sys_master/root/20220624/HMdY/62b4b141aeb26921af436f96/-473Wx593H-440672491-black-MODEL.jpg",itemNumber:"#43SDSD",price:17.88},
                      ]);
  
  const [freeShippingAt,setFreeShippingAt]=useState(70);  // If total is greater than this no delivery charges are applied

  const [currentPaymentMethod,setCurrentPaymentMethod] = useState(paymentMethods[0]); //Currently set payment method
  const [currentDeliveryMethod,setCurrentDeliveryMethod] = useState(deliveryMethods[0]); //Currently set delivery method
   
  const [total,setTotal] = useState(0);  //Cart items cost + delivery charges
  
  useEffect(()=>{
    if(total<freeShippingAt)
    setTotal(currentDeliveryMethod.cost + cart.reduce((prevValue, currentValue) => prevValue + currentValue.price,0))
  },[currentDeliveryMethod]);  //Changes total when dlivery method is changed
  
  const [shippingInfo,setShippingInfo] = useState({});
  const changeHandleShippingInfo = (e) =>{
    setShippingInfo({...shippingInfo,[e.target.name]:e.target.value});
  }
  return (
    <div>
        <ShopContext.Provider value={{ paymentMethods,deliveryMethods,cart,freeShippingAt,total,currentPaymentMethod,setCurrentPaymentMethod,currentDeliveryMethod,setCurrentDeliveryMethod,shippingInfo,changeHandleShippingInfo}}>
            {props.children}
        </ShopContext.Provider>
    </div>
  )
}

export default ShopState
