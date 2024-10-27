// import React, { useState } from 'react';
// import { BellIcon } from '@heroicons/react/outline';

// const NotificationPanel = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, name: 'Ali', email: 'ali@example.com' },
//     { id: 2, name: 'Sara', email: 'sara@example.com' },
//   ]);
//   const [users, setUsers] = useState([]);

//   // Accept user notification and add to users table
//   const acceptUser = (notification) => {
//     setUsers([...users, notification]);
//     setNotifications(notifications.filter((n) => n.id !== notification.id));
//   };

//   // Remove user from table
//   const removeUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
//       {/* Navbar with notification */}
//       <div className="flex justify-end items-center space-x-4 mb-4">
//         <div className="relative">
//           <BellIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
//           {notifications.length > 0 && (
//             <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-2 py-1">
//               {notifications.length}
//             </span>
//           )}
//           <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50">
//             {notifications.map((notification) => (
//               <div
//                 key={notification.id}
//                 className="p-4 hover:bg-gray-100 flex justify-between items-center"
//               >
//                 <span>{notification.name}</span>
//                 <button
//                   onClick={() => acceptUser(notification)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded-lg"
//                 >
//                   Accept
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Users</h2>
//       <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-md">
//         <table className="w-full bg-white border border-gray-300 rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border px-4 py-2 text-left">ID</th>
//               <th className="border px-4 py-2 text-left">Name</th>
//               <th className="border px-4 py-2 text-left">Email</th>
//               <th className="border px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-100">
//                 <td className="border px-4 py-2">{user.id}</td>
//                 <td className="border px-4 py-2">{user.name}</td>
//                 <td className="border px-4 py-2">{user.email}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => removeUser(user.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded-lg"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default NotificationPanel;







import React, { useState } from 'react';


const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Sara', email: 'sara@example.com' },
  ]);
  const [users, setUsers] = useState([]);

  // Accept user notification and add to users table
  const acceptNotification = (notification) => {
    setUsers([...users, notification]);
    setNotifications(notifications.filter((n) => n.id !== notification.id));
  };

  // Remove user from table
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      {/* Users Table Heading */}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Users Management</h2>
      
      {/* Notifications Dropdown */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex justify-between items-center bg-gray-200 p-3 rounded-lg mb-2"
            >
              <div>
                <p className="font-semibold">{notification.name}</p>
              </div>
              <button
                onClick={() => acceptNotification(notification)}
                className="bg-blue-500 text-white px-3 py-2 rounded-lg"
              >
                Accept
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No new notifications</p>
        )}
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => removeUser(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationPanel;
