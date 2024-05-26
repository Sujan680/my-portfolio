import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#05142b] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 ' >
          
            <div className='sm:text-right pb-8 pl-4'>
    
                <p className='text-4xl font-bold underline  text-pink-800 '>
                    About
                </p>
            </div>
            
        </div>
      <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold '>
            <p>Hi, I'm Sujan, Nice to meet you. Please take a look around.</p>
        </div>
        <div className=''>
            <p>I am a passionate about building excellent software that improves the lives of those around me. 
                I specialize in creating software for clients ranging from individuals and small-business all the 
                way to large enterprise corporation. What would you do if you had a software expert available at your
                fingertips?
            </p>
        </div>
      </div>
    </div>
 </div>
  )
}

export default About
