import Image from 'next/image'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { BsBoxArrowUpRight } from "react-icons/bs";
import React from 'react'


const page = () => {
  return (
    <div className='h-[600px] w-full'>
     <div className="grid grid-cols-[430px,450px,1fr] h-[600px] px-8">
  <div className=" p-4 gap-24">
  <h1 className='mt-3 font-bold'>PRODUCTS
    
  </h1>
  <h1 className='mt-4 text-2xl'>Docker Desktop</h1>
  <p className='text-gray-500 text-xl'>Containerize your applications</p>

  <h1 className='mt-20 text-2xl'>Docker Hub</h1>
  <p className='text-gray-500 text-xl'>Discover and share container images</p>

  <h1 className='mt-20 text-2xl'>Docker Scout</h1>
  <p className='text-gray-500 text-xl'>Simplify the software supply chain</p>

  <h1 className='mt-20 text-2xl'>Docker Build Cloud</h1>
  <p className='text-gray-500 text-xl'>Speed up your image builds</p>
  </div>
  
  <div className="p-4">
    <h1 className='mt-12 text-2xl flex gap-2'>Testcontainers Desktop <BsBoxArrowUpRight className='text-lg mt-2 text-blue-600'/> </h1>
    <p className='text-gray-500 text-xl'>Testcontainers Cloud</p>

    <h1 className='mt-20 text-2xl flex gap-2'>Testcontainers Cloud <BsBoxArrowUpRight className='text-lg mt-2 text-blue-600' /></h1>
    <p className='text-gray-500 text-xl'>Test without limits in the cloud</p>
    <button className='w-96 text-xl  h-14 border-2 border-blue-600 rounded-lg text-blue-600 bg-blue-100 flex justify-center items-center mt-56  gap-2'>See our product roadmap <HiMiniArrowLongRight className='text-2xl font-boldtext-blue-600'/></button>
    </div> 
  <div className="p-4">
  <Image src="/docker4.3.png" alt='img' width={600} height={300}  className='mt-24 rounded-xl'/>
  <h1 className='text-2xl mt-6'>Docker Desktop v4.34</h1>
  <p className='text-xl text-gray-500'>Find out what’s new to Docker Desktop in the latest release</p>
  <p className='text-blue-600 mt-6 text-xl flex gap-2 '>Read more <HiMiniArrowLongRight  className='mt-1 text-xl'/></p>
  </div>
 
</div>
    </div>
  )
}

export default page




