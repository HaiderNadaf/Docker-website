import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Notification = () => {
  return (
    <div className='bg-blue-950 w-full h-14 px-4 md:px-10 text-lg md:text-xl  text-center '>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center p-2 md:p-4 font-bold gap-4 md:gap-7'>
          <h1 className='text-lg md:text-2xl text-blue-500 mt'>New</h1>
          <h1 className='text-gray-300 text-sm md:text-base flex lg:text-xl '>
            More Docker. Easy Access. New Streamlined Plans. Learn more  <FaArrowRightLong className='mt-1 ml-2 text-white'/>
          </h1>
        </div>
        <div className='hidden lg:flex text-gray-300 gap-2 lg:gap-4 mt-2 lg:mt-0'>
  <h1 className='text-sm lg:text-base cursor-pointer'>Docs</h1>
  <h1 className='text-sm lg:text-base cursor-pointer'>Get Support</h1>
  <h1 className='text-sm lg:text-base cursor-pointer'>Contact Sales</h1>
</div>
      </div>
    </div>
  );
}

export default Notification;
