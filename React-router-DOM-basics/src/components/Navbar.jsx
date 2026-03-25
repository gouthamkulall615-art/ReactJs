import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between p-4 bg-amber-300 font-bold'>
      <h3 className='bg-amber-600 py-1 px-2 rounded text-white'>
        Shreyians
      </h3>
      <div className='flex gap-4 font-bold'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/product'>Product</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
