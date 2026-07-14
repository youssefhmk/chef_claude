import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-center items-center gap-4 height-80 box-shadow-md bg-white border-b border-gray-200'> 
      <img src="../public/chef-claude-icon.png" alt="" className='w-16' />
      <h1 className='text-3xl font-bold'>Chef Claude</h1>
    </header>
  )
}

export default Header