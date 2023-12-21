import React,{useContext, useState} from 'react'
import listening from '../../Listening/paragraph.mp3'
import { submitAnswerSummarize } from '../../api/listeningax'
import context from '../../context/maincontext'
import { useNavigate } from 'react-router-dom'
const Summarize = () => {
//   const audioFile = '/audio.mp3'; // adjust the path to your audio file
    const [summ,setSumm]=useState('') 
    const [err,setErr]=useState('')
    const [data,setData]=useState({})
    const {login}=useContext(context)
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setSumm(e.target.value)
        console.log(summ)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(login.Name)
        if(login.Name){
            const response=await submitAnswerSummarize({Summary:summ,Email:login.Email,Qno:1})
            setData(response)
        }
        else{
            setErr('Not Logged In')
            setTimeout(()=>{
                setErr('')
            },3000)
        }
        console.log(login.Name)
        
    }
    
  return (
    <div className='flex flex-col items-center gap-10 py-10 relative'>
        <h2 className='text-2xl font-bold'>Listening Test 1</h2>
        {err && <div className='text-xs absolute top-20 text-red-500'>{err}</div>}
        <div>
            <audio controls>
                <source src={listening} type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div>
            <h3 className='text-center pb-6 text-xl font-bold text-blue-300'>Enter Your Summary:</h3>
            <form action="" className='flex gap-2 flex-col items-center'>
                <textarea cols="60" rows="10" onChange={handleChange} className=' rounded-xl px-7 py-3 bg-gray-100'></textarea><br />
                <button onClick={e=>handleSubmit(e)} className='text-xl font-mono text-white bg-blue-400 hover:bg-blue-500 px-8 py-2 rounded-lg'>Submit</button>
            </form>
            <div className='text-xl font-bold text-center pt-5'>Result: {data.Score}</div>
            <div className='text-center underline text-gray-500 text-xs pt-3 hover:text-black cursor-pointer' onClick={e=>{e.preventDefault();navigate('/practice')}}>Goto Dashboard</div>
        </div>


        

    </div>
  )
}

export default Summarize