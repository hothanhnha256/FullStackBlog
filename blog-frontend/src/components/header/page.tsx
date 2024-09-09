"use client";
import DefaultAvatar from "@/svg/defaultavatar";
import iconpage from "@/img/iconpage.png";
import ToggleMode from "../togglemode";
import { useState, useEffect } from "react";
import { IoPersonCircle } from "react-icons/io5";
export default function Header() {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [togglemode, setToggleMode] = useState(false);
  const [isadmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsAdmin(true);
    }
  }, []);
  async function logout() {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      localStorage.removeItem("access_token");
      // setIsAdmin(false);
      window.location.href = "/";
    }
  }
  return (
    <div className="sticky top-0 pb-10 z-30">
      <div className="relative w-full">
        <div
          className="absolute w-full z-10 flex bg-stone-100 dark:bg-transparent h-10  shadow-slate-700 font-mono p-2 place-items-center place-content-between
    
    "
        >
          <div className="relative w-full px-4 py-2 dark:bg-gray-950 rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <div
              className="flex-none "
              onClick={() => (window.location.href = "/")}
            >
              <img src={iconpage.src} className="h-8" />
            </div>
            <div className="md:hidden block right-0 ">
              <button
                className="text-2xl "
                onClick={() => setNavbarToggle(!navbarToggle)}
              >
                {navbarToggle ? "X" : "☰"}
              </button>
              <div
                className="
          transition-all duration-500 ease-in-out
          transform
          md:hidden
          w-full
          place-items-center
          place-content-center
          gap-10
          font-bold
          absolute
          top-10
          left-0
          z-30
        
        "
              >
                {navbarToggle && (
                  <div className="absolute  font-mono p-2 bg-black w-full h-full">
                    <div className="flex flex-col place-items-center place-content-center gap-10 font-bold ">
                      <a className="hover:text-violet-500" href="/">
                        Home
                      </a>
                      <a className="hover:text-violet-500" href="/about">
                        About
                      </a>
                      <a className="hover:text-violet-500" href="/blog">
                        Blog
                      </a>
                      <ToggleMode />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="grow hidden md:block">
              <div className="flex place-items-center place-content-center gap-10 font-bold ">
                <a className="hover:text-violet-500" href="/">
                  Home
                </a>
                <a className="hover:text-violet-500" href="/about">
                  About
                </a>
                <a className="hover:text-violet-500" href="/blog">
                  Blog
                </a>
              </div>
            </div>
            <div className=" place-items-center hidden md:block">
              {/* <DefaultAvatar /> */}
              <div className="flex gap-2">
                <ToggleMode />
                {isadmin && (
                  <div onClick={() => setToggleMode(!togglemode)}>
                    <IoPersonCircle className="text-3xl" />
                    {togglemode && (
                      <div
                        className="absolute bg-black  rounded-lg
                    w-32
                    p-5
                    flex
                    place-items-center
                    place-content-center
                    gap-4
                    right-0
                    top-12
                    z-30
                    shadow-lg
                    font-mono
                    text-white
                    
                    "
                      >
                        <div
                          className="flex flex-col gap-5
                    place-items-center
                    place-content-center
                    
                  
                      "
                        >
                          <a className="hover:text-violet-500" href="/profile">
                            Profile
                          </a>
                          <a className="hover:text-violet-500" href="/setting">
                            Setting
                          </a>
                          <a className="hover:text-violet-500" href="/myblog">
                            My Blog
                          </a>
                          <button
                            className="hover:text-violet-500"
                            onClick={() => logout()}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {!isadmin && (
                  <div
                    className="flex gap-2"
                    onClick={() => setToggleMode(!togglemode)}
                  >
                    <IoPersonCircle className="text-3xl" />
                    {togglemode && (
                      <div
                        className="flex flex-col gap-5
                    place-items-center
                    place-content-center
                    bg-black
                    rounded-lg
                    w-32
                    p-5
                    shadow-lg
                    font-mono
                    text-white
                    z-30
                    absolute
                    right-0
                    top-12

                    
                  
                      "
                      >
                        <a className="hover:text-violet-500" href="/login">
                          Login
                        </a>
                        <a className="hover:text-violet-500" href="/register">
                          Register
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute blur-lg w-full h-10
          bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg  opacity-75
        "
        ></div>
      </div>
    </div>
  );
}
