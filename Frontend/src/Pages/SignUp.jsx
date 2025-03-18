import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignUp() {
  
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [conPassword, setConPassword] = useState('');
const [address, setAddress] = useState('');
const [error, setError] = useState('');

const submitHandler = async(event)=>{
  event.preventDefault();
  try {
   
    
   
const response = await axios.post('http://localhost:4000/signUp',({
  username:username,
  password:password,
  email:email,
  address:address
}));

console.error(response.data.Message);
setError(response.data.Message);

    
  } catch (error) {
    console.log(error);
    setError(error);
   
  }

}

  return (
    <>
        <div className='flex justify-center   items-center h-auto  bg-zinc-900 backdrop:blur-2xl text-white py-10'>
            <div>
          

<form onSubmit={submitHandler}  method='post'  className='py-2 px-10 bg-zinc-800 shadow-2xl rounded-lg h-auto mt-20' >
<h1 className='text-center font-semibold'> Sign Up </h1>
<h1 className='text-red-600'>
 {error}
</h1>
    <label className=' my-2 w-[300px] bg-zinc-800 ' htmlFor="username">Username : </label> <br/>
    <input value={username} onChange={(e)=>setUsername(e.target.value)} className=' px-2 py-1   my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600 ' type="text" name='username' placeholder='Username'/> <br/>
    <label className=' my-2 w-[300px] bg-zinc-800 ' htmlFor="email">Email : </label> <br/>
    <input  value={email}onChange={(e)=>setEmail(e.target.value)} className='  px-2 py-1  my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600 ' type="email" name='email' placeholder='Email'/> <br/>
    <label className=' my-2 w-[300px] bg-zinc-800  ' htmlFor="password">Password : </label> <br/>
    <input  value={password}onChange={(e)=>setPassword(e.target.value)} className='  px-2 py-1  my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600 ' type="password" name='password' placeholder='Password'/> <br/>
    <label className=' my-2 w-[300px] bg-zinc-800 ' htmlFor="password"> Confirm Password : </label> <br/>
    <input  value={conPassword}onChange={(e)=>setConPassword(e.target.value)} className='  px-2 py-1  my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600  ' type="password" name='conPassword' placeholder='Password'/> <br/>
    <label className=' my-2 w-[300px] bg-zinc-800  ' htmlFor="Address">Address  : </label> <br/>
    <textarea value={address} onChange={(e)=>setAddress(e.target.value)} className=' px-2 py-1  my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800  border border-zinc-600 ' name='Address' rows="3" placeholder='Address'/> <br/>
    <div className='flex justify-center '>
    <button className=' bg-yellow-400 text-zinc-900 font-semibold py-2 px-8  ' > SignUp</button>
    </div>
   
   <p className='text-center mt-2 text-gray-500'>
        Have account ?   <Link to="/login" className='text-white'> Login </Link>
    </p> 
   
</form>


</div>
            </div>
             
    
    
    </>
  )
}

export default SignUp