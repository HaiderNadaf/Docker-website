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

const page = () => {
  return (
    <div className='h-[600px] w-full'>
    <div className="grid grid-cols-[430px,450px,1fr] h-[600px] px-8">
 <div className=" p-4 gap-24">
 <h1 className='mt-3 font-bold'>DEVELOPERS</h1>
 <h1 className='mt-4 text-2xl flex gap-2'> <IoDocumentTextOutline  className='text-blue-600'/>Documentation </h1>
 <p className='text-gray-500 text-xl ml-8'>Find guides for Docker products</p>

 <h1 className='mt-12 text-2xl flex gap-2'> <SiReactquery className='text-blue-600' />Getting Started</h1>
 <p className='text-gray-500 text-xl ml-8'>Learn the Docker basics</p>

 <h1 className='mt-12 text-2xl flex gap-2'><PiGraduationCap className='text-blue-600' />Resources</h1>
 <p className='text-gray-500 text-xl ml-8'>Search a library of helpful materials</p>

 <h1 className='mt-12 text-2xl flex gap-2'> <FiYoutube className='text-blue-600' />Training</h1>
 <p className='text-gray-500 text-xl ml-8'>Skill up your Docker knowledge</p>

 <h1 className='mt-12 text-2xl flex gap-2'> <IoExtensionPuzzleOutline  className='text-blue-600'/>Extensions SDK</h1>
 <p className='text-gray-500 text-xl ml-8'> Create and share your own extensions</p>
 
 </div>
 
 <div className="p-4">
   <h1 className='mt-12 text-2xl  flex gap-2'><RiHandHeartLine   className='text-blue-600' />Community</h1>
   <p className='text-gray-500 text-xl ml-8'>Connect with other Docker developers</p>

   <h1 className='mt-12 text-2xl flex gap-2'> <BsBox   className='text-blue-600'/>Open Source </h1>
   <p className='text-gray-500 text-xl ml-8'>Explore open source projects</p>

   <h1 className='mt-12 text-2xl  flex gap-2'> <IoEyeOutline   className='text-blue-600'/>Preview Program <BsBoxArrowUpRight className='text-lg mt-2 text-blue-600' /></h1>
   <p className='text-gray-500 text-xl ml-8'>Help shape the future of Docker</p>

   <h1 className='mt-12 text-2xl  flex gap-2'> <GoPeople  className='text-blue-600' />Customer Stories</h1>
   <p className='text-gray-500 text-xl ml-8'>Get inspired with customer stories</p>

   <button className='w-96 text-xl  h-14 border-2 border-blue-600 rounded-lg text-blue-600 bg-blue-100 flex justify-center items-center mt-12  gap-2'>See our product roadmap <HiMiniArrowLongRight className='text-2xl font-boldtext-blue-600'/></button>
   
   </div> 
 <div className="p-4 grid grid-cols-2 px-2 gap-3">
 <div>
  
  <Image src="/report.png" alt='img' width={600} height={300}  className='mt-24 rounded-xl'/>
 <h1 className='text-2xl mt-6'>2024 State Of Application Development Report</h1>
 <p className='text-xl text-gray-500'>A deep-focus snapshot of the evolving software development world</p>
 <p className='text-blue-600 mt-6 text-xl flex gap-2 '>Read more <HiMiniArrowLongRight  className='mt-1 text-xl'/></p></div>
 <div> <Image src="/cds.png" alt='img' width={600} height={300}  className='mt-24 rounded-xl'/>
 <h1 className='text-2xl mt-6'>Case Study: CDS</h1>
 <p className='text-xl text-gray-500'>How CDS embraced cloud native development with Docker</p>
 <p className='text-blue-600 mt-6 text-xl flex gap-2 '>Read more <HiMiniArrowLongRight  className='mt-1 text-xl'/></p></div>
 </div>

</div>
   </div>
  )
}

export default page