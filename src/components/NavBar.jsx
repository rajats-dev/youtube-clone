import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="flex justify-between px-14 h-12 items-center bg-[#212121] sticky">
      <div className="flex gap-3 items-center  text-xl text-white">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <BsYoutube className="text-2xl text-red-500" />
          <span className="text-xl font-sans tracking-tighter">YouTube</span>
        </div>
      </div>
      <div className="flex gap-3">
        <form>
          <div className="flex bg-zinc-900 items-center h-8 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none text-white"
              ></input>
            </div>
            <button className=" px-5 py-2 bg-zinc-800 rounded-r-3xl">
              <AiOutlineSearch className="text-white" />
            </button>
          </div>
        </form>
        <div className="bg-zinc-800 p-2 rounded-full ">
          <BiSolidMicrophone className="text-white" />
        </div>
      </div>
      <div className="flex gap-8 items-center text-xl">
        <BiVideoPlus className="text-white" />
        <div className="relative">
          <BsBell className="text-white" />
          <span className="absolute bottom-3 left-2 text-xs text-white bg-red-500 rounded-full px-1">
            9+
          </span>
        </div>
        {/* <CgProfile className="text-white" /> */}

        <img
          src="https://i.pinimg.com/280x280_RS/9b/e8/fc/9be8fc96e116c413e59e30ca0463615d.jpg"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
