import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const host = "https://skellyeshop.herokuapp.com/";

const Register = (props) => {
    let navigate = useNavigate();
    const [credentials,setCredentials] = useState({});

    const changeHandler = (e) => {
      setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
       props.showLoader();
    },[]);

    const singup = (e) =>{
        e.preventDefault();
        
        //Here Comes The Register Api Call 
      axios.post(host+'api/auth/createUser',credentials)
      .then(res => {
          console.log(res);
          localStorage.setItem('eshoptoken',res.data.authToken);
          navigate('/');
      })
      .catch(err => {console.log(err)})
    }

  return (
    <div className='bg-[url("https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg")] bg-cover md:bg-right-top bg-center bg-no-repeat h-[100vh] w-[100vw]'>
      <form onSubmit={singup}>
      <div className='signup_card shadow-sm shadow-black absolute w-[90%] md:w-1/3 top-1/2 left-1/2 md:left-3/4   -translate-y-1/2 -translate-x-1/2 rounded-lg  bg-[rgb(0,200,256,0.5)] md:bg-[rgb(0,200,256,0.1)] p-4' >
         <div className='login_card_header p-4 text-center bg-gradient-to-tr text-orange-500 font-semibold font-serif' style={{ textShadow:"1px 1px black"}}>
           <i className="fa fa-shopping-cart fa-xl" aria-hidden="true"></i> <span className='md:text-xl'>E-SHOP</span>
         </div>
         <div className='signup_card_body md:p-4' >
            <div className='my-2'>
                <label htmlFor="name" className='font-semibold text-white md:text-orange-900'>Name</label>
                <input name='name' id='name' type="text" placeholder='Name' value={credentials?.name} onChange={changeHandler}  className='w-full my-2 rounded-md h-10 p-2 font-semibold'></input>
            </div>
            <div className='my-2'>
                <label htmlFor="email" className='font-semibold text-white md:text-orange-900'>Email Address</label>
                <input name='email' id='email' type="email" placeholder='Email Address' value={credentials?.email} onChange={changeHandler}  className='w-full my-2 rounded-md h-10 p-2 font-semibold'></input>
            </div>
            <div className='my-2'>
                <label htmlFor="password" className='font-semibold text-white md:text-orange-900'>Password</label>
                <input name='password' id='password' type="password" placeholder='Password' value={credentials?.password} onChange={changeHandler}  className='w-full my-2 rounded-md h-10 p-2 font-semibold'></input>
            </div>
            <div className='my-2'>
                <label htmlFor="signupBtn"></label>
                <button type="submit" name='signupBtn' id='signupBtn' className='w-full my-2 rounded-md h-10 p-2 font-semibold bg-gradient-to-tr from-orange-300 to-yellow-400 hover:to-orange-300 hover:from-yellow-400 transition-all ease-in-out duration-500 hover:text-slate-700'>Register Now</button>
            </div>
         </div>
         <div className='signup_card_footer'>
            <div className='text-center font-semibold'>Already a member ?  &nbsp;<Link to="/login" className='hover:underline text-slate-700 hover:text-red-500 transition-all ease-in-out duration-500'>Login</Link></div>
         </div>
      </div>
      </form>  
    </div>
  )
}

export default Register
