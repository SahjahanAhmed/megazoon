import React, { useEffect, useRef } from "react";
import HomeTop from "./HomeTop";
import Products from "./Products";

const Homepage = ({ setHomePageRef }) => {
  const homepageRef = useRef()
  useEffect(() => {
    setHomePageRef(homepageRef.current)
  })
  return (
    <div ref={homepageRef} className="w-screen   bg-gray-900 flex flex-col  gap-2 items-center overflow-y-scroll">
      <HomeTop />
      <Products />
    </div>
  );
};

export default Homepage;
