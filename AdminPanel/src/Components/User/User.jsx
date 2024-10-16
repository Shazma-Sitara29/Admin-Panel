// import React, { useState } from 'react';

// const UserManagement = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'Ali', email: 'ali@example.com' },
//     { id: 2, name: 'Sara', email: 'sara@example.com' },
//     { id: 3, name: 'Usman', email: 'usman@example.com' },
//   ]);

//   const [newUser, setNewUser] = useState({ name: '', email: '' });
//   const [editingUser, setEditingUser] = useState(null);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser({ ...newUser, [name]: value });
//   };

//   const validateEmail = (email) => {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validateName = (name) => {
//     const re = /^[a-zA-Z\s]+$/; // Regex to allow only letters and spaces
//     return re.test(name);
//   };

//   const addUser = () => {
//     setError('');
//     if (!newUser.name || !newUser.email) {
//       setError('Both fields are required!');
//       return;
//     }
//     if (!validateName(newUser.name)) {
//       setError('Please enter a valid name (letters and spaces only)!');
//       return;
//     }
//     if (!validateEmail(newUser.email)) {
//       setError('Please enter a valid email address!');
//       return;
//     }
//     setUsers([...users, { id: Date.now(), ...newUser }]);
//     setNewUser({ name: '', email: '' });
//   };

//   const deleteUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const startEdit = (user) => {
//     setEditingUser(user);
//     setNewUser({ name: user.name, email: user.email });
//   };

//   const updateUser = () => {
//     setError('');
//     if (!editingUser) return;
//     if (!newUser.name || !newUser.email) {
//       setError('Both fields are required!');
//       return;
//     }
//     if (!validateName(newUser.name)) {
//       setError('Please enter a valid name (letters and spaces only)!');
//       return;
//     }
//     if (!validateEmail(newUser.email)) {
//       setError('Please enter a valid email address!');
//       return;
//     }
//     setUsers(users.map((user) => 
//       user.id === editingUser.id ? { ...user, ...newUser } : user
//     ));
//     setNewUser({ name: '', email: '' });
//     setEditingUser(null);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2> {/* Centered Heading */}
      
//       <div className="mb-4 flex flex-col sm:flex-row justify-center items-center">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newUser.name}
//           onChange={handleInputChange}
//           className="border p-2 mr-2 mb-2 sm:mb-0"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={handleInputChange}
//           className="border p-2 mr-2 mb-2 sm:mb-0"
//         />
//         {editingUser ? (
//           <button onClick={updateUser} className="bg-green-500 text-white p-2">
//             Update User
//           </button>
//         ) : (
//           <button onClick={addUser} className="bg-blue-500 text-white p-2">
//             Add User
//           </button>
//         )}
//       </div>

//       {error && <div className="text-red-500 mb-4 text-center">{error}</div>} {/* Error Message */}

//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">ID</th>
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Email</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="hover:bg-gray-100">
//               <td className="border px-4 py-2">{user.id}</td>
//               <td className="border px-4 py-2">{user.name}</td>
//               <td className="border px-4 py-2">{user.email}</td>
//               <td className="border px-4 py-2">
//                 <button 
//                   onClick={() => startEdit(user)} 
//                   className="bg-yellow-500 text-white p-1 mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button 
//                   onClick={() => deleteUser(user.id)} 
//                   className="bg-red-500 text-white p-1"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserManagement;


      







import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/outline';

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Sara', email: 'sara@example.com' },
  ]);
  const [users, setUsers] = useState([]);

  // Accept user notification and add to users table
  const acceptUser = (notification) => {
    setUsers([...users, notification]);
    setNotifications(notifications.filter((n) => n.id !== notification.id));
  };

  // Remove user from table
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      {/* Navbar with notification */}
      <div className="flex justify-end items-center space-x-4">
        <div className="relative">
          <BellIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-2 py-1">
              {notifications.length}
            </span>
          )}
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
            {notifications.map((notification) => (
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
            ))}
          </div>
        </div>
        
      </div>

      {/* Users Table */}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Users</h2>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
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



