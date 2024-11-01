
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const Sidebar = ({ userNotifications, storeNotifications }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="md:hidden bg-emerald-600 p-4 flex justify-between items-center">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
//           {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </button>
//         <h1 className="text-white text-xl font-bold">Admin Panel</h1>
//       </div>

//       <div className={`w-64 h-screen bg-black fixed top-0 left-0 z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
//         <div className="p-6">
//           <h1 className="text-white text-3xl font-extrabold">Admin Panel</h1>
//         </div>
//         <nav className="mt-12">
//           <ul className="space-y-6">
//             <li>
//               <Link to="/dashboard" className="text-white text-lg font-semibold block py-3 px-6">
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link to="/user" className="relative text-white text-lg font-semibold block py-3 px-6">
//                 Users
//                 {userNotifications > 0 && (
//                   <span className="absolute right-4 top-1 bg-red-500 text-xs text-white px-2 py-1 rounded-full">
//                     {userNotifications}
//                   </span>
//                 )}
//               </Link>
//             </li>
//             <li>
//               <Link to="/stores" className="relative text-white text-lg font-semibold block py-3 px-6">
//                 Stores
//                 {storeNotifications > 0 && (
//                   <span className="absolute right-4 top-1 bg-red-500 text-xs text-white px-2 py-1 rounded-full">
//                     {storeNotifications}
//                   </span>
//                 )}
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="text-white text-lg font-semibold block py-3 px-6">
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
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Notification counts managed in state
  const [userNotifications, setUserNotifications] = useState(2);
  const [storeNotifications, setStoreNotifications] = useState(2);
  const [productNotifications, setProductNotifications] = useState(2);

  const handleNotificationClear = (type) => {
    if (type === 'user') setUserNotifications(0);
    if (type === 'store') setStoreNotifications(0);
    if (type === 'product') setProductNotifications(0);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-emerald-600 p-4 flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <h1 className="text-white text-xl font-bold">Admin Panel</h1>
      </div>

      {/* Sidebar */}
      <div className={`w-64 h-screen bg-black fixed top-0 left-0 z-50 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="p-6">
          <h1 className="text-white text-3xl font-extrabold">Admin Panel</h1>
        </div>
        <nav className="mt-12">
          <ul className="space-y-6">
            <li>
              <Link to="/dashboard" className="text-white text-lg font-semibold flex items-center py-3 px-6 hover:bg-slate-500 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/user"
                className="relative text-white text-lg font-semibold flex items-center justify-between py-3 px-6 hover:bg-slate-500 rounded"
                onClick={() => handleNotificationClear('user')}
              >
                <span>Users</span>
                {userNotifications > 0 && (
                  <div className="flex items-center">
                    <IoNotificationsOutline className="text-white" />
                    <span className="bg-red-500 text-xs text-white px-2 py-1 ml-1 rounded-full">
                      {userNotifications}
                    </span>
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/stores"
                className="relative text-white text-lg font-semibold flex items-center justify-between py-3 px-6 hover:bg-slate-500 rounded"
                onClick={() => handleNotificationClear('store')}
              >
                <span>Stores</span>
                {storeNotifications > 0 && (
                  <div className="flex items-center">
                    <IoNotificationsOutline className="text-white" />
                    <span className="bg-red-500 text-xs text-white px-2 py-1 ml-1 rounded-full">
                      {storeNotifications}
                    </span>
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="relative text-white text-lg font-semibold flex items-center justify-between py-3 px-6 hover:bg-slate-500rounded"
                onClick={() => handleNotificationClear('product')}
              >
                <span>Products</span>
                {productNotifications > 0 && (
                  <div className="flex items-center">
                    <IoNotificationsOutline className="text-white" />
                    <span className="bg-red-500 text-xs text-white px-2 py-1 ml-1 rounded-full">
                      {productNotifications}
                    </span>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
