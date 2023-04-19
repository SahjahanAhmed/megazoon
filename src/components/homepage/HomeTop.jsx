import React from "react";
import { FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HomeTop = () => {
  return (
    <div className="p-1 w-screen max-h-10vh  flex items-center  justify-evenly flex-col xs:flex-row overflow-scroll">
      <div className=" flex justify-center items-center">
        <button className="shadow-lg  mx-3 my-4  gap-1 flex items-center justify-center shadow-gray-900 rounded-lg border px-1 transition-03s text-gray-200 hover:bg-slate-400 hover:text-gray-900 hover:scale-105 xs:ml-12">
          filter
          <FaFilter className="text-gray-200 text-sm" />
        </button>
      </div>

      <div className="">
        <div className=" w-90vw flex gap-2 text-sm  overflow-x-scroll justify-evenly  text-gray-200 xs:justify-center xs:gap-1 xs:overflow-x-visible ">
          <NavLink className="rounded-2xl p- text-center shadow-sm shadow-gray-200  p-1 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-105">
            All
          </NavLink>
          <NavLink className="rounded-2xl shadow-sm  shadow-gray-200 p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-105">
            Men's
          </NavLink>
          <NavLink className="rounded-2xl shadow-sm shadow-gray-200 p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-105 ">
            Women's
          </NavLink>
          <NavLink className="rounded-2xl shadow-sm shadow-gray-200 p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-105">
            Clothes
          </NavLink>
          <NavLink className="rounded-2xl shadow-sm shadow-gray-200 p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-105">
            Skincare
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
