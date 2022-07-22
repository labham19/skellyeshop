import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext';
import {Link} from 'react-router-dom'


function ShippingInfo() {
    const SC = useContext(ShopContext);
    const {shippingInfo,changeHandleShippingInfo} = SC;
    
    const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    return (
    <>
      <div className='w-full md:w-5/12 p-2'>
               {
                !localStorage.getItem('eshoptoken') && <div className='text-center md:text-left'>
                  <Link to={'/login'}>
                  <button className='w-20 md:w-32 mx-2 p-3 border rounded-full border-orange-400 bg-orange-400 text-white hover:bg-transparent hover:text-black transition-all ease-in-out duration-500'>Login</button>
                  </Link> 
                  <Link to={'/signup'}>
                  <button className='w-20 md:w-32 mx-2 p-3 border rounded-full border-black hover:bg-orange-400 hover:text-white transition-all ease-in-out duration-500'>Signup</button>
                  </Link>
                </div>
               }

               <div className='shipping_info_div mx-2 '>
                 <h1 className='font-semibold my-8'>Shipping Information</h1>
                 <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                   <div>
                    <input type={'email'} name="email" id="email" onChange={changeHandleShippingInfo} value={shippingInfo?.email} placeholder='Email' className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <input type={'text'} name="address" id='address' onChange={changeHandleShippingInfo} value={shippingInfo?.address} placeholder='Address' className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <input type={'text'} name="firstName" id='firstName' onChange={changeHandleShippingInfo} value={shippingInfo?.firstName} placeholder='First Name' className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <input type={'text'} name="city" id='city' placeholder='City' onChange={changeHandleShippingInfo} value={shippingInfo?.city} className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <input type={'text'} name="lastName" id='lastName' onChange={changeHandleShippingInfo} value={shippingInfo?.lastName} placeholder='Last Name' className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <input type={'text'} name="postalCode" id='postalCode' onChange={changeHandleShippingInfo} value={shippingInfo?.postalCode} placeholder='Postal Code / Zip' className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <input type={'text'} name="phoneNumber" id='phoneNumber' onChange={changeHandleShippingInfo} value={shippingInfo?.phoneNumber} placeholder='Phone Number' className='w-full border-2  rounded-full h-10 p-6'/>
                   </div>
                   <div>
                    <select name="country" id='country' onChange={changeHandleShippingInfo} value={shippingInfo?.country} className='w-full border-2 rounded-full h-12 bg-transparent px-3'>
                        <option disabled>Country</option>
                        {
                          countries.map((country)=>{
                            return <option key={country} value={country}>{country}</option>
                          })
                        }
                    </select>
                   </div>

                 </div>

               </div>

            </div>
    </>
  )
}

export default ShippingInfo
