import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Start = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 mt-12 lg:mt-24">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600">How to get started</h1>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-5">Your path to accelerated application development starts here.</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-24 gap-6 lg:gap-8">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Download Docker</h1>
          <p className="text-base md:text-xl text-gray-500 mt-3">Learn how to install Docker for Mac, Windows, or Linux and explore our developer tools.</p>
          <p className="text-lg md:text-xl font-bold text-blue-600 mt-3 flex items-center gap-2">Get started <FaArrowRightLong /></p>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Containerize your first app</h1>
          <p className="text-base md:text-xl text-gray-500 mt-3">Develop a solid understanding of the Docker basics with our step-by-step developer guide.</p>
          <p className="text-lg md:text-xl font-bold text-blue-600 mt-3 flex items-center gap-2">Learn Docker <FaArrowRightLong /></p>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Publish your image on Docker Hub</h1>
          <p className="text-base md:text-xl text-gray-500 mt-3">Share your application with the world (or other developers on your team).</p>
          <p className="text-lg md:text-xl font-bold text-blue-600 mt-3 flex items-center gap-2">Sign up for free <FaArrowRightLong /></p>
        </div>
      </div>

      <div className="bg-blue-600 mt-12 lg:mt-24 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 py-12 px-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Choose a subscription that’s right for you</h1>
            <p className="text-xl md:text-2xl text-white mt-4">Find your perfect balance of collaboration, security, and support with a Docker subscription.</p>
          </div>
          <div className="flex justify-center items-center">
            <button className="font-bold text-blue-600 text-xl lg:text-2xl w-48 lg:w-56 h-12 lg:h-16 rounded-md bg-white">Find Place</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
