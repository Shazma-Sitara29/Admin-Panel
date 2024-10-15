// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="md:hidden bg-gray-800 p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
      </div>

      {/* Sidebar */}
      <div className={`w-64 h-screen bg-emerald-500 fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <div className="p-4">
          <h1 className="text-white text-2xl font-bold">Logo</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="mb-4">
              <Link to="/user" className="text-white font-bold text-2xl
             block py-2 px-4 rounded">
                Users
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/stores" className=" text-white font-bold text-2xl block py-2 px-4 rounded">
                Stores
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/products" className="text-white font-bold text-2xl  block py-2 px-4 rounded">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
