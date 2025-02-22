import React from 'react'

const Footer = () => {
  return (
    <div className='py-1 font-semibold tracking-wider text-center mt-4 bg-gray-700 text-white'>&copy; {new Date().getFullYear()}</div>
  )
}

export default Footer