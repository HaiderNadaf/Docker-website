import React from 'react'
import { FaTools } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { FaCircleCheck } from "react-icons/fa6";
import { LuTestTube2 } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
const Docker = () => {
  return (
    <div className="  w-full">
    <div className="flex flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
      <div className="w-full t-10 md:mt-20 text-blue-950 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl">What is Docker?</h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4">Accelerate how you build,</h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">share, and run applications</h1>
        <p className="text-lg sm:text-xl mt-4 px-2 md:px-0">Docker helps developers build, share, run, and verify applications anywhere — without tedious environment configuration or management.</p>
        <p className="text-lg sm:text-xl mt-2 px-8 md:px-56">No need for manual setup of development environments!</p>
  
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <button className="font-bold text-white w-40 sm:w-44 h-12 sm:h-16 rounded-full bg-blue-600 text-lg sm:text-2xl flex items-center justify-center gap-2">
            <FaTools /> Build
          </button>
          <button className="font-bold w-40 sm:w-44 h-12 sm:h-16 rounded-full shadow-xl text-lg sm:text-2xl border border-gray-300 flex items-center justify-center gap-2">
            <LuShare2 className="text-blue-600" /> Share
          </button>
          <button className="font-bold w-40 sm:w-44 h-12 sm:h-16 rounded-full shadow-xl text-lg sm:text-2xl border border-gray-300 flex items-center justify-center gap-2">
            <LuRocket className="text-blue-600" /> Run
          </button>
          <button className="font-bold w-40 sm:w-44 h-12 sm:h-16 rounded-full shadow-xl text-lg sm:text-2xl border border-gray-300 flex items-center justify-center gap-2">
            <FaCircleCheck className="text-blue-600" /> Verify
          </button>
          <button className="font-bold w-40 sm:w-44 h-12 sm:h-16 rounded-full shadow-xl text-lg sm:text-2xl border border-gray-300 flex items-center justify-center gap-2">
            <LuTestTube2 className="text-blue-600" /> Test
          </button>
        </div>
      </div>
    </div>
  
    <div className="grid grid-cols-1  md:grid-cols-2 gap-8 px-4 mt-12 md:px-24">
      <div className="p-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-blue-950">Build</h1>
        <h2 className="text-xl sm:text-2xl mt-4 text-blue-950">Spin up new environments quickly</h2>
        <p className="text-base sm:text-lg mt-4 text-gray-600">Accelerate your development by building Docker images locally or in the cloud with Docker Build Cloud. Use Docker Compose to easily manage multiple containers.</p>
        <h2 className="text-xl sm:text-2xl mt-10 text-blue-950">Integrate with your tools</h2>
        <p className="text-base sm:text-lg mt-4 text-gray-600">Docker seamlessly integrates with tools like VS Code, CircleCI, and GitHub. Use Docker Build Cloud for faster builds and consistent workflows.</p>
        <h2 className="text-xl sm:text-2xl mt-10 text-blue-950">Containerize applications for consistency</h2>
        <p className="text-base sm:text-lg mt-4 text-gray-600">Ensure consistent app performance across environments like Kubernetes or cloud platforms (AWS, Azure, Google Cloud).</p>
        <h1 className="text-lg sm:text-xl mt-8 font-bold text-blue-600 flex items-center gap-2">Optimize builds with Docker Build Cloud <FaArrowRightLong /></h1>
      </div>
  
      <div className="w-full h-[450px] mt-16">
        <Image src="/build cloud.png" alt="build" width={1000} height={1000} className="w-full h-full rounded-xl border" />
      </div>
    </div>
  
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
      <button className="font-bold text-white w-64 h-14 sm:w-72 sm:h-20 rounded-md text-lg sm:text-2xl bg-blue-600">Explore all</button>
      <button className="font-bold w-64 h-14 sm:w-72 sm:h-20 rounded-md text-lg sm:text-2xl border border-gray-300">Find pricing</button>
    </div>
  
    <div className="text-center mt-24">
      <h1 className="text-lg sm:text-3xl text-blue-950">Why use Docker?</h1>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4">Trusted by developers.</h1>
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Chosen by Fortune 100 companies.</h1>
      <p className="text-lg sm:text-xl mt-4 px-4">Docker provides tools and services to accelerate secure app development, trusted by millions of developers worldwide.</p>
      <h1 className="text-lg sm:text-xl mt-6 font-bold text-blue-600 flex justify-center items-center gap-2">Read more customer stories <FaArrowRightLong /></h1>
    </div>
  
    <div className="flex justify-around items-center text-blue-600 font-bold text-3xl sm:text-5xl md:text-7xl mt-24">
      <div className="text-center">
        <h1>20M+</h1>
        <p className="text-sm sm:text-lg text-blue-950 mt-2">Monthly Developers</p>
      </div>
      <div className="text-center">
        <h1>7M+</h1>
        <p className="text-sm sm:text-lg text-blue-950 mt-2">Applications</p>
      </div>
      <div className="text-center">
        <h1>20B+</h1>
        <p className="text-sm sm:text-lg text-blue-950 mt-2">Monthly Image Pulls</p>
      </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 mt-24 bg-slate-50 py-16">
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-xl sm:text-3xl font-bold text-blue-950">Container development</h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4">New to containers?</h1>
        <p className="text-sm sm:text-lg mt-4">We’ve got you covered! Learn the basics of containers, their benefits over virtual machines, and more.</p>
        <h1 className="text-lg sm:text-xl mt-6 font-bold text-blue-600 flex items-center gap-2">Read the container guide <FaArrowRightLong /></h1>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Box.png" alt="box" width={400} height={350} className="w-full h-auto" />
      </div>
    </div>
  </div>
  
  )
}

export default Docker