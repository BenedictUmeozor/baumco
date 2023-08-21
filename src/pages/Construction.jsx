import image from "../assets/construction.svg";

const Construction = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <img className="w-10/12 max-w-md" src={image} alt="" />
      </div>
      <p className="mt-5 text-center text-lg">Site under construction</p>
    </div>
  );
};

export default Construction;
