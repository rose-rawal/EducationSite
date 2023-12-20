import React, { useContext } from 'react'
import context from '../context/maincontext'
import { addUser } from '../api/users'
const SignUp = () => {
  const {setSignUp,signUp}=useContext(context)
  const handleChange=(e,data)=>{
    setSignUp((prev)=>{
      return {...prev,[data]:e.target.value}
    })
    console.log(signUp)
  }

  const handleSignUp=async(e)=>{
    e.preventDefault();
    const res=await addUser(signUp);
    console.log(res)
  }
  return (
    <div className='min-h-screen text-center'>
      <h1 className='mt-20 text-4xl font-semibold'>Register</h1>
      <form action="" className='flex flex-col items-center gap-6 mt-10'>
       <input type="text" placeholder='Name' className='text-center w-64 h-8 border-black border-solid border-b-2 ' onChange={(e)=>handleChange(e,'Name')}/>
       <input type="text" placeholder='Email' className='text-center w-64 h-8 border-black border-solid border-b-2' onChange={(e)=>handleChange(e,'Email')}/>
       <input type="password" placeholder='Password' className='text-center w-64 h-8 border-black border-solid border-b-2' onChange={(e)=>handleChange(e,'Password')}/>
       <button className='text-lg font-semibold px-7 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600' onClick={(e)=>handleSignUp(e)}>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp