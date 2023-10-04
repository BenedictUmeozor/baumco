import { Link } from "react-router-dom";
import { ChatIcon } from "../assets/icons";

const Topic = () => {
  return (
    <div className="flex items-center gap-5 py-2 mb-3 border-b md:border md:rounded md:px-2 md:py-3">
      <div className="flex self-start items-center justify-center">
        <ChatIcon className="w-8" />
      </div>
      <div>
        <Link to='#' className="text-base">Lorem ipsum dolor sit amet consectetur.</Link>
        <p className="text-xs">
          By <Link to="#" className="text-emerald-500">footprints</Link>
        </p>
        <p className="text-xs text-gray-500 italic">0 replies</p>
        <span className="text-xs text-gray-600">2 years ago</span>
      </div>
    </div>
  );
};

export default Topic;
