import React from 'react';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Search Bar */}
      <div className="flex-grow ml-4 max-w-sm">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-emerald-400 text-sm"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="text-gray-600">
          <FaBell className="text-xl" />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          {/* Profile Circle */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
            <span className="text-sm font-medium text-gray-700">A</span> {/* Initials or Icon */}
          </div>
          {/* Admin Name */}
          <span className="text-sm font-medium text-gray-700">Admin Name</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
