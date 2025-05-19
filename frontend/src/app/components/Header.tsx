"use client";
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import CustomButton from "../Buttons/CustomButton";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className=" grid  grid-cols-[20%_70%] xl:grid-cols-2 items-center p-4 gap-4 container sticky top-0 bg-white z-50">
        <div className="flex items-center justify-start sm:justify-start">
          <button
            className="sm:hidden text-green-600 mr-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Image
            src="https://images.ecozaar.in/wp-content/uploads/2024/08/09131255/Logo.png"
            alt="Ecozaar Logo"
            className="h-10 w-auto hidden sm:block"
          />
        </div>

        <div className="flex justify-end items-center space-x-3">
          <div className="relative hidden sm:block w-full max-w-xs bg-gray-100 rounded">
            <input
              type="text"
              placeholder="Search Product, type or brand"
              className="w-full border text-gray-500 text-sm border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 cursor-pointer">
            <FiHeart size={18} />
          </div>

          <div className="h-6 w-px bg-gray-300" />

          <div className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 cursor-pointer">
            <FiShoppingCart size={18} />
          </div>

          <div className="h-6 w-px bg-gray-300" />

          <CustomButton label="Login" variant="green" className="px-4 py-3" />
        </div>
      </header>
      {menuOpen && (
        <div className="sm:hidden bg-white border-t px-4 py-3 space-y-3 shadow-md sticky top-20 z-50">
          <div className="relative  w-full max-w-xs bg-gray-100 rounded">
            <input
              type="text"
              placeholder="Search Product, type or brand"
              className="w-full border text-gray-500 text-sm border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <a href="#" className="block text-gray-700 font-medium">
            EV Scooters
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Rooftop Solar
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Comparisons
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Exchange
          </a>

          <a href="#" className="block text-gray-700 font-medium">
            Check Loan Eligibility
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Subscription
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Calculators
          </a>
          <a href="#" className="block text-gray-700 font-medium">
            Blogs
          </a>
        </div>
      )}
    </>
  );
}
