// import React from 'react';
// import { FaBell } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow-md">
//       {/* Search Bar */}
//       <div className="flex-grow ml-4 max-w-sm">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-emerald-400 text-sm"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-6">
//         {/* Notification Icon */}
//         <button className="text-gray-600">
//           <FaBell className="text-xl" />
//         </button>

//         {/* Profile Section */}
//         <div className="flex flex-col items-center">
//           {/* Profile Circle */}
//           <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
//             <span className="text-sm font-medium text-gray-700">A</span> {/* Initials or Icon */}
//           </div>
//           {/* Admin Name */}
//           <span className="text-sm font-medium text-gray-700">Admin Name</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;















import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Sara', email: 'sara@example.com' },
  ]);
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Accept user notification and add to users table
  const acceptUser = (notification) => {
    setUsers([...users, notification]);
    setNotifications(notifications.filter((n) => n.id !== notification.id));
  };

  // Toggle notification dropdown
  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="relative">
          <button onClick={toggleNotifications} className="text-gray-600">
            <FaBell className="text-xl" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <span>{notification.name}</span>
                    <button
                      onClick={() => acceptUser(notification)}
                      className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                    >
                      Accept
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-600">No new notifications</div>
              )}
            </div>
          )}
        </div>

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





