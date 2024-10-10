import Image from 'next/image'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5"
import { RiHandHeartLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi"; 
import { IoEyeOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { SiReactquery } from "react-icons/si";
import { GoPeople } from "react-icons/go";

const Page = () => {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr,1fr] h-auto px-4 md:px-8 lg:px-12 py-8">
        {/* Left Column */}
        <div className="p-4 gap-24">
          <h1 className='mt-3 font-bold text-xl md:text-2xl lg:text-3xl'>DEVELOPERS</h1>
          
          <div className="mt-6 md:mt-8 lg:mt-12">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <IoDocumentTextOutline className='text-blue-600' /> Documentation
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Find guides for Docker products</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <SiReactquery className='text-blue-600' /> Getting Started
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Learn the Docker basics</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <PiGraduationCap className='text-blue-600' /> Resources
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Search a library of helpful materials</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <FiYoutube className='text-blue-600' /> Training
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Skill up your Docker knowledge</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <IoExtensionPuzzleOutline className='text-blue-600' /> Extensions SDK
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Create and share your own extensions</p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="p-4">
          <div className="mt-12 md:mt-16 lg:mt-12">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <RiHandHeartLine className='text-blue-600' /> Community
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Connect with other Docker developers</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <BsBox className='text-blue-600' /> Open Source
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Explore open source projects</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <IoEyeOutline className='text-blue-600' /> Preview Program <BsBoxArrowUpRight className='text-lg mt-2 text-blue-600' />
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Help shape the future of Docker</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              <GoPeople className='text-blue-600' /> Customer Stories
            </h1>
            <p className='text-gray-500 text-lg md:text-xl ml-8'>Get inspired with customer stories</p>
          </div>

          <button className='w-full md:w-80 lg:w-96 text-lg md:text-xl h-14 border-2 border-blue-600 rounded-lg text-blue-600 bg-blue-100 flex justify-center items-center mt-16 md:mt-32 lg:mt-56 gap-2'>
            See our product roadmap <HiMiniArrowLongRight className='text-2xl font-bold text-blue-600' />
          </button>
        </div>

        {/* Right Column */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Image src="/report.png" alt='img' width={600} height={300} className='mt-12 md:mt-16 lg:mt-24 rounded-xl w-full h-auto object-cover' />
            <h1 className='text-xl md:text-2xl mt-6'>2024 State Of Application Development Report</h1>
            <p className='text-lg md:text-xl text-gray-500'>A deep-focus snapshot of the evolving software development world</p>
            <p className='text-blue-600 mt-6 text-lg md:text-xl flex items-center gap-2'>
              Read more <HiMiniArrowLongRight className='mt-1 text-xl' />
            </p>
          </div>
          <div>
            <Image src="/cds.png" alt='img' width={600} height={300} className='mt-12 md:mt-16 lg:mt-24 rounded-xl w-full h-auto object-cover' />
            <h1 className='text-xl md:text-2xl mt-6'>Case Study: CDS</h1>
            <p className='text-lg md:text-xl text-gray-500'>How CDS embraced cloud native development with Docker</p>
            <p className='text-blue-600 mt-6 text-lg md:text-xl flex items-center gap-2'>
              Read more <HiMiniArrowLongRight className='mt-1 text-xl' />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
