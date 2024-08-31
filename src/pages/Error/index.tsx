import React from 'react'

type Props = {}

const Error = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 bg-dot-white/[0.09]">
      <h1 className="text-9xl font-bold text-white">404</h1>
      <p className="text-2xl font-bold text-white">Page not found</p>
      <p className="text-md text-gray-400 mt-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  )
}

export default Error