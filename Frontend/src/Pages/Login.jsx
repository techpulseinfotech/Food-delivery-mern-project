import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const handleSubmit = async(event)=>{
      event.preventDefault();

      try {

        const response = await axios.post('http://localhost:4000/logIn',({
          username:username,
          password:password,
        }));

        setError(response.data);
        console.log(response.data);

        
      } catch (error) {
        console.log(error);
    setError(error);
      }
  }
  return (
    <>
        <div className='flex justify-center   items-center h-screen  bg-zinc-900 backdrop:blur-2xl text-white py-10'>
            <div>
          

<form onSubmit={handleSubmit} action="" method='' className='py-2 px-10 bg-zinc-800 shadow-2xl rounded-lg h-auto mt-20' >
<h1 className='text-center font-semibold'> Log In </h1>
<h1 className='text-red-600'>
  {error}

</h1>
    <label className=' my-2 w-[300px] bg-zinc-800 ' htmlFor="username">Username : </label> <br/>
    <input value={username} onChange={(e)=>setUsername(e.target.value)} className=' my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600 ' type="text" name='username' placeholder='Username'/> <br/>
    
    <label className=' my-2 w-[300px] bg-zinc-800  ' htmlFor="password">Password : </label> <br/>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} className=' my-2 w-[300px] focus:outline-none focus:border-yellow-400 bg-zinc-800 border border-zinc-600 ' type="password" name='username' placeholder='Password'/> <br/>

    <div className='flex justify-center '>
    <button className=' bg-yellow-400 text-zinc-900 font-semibold py-2 px-8  ' >LogIn</button>
    </div>
   
   <p className='text-center mt-2 text-gray-500'>
        Don't have account ?   <Link to="/signUp" className='text-white'> SignUp </Link>
    </p> 
   
</form>


</div>
            </div>
             
    
    
    </>
  )
}

export default Login