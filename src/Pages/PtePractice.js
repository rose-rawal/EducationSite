import React, { useContext, useEffect, useState } from 'react'
import { userAnswer } from '../api/listeningax'
import context from '../context/maincontext'
const PtePractice = () => {
  const [userAllAnswer,setUserAllAnswer]=useState([])
  const [totalScore,setTotalScore]=useState(0)
  const {login}=useContext(context)
  useEffect(()=>{
    const getUserData=async()=>{
      const Email={Email:login.Email}
      const res=await userAnswer(Email)
      setUserAllAnswer(res);
      const calculatedTotalScore =userAllAnswer.reduce((acc, n) => acc + parseInt(n.Score), 0)
      const calculatedAverage=calculatedTotalScore/ userAllAnswer.length
      setTotalScore(parseFloat(calculatedAverage.toFixed(2)));
      
    }
    // setTotalScore(parseInt(totalScore/userAllAnswer.length))
    getUserData();
  },[])
  return (
    <div className='min-h-screen px-48 py-7'>
      <div>
        <h3 className='text-2xl text-green-400 font-bold'>Listening</h3>
        <h2 className='pt-5 font-bold underline'>Summarize the spoken test</h2>
        <div className='bg-gray-100 px-5 py-3 mt-10 font-mono'>
          <table className='flex flex-col'>
          <thead className='mb-5'>
          <tr>
            <td className='w-10 text-center'>Qno</td>
            <td className='w-14 text-center'>Score</td>
            <td>Summary</td>
          </tr>
          </thead>
          <tbody className='flex flex-col gap-5'>
          {userAllAnswer && (
            userAllAnswer.map(n=>(
              <tr className='py-5 bg-slate-200' key={n._id}>
                <td className='w-10 text-center'>{n.Qno}</td>
                <td className='w-14 text-center'>{n.Score}</td>
                <td>{n.Summary.slice(0,100)+'...'}</td>
              </tr>
            ))
          )}
          </tbody>
        </table>
        </div>
        <div className='pt-10 font-semibold'>Average Marks Obtained: <span className='text-green-400 text-2xl ml-4'>{totalScore}</span></div>
      </div>
    </div>
  )
}

export default PtePractice