import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import ContactForm from "./ContactForm";
const Footer = () => {
  return (
    <div className="w-screen bg-slate-900 p-2 pt-4 shadow-topxs theme ">
      <div className="flex items-center flex-col flex-1" id="left ">
        <div className="text-white font-ubuntu text-2xl flex mx-6 transition-all ">
          <span>M</span>
          <span>e</span>
          <span>g</span>
          <span>a</span>
          <span>z</span>
          <span className="text-sky-400">o</span>
          <span className="text-sky-400">o</span>
          <span>n</span>
        </div>
        <div className="flex text-white ">
          <span> We say, </span>
          <span className="ml-1"> No shy to buy </span>
          <span className="ml-2 mt-1">
            <FaShoppingBag />
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 items-center  bg-gray-900 text-gray-300 my-6 theme ">
        <div className="flex1 px-2 font-ubuntu text-lg text-center theme ">
          <h1 className="text-2xl text-center"> Our goal</h1>
          <span>
            <span className="text-2xl"> is</span> to giving you a better
            experience of shopping.
          </span>
          <br />
          <span>
            <span className="text-2xl">is</span> to make our customer recommend
            our services to others by giving the best services.
          </span>
          <br />
          <span>
            <span className="text-2xl ">is</span> to make sure our customer is
            happy after getting our services.
          </span>
          <br />
          <h5 className="font-bold text-gray-500 mt-6 text-center">
            Are you happy with our services ?
          </h5>
          <div className="flex items-center justify-center gap-40 mt-4 ">
            <button className="shadow-bothsm rounded-lg p-2 text-green-500  hover:scale-105 transition-all">
              Yes
            </button>
            <button className="shadow-bothsm rounded-lg p-2 text-red-500 hover:scale-105 transition-all ">
              No
            </button>
          </div>
        </div>
        <div className="flex1 flex flex-col items-center justify-center px-2 w-80% ">
          <h1 className="text-2xl my-2">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
      <div className="text-slate-300 text-center mt-20 ">
        <span className="text-lg">&copy;</span>
        <span>megazoon.com 2023</span>
        <br />
        <span>All rights reserved to megazoon.com</span>
      </div>
    </div>
  );
};

export default Footer;
