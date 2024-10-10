import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Community = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Card Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 px-4 md:px-16 lg:px-32 xl:px-64">
        
        {/* First Card */}
        <div className="relative transform -rotate-6 z-10">
          <div className="w-64 h-80 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mt-4 text-center">Aurélie Vache</h3>
            <Image src="/man.jpeg" alt="man" width={170} height={150} className="mt-4 rounded-xl mx-auto" />
            <p className="text-gray-500 text-center mt-4">DevRel</p>
            <p className="text-gray-700 text-center">OVHcloud</p>
            <a href="#" className="text-blue-500 mt-4 block text-center">Learn more →</a>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative z-20">
          <div className="w-64 h-80 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mt-4 text-center">Marcos Lilljedahl</h3>
            <Image src="/man2.jpeg" alt="man2" width={170} height={150} className="mt-4 rounded-xl mx-auto" />
            <p className="text-gray-500 text-center mt-4">Senior Backend Engineer</p>
            <p className="text-gray-700 text-center">Dagger</p>
            <a href="#" className="text-blue-500 mt-4 block text-center">Learn more →</a>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative transform rotate-6 z-10">
          <div className="w-64 h-80 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mt-4 text-center">Paloma Lataliza</h3>
            <Image src="/women.jpeg" alt="woman" width={170} height={150} className="mt-4 rounded-xl mx-auto" />
            <p className="text-gray-500 text-center mt-4">Cloud Engineer</p>
            <p className="text-gray-700 text-center">Claro</p>
            <a href="#" className="text-blue-500 mt-4 block text-center">Learn more →</a>
          </div>
        </div>

      </div>

      {/* Text Section */}
      <div className="mt-20 text-center px-4 sm:px-12 md:px-24 lg:px-64 xl:px-96">
        <h1 className="text-3xl text-blue-950">Connect</h1>
        <h1 className="text-4xl md:text-7xl font-bold mt-4">Meet the community</h1>
        <p className="text-lg md:text-xl mt-4 text-blue-950">
          Stop by any of the hundreds of meetups around the world for in-person banter or join our Slack and Discourse for virtual peer support. Our Docker Captains are also a great source of developer insight and expertise.
        </p>

        <div className="mt-10 flex items-center justify-center text-blue-600 font-bold text-xl">
          <span>Connect with us</span>
          <FaArrowRightLong className="ml-2" />
        </div>

        <h1 className="text-2xl font-bold mt-16">Join our open source program</h1>
        <p className="text-lg text-gray-500 mt-3">Our Docker-Sponsored Open Source program is ideal for developers working on non-commercial projects.</p>

        <div className="mt-6 flex items-center justify-center text-blue-600 font-bold text-xl">
          <span>Apply today</span>
          <FaArrowRightLong className="ml-2" />
        </div>
      </div>
    </div>
  )
}

export default Community;
