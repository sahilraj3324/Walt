import React from 'react'
import logo from '../assets/logo.png'


const Nav = () => {
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Explore", path: "features"},
        
      ]

  return (
    <nav className=' md:px-12 font-abc p-4 max-w-screen-3xl border- mx-auto '>
      <div className=" container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-10 items-center">
            <a href="/" className='text-xl font-semibold flex items-center space-x-3 text-white '>
                <img src={logo} alt="" className='w-12 inline-block items-center'/>
                <span >Walt </span>
            </a>
            <ul className='md:flex space-x-8 hidden'>
              {
                navItems.map(({link,path}) => <a key={link} href={path} className='block text-white hover:text-blue '>{link}
                </a>
                )
              }
            </ul>
        </div>
        

        <div className="space-x-12 hidden md:flex items-center ">
        <div>
          <input type="email" name='email' id='email' placeholder='Email'
          className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
          
        </div>
          
          <button className='bg-dblue text-white py-2 px-4 transition-all duration-300 rounded-xl hover:text-dark hover:bg-first'>Login/Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav