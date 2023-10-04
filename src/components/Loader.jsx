import { GridLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-white z-50">
      <GridLoader loading={true} size={30} color="#10b981" />
    </div>
  );
}
