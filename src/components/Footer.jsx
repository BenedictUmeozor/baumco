import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../assets/icons";

const Footer = () => {
  return (
    <footer className="py-4 bg-white mt-5">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row items-center justify-between mb-4">
          <Link
            to="/"
            className="text-3xl font-bold text-emerald-500 font-poppins"
          >
            BAUMco
          </Link>
          <div className="flex gap-2">
            <LinkedinIcon className="" />
            <FacebookIcon className="" />
            <InstagramIcon className="" />
            <TwitterIcon className="" />
          </div>
        </div>
        <p className="text-gray-700 text-center text-small md:text-left">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
