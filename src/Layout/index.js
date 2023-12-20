import React, { useState } from 'react'
import route from '../Route/route'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate()
    const [displayNav,setDisplayNav]=useState(false)
    const handleRedirect=(e,path,name)=>{
        e.preventDefault();
        console.log(name)
        if(name==='Practice')
        {
            setDisplayNav(!displayNav)
        }
        else{
            navigate(path)
        }
    }
    
  return (
    <div className='flex px-48 border-solid border-gray-300 border-2 h-16 absolute w-full bg-white'>
        <div className='pr-10 text-2xl my-auto cursor-pointer' onClick={()=>navigate('/')}>Logo</div>
        <div className='flex-1 flex justify-between my-auto'>
            <ul className='flex'>
            {route.slice(0,3).map(n=>{
                return (
                        <li className='px-5 cursor-pointer text-gray-500 hover:text-black transition-all' key={n.name} onClick={(e)=>{handleRedirect(e,n.path,n.name)}} >{n.name}</li>
                )
            })}
            </ul>
            <ul className='flex'>
            {route.slice(3,route.length).map(n=>{
                return (
                        <li className='px-5 cursor-pointer hover:underline hover:text-green-800' key={n.name} onClick={(e)=>{handleRedirect(e,n.path)}} >{n.name}</li>
                )
            })}
            </ul>
        </div>
         {displayNav&&(
            <div className='absolute left-0 top-14 py-7 flex justify-between w-full px-48 bg-white text-sm' id='displayNav'>
            <ul><h3 className='text-lg font-bold pb-4'>Reading</h3>
                <li><a href="#">Read Aloud</a></li>
                <li><a href="#">Repeat Sentence</a></li>
                <li><a href="#">Describe Image</a></li>
                <li><a href="#">Re-tell Lecture</a></li>
            </ul>
            <ul><h3 className='text-lg font-bold pb-4'>Writing</h3>
                <li><a href="#">Summarize Written Text</a></li>
                <li><a href="#">Write Essay</a></li>
                
            </ul>
            <ul><h3 className='text-lg font-bold pb-4'>Listening</h3>
                <li><a href="#">Read Aloud</a></li>
                <li><a href="#">Repeat Sentence</a></li>
                <li><a href="#">Describe Image</a></li>
                <li><a href="#">Re-tell Lecture</a></li>
            </ul>
            <ul><h3 className='text-lg font-bold pb-4'>Speaking</h3>
                <li><a href="#">Read Aloud</a></li>
                <li><a href="#">Repeat Sentence</a></li>
                <li><a href="#">Describe Image</a></li>
                <li><a href="#">Re-tell Lecture</a></li>
            </ul>
        </div>
         )}
    </div>
  )
}

export default Header