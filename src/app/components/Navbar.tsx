"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
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

  // Handle click to navigate to a specific link and close the mobile menu
  const handleLinkClick = (path: string) => {
    setNav(true); // Close sidebar
    router.push(path); // Navigate to the page using the path
  };

  // Handle hover to toggle dropdowns but without navigating
  const handleMouseEnter = (link: string) => {
    setOpenLinks((prev) => ({ ...prev, [link]: true }));
  };

  const handleMouseLeave = (link: string) => {
    setOpenLinks((prev) => ({ ...prev, [link]: false }));
  };

  return (
    <div className='h-24 flex items-center justify-between px-8'>

      {/* Left Side: Logo */}
      <div className='flex gap-2'>
        <Image src="/Docker Img.png" alt='docker' width={60} height={60} />
        <h1 className='font-bold text-4xl text-blue-600 mt-4'>
          <Link href="/">docker</Link>
        </h1>
      </div>

      {/* Center: Links */}
      <div className='flex font-bold text-xl gap-8'>
        <h1 className='hidden md:flex items-center'
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={() => handleMouseLeave('products')}
        >
          <Link href="/products">Products</Link>
          <span className='ml-1'>{openLinks.products ? <IoIosArrowUp /> : <FaAngleDown />}</span>
        </h1>

        <h1 className='hidden md:flex items-center'
          onMouseEnter={() => handleMouseEnter('developer')}
          onMouseLeave={() => handleMouseLeave('developer')}
        >
          <Link href="/developer">Developer</Link>
          <span className='ml-1'>{openLinks.developer ? <IoIosArrowUp /> : <FaAngleDown />}</span>
        </h1>

        <h1 className='hidden md:flex items-center'>
          <Link href="/pricing">Pricing</Link>
        </h1>

        <h1 className='hidden md:flex items-center'>
          <Link href="/support">Support</Link>
        </h1>

        <h1 className='hidden md:flex items-center'
          onMouseEnter={() => handleMouseEnter('company')}
          onMouseLeave={() => handleMouseLeave('company')}
        >
          <Link href="/company">Company</Link>
          <span className='ml-1'>{openLinks.company ? <IoIosArrowUp /> : <FaAngleDown />}</span>
        </h1>
      </div>

      {/* Right Side: Search and Buttons */}
      <div className='hidden md:flex items-center gap-3'>
        <IoSearchOutline className='text-3xl mt-2' />
        <button className='font-bold w-32 h-14 bg-white rounded-md text-2xl border border-gray-500'>Sign In</button>
        <button className='font-bold text-white w-36 h-14 bg-blue-600 rounded-md text-2xl border border-gray-500'>Get Started</button>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu className='text-blue-600' size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-blue-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-blue-600">Docker.</h1>
        <ul className="uppercase p-4 flex flex-col">
          <div className='flex flex-col font-bold text-xl gap-8 '>
            {/* Products Link */}
            <h1 className='flex items-center bg-white p-2'
              onClick={() => handleLinkClick('/products')}
            >
              Products
              <span className='ml-1'>
                {openLinks.products ? <IoIosArrowUp /> : <FaAngleDown />}
              </span>
            </h1>

            {/* Developer Link */}
            <h1 className='flex items-center bg-white p-2'
              onClick={() => handleLinkClick('/developer')}
            >
              Developer
              <span className='ml-1'>
                {openLinks.developer ? <IoIosArrowUp /> : <FaAngleDown />}
              </span>
            </h1>

            <h1 className='flex items-center bg-white p-2'>
              <Link href="/pricing">Pricing</Link>
            </h1>

            <h1 className='flex items-center bg-white p-2'>
              <Link href="/support">Support</Link>
            </h1>

            <h1 className='flex items-center bg-white p-2'
              onClick={() => handleLinkClick('/company')}
            >
              Company
              <span className='ml-1'>
                {openLinks.company ? <IoIosArrowUp /> : <FaAngleDown />}
              </span>
            </h1>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
