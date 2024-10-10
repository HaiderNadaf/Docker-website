"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io"; // Import the up arrow icon
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const router = useRouter();

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };


  // State to track the open/close status of links
  const [openLinks, setOpenLinks] = useState({
    products: false,
    developer: false,
    company: false,
  });

  // Handle hover to navigate to a specific link
  const handleMouseEnter = (path: string, link: string) => {
    setOpenLinks((prev) => ({ ...prev, [link]: true })); // Set link status to open
    setTimeout(() => {
      router.push(path); // Navigate to the page using the path
    }, 500); // Add a delay (500ms)
  };

  // Handle mouse leave to close the link
  const handleMouseLeave = (link: string) => {
    setOpenLinks((prev) => ({ ...prev, [link]: false })); // Set link status to closed
  };

  // Handle hover on the non-link areas to navigate to the main page
  const handleNonLinkHover = () => {
    setTimeout(() => {
      router.push("/"); // Navigate to the main page "/"
    }, 500); // Delay for 500ms
  };

  return (
    <div className='h-24 flex items-center justify-between px-8'>

      {/* Left Side: Logo - only hover triggers navigation to main page */}
      <div className='flex gap-2' onMouseEnter={handleNonLinkHover}> {/* Logo triggers hover */}
        <Image src="/Docker Img.png" alt='docker' width={60} height={60} />
        <h1 className='font-bold text-4xl text-blue-600 mt-4'>
          <Link href="/">docker</Link>
        </h1>
      </div>

      {/* Center: Links - exclude Products, Developer, Company from hover */}
      <div className='flex font-bold text-xl gap-8'>
        <h1 className='hidden md:flex items-center'
          onMouseEnter={() => handleMouseEnter('/products', 'products')}
          onMouseLeave={() => handleMouseLeave('products')}
        >
          <Link href="/products">Products</Link>
          <span className='ml-1'>{openLinks.products ? <IoIosArrowUp /> : <FaAngleDown />}</span>
        </h1>

        <h1 className='hidden md:flex items-center'
          onMouseEnter={() => handleMouseEnter('/developer', 'developer')}
          onMouseLeave={() => handleMouseLeave('developer')}
        >
          <Link href="/developer">Developer</Link>
          <span className='ml-1'>{openLinks.developer ? <IoIosArrowUp /> : <FaAngleDown />}</span>
        </h1>

        {/* Pricing - hovering on this will navigate to the main page */}
        <h1 className='hidden md:flex items-center' onMouseEnter={handleNonLinkHover}>Pricing</h1>

        {/* Support - hovering on this will navigate to the main page */}
        <h1 className='hidden md:flex items-center' onMouseEnter={handleNonLinkHover}>Support</h1>

        <h1 className='hidden md:flex items-center'
          onMouseEnter={() => handleMouseEnter('/company', 'company')}
          onMouseLeave={() => handleMouseLeave('company')}
        >
          <Link href="/company">Company</Link>
          <span className='ml-1'>{openLinks.company ? <IoIosArrowUp /> : <FaAngleDown />}</span>
        </h1>
      </div>

      {/* Right Side: Search and Buttons - also triggers hover to navigate to main page */}
      <div className=' hidden md:flex items-center gap-3 ' onMouseEnter={handleNonLinkHover}>
        <IoSearchOutline className='text-3xl mt-2' />
        <button className='font-bold w-32 h-14 bg-white rounded-md text-2xl border border-gray-500'>Sign In</button>
        <button className='font-bold text-white w-36 h-14 bg-blue-600 rounded-md text-2xl border border-gray-500'>Get Started</button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu  className='text-blue-600' size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b text-blue-700 border-gray-600"><Link href="/products" >Products</Link></li>
          <li className="p-4 border-b text-blue-700  border-gray-600">Company</li>
          <li className="p-4 border-b text-blue-700  border-gray-600">Resources</li>
          <li className="p-4 border-b text-blue-700  border-gray-600">About</li>
          <li className="p-4 border-b text-blue-700  border-gray-600">Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
