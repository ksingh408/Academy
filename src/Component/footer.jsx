// src/components/Footer.jsx

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white h-100 py-10 hover:border hover:border-blue-500 transition">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 mt-12 gap-10">
        {/* Left: Academy info */}
        <div>
          <h2 className="text-2xl font-bold mb-3 ">Smart Academy</h2>
          <p className="text-gray-300 mb-4">
            Empowering children to unlock their potential through quality online education tailored to their needs.
          </p>
          <div className="flex gap-4 text-blue-400 text-lg">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="pl-60">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Right: Courses */}
        <div className="pl-20">
          <h3 className="text-xl font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Science for Kids</a></li>
            <li><a href="#" className="hover:text-white">Music Basics</a></li>
            <li><a href="#" className="hover:text-white">Art & Craft</a></li>
            <li><a href="#" className="hover:text-white">Go Green Projects</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
