import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto p-6'>
        <div className='flex flex-wrap justify-between items-center'>

          <div className='w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0'>
            <h3 className='text-2xl font-bold'>ZEE-TECH COMMERCE</h3>
            <p className='text-sm'>Your go-to platform for tech reviews and commerce.</p>
          </div>

          <div className='w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0'>
            <h4 className='font-semibold mb-2'>Quick Links</h4>
            <ul className='list-none p-0'>
              <li><a href="/about" className='hover:underline'>About Us</a></li>
              <li><a href="/contact" className='hover:underline'>Contact Us</a></li>
              <li><a href="/privacy" className='hover:underline'>Privacy Policy</a></li>
              <li><a href="/terms" className='hover:underline'>Terms of Service</a></li>
            </ul>
          </div>

          <div className='w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0'>
            <h4 className='font-semibold mb-2'>Follow Us</h4>
            <div className='flex justify-center sm:justify-start space-x-4'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className='text-xl hover:text-gray-400'>
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className='text-xl hover:text-gray-400'>
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className='text-xl hover:text-gray-400'>
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" className='text-xl hover:text-gray-400'>
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className='w-full sm:w-auto text-center sm:text-left'>
            <h4 className='font-semibold mb-2'>Contact Information</h4>
            <p>Email: info@zeetechcommerce.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Tech Street, Bahawalpur, Pakistan</p>
          </div>

        </div>
        <div className='text-center mt-4'>
          <p>&copy; {new Date().getFullYear()} ZEE-TECH COMMERCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
