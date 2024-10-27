import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    // { path: '/about', label: 'About' },
    // { path: '/services', label: 'Services' },
    // { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className='flex items-center justify-between lg:px-48 px-8 py-6 bg-white text-black shadow-lg   '>
      <div className='text-2xl font-bold'>
        <Link to='/'>Sniffit</Link>
      </div>

      {/* Dynamic Links */}
      <div className='flex space-x-4'>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className='font-medium text-gray-600 hover:text-gray-900'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
