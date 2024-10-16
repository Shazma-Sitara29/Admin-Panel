// // Sidebar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Sidebar Toggle Button */}
//       <div className="md:hidden bg-gray-800 p-4">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//           {isOpen ? 'Close' : 'Open'} Menu
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div className={`w-64 h-screen bg-emerald-500 fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
//         <div className="p-4">
//           <h1 className="text-white text-2xl font-bold">Logo</h1>
//         </div>
//         <nav className="mt-10">
//           <ul>
//             <li className="mb-4">
//               <Link to="/user" className="text-white font-bold text-2xl
//              block py-2 px-4 rounded">
//                 Users
//               </Link>
//             </li>
//             <li className="mb-4">
//               <Link to="/stores" className=" text-white font-bold text-2xl block py-2 px-4 rounded">
//                 Stores
//               </Link>
//             </li>
//             <li className="mb-4">
//               <Link to="/products" className="text-white font-bold text-2xl  block py-2 px-4 rounded">
//                 Products
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;











import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Using icons for toggle button

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="md:hidden bg-emerald-600 p-4 flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <h1 className="text-white text-xl font-bold">Admin Panel</h1>
      </div>

      {/* Sidebar */}
      <div className={`w-64 h-screen bg-emerald-500 fixed top-0 left-0 z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="p-6">
          <h1 className="text-white text-3xl font-extrabold">Admin Panel</h1>
        </div>
        <nav className="mt-12">
          <ul className="space-y-6">
            <li>
              <Link
                to="/dashbard"
                className="text-white text-lg font-semibold hover:bg-emerald-600 hover:pl-4 transition-all duration-300 block py-3 px-6 rounded-lg"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/user"
                className="text-white text-lg font-semibold hover:bg-emerald-600 hover:pl-4 transition-all duration-300 block py-3 px-6 rounded-lg"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className="text-white text-lg font-semibold hover:bg-emerald-600 hover:pl-4 transition-all duration-300 block py-3 px-6 rounded-lg"
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-white text-lg font-semibold hover:bg-emerald-600 hover:pl-4 transition-all duration-300 block py-3 px-6 rounded-lg"
              >
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
