import Image from 'next/image'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { HiMiniArrowLongRight } from 'react-icons/hi2'

const page = () => {
  return (
    <div className='w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[430px,450px,1fr] h-auto lg:h-[600px] px-4 md:px-8">
        <div className="p-4">
          <h1 className='mt-3 font-bold text-lg md:text-xl'>COMPANY</h1>
          <h1 className='mt-4 text-xl md:text-2xl'>About Us</h1>
          <p className='text-gray-500 text-base md:text-xl'>Let us introduce ourselves</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>What is a Container?</h1>
          <p className='text-gray-500 text-base md:text-xl'>Learn about containerization</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Why Docker</h1>
          <p className='text-gray-500 text-base md:text-xl'>Discover what makes us different</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Trust</h1>
          <p className='text-gray-500 text-base md:text-xl'>Find our customer trust resources</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Partners</h1>
          <p className='text-gray-500 text-base md:text-xl'>Become a Docker partner</p>
        </div>

        <div className="p-4">
          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Customer Success</h1>
          <p className='text-gray-500 text-base md:text-xl'>Learn how you can succeed with Docker</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Events</h1>
          <p className='text-gray-500 text-base md:text-xl'>Attend live and virtual meet ups</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Docker Store <BsBoxArrowUpRight className='text-lg mt-1 text-blue-600' /></h1>
          <p className='text-gray-500 text-base md:text-xl'>Gear up with exclusive SWAG</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Careers</h1>
          <p className='text-gray-500 text-base md:text-xl'>Apply to join our team</p>

          <h1 className='mt-8 md:mt-12 text-xl md:text-2xl'>Contact Us</h1>
          <p className='text-gray-500 text-base md:text-xl'>We’d love to hear from you</p>
        </div>

        <div className="p-4">
          <Image src="/certificate.png" alt='Certificate' width={600} height={300} className='mt-8 md:mt-24 rounded-xl' />
          <h1 className='text-xl md:text-2xl mt-6'>Docker Announces SOC 2 Type 2 Attestation & ISO 27001 Certification</h1>
          <p className='text-gray-500 text-base md:text-xl'>Learn what this means for Docker security and compliance</p>
          <p className='text-blue-600 mt-4 md:mt-6 text-base md:text-xl flex gap-2'>
            Read more <HiMiniArrowLongRight className='text-lg md:text-xl' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
