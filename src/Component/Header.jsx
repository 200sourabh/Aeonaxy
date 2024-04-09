import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-16 flex justify-between items-center p-4 border-b-2">
      <div className="flex space-x-5 items-center">
        <div>
          <img src="image/logo.png" height="50px" width="50px" alt="Logo" />
        </div>
        <div className="md:flex md:items-center text-blue-700">
          <ul className={`absolute  md:flex md:items-center md:space-x-3 md:justify-center  ${menuOpen ? '' : 'hidden sm:block'}`}>
            <li className="hover:text-blue-950 font-semibold cursor-pointer">Personal</li>
            <li className="hover:text-blue-950 font-semibold cursor-pointer">Business</li>
            <li className="hover:text-blue-950 font-semibold cursor-pointer">Developer</li>
            <li className="hover:text-blue-950 font-semibold cursor-pointer">Help</li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex space-x-2 ">
        <div className="px-2 py-2 border-2 border-blue-800 text-blue-700 rounded-full cursor-pointer font-semibold">My Paypal</div>
        <div className="px-3 py-2 border-2 border-blue-800 text-blue-700 rounded-full cursor-pointer font-semibold">Log Out</div>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <FiMenu style={{ height: "40px", width: "40px" }} />
      </button>
    </div>
  );
};

export default Header;
