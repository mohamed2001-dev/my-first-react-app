import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const links = [
    { id : 1 , to: '/', label: 'Home' },
    { id : 2 , to: '/products', label: 'Products' },
    { id : 3 , to: '/about', label: 'About' },
    { id : 4 , to: '/contact', label: 'Contact' },
  ];
  return (
    <div className='bg-gray-500 p-4 text-white '>
      <div className="flex items-center justify-between h-[72px] max-w-6xl mx-auto">
      {/* logo section */}
        <div className='items-center'>
          <Link to={'/'}><h1 className='font-bold text-3xl'> <span className='text-blue-400 text-4xl font-extrabold'>Your</span>Shope</h1></Link>
        </div>
      {/* menu section */}
      <ul className='flex justify-around w-[50%] items-center'>
        {links.map((ele)=>{
          return <Link key={ele.id} to={ele.to}><li>{ele.label}</li></Link>
        })}
        {/* cart icon */}
          <Link to={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
          </Link>

      </ul>
      </div>
    </div>
  )
}

export default Navbar
