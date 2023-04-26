import React, { useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navigation = ({ setNavigationRef }) => {
  const navigationRef = useRef();
  useEffect(() => {
    setNavigationRef(navigationRef.current);
  });

  const hideNavigation = () => {
    navigationRef.current.classList.add("to-left-2000");
    document.body.style.overflow = "scroll";
  };

  return (
    <div
      ref={navigationRef}
      className=" navigation absolute left-0 top-0 h-100vh w-100vw flex items-start text-white  transition-05s to-left-2000  z-10"
    >
      <div className="bg-gray-900 opacity-100  shadow-bothlg p-2 h-100vh w-80vw xs:w-50vw sm:w-30vw lg:w-20vw theme ">
        <div
          onClick={() => hideNavigation()}
          className="text-whiten bars-size text-xl cursor-pointer transition-all hover:bg-gray-700  p-2  rounded-full  "
        >
          <FaBars />
        </div>
        <div className="flex flex-col items-center ">
          <Link
            to="/"
            onClick={hideNavigation}
            className="text-white font-ubuntu text-4xl flex mx-6 transition-all "
          >
            <span>M</span>
            <span>e</span>
            <span>g</span>
            <span>a</span>
            <span>z</span>
            <span className="text-sky-400">o</span>
            <span className="text-sky-400">o</span>
            <span>n</span>
          </Link>
          <div className="text-lg font-ubuntu"> No Shy to Buy</div>
        </div>
        <div>
          <ul className="flex flex-col items-center min-h-80vh justify-evenly">
            <NavLink
              onClick={hideNavigation}
              to="/account/sign-up"
              className="shadow-bothxs rounded-3xl w-100% text-center py-2 bg-transparent transition-03s hover:bg-slate-700 "
            >
              <div>Sign in / Sign Up </div>
            </NavLink>
            <NavLink
              onClick={hideNavigation}
              to="/mycart"
              className="shadow-bothxs rounded-3xl w-100% text-center py-2 bg-transparent transition-03s hover:bg-slate-700 "
            >
              <div>My Cart</div>
            </NavLink>
            <NavLink
              onClick={hideNavigation}
              to="/contact-us"
              className="shadow-bothxs rounded-3xl w-100% text-center py-2 bg-transparent transition-03s hover:bg-slate-700 "
            >
              <div>Contact Us </div>
            </NavLink>
            <NavLink
              onClick={hideNavigation}
              to="/settings"
              className="shadow-bothxs rounded-3xl w-100% text-center py-2 bg-transparent transition-03s hover:bg-slate-700 "
            >
              <div>Settings </div>
            </NavLink>
            <NavLink
              onClick={hideNavigation}
              to="helps"
              className="shadow-bothxs rounded-3xl w-100% text-center py-2 bg-transparent transition-03s hover:bg-slate-700 "
            >
              <div>Helps & Feedback</div>
            </NavLink>
          </ul>
        </div>
      </div>
      <div
        onClick={() => hideNavigation()}
        className=" bg-gray-900 opacity-60 h-100vh w-20vw xs:w-50vw sm:w-70vw lg:w-80vw "
      ></div>
    </div>
  );
};

export default Navigation;
