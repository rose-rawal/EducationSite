import React, { useContext, useEffect, useState } from 'react'
import { userAnswer } from '../api/listeningax'
import context from '../context/maincontext'
const PtePractice = () => {
  const [userAllAnswer,setUserAllAnswer]=useState([])
  const {login}=useContext(context)
  useEffect(()=>{
    const getUserData=async()=>{
      const Email={Email:login.Email}
      const res=await userAnswer(Email)
      setUserAllAnswer(res);
    }
    getUserData();
  },[])
  return (
    <div className='min-h-screen px-48 py-7'>
      <div>
        <h3 className='text-2xl text-green-400 font-bold'>Listening</h3>
        <h2 className='pt-5 font-bold underline'>Summarize the spoken test</h2>
        <div className='bg-gray-100 px-5 py-3 mt-10'>
          <table >
          <tr>
            <td>Qno</td>
            <td>Score</td>
            <td>Summary</td>
          </tr>
          {userAllAnswer && (
            userAllAnswer.map(n=>(
              <tr>
                <td>{n.Qno}</td>
                <td>{n.Score}</td>
                <td>{n.Summary}</td>
              </tr>
            ))
          )}
        </table>
        </div>
      </div>
    </div>
  )
}

export default PtePractice