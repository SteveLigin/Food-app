import React from "react";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left Side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu size={30} />
      </div>
      <h1 className="text-2xl mx-2 sm:text-3xl lg:text-4xl p-2">
        Best <span className="font-bold">Eats</span>{" "}
      </h1>
      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] mx-2">
        <p className="bg-black text-white rounded-full p-2">Delivery</p>
        <p className="p-2">Pickup</p>
      </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Food"
        />
      </div>
      {/* Cart Button */}
      <button
        type="button"
        className="bg-black text-white hidden sm:flex items-center py-2
        px-4 rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10"></div>
      ) : (
        ""
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick = {() => setNav(!nav)}
          size={30}
          className="absolute  right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favourites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
