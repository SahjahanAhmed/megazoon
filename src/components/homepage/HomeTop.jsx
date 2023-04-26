import React, { useContext, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { filterContext } from "../../App";
const HomeTop = () => {
  const [filterState, setFilterState] = useState();
  const getFilter = useContext(filterContext);

  useEffect(() => {
    setFilterState(getFilter);
  }, [getFilter]);

  const showFilter = () => {
    filterState.filter.classList.remove("to-left-2000");
  };

  return (
    <div className=" relative p-1 w-screen max-h-10vh  flex items-center  justify-evenly flex-col xs:flex-row overflow-hidden bg-gray-900 theme">
      <div className=" flex justify-center items-center">
        <button
          onClick={showFilter}
          className="shadow-lg  mx-3 my-4  gap-1 flex items-center justify-center shadow-gray-900 rounded-lg border px-1 transition-03s text-gray-200 hover:bg-slate-400 hover:text-gray-900 hover:scale-110 xs:ml-12"
        >
          filter
          <FaFilter className="text-gray-200 text-sm" />
        </button>
      </div>

      <div className="">
        <div className=" w-90vw flex gap-2 text-sm  overflow-x-scroll justify-evenly  text-gray-200 xs:justify-center  xs:overflow-x-visible ">
          <NavLink
            to="/products/all"
            className="rounded-2xl p- text-center shadow-bothxs  p-1 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-110"
          >
            All
          </NavLink>
          <NavLink
            to="/products/mens"
            className="rounded-2xl  shadow-bothxs p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-110"
          >
            Men's
          </NavLink>
          <NavLink
            to="/products/womens"
            className="rounded-2xl shadow-bothxs p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-110 "
          >
            Women's
          </NavLink>
          <NavLink
            to="/products/skincare"
            className="rounded-2xl shadow-bothxs p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-110 "
          >
            Skincare
          </NavLink>
          <NavLink
            to="/products/clothes"
            className="rounded-2xl shadow-bothxs p-1 px-3 hover:text-gray-900 hover:bg-slate-400 transition-03s hover:scale-110"
          >
            Clothes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
