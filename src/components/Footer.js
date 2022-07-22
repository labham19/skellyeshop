import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className='flex flex-col-reverse md:flex-row justify-between items-center p-10 w-full'>
        <Link to="/login">
         <div className='cursor-pointer hover:text-red-500 active:text-red-900'>
           <i className="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;&nbsp; <span> Back </span>
         </div>
         </Link>

         <div className='flex flex-col space-y-3 md:space-y-0 my-6 md:my-0 md:flex-row'>
           <button className='w-44 md:w-64 mx-2 p-3 border rounded-full border-black hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-500'>CONTINUE SHOPPING</button>
           <button className='w-44 md:w-64 mx-2 p-3 border rounded-full border-orange-400 bg-orange-400 text-white hover:bg-transparent hover:text-black transition-all ease-in-out duration-500'>PROCEED TO PAYMENT</button>
         </div>
     </div>
    </>
  )
}

export default Footer
