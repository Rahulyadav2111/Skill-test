import React from "react";
import Image from "next/image";
import Link from "next/link";
import AVATAR from "../assets/logo.png";
const Header = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex justify-center items-center gap-1">
            <div className="relative w-10 h-10 md:w-16 md:h-16">
              <Image
                src={AVATAR}
                alt="Profile Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="lg:text-3xl md:text-2xl sm:text-2xl font-bold">
              WhatBytes
            </h1>
          </Link>
          <Link
            href="/dashboard"
            className="border-2 flex justify-center items-center gap-2 px-2 py-1 rounded-lg  hidden sm:flex"
          >
            <Image className="rounded-xl" src={AVATAR} width={30} height={30} />
            <h3 className="font-bold">Rahul Yadav</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
