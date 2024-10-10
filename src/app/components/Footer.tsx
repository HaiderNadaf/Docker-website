import Image from 'next/image'
import React from 'react'
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-28">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-8 text-gray-600 px-4 sm:px-8 lg:px-16 xl:px-24">
        
        <div className="flex flex-col  md:items-start">
          <Image src="/Docker Img.png" alt="docker" width={40} height={40} />
          <h1 className="font-bold text-3xl text-blue-600 mt-4">Docker</h1>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-4">Products</h1>
          <p className="mb-2">Docker Desktop</p>
          <p className="mb-2">Docker Hub</p>
          <p className="mb-2">Docker Scout</p>
          <p className="mb-2">Docker Build Cloud</p>

          <h1 className="text-xl mt-8 mb-4">Features</h1>
          <p className="mb-2">Command Line</p>
          <p className="mb-2">Interface</p>
          <p className="mb-2">IDE Extensions</p>
          <p className="mb-2">Container Runtime</p>
          <p className="mb-2">Docker Extensions</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-4">Developer</h1>
          <p className="mb-2">Documentation</p>
          <p className="mb-2">Getting Started</p>
          <p className="mb-2">Trainings</p>
          <p className="mb-2">Extensions SDK</p>
          <p className="mb-2">Community</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-4">Pricing</h1>
          <p className="mb-2">Personal</p>
          <p className="mb-2">Pro</p>
          <p className="mb-2">Team</p>
          <p className="mb-2">Business</p>
          <p className="mb-2">Pricing FAQ</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-4">Support</h1>
          <p className="mb-2">Docker System Status</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-4">Blog</h1>
          <p className="mb-2">Newsletter</p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl mb-4">Company</h1>
          <p className="mb-2">About Us</p>
          <p className="mb-2">What is a Container</p>
          <p className="mb-2">Customer Success</p>
          <p className="mb-2">Partners</p>
          <p className="mb-2">Careers</p>
          <h1 className="text-xl mt-8">Languages</h1>
          <p className="mb-2">English</p>
          <p className="mb-2">日本語</p>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-300 pt-8 lg:px-7 ">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center">
              <FaXTwitter />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center">
              <FiYoutube />
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center">
              <FaFacebookF />
            </div>
          </div>

          <p className="text-center mb-4 md:mb-0">
            © 2024 Docker Inc. All rights reserved | Terms of Service | Privacy | Legal
          </p>

          <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md">
            Cookie Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
