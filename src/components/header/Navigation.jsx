import React, { useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

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
      <div className="bg-gray-900 opacity-100 shadow-2xl shadow-gray-200 p-2 h-100vh w-80vw xs:w-50vw sm:w-30vw lg:w-20vw ">
        <div
          onClick={() => hideNavigation()}
          className="text-whiten bars-size text-xl cursor-pointer transition-all hover:bg-gray-700  p-2  rounded-full  "
        >
          <FaBars />
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
