import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext';

function PaymentAndDelivery() {
    const SC = useContext(ShopContext);
    const {paymentMethods,deliveryMethods,currentPaymentMethod,currentDeliveryMethod,setCurrentDeliveryMethod,setCurrentPaymentMethod,freeShippingAt,total} = SC;
  return (
    <>
      <div className='w-full md:w-4/12 p-4'>
              <div>
                <h1 className='font-semibold'>Payment Method</h1>
                <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 py-3'>
                  {
                    paymentMethods.map(pm=>{
                      return <div key={pm.name} onClick={()=>setCurrentPaymentMethod(pm)} className={`p-3 hover:bg-slate-100 active:bg-white ${currentPaymentMethod.name===pm.name?'bg-slate-200':''} cursor-pointer border flex justify-center items-center rounded-3xl`}>
                          <img src={pm.img} className="h-5" />
                      </div>
                    })
                  }
                </div>
              </div>

              <div>
                <h1 className='font-semibold'>Delivery Method</h1>
                <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 py-3'>
                  {
                    deliveryMethods.map(dm=>{
                      return <div key={dm.name} onClick={()=>{setCurrentDeliveryMethod(dm)}} className={`p-3 hover:bg-slate-100 active:bg-white ${currentDeliveryMethod.name===dm.name?'bg-slate-200':''} cursor-pointer overflow-hidden border flex justify-center items-center rounded-3xl`}>
                          <img src={dm.img} className="h-5" /> <span className='mx-2'>{total>=freeShippingAt?"Free":"$"+dm.cost.toFixed(2)}</span>
                      </div>
                    })
                  }
                </div>
              </div>
              
            </div>
    </>
  )
}

export default PaymentAndDelivery
