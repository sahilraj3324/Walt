import React from 'react'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className='md:px-40 mx-auto mt-2 font-abc  '>
       <div className="justify-between md:px-80 pr-2 ">
          <div className=''>
          <img src={logo} alt="" className="lg:h-[386px] hover:-translate-y-4 transition-all duration-300 md:px-20" />
             <h2 className='md:text-7xl text-4xl font-bold text-blue mb-6 leading-relaxed '>Walt</h2>
             <p className='text-[#ebebeb] text-2xl mb-8'>The world's most powerful AI photo art generation engine.<p className='text-first'> What will you create?</p> </p>
             
               <div className='space-x-5 space-y-4'>
                <button className='px-20 py-2 gBg  text-white rounded-md -ml-2
          cursor-pointer hover:bg-white hover:text-blue duration-15 transition-all '>Generate</button>
                
               </div>
           </div>
               
        </div>
  
</div>
  )
}

export default Hero
