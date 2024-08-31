import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-10 flex items-center justify-center bg-gray-900 absolute bottom-0'>
        <p className='text-white text-sm'>AquaG &#xa9; All rights reserved @2024</p>
    </div>
  )
}

export default Footer