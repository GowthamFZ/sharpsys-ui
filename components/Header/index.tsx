"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";
import Servicesmenu from "../ServicesMenu";
import ProductsMenu from "../ProductsMenu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubMenu] = useState(false);
  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  const handleMouseOut = () => {
    setIsOpen(!isOpen);
  }

  const handleOnclick = (title: string) => {
    if (title !== 'Company') {
      if (!navigationOpen) {
        setNavigationOpen(navigationOpen);
      } else {
        setNavigationOpen(!navigationOpen);
        setSubMenu(!submenu);
      }
    }
  }

  const handleDropDownToggler = (title: string) => {
    if (!navigationOpen) {
      setDropdownToggler(!dropdownToggler);
    } else {
      if (title === 'Company') {
        setSubMenu(!submenu)
      }
    }
  }

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-1 bg-gradient-to-r from-stone-50 to-cyan-50${stickyMenu
        ? "bg-gradient-to-r from-stone-50 to-cyan-50 !py-1 shadow transition duration-100"
        : ""
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 py-2 md:px-8 xl:flex 2xl:px-0 gap-10">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo_main.png"
              alt="logo"
              height={42}
              width={124}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-blacksection delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-blacksection delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-blacksection delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-blacksection delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-blacksection duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>

          {/* <!-- Hamburger Toggle BTN --> */}
        </div>
        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav className={`${navigationOpen ? 'mb-3' : ''}`}>
            <ul className="menuList flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-12">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>

                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropDownToggler(menuItem.title)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:font-bold"
                      >
                        <Link href={`${menuItem.path}`} className={`
                             ${pathUrl === menuItem.path
                            ? "font-bold text-base"
                            : "hover:font-bold font-normal"} flex flex-col items-center`}
                          onClick={() => handleOnclick(menuItem.title)}
                        >
                          {menuItem.title}
                          {pathUrl === menuItem.path && !navigationOpen ? <img src="/images/menu/menuIcons/Menu_dash.svg" width={16} height={16} className="" /> : ""}
                        </Link>
                        {!navigationOpen ? <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`h-3.5 w-3.5 transition-transform
            }`} /> : ''}
                      </button>

                      {menuItem.title === 'Company' ?
                        <ul
                          className={`dropdown subDropdown bg-slate-100 ${submenu ? 'flex' : ''}`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            <li key={key} className="px-2 rounded-lg hover:text-white hover:bg-headerbg">
                              <Link href={item.path || "#"} onClick={() => handleOnclick(item.title)}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                        :
                        <ul
                          className={`dropdown bg-slate-100 ${dropdownToggler && !navigationOpen ? "flex" : ""}`}
                        >
                          {menuItem.submenu.map((item, key) => (
                            (!navigationOpen ?
                              <li key={key} onMouseLeave={handleMouseOut}>
                                {
                                  (item.title === 'Services') ? <Servicesmenu menuOpen={isOpen} />
                                    : (item.title === 'Products' ? <ProductsMenu /> : '')}
                              </li> : '')
                          ))}
                        </ul>
                      }
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`
                         ${pathUrl === menuItem.path
                          ? "font-bold text-base"
                          : "hover:font-bold font-normal"} flex flex-col`}
                      onClick={() => handleOnclick(menuItem.title)}
                    >
                      {menuItem.title}
                      {pathUrl === menuItem.path && !navigationOpen ? <img src="/images/menu/menuIcons/Menu_dash.svg" width={16} height={16} className="" /> : ""}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Link href={"https://accounts.zoho.in/signin?servicename=zohopeople&signupurl=https://www.zoho.com/people/signup.html"}>
            <button type="button" className={`focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2.5`}>
              Login
            </button></Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
