import { Link } from "react-router-dom";
import post from "../assets/post.jpg";

const Post = () => {
  return (
    <div className="p-2 max-md:mb-5">
      <div className="h-52 w-full relative">
        <img src={post} className="w-full h-full rounded object-cover" alt="" />
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-20 transition-all duration-150 hover:opacity-0 rounded"></div>
      </div>
      <div className="mt-4">
        <Link className="font-semibold text-xl mb-3 hover:underline  inline-block">Lorem ipsum dolor sit amet consectetur.</Link>
        <p className="text-small text-gray-900 mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          aspernatur dolores explicabo magni minus non sit consequuntur quasi
          libero quibusdam!
        </p>
        <span className="text-xs text-gray-600">August 25, 2023</span>
      </div>
    </div>
  );
};

export default Post;
