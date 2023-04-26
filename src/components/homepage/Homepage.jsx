import React, { useEffect, useRef } from "react";
import HomeTop from "./HomeTop";
import Products from "./Products";

const Homepage = ({ setHomePageRef, setGetCurrentItem }) => {
  const homepageRef = useRef();
  useEffect(() => {
    setHomePageRef(homepageRef.current);
  });
  return (
    <div
      ref={homepageRef}
      className="w-screen   bg-gray-900 flex flex-col  gap-2 items-center overflow-y-scroll overflow-x-hidden pb-6 theme "
    >
      <HomeTop />
      <Products setGetCurrentItem={setGetCurrentItem} />
    </div>
  );
};

export default Homepage;
