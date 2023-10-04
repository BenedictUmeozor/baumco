import { Fragment } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Category = ({ category }) => {
  return (
    <Fragment>
      <div className="p-4 rounded shadow-sm bg-gray-50 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="bg-emerald-500 text-white py-1 px-2 text-base">
            {category}
          </h3>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            50 topics
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-emerald-500 mb-2 font-bold flex items-center gap-2">
            <svg
              width="20"
              height="20"
              className="text-amber-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              ></path>
            </svg>
            Latest post
          </h3>
          <Link className="text-gray-700" to={"/forum/post"}>
            Lorem ipsum dolor sit amet. <span className="text-xs">- Posted Sept 23, 2023 by <span className="text-emerald-500">John Doe</span></span>
          </Link>
        </div>
        <div>
          <h3 className="text-emerald-500 mb-2 font-bold flex items-center gap-2">
            <svg
              fill="none"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-red-500"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              ></path>
            </svg>
            Top Posts
          </h3>
          <ul>
            <li className="mb-1">
              <Link className="text-gray-700" to={"/forum/post"}>
                Lorem ipsum dolor sit amet <span className="text-xs">- Posted Sept 23, 2023 by <span className="text-emerald-500">John Doe</span></span>
              </Link>
            </li>
            <li className="mb-1">
              <Link className="text-gray-700" to={"/forum/post"}>
                Lorem ipsum dolor sit amet <span className="text-xs">- Posted Sept 23, 2023 by <span className="text-emerald-500">John Doe</span></span>
              </Link>
            </li>
            <li className="mb-1">
              <Link className="text-gray-700" to={"/forum/post"}>
                Lorem ipsum dolor sit amet <span className="text-xs">- Posted Sept 23, 2023 by <span className="text-emerald-500">John Doe</span></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Category.propTypes = {
  category: PropTypes.string,
};

export default Category;
