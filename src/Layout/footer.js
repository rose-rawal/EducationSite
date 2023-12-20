import React from 'react'

const Footer = () => {
  return (
    <div className='flex px-48 bg-slate-800 py-10 justify-between text-white text-sm'>
        <ul> <h3 className='text-xl font-bold pb-4'>Pearson PTE</h3>
            <li>Pearson Official Website</li>
            <li>Pearson PTE Mock Tests </li>
            <li>Book PTE Tests</li>
            <li>Contact Pearson PTE</li>
        </ul>
        <ul><h3 className='text-xl font-bold pb-4'>PTE Courses</h3>
            <li>PTE Speaking Course</li>
            <li>PTE Listening Course</li>
            <li>PTE Reading Course</li>
            <li>PTE Writing Course</li>
        </ul>
        <ul><h3 className='text-xl font-bold pb-4'>Contact Us:</h3>
            <li>Email:abc@gmail.com</li>
            <li>Phn No: +977 9812345678</li>
        </ul>
    </div>
  )
}

export default Footer