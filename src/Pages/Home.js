import React from 'react'
import earth from '../image/earth.png'
const Home = () => {
  return (
    <div className=' '>
        <div className='px-48 pt-5 h-96 flex items-center justify-between bg-green-100 gap-5'>
            <div><h1 className='text-4xl '>Increase Your PTE Score <span>Using AI Scoring</span><br /><span className=' text-purple-700'>for Free</span></h1>
            <p className='pt-3 text-lg font-mono'>Join thousands of other users in this endeavour.</p>
            <button className='text-xl bg-green-300 px-10 py-2 rounded-xl mt-10 hover:bg-green-500 transition-all hover:scale-110'>Lets Go</button>
            </div>
            <img src={earth} alt="earth" className='w-1/3' />
        </div>

        {/*Start Practices Section */}
        
        <div className='px-48 pt-10'>
            <h2 className=' text-3xl font-serif pb-8'>PTE AI Practice Platform</h2>
            <div className='flex justify-evenly'>
                <div className=' h-80 w-80 bg-black'></div>       {/*Image Insert Here */}
                <div className=' text-gray-700 text-2xl flex flex-col justify-center items-center'>
                    <h4>Speaking and Writing AI Scorings</h4>
                    <ul className=' text-base text-gray-400 list-disc pt-10 pl-10'>
                        <li>AI Scoring Engine</li>
                        <li>Evaluate speaking pronounciation and fluency</li>
                        <li>Check writing grammar and spelling</li>
                        <li>Synchronize practice records across Web & APPs</li>
                    </ul>
                    <button className='px-10 py-2 text-xl border-solid border-green-300 border-2 mt-5 text-green-300'>Practice Now</button>
                </div>
            </div>
        </div>


        <div className='px-48 py-10'>
            <h2 className=' text-3xl font-serif pb-8'>PTE Study Tools</h2>
            <div className='flex gap-4'>
                <div className='flex shadow-md shadow-gray-500 h-28 items-center gap-2 px-2'>
                    <div className=' w-20 h-20 bg-black rounded-full'></div>
                    <div>
                        <h3>Vocab Book</h3>
                        <p className='text-xs text-gray-400'>Contains 90% exam <br />vocabs</p>
                    </div>
                </div>
                <div className='flex shadow-md shadow-gray-500 h-28 items-center gap-2 px-2'>
                    <div className=' w-20 h-20 bg-black rounded-full'></div>
                    <div>
                        <h3>Shadowing</h3>
                        <p className='text-xs text-gray-400'>Improve RA in 14 Days</p>
                    </div>
                </div>
                <div className='flex shadow-md shadow-gray-500 h-28 items-center gap-2 px-2'>
                    <div className=' w-20 h-20 bg-black rounded-full'></div>
                    <div>
                        <h3>AI Analysis</h3>
                        <p className='text-xs text-gray-400'>Accourate Score report analysis</p>
                    </div>
                </div>
                <div className='flex shadow-md shadow-gray-500 h-28 items-center gap-2 px-2'>
                    <div className=' w-20 h-20 bg-black rounded-full'></div>
                    <div>
                        <h3>View More</h3>
                        <p className='text-xs text-gray-400'>View More Study Tools</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='px-48 py-10'>
            <h2 className=' text-3xl font-serif pb-8'>Download PTE Study Materials</h2>
            <div className=' h-64 shadow-md shadow-gray-500 flex flex-col items-center justify-center'>
                <h3 className='text-2xl font-bold pb-4'>Study Materials</h3>
                <p className='text-gray-400'>Useful study materials created by our team</p>
                <button className='px-5 py-2 text-sm border-solid border-green-300 border-2 mt-5 text-green-300'>Download</button>
            </div>
        </div>



       

       


    </div>
  )
}

export default Home