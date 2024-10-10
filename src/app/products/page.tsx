import Image from 'next/image'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { BsBoxArrowUpRight } from "react-icons/bs";
import React from 'react';

const Page = () => {
  return (
    <div className='h-auto w-full py-8'>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[430px,450px,1fr] h-auto px-4 md:px-8">
        {/* Left Section */}
        <div className="p-4">
          <h1 className='mt-3 font-bold text-xl md:text-2xl lg:text-3xl'>PRODUCTS</h1>
          
          <div className="mt-6 md:mt-8 lg:mt-12">
            <h1 className='text-xl md:text-2xl'>Docker Desktop</h1>
            <p className='text-gray-500 text-lg md:text-xl'>Containerize your applications</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl'>Docker Hub</h1>
            <p className='text-gray-500 text-lg md:text-xl'>Discover and share container images</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl'>Docker Scout</h1>
            <p className='text-gray-500 text-lg md:text-xl'>Simplify the software supply chain</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl'>Docker Build Cloud</h1>
            <p className='text-gray-500 text-lg md:text-xl'>Speed up your image builds</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="p-4">
          <div className="mt-12 md:mt-16 lg:mt-12">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              Testcontainers Desktop <BsBoxArrowUpRight className='text-lg mt-1 text-blue-600' />
            </h1>
            <p className='text-gray-500 text-lg md:text-xl'>Testcontainers Cloud</p>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20">
            <h1 className='text-xl md:text-2xl flex items-center gap-2'>
              Testcontainers Cloud <BsBoxArrowUpRight className='text-lg mt-1 text-blue-600' />
            </h1>
            <p className='text-gray-500 text-lg md:text-xl'>Test without limits in the cloud</p>
          </div>

          <button className='w-full md:w-80 lg:w-96 text-lg md:text-xl h-14 border-2 border-blue-600 rounded-lg text-blue-600 bg-blue-100 flex justify-center items-center mt-16 md:mt-32 lg:mt-56 gap-2'>
            See our product roadmap <HiMiniArrowLongRight className='text-2xl font-bold text-blue-600' />
          </button>
        </div>

        {/* Right Section */}
        <div className="p-4">
          <Image src="/docker4.3.png" alt='img' width={600} height={300} className='mt-12 md:mt-16 lg:mt-24 rounded-xl w-full h-auto object-cover' />
          <h1 className='text-xl md:text-2xl mt-6'>Docker Desktop v4.34</h1>
          <p className='text-lg md:text-xl text-gray-500'>Find out what’s new to Docker Desktop in the latest release</p>
          <p className='text-blue-600 mt-6 text-lg md:text-xl flex gap-2 items-center'>
            Read more <HiMiniArrowLongRight className='mt-1 text-xl' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;




