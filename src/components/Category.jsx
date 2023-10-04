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
          <div>50 topics</div>
        </div>
        <div className="mb-4">
          <h3 className="text-emerald-500 mb-2 font-bold">Latest post</h3>
          <Link className="text-gray-700" to={"/forum/post"}>
            Lorem ipsum dolor sit amet.
          </Link>
        </div>
        <div>
          <h3 className="text-emerald-500 mb-2 font-bold">Top Posts</h3>
          <ul>
            <li className="mb-1">
              <Link className="text-gray-700" to={"/forum/post"}>
                Lorem ipsum dolor sit amet
              </Link>
            </li>
            <li className="mb-1">
              <Link className="text-gray-700" to={"/forum/post"}>
                Lorem ipsum dolor sit amet
              </Link>
            </li>
            <li className="mb-1">
              <Link className="text-gray-700" to={"/forum/post"}>
                Lorem ipsum dolor sit amet
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
