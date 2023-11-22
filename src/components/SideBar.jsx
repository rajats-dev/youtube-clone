import React from "react";
import {
  MdHomeFilled,
  MdAppShortcut,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";

import { LuThumbsUp } from "react-icons/lu";

const SideBar = () => {
  let mainLinks = [
    {
      icon: <MdHomeFilled />,
      name: "Home",
    },
    {
      icon: <MdAppShortcut />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscription",
    },
  ];

  let otherLinks = [
    {
      icon: <MdHistory />,
      name: "History",
    },
    {
      icon: <MdVideoLibrary />,
      name: "Library",
    },
    {
      icon: <LuThumbsUp />,
      name: "Liked Video",
    },
    {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
    },
  ];

  return (
    <div className="w-52 bg-[#000000] overflow-auto pb-8 pt-4 h-screen">
      <ul className="flex flex-col text-white pb-2 border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => (
          <li key={name} className="pl-6 py-2 hover:bg-zinc-700 rounded-xl">
            <a href="#" className="flex gap-5 items-center">
              {icon}
              <span className="text-sm tracking-tight">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col pt-2 text-white">
        {otherLinks.map(({ icon, name }) => (
          <li key={name} className="pl-6 py-2 hover:bg-zinc-700 rounded-xl">
            <a href="#" className="flex gap-5 items-center">
              {icon}
              <span className="text-sm tracking-tight">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
