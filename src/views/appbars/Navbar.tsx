import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoQuestion } from "react-icons/go";
import { FaRegEnvelope, FaTruckPickup, FaUser } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuUserSquare2 } from "react-icons/lu";
import { FaBasketShopping, FaChevronDown } from "react-icons/fa6";

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#DDDDDD]">
      <div className="custom-container">
        <div className="flex items-center ml-auto w-fit space-x-4 py-2 text-xs text-gray-600">
          {topbarData.map((item) => (
            <Link
              key={item.id}
              href=""
              className="flex items-center gap-2 hover:text-gray-900"
            >
              {item.title} <item.icon />
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white px-6 py-4 shadow">
        <div className="custom-container">
          {/* Main Navbar */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/Drukland.de.svg"
                alt="Drukland Logo"
                width={140}
                height={40}
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex gap-6 text-gray-700">
              <div className="group relative">
                <Link
                  href="#business"
                  className="flex items-center gap-2 hover:text-black w-24"
                >
                  Business <FaChevronDown />
                </Link>
                {/* Dropdown */}
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                  <ul className="py-2">
                    <li>
                      <Link
                        href="#option1"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#option2"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Option 2
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="#products" className="w-24 hover:text-black">
                Products
              </Link>

              <Link href="#about" className="w-24 hover:text-black">
                About Us
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search"
                className="border px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link
                href="#profile"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaUser />
              </Link>
              <Link
                href="#delivery"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTruckPickup />
              </Link>
              <Link href="#cart" className="text-gray-600 hover:text-gray-900">
                <FaBasketShopping />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
const topbarData = [
  { id: 1, title: "FAQ", icon: GoQuestion },
  { id: 2, title: "Send Inquiry", icon: FaRegEnvelope },
  { id: 3, title: "Live Support", icon: BiMessageRoundedDetail },
  { id: 4, title: "Contact", icon: LuUserSquare2 },
];
