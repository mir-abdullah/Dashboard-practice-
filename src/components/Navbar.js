import React from "react";
import { FaUserCircle, FaBell } from "react-icons/fa"; 

function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="flex items-center justify-between p-4 max-w-screen-xl">
     
        <div className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <h1 className="text-2xl font-semibold text-white">
            My <span className="text-yellow-400">
            Dashboard
            </span>
                
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <button
            className="relative text-white text-2xl hover:text-yellow-400 transition-colors"
            aria-label="Notifications"
          >
            <FaBell />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full -translate-x-1/2 -translate-y-1/2">
              3
            </span>
          </button>
          <button
            className="text-white text-2xl hover:text-yellow-400 transition-colors"
            aria-label="Profile"
          >
            <FaUserCircle />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
