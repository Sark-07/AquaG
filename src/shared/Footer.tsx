import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-10 flex items-center justify-center bg-gray-900 absolute bottom-0'>
        <p className='text-white text-sm'>AquaG &#xa9; All rights reserved @ {new Date().getFullYear()}</p>
        <p className='text-white/20 font-light text-sm absolute bottom-[0.7rem] right-4'>UI Designed by: sark-07</p>
    </div>
  )
}

export default Footer