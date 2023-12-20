import React,{useState} from 'react'
import listening from '../../Listening/paragraph.mp3'
const Summarize = () => {
//   const audioFile = '/audio.mp3'; // adjust the path to your audio file
    const [summ,setSumm]=useState('') 
    const handleChange=(e)=>{
        setSumm(e.target.value)
        console.log(summ)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
  return (
    <div className='flex flex-col items-center gap-10 pt-10'>
        <h2>Listening Test 1</h2>
        <div>
            <audio controls>
                <source src={listening} type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
        </div>

        <div>
            <h3>Enter Your Summary:</h3>
            <form action="">
                <textarea cols="60" rows="10" onChange={handleChange}></textarea>
                <button onClick={e=>handleSubmit(e)}>Submit</button>
            </form>
        </div>


    </div>
  )
}

export default Summarize