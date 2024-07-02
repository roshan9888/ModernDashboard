import React from 'react';
import {
  BsBook,BsCardList, BsPeople, BsCalendar, BsFillBellFill,
  BsMenuButtonWideFill, BsFillGearFill, BsJustify
} from 'react-icons/bs';

function Sidebar({ openSidebarT, toggleSidebar }) {
    console.log("I am in the sidebar ",openSidebarT);
  return (
    // <aside className={`md:block md:relative h-full bg-gray-800 transition-all duration-500 overflow-y-auto ${openSidebarToggle ? 'block' : 'hidden'}`}>
    <aside className={`md:block md:relative h-full bg-gray-800 transition-all duration-500 overflow-y-auto fixed inset-y-0 left-0 transform ${openSidebarT ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className='flex justify-between items-center px-7 pt-4 mb-8'>
        <div className='flex items-center text-lg font-bold'>
          <BsBook className='inline-block align-middle text-2xl mr-1' /> Student
          <span className='text-red-500 ml-7  cursor-pointer md:hidden align-baseline' onClick={toggleSidebar}>X</span>
        </div>
        {/* Toggle button for mobile screens */}
        {/* <div className="md:hidden">
          <BsJustify className='text-xl mr-2 cursor-pointer' onClick={toggleSidebar} />
        </div> */}
        {/* Close button for mobile screens */}
        
      </div>
      {/* Sidebar menu */}
      <ul className='list-none p-0'>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsBook className='inline-block align-middle text-xl mr-1' /> Courses
          </a>
        </li>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsCardList className='inline-block align-middle text-xl mr-1' /> Assignment
          </a>
        </li>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsPeople className='inline-block align-middle text-xl mr-1' /> Attendance
          </a>
        </li>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsCalendar className='inline-block align-middle text-xl mr-1' /> Schedule
          </a>
        </li>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsFillBellFill className='inline-block align-middle text-xl mr-1' /> Notifications
          </a>
        </li>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsMenuButtonWideFill className='inline-block align-middle text-xl mr-1' /> Reports
          </a>
        </li>
        <li className='px-5 py-5 text-lg hover:bg-gray-600 cursor-pointer'>
          <a href="#" className='text-gray-400 no-underline flex items-center'>
            <BsFillGearFill className='inline-block align-middle text-xl mr-1' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
