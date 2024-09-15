import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {}

const Navbar = (props: Props) => {
  const location = useLocation();
  return (
   <nav className='w-full h-fit flex items-center justify-center absolute top-10'>
     <div className='w-4/6 px-8 py-2 flex items-center justify-between mx-auto z-[9999999] bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-0 rounded-xl'>
        <Link to='/' className='flex items-center gap-2'>
            <img src={`/favicon.png`} alt="logo" className='w-10 h-10' />
            <p className='text-3xl font-bold font-koolBeans tracking-[0.07em] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500'>
              AQuA-G
            </p>
        </Link>
        <ul className='flex items-center gap-4 font-inter'>
            <li className={`text-base hover:text-blue-400 transition-all duration-300 font-medium ${location.pathname === '/' ? 'text-blue-400' : 'text-white'}`}><Link to="/">Home</Link></li>
            <li className={`text-base hover:text-blue-400 transition-all duration-300 font-medium ${location.pathname === '/playground' ? 'text-blue-400' : 'text-white'}`}><Link to="/playground">Playground</Link></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar;
