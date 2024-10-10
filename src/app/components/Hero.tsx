import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
<div>
  <div className="flex flex-col justify-center items-center sm:flex-row">
    <div className="mt-10 sm:mt-20 text-blue-950 text-center sm:text-left">
      <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl lg:text-9xl">Develop faster.</h1>
      <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl lg:text-9xl">Run anywhere.</h1>
      <p className="text-lg sm:text-2xl md:text-3xl font-bold px-4 sm:px-10 md:px-36 mt-4">
        Build with the <span className="text-blue-700">#1 most-used developer tool</span>
      </p>
      <div className="px-4 sm:px-10 md:px-36 mt-6 flex flex-col sm:flex-row gap-5 justify-center items-center">
        <div>
          <button className="font-bold text-white w-60 h-16 sm:w-80 sm:h-20 px-1 rounded-md text-lg sm:text-2xl border bg-blue-600 mt-6">
            Download Docker Desktop
          </button>
        </div>
        <div className="mt-6">
          <button className="font-bold rounded-md text-lg sm:text-2xl border w-60 h-16 sm:w-80 sm:h-20 border-gray-300 border-x-4 border-y-4">
            Learn more about Docker
          </button>
    </div>
      </div>
      </div>
      
    </div>
    
    <Image src="/Desktop.png"  alt='desktop' width={1000} height={1000} className="w-full h-auto mt-8 sm:mt-0 " />
    
</div>
  )
}

export default Hero