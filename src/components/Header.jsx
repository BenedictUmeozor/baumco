import { Link, NavLink } from "react-router-dom";
import { ChevronDown, MenuIcon, XMarkIcon } from "../assets/icons";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <header className="py-4">
      {mobileShow && <div className="overlay"></div>}
      <div className="container flex-between">
        <Link
          to="/"
          className="text-3xl font-bold text-emerald-500 font-poppins"
        >
          BAUMco
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className=" transition-all duration-150 hover:text-emerald-500 font-poppins text-small"
          >
            Home
          </NavLink>
          <div className="relative">
            <p
              className="cursor-pointer flex items-center gap-1 transition-all duration-150 hover:text-emerald-500 font-poppins text-small"
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
            className=" transition-all duration-150 hover:text-emerald-500 font-poppins text-small"
          >
            Forum
          </NavLink>
          <NavLink
            to="/contact"
            className=" transition-all duration-150 hover:text-emerald-500 font-poppins text-small"
          >
            Contact
          </NavLink>
        </nav>
        <div className="md:hidden" onClick={() => setMobileShow(true)}>
          <MenuIcon className="w-10 cursor-pointer" />
        </div>
        <nav
          className={`md:hidden bg-white menu-nav ${
            mobileShow ? "active" : ""
          }`}
        >
          <div className="p-2 flex items-center justify-end">
            <span onClick={() => setMobileShow(false)}>
              <XMarkIcon className="w-10 cursor-pointer" />
            </span>
          </div>
          <div className="p-3">
            <NavLink
              to="/"
              className=" transition-all duration-150 hover:text-emerald-500 font-poppins text-small block mb-4 p-3"
              onClick={() => setMobileShow(false)}
            >
              Home
            </NavLink>
            <div className="relative">
              <p
                className="cursor-pointer flex items-center gap-1 transition-all duration-150 hover:text-emerald-500 font-poppins text-small mb-4 p-3"
                onClick={() => setMobileShow(false)}
              >
                Electronics
                <ChevronDown className="w-5" />
              </p>
              {show && (
                <div className="absolute flex flex-col w-52 bg-white shadow left-0 top-10 rounded overflow-hidden">
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
              className=" transition-all duration-150 hover:text-emerald-500 font-poppins text-small block mb-4 p-3"
              onClick={() => setMobileShow(false)}
            >
              Forum
            </NavLink>
            <NavLink
              to="/contact"
              className=" transition-all duration-150 hover:text-emerald-500 font-poppins text-small block mb-4 p-3"
              onClick={() => setMobileShow(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
