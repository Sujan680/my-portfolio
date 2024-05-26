import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#333942] flex justify-center items-center p-4'>
      <form method='POST' action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 pt-4'>Submit the form below or shoot me an email...</p>
        </div>
        <input className='bg-[#ccd6f6] text-black p-2 rounded-md' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' required />
        <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2  hover:bg-gradient-to-r from-red-400 to-gray-900 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact