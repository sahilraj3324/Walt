import React from 'react'
import banner from '../assets/feat.png'

const New = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2x1 mx-auto mt-20 font-abc'>
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p=9 px-4 py-9'>
       <div className="flex flex-col md:flex-row-reverse md:flex-row justify-between items-center gap-9  ">
       <div>
                    <img src={banner} alt="" className="lg:h-[386px] hover:-translate-y-4 transition-all duration-300" />
               </div>
          <div className="md:w-3/5">
             <h2 className='md:text-7xl text-4xl font-bold text-blue mb-6 leading-relaxed'> Develop your skills without diligence</h2>
             <p className='text-[#ebebeb] text-2xl mb-8'>A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in BHARAT.</p>
               <div className='space-x-5 space-y-4'>
                <button className='gBg px-20 py-2 rounded-md text-white  hover:text-blue '>Get started</button>
                <button className='gBg px-20 py-2 rounded-md text-white  hover:text-blue'>Bulid</button>
               </div>
           </div>
               
        </div>
  </div>
</div>
  )
}

export default New
