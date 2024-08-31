import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  const location = useLocation()
  return (
    <main className='w-full min-h-screen bg-gray-950 relative overflow-hidden flex flex-col dark'>
      {
        location.pathname !== '/' && (<div
          aria-hidden='true'
          className='pointer-events-none absolute right-36 -top-48 z-[999] transform-gpu overflow-hidden blur-3xl sm:-top-96'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/600] w-[46.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#585cdc] to-[#9089fc] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[90.1875rem]'
          />
        </div>)
      }
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout