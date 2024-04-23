import { Link } from "react-router-dom";
import { FaVirusCovid } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="flex items-center justify-between px-3 md:px-10 h-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md">
        <Link to="/" className="flex items-center gap-2">
          <FaVirusCovid className="text-3xl md:text-4xl" />
          <div className="text-lg md:text-2xl font-bold">Covid-19 Map</div>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Contact
          </Link>
          <button className="px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition duration-300">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
