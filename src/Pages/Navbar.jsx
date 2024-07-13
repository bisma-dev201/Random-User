import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">
          <span><FaUsers /></span>
        </div>
        <div>
          <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            User
          </Link>
          <Link to="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
