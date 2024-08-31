import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from '../pages/Home/Home'

type Props = {}

const Layout = (props: Props) => {
  return (
    <main className='w-full min-h-screen bg-gray-950 relative overflow-hidden flex flex-col'>
        <Navbar />
        <Home/>
        <Footer />
      </main>
  )
}

export default Layout