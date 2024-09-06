import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  const location = useLocation()
  return (
   <nav className='w-full h-fit flex items-center justify-center absolute top-10'>
     <div className='w-4/6 px-8 py-2 flex items-center justify-between mx-auto  z-[9999999] bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-0 rounded-xl'>
        <a href='/' className='flex items-center gap-2'>
            <img src={`/favicon.png`} alt="logo" className='w-10 h-10' />
            <p className='text-3xl  font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>
              {/* AQuA-G */}
              <a href="https://www.fontspace.com/category/fancy"><img src="https://see.fontimg.com/api/rf5/WyMWG/MGFiMDVkNTc1ZjZkNGE4Mjg0M2Q2NzMxYWMyNGEyYjUudHRm/QVF1QS1H/mouldy-cheese-regular.png?r=fs&h=32&w=1000&fg=FFFFFF&bg=353D4B&tb=1&s=64" alt="Fancy fonts"/></a>
            </p>
        </a>
        <ul className='flex items-center gap-4 font-inter'>

            <li className={`text-base hover:text-blue-400 transition-all duration-300 font-medium ${location.pathname === '/' ? 'text-blue-400' : 'text-white'}`}><Link to="/">Home</Link></li>
            <li className={`text-base hover:text-blue-400 transition-all duration-300 font-medium ${location.pathname === '/playground' ? 'text-blue-400' : 'text-white'}`}><Link to="/playground">Playground</Link></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar