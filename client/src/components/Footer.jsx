import React from 'react'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ]
  return (
    <footer className='bg-[#2e2e2e] text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* About Section */}
        <div>
          <h2 className='text-xl font-bold mb-4'>About Us</h2>
          <p className='text-gray-400'>
            Sniffit is a community for dog lovers, connecting passionate owners
            with breeding matches, adoption options, and more. Join us to
            celebrate and share the love for dogs!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className='text-gray-400 hover:text-white'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <h2 className='text-gray-400'>
          Connecting dog lovers for <br /> breeding and adoption.
        </h2>
      </div>

      {/* Bottom Footer */}
      <div className='border-t border-gray-700 mt-8 pt-4 text-center text-gray-500'>
        <p>&copy; {new Date().getFullYear()} Sniffit. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
