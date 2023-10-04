import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
  XMarkIcon,
} from "../assets/icons";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  const openNav = () => {
    setMobileShow((prev) => !prev);
    if (mobileShow) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
      setShow(false);
    }
  };

  return (
    <header className="py-6 sticky top-0">
      <div className="container flex-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-3xl font-bold text-emerald-500 ">
            BAUMco
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <NavLink
              to="/"
              className=" transition-all duration-150 hover:text-emerald-500  text-small"
              onClick={() => setShow(false)}
            >
              Home
            </NavLink>
            <div className="relative">
              <p
                className="cursor-pointer flex items-center gap-1 transition-all duration-150 hover:text-emerald-500  text-small"
                onMouseEnter={() => setShow(true)}
              >
                Electronics
                <ChevronDown className="w-5" />
              </p>
              {show && (
                <div
                  className="absolute flex flex-col w-52 bg-white shadow left-0 top-10 rounded overflow-hidden"
                  onMouseLeave={() => setShow(false)}
                >
                  <NavLink
                    to="/electronics/analog"
                    className="p-2 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  >
                    Analog
                  </NavLink>
                  <NavLink
                    to="/electronics/digital"
                    className="p-2 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  >
                    Digital
                  </NavLink>
                  <NavLink
                    to="/electronics/embeded-systems"
                    className="p-2 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  >
                    Embedded Systems
                  </NavLink>
                  <NavLink
                    to="/electronics/internet-of-things"
                    className="p-2 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  >
                    Internet of things
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/forum"
              className=" transition-all duration-150 hover:text-emerald-500  text-small"
              onClick={() => setShow(false)}
            >
              Forum
            </NavLink>
            <NavLink
              to="/contact"
              className=" transition-all duration-150 hover:text-emerald-500  text-small"
              onClick={() => setShow(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/login"
            className={
              "transition-all duration-150 hover:text-emerald-500  text-small p-2 rounded border border-transparent"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={
              "transition-all duration-150 hover:text-emerald-500  text-small bg-emerald-500 text-white p-2 rounded border border-transparent hover:bg-transparent hover:border-emerald-500"
            }
          >
            Signup
          </NavLink>
        </div>
        <div className="md:hidden z-50" onClick={openNav}>
          <MenuIcon className="w-10 cursor-pointer" />
        </div>
        <nav className={`md:hidden menu-nav ${mobileShow ? "active" : ""}`}>
          <div className="md:hidden nav-links p-3 pt-10 z-30">
            <div className="flex justify-end mb-4" onClick={openNav}>
              <XMarkIcon className="w-10 cursor-pointer" />
            </div>
            <NavLink
              to="/"
              className=" transition-all duration-150 hover:text-emerald-500  text-small block mb-4 p-3 hover:bg-gray-50 border-b border-b-gray-100"
              onClick={openNav}
            >
              Home
            </NavLink>
            <div className="relative">
              <p
                className="cursor-pointer flex items-center gap-1 transition-all duration-150 hover:text-emerald-500  text-small mb-4 p-3 hover:bg-gray-50 border-b border-b-gray-100"
                onClick={() => setShow((prev) => !prev)}
              >
                Electronics
                <ChevronDown className="w-5" />
              </p>

              <div className={`md:hidden other-links ${show ? "active" : ""}`}>
                <NavLink
                  to="/electronics/analog"
                  className="py-2 px-3 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  onClick={() => {
                    openNav();
                    setShow(false);
                  }}
                >
                  Analog
                </NavLink>
                <NavLink
                  to="/electronics/digital"
                  className="py-2 px-3 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  onClick={() => {
                    openNav();
                    setShow(false);
                  }}
                >
                  Digital
                </NavLink>
                <NavLink
                  to="/electronics/embeded-systems"
                  className="py-2 px-3 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  onClick={() => {
                    openNav();
                    setShow(false);
                  }}
                >
                  Embedded Systems
                </NavLink>
                <NavLink
                  to="/electronics/internet-of-things"
                  className="py-2 px-3 border-b border-b-gray-100 text-small transition-all duration-150 hover:text-emerald-500 hover:bg-gray-50"
                  onClick={() => {
                    openNav();
                    setShow(false);
                  }}
                >
                  Internet of things
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/forum"
              className=" transition-all duration-150 hover:text-emerald-500  text-small block mb-4 p-3 hover:bg-gray-50 border-b border-b-gray-100"
              onClick={openNav}
            >
              Forum
            </NavLink>
            <NavLink
              to="/contact"
              className=" transition-all duration-150 hover:text-emerald-500  text-small block mb-4 p-3 hover:bg-gray-50 border-b border-b-gray-100"
              onClick={openNav}
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className=" transition-all duration-150 hover:text-emerald-500  text-small block mb-4 p-3 hover:bg-gray-50 border-b border-b-gray-100"
              onClick={openNav}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className=" transition-all duration-150 hover:text-emerald-500  text-small block mb-4 p-3 hover:bg-gray-50 rounded bg-emerald-500 text-white border-2 border-transparent hover:border-emerald-500"
              onClick={openNav}
            >
              Signup
            </NavLink>
            <div className="mt-4">
              <Link
                to="/"
                className="inline-block mt-4 text-emerald-500 font-semibold  text-xl"
              >
                BAUMco
              </Link>
            </div>
            <div className="flex gap-2 mt-3 mb-4">
              <LinkedinIcon className="" />
              <FacebookIcon className="" />
              <InstagramIcon className="" />
              <TwitterIcon className="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
