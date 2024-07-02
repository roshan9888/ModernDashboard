import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ toggleSidebar }) {
  return (
    <header className='flex items-center justify-between h-15 p-4 shadow-md bg-gray-800 text-gray-400'>
      {/* Toggle button for mobile screens */}
      <div className='md:hidden'>
        <BsJustify className='text-xl mr-2 cursor-pointer' onClick={toggleSidebar} />
      </div>
      
      {/* Search icon (visible on medium screens and larger) */}
      <div className='hidden md:block'>
        <BsSearch className='text-xl mr-2' />
      </div>
      
      {/* Icons on the right */}
      <div className='flex space-x-4'>
        <BsFillBellFill className='text-xl' />
        <BsFillEnvelopeFill className='text-xl' />
        <BsPersonCircle className='text-xl' />
      </div>
    </header>
  );
}

export default Header;
