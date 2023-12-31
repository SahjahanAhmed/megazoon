import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Navigation from "./Navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { cartItemsContext } from "../../App";
const header = ({ homePageRef, setSearchText }) => {
  const headerRef = useRef();
  const logoRef = useRef();
  const [navigationRef, setNavigationRef] = useState();
  const [text, setText] = useState("");
  useEffect(() => {
    setSearchText(text);
  }, [text]);

  const openNavigation = () => {
    navigationRef.classList.remove("to-left-2000");
    document.body.style.overflow = "hidden";
  };
  const items = useContext(cartItemsContext);
  const [cartitems, setcartitems] = useState("");
  useEffect(() => {
    setcartitems(items);
  }, [items]);

  useEffect(() => {
    let cartFromLs = localStorage.getItem("cartlist")
      ? JSON.parse(localStorage.getItem("cartlist"))
      : [];
    setcartitems(cartFromLs.length);
  }, []);
  return (
    <div
      
      ref={headerRef}
      className="flex flex-col-reverse xs:flex-row py-2 xs:justify-evenly  shadow-bottomxs  items-center gap-1 w-screen bg-slate-900 z-40 sticky top-0  header theme"
    >
      <div className=" flex flex-1">
        <div className="flex items-center justify-center ml-2">
          <div>
            <div
              className="text-white text-xl cursor-pointer transition-all hover:bg-gray-700  p-2  rounded-full"
              onClick={openNavigation}
            >
              <FaBars />
            </div>
            <Navigation setNavigationRef={setNavigationRef} />
          </div>
        </div>
        <div className="flex items-center flex-1" id="left ">
          <Link
            to="/products/all"
            ref={logoRef}
            className="text-white font-ubuntu text-2xl flex mx-6 transition-all"
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
        </div>
      </div>

      <div className="flex gap-4 flex-1">
        <div className="flex-1" id="middle">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="search"
            placeholder="search products..."
            className="
         rounded-3xl px-2 py-1 outline-none text-gray-300 bg-gray-700 text-xs xs:text-lg
         
         "
          />
        </div>
        <div className="flex-1 w-100 flex items-center justify-end gap-10 ">
          <div className=" relative  text-white w-6 mx-4">
            <small className="absolute right-3 bottom-0">{cartitems}</small>
            <Link to="/mycart">
              <FaShoppingCart className="absolute right-0 cursor-pointer xs:text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
