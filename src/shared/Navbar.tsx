import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
   <nav className='w-full h-fit flex items-center justify-center absolute top-10'>
     <div className='w-4/6 px-8 py-2 flex items-center justify-between mx-auto  z-[999] bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-0 rounded-xl'>
        <a href='/' className='flex items-center gap-2'>
            <img src={`./src/assets/favicon.png`} alt="logo" className='w-10 h-10' />
            <p className='text-white text-lg font-bold'>AquaG</p>
        </a>
        <ul className='flex items-center gap-4 font-inter'>
            <li className='text-white text-base hover:text-yellow-400 transition-all duration-300 font-medium'>Home</li>
            <li className='text-white text-base hover:text-yellow-400 transition-all duration-300 font-medium'>Playground</li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar