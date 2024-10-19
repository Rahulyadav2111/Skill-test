"use client"; // Ensure this is a client component

import React, { useState } from "react";
import Link from "next/link"; // Import Link
import { FaUser, FaMedal, FaArchive } from "react-icons/fa";

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-1/4 md:w-1/5 h-screen border-r border-gray-200 p-4">
      <ul>
        {[
          { name: "Dashboard", icon: <FaUser />, path: "/dashboard" },
          { name: "Skill Test", icon: <FaMedal />, path: "/skilltest" },
          { name: "Internship", icon: <FaArchive />, path: "/internship" },
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center font-bold p-4 mb-4 bg-white hover:bg-gray-100 text-gray-800 hover:text-blue-700 rounded-xl transition-all cursor-pointer mt-1"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link href={item.path} className="flex items-center w-full">
              <span className="mr-2">{item.icon}</span>
              <span
                className={`hidden sm:inline ${
                  hovered === index ? "block" : ""
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
