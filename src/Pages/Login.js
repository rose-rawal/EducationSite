import React, { useContext, useState } from 'react'
import context from '../context/maincontext'
import { findUser } from '../api/users'
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const {setLogin,login,setIsLoggedIn}=useContext(context)
   const navigate=useNavigate()
   const [err,setErr]=useState(false)
  const handleChange=(e,data)=>{
      setLogin((prev)=>{
      return {...prev,[data]:e.target.value}
    })
    console.log(login)
  }

  const handleSignUp=async(e)=>{
    e.preventDefault();
    const res=await findUser(login)
    console.log(res)
    if(res.msg==='User Not found')
    {
      setErr(true)
      setTimeout(()=>{
      setErr(false)
      },2000)
    }
    else{
      setIsLoggedIn(true)
      navigate('/practice')
    }
  }

  return (
    <div className='min-h-screen text-center'>
      <h1 className='mt-20 text-4xl font-semibold'>Register</h1>
      {err && <div className='text-red-500 absolute w-full text-center'>Wrong Credentials</div>}
      <form action="" className='flex flex-col items-center gap-6 mt-10'>
       <input type="text" placeholder='Email' className='text-center w-64 h-8 border-black border-solid border-b-2' onChange={(e)=>handleChange(e,'Email')}/>
       <input type="password" placeholder='Password' className='text-center w-64 h-8 border-black border-solid border-b-2' onChange={(e)=>handleChange(e,'Password')}/>
       <button className='text-lg font-semibold px-7 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600' onClick={(e)=>handleSignUp(e)}>SignUp</button>
      </form>
    </div>
  )
}

export default Login