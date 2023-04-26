import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Settings = ({ setTheme }) => {
  const animationRef = useRef();
  const defaultRef = useRef();
  const darkRef = useRef();
  const whiteRef = useRef();
  useEffect(() => {
    let getIsAnimation = localStorage.getItem("isAnimation")
      ? JSON.parse(localStorage.getItem("isAnimation"))
      : [];
    let getTheme = localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : [];
    if (getIsAnimation.length === 0) {
      getIsAnimation.push({ animation: true });
      localStorage.setItem("isAnimation", JSON.stringify(getIsAnimation));
    }
    if (getTheme.length === 0) {
      getTheme.push({ default: true, dark: false, white: false });
      localStorage.setItem("theme", JSON.stringify(getTheme));
    }
    if (getTheme[0].default === true) {
      defaultRef.current.style.opacity = "100";
      window.document.body.classList.remove("dark");
      window.document.body.classList.remove("white");
    } else if (getTheme[0].dark === true) {
      darkRef.current.style.opacity = "100";
      window.document.body.classList.add("dark");
      window.document.body.classList.remove("white");
    } else {
      whiteRef.current.style.opacity = "100";
      window.document.body.classList.remove("dark");
      window.document.body.classList.add("white");
    }

    if (getIsAnimation[0].animation === true) {
      animationRef.current.classList.remove("toggle");
      window.document.body.classList.remove("transition-0");
    } else {
      animationRef.current.classList.add("toggle");
      window.document.body.classList.add("transition-0");
    }
  }, []);

  return (
    <div className="min-h-100vh p-6 theme ">
      <div className="flex flex-col justify-cente text-white gap-4">
        <div className=" text-white flex flex-col bg-gray-600 p-2 flex-wrap max-w-400px self-center ">
          <span className="text-center text-2xl"> Theme</span>
          <div className="flex items-center justify-around gap-2 flex-wrap">
            <div id="default" className="flex flex-col">
              <span className="text-center">Default</span>
              <NavLink>
                <div
                  onClick={(e) => {
                    e.currentTarget.firstElementChild.style.opacity = "100";
                    darkRef.current.style.opacity = "0";
                    whiteRef.current.style.opacity = "0";
                    window.document.body.classList.remove("dark");
                    window.document.body.classList.remove("white");
                    setTheme("default");
                    let getTheme = localStorage.getItem("theme")
                      ? JSON.parse(localStorage.getItem("theme"))
                      : [];
                    getTheme[0].default = true;
                    getTheme[0].dark = false;
                    getTheme[0].white = false;
                    localStorage.setItem("theme", JSON.stringify(getTheme));
                  }}
                  className="h-[100px] w-[100px] bg-slate-900 shadow-bothxs shadow-black hover:scale-105 transition-03s flex items-center justify-center"
                >
                  <div
                    ref={defaultRef}
                    className="bg-[black] h-[30px] w-[30px] rounded-full flex justify-center text-white items-center opacity-0"
                  >
                    <FaCheck />
                  </div>
                </div>
              </NavLink>
            </div>

            <div id="dark" className="flex flex-col">
              <span className="text-center">Dark</span>
              <NavLink>
                <div
                  onClick={(e) => {
                    e.currentTarget.firstElementChild.style.opacity = "100";
                    defaultRef.current.style.opacity = "0";
                    whiteRef.current.style.opacity = "0";
                    setTheme("dark");

                    let getTheme = localStorage.getItem("theme")
                      ? JSON.parse(localStorage.getItem("theme"))
                      : [];
                    getTheme[0].dark = true;
                    getTheme[0].default = false;
                    getTheme[0].white = false;

                    localStorage.setItem("theme", JSON.stringify(getTheme));
                  }}
                  className="h-[100px] w-[100px] bg-[#303030] shadow-bothxs shadow-black hover:scale-105 transition-03s flex items-center justify-center"
                >
                  <div
                    ref={darkRef}
                    className="bg-[black] h-[30px] w-[30px] rounded-full flex justify-center text-white items-center opacity-0"
                  >
                    <FaCheck />
                  </div>
                </div>
              </NavLink>
            </div>

            <div id="white" className="flex flex-col">
              <span className="text-center">Whitesky</span>
              <NavLink>
                <div
                  onClick={(e) => {
                    e.currentTarget.firstElementChild.style.opacity = "100";
                    darkRef.current.style.opacity = "0";
                    defaultRef.current.style.opacity = "0";
                    setTheme("white");

                    let getTheme = localStorage.getItem("theme")
                      ? JSON.parse(localStorage.getItem("theme"))
                      : [];
                    getTheme[0].white = true;
                    getTheme[0].dark = false;
                    getTheme[0].default = false;
                    localStorage.setItem("theme", JSON.stringify(getTheme));
                  }}
                  className="h-[100px] w-[100px] bg-[rgb(161, 199, 199)] shadow-bothxs shadow-black hover:scale-105 transition-03s flex items-center justify-center"
                >
                  <div
                    ref={whiteRef}
                    className="bg-[black] h-[30px] w-[30px] rounded-full flex justify-center text-white items-center opacity-0"
                  >
                    <FaCheck />
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 rounded-2xl flex items-center min-w-200px max-w-400px self-center justify-between px-2 py-1">
          <span>Animation</span>
          <button
            className="h-[19px] w-[32px]  border-[1px] border-[#fff9] rounded-xl ] relative "
            onClick={(e) => {
              e.currentTarget.firstElementChild.classList.toggle("toggle");
              window.document.body.classList.toggle("transition-0");
              let getIsAnimation = localStorage.getItem("isAnimation")
                ? JSON.parse(localStorage.getItem("isAnimation"))
                : [];

              if (getIsAnimation[0].animation === true) {
                getIsAnimation.map((item) => {
                  item.animation = false;
                });
                localStorage.setItem(
                  "isAnimation",
                  JSON.stringify(getIsAnimation)
                );
              } else {
                getIsAnimation.map((item) => {
                  item.animation = true;
                });
                localStorage.setItem(
                  "isAnimation",
                  JSON.stringify(getIsAnimation)
                );
              }
            }}
          >
            <div
              ref={animationRef}
              className="h-[13px] w-[13px] bg-green-600 rounded-full absolute right-[2px] top-2/4 -translate-y-2/4  transition-03s"
            ></div>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Settings;
