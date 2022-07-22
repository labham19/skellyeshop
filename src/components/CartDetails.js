import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext';

function CartDetails() {
    const SC = useContext(ShopContext);
    const {cart,total,freeShippingAt} = SC;
  return (
    <>
      <div className='w-full md:w-3/12 p-4'>
              <div>
                <h1 className='font-semibold'>Your Cart</h1>
                <div className='cart_item_div grid grid-cols-1 my-3 overflow-y-scroll h-40'>
                  {
                    cart.map(cartItem=>{
                      return <div key={cartItem.itemNumber} className='p-3 hover:bg-slate-100 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 justify-between items-center'>

                        <img src={cartItem.img} className="h-10 rounded-full" /> 

                        <div className='flex flex-col col-span-2 w-1/3'>
                         <span className='mx-2 text-left text-sm font-semibold'>{cartItem.name}</span>
                         <span className="mx-2 text-sm text-slate-500">{cartItem.itemNumber}</span>
                        </div> 

                        <div className='text-center font-semibold'>
                          ${cartItem.price}
                        </div>
                        
                      </div>
                    })
                  }
                </div>
                <div className='flex flex-col space-y-9'>
                    <div className='relative left-1/2 rounded-full border-2 -translate-x-1/2 w-full lg:w-2/3 p-3 bg-slate-200 text-center'>
                        <span className='mx-3'> Total Cost : </span> <span className='font-semibold'>${total.toFixed(2)}</span>
                    </div>

                    <div className='flex flex-row items-center space-x-6 text-slate-700'>
                        <i className="fa fa-truck" aria-hidden="true"></i> <div className='w-1/2 text-sm'>{total>=freeShippingAt?'You are eligible for free shipping.':`You are $${(freeShippingAt-total).toFixed(2)} away from free shipping.`}</div>
                    </div>
                </div>
              </div>
              
            </div>
    </>
  )
}

export default CartDetails
