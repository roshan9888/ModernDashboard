import React from 'react';
import { BsBook, BsCardList, BsFillBellFill,BsPeople } from 'react-icons/bs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

function Home() {

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className='p-5 text-[rgba(255,255,255,0.95)]'>
      <div className='flex justify-between mb-5'>
        <h3 className='text-xl font-bold text-gray-300'>STUDENT DASHBOARD</h3>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-1 gap-4 mb-8'>
     
        <div className='bg-blue-700 p-4 rounded-lg shadow-md'>
          <div className='flex justify-between items-center mb-3'>
            <h3 className='text-lg font-semibold text-white'>Courses</h3>
            <BsBook className='text-3xl text-white' />
          </div>
          <h1 className='text-4xl font-bold text-white'>5</h1>
        </div>
        <div className='bg-yellow-600 p-4 rounded-lg shadow-md'>
          <div className='flex justify-between items-center mb-3'>
            <h3 className='text-lg font-semibold text-white'>Assignment</h3>
            <BsCardList className='text-3xl text-white' />
          </div>
          <h1 className='text-4xl font-bold text-white'>12</h1>
        </div>
        <div className='bg-green-700 p-4 rounded-lg shadow-md'>
          <div className='flex justify-between items-center mb-3'>
            <h3 className='text-lg font-semibold text-white'>Attendance</h3>
            <BsPeople className='text-3xl text-white' />
          </div>
          <h1 className='text-4xl font-bold text-white'>90%</h1>
        </div>
        <div className='bg-red-700 p-4 rounded-lg shadow-md'>
          <div className='flex justify-between items-center mb-3'>
            <h3 className='text-lg font-semibold text-white'>Upcoming Tasks</h3>
            <BsFillBellFill className='text-3xl text-white' />
          </div>
          <h1 className='text-4xl font-bold text-white'>3</h1>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' fill='#8884d8' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
