import React from 'react';
import './Social.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialMedia = [
  { icon: <FaFacebookF />, bg: '#3b5999', href: 'https://www.facebook.com/' },
  { icon: <FaTwitter />, bg: '#55acee', href: 'https://x.com/' },
  { icon: <FaLinkedinIn />, bg: '#0077b5', href: 'https://www.linkedin.com/' },
  { icon: <FaGooglePlusG />, bg: '#dd4b39', href: 'https://support.google.com/answer/2451065?hl=en' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">YourCompany</h2>
          <p className="text-sm text-gray-400">
            Providing reliable tech since 2025. Delivering innovation that matters.
          </p>
        </div>

        {/* Navigation Links */}
         <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/support" className="hover:text-white">Support</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center justify-center bg-gradient-to-br ">
             <ul className="flex justify-center items-center gap-4 relative">
      {socialMedia.map((item, index) => (
        <li key={index} className="list-none">
          <a
            href={item.href}
            className="group relative block w-20 h-20 rounded-full bg-white border-4 border-white overflow-hidden shadow-md"
          >
            <div
              className="absolute top-full left-0 w-full h-full transition-all duration-500 ease-in-out"
              style={{
                backgroundColor: item.bg,
              }}
            ></div>
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <span className="text-[#262626] text-3xl transition-transform duration-500 group-hover:text-white group-hover:rotate-[360deg]">
                {item.icon}
              </span>
            </div>
            <style jsx>{`
              a:hover div:first-child {
                top: 0;
              }`}</style>
          </a>
        </li>
      ))}
    </ul>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
