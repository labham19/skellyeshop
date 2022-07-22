import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();
  const toggleMenu = async ()=>{
    if(document.getElementById("smNav").classList.contains('h-0')){
        document.getElementById("smNav").classList.remove('h-0')
        document.getElementById("smNav").classList.add("h-full");
        
    }
    else{
        document.getElementById("smNav").classList.remove('h-full')
        document.getElementById("smNav").classList.add("h-0");
    }
  }  

  const logout = () =>{
    localStorage.removeItem('eshoptoken');
    navigate('/login');
  }

  return (
    <>
     <nav className='flex flex-row justify-between items-center py-5 px-10 shadow-sm shadow-slate-300'>
        <div className='text-center font-semibold font-serif cursor-pointer bg-gradient-to-tr from-orange-300 to-orange-700 bg-clip-text text-transparent'>
          <i className="fa fa-shopping-cart fa-xl" aria-hidden="true"></i> <span className='md:text-xl'>E-SHOP</span>
        </div>

        <div className='hidden md:block'>
          <ul className='flex flex-row space-x-16'>
            <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300'>Men</li>
            <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300'>Women</li>
            <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300'>Kids</li>
          </ul>
        </div>

        <div className='flex-row space-x-8 hidden md:flex'>
            <i className="fa fa-search cursor-pointer p-2 hover:text-orange-500 hover:scale-125  transition-all ease-in-out duration-300" aria-hidden="true"></i>
            <i className="fa fa-shopping-cart cursor-pointer p-2 hover:text-orange-500 hover:scale-125  transition-all ease-in-out duration-300" aria-hidden="true"></i>
            <i onMouseOver={()=>document.getElementById('userCard').classList.remove('scale-0')}  className="fa fa-user cursor-pointer p-2 hover:text-orange-500 hover:scale-125 transition-all ease-in-out duration-300" aria-hidden="true"></i>
        </div>

        <div  className='block md:hidden bg-gradient-to-tr from-orange-300 to-orange-700 bg-clip-text text-transparent cursor-pointer active:to-red-400' onClick={toggleMenu}>
            <i className="fas fa-bars fa-lg "></i>
        </div>

        <div onMouseLeave={()=>document.getElementById('userCard').classList.add('scale-0')} id='userCard' className='userCard shadow-lg shadow-black rounded-sm z-20 scale-0 transition-all ease-in-out duration-300 absolute top-20 right-0 -translate-x-1/2 bg-[rgb(250,250,250,0.8)] p-1'>
          <ul>
           {
             localStorage.getItem('eshoptoken') ? <li className='cursor-pointer hover:text-orange-500 hover:bg-slate-200 p-4 transition-all ease-in-out duration-300 text-red-500' onClick={()=>{logout();}}> <i className="fa fa-sign-out" aria-hidden="true"></i> Logout</li>
             : <Link to="/login"><li className='cursor-pointer hover:text-orange-500 hover:bg-slate-200 p-4 transition-all ease-in-out duration-300 text-green-500'> <i className="fa fa-sign-in" aria-hidden="true"></i> Login</li> </Link>
           } 
          </ul>
        </div>
     </nav>

     <nav id="smNav" className="w-[100%] h-0 overflow-hidden fixed bg-[rgb(0,0,0,0.8)]  top-14 text-white transition-all duration-1000 ease-in-out">
            <ul className="flex flex-col space-y-3 items-center p-14 text-lg">
              <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300' onClick={toggleMenu}>Men</li>
              <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300' onClick={toggleMenu}>Women</li>
              <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300' onClick={toggleMenu}>Kids</li>
              <li>|</li>
              <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300' onClick={toggleMenu}> <i className="fa fa-search" aria-hidden="true"></i> Search</li>
              <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300' onClick={toggleMenu}> <i className="fa fa-shopping-cart" aria-hidden="true"></i> My Cart</li>
              <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300' onClick={toggleMenu}> <i className="fa fa-user" aria-hidden="true"></i> Profile</li>
              {
                localStorage.getItem('eshoptoken') ? <li className='cursor-pointer hover:text-orange-500 hover:-translate-y-3 p-4 transition-all ease-in-out duration-300 text-red-500' onClick={()=>{toggleMenu();logout();}}> <i className="fa fa-sign-out" aria-hidden="true"></i> Logout</li>
                : <Link to="/login"><li className='cursor-pointer hover:text-orange-500 hover:bg-slate-200 p-4 transition-all ease-in-out duration-300 text-green-500'> <i className="fa fa-sign-in" aria-hidden="true"></i> Login</li> </Link>
              }
            </ul>
     </nav>
    </>
  )
}

export default Navbar
