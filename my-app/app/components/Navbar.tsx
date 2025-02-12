import { Socials } from "@/constants";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-40 w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/Logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Aliks{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={20}
            height={20}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
