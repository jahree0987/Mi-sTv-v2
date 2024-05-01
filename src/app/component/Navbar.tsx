"use client";
import React, { useState } from "react";
import { Search2Icon, StarIcon, InfoIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#23252B]">
      <ul className="flex justify-between ">
        <div className="flex">
          <li className=" text-orange-500 p-4 hover:text-white">Mi's TV</li>
          <li className="nav-list" onClick={toggleDropdown}>
            Browse <ChevronDownIcon/>
            {isOpen && (
              <ul className="absolute mt-2 p-2 bg-gray-800 rounded shadow-lg">
                <li className="hover:text-orange-500">Popular</li>
                <li className="hover:text-orange-500">New</li>
                <li className="hover:text-orange-500">Alphabetical</li>
                <li className="hover:text-orange-500">Simulcast Season</li>
                <li className="hover:text-orange-500">Release Calendar</li>
              </ul>
            )}
          </li>
          <li className="nav-list">Games</li>
          <li className="nav-list">News</li>
        </div>

        <div className="flex gap-4">
          <li className="nav-icon">
            <Search2Icon color={"white"} />
          </li>
          <li className="nav-icon">
            <StarIcon color={"white"} />
          </li>
          <li className="nav-icon">
            <InfoIcon color={"white"} />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
