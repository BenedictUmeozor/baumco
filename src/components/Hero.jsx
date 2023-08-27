import hero from "../assets/hero.svg";

const Hero = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <img className="w-full md:max-w-md" src={hero} alt="hero" />
        </div>
        <p className="flex-1 text-gray-700">
          Elevate your tech prowess with BAUMco. Immerse in programming
          insights, latest trends, and tutorials. Empower your journey in the
          world of tech and programming excellence.
        </p>
      </div>
      <div className="my-6 py-5">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4 md:gap-1">
          <input
            type="text"
            placeholder="subscribe to our newsletter"
            className="border-2 border-gray-200 p-3 rounded focus:outline-none focus:border-emerald-500 max-md:w-full"
          />
          <button className="bg-emerald-500 p-3 rounded text-white max-md:w-full transition-all duration-150 hover:bg-emerald-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
