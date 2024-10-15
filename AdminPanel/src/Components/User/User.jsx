import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Sara', email: 'sara@example.com' },
    { id: 3, name: 'Usman', email: 'usman@example.com' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    // Regex to allow only letters and spaces
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
  };

  const addUser = () => {
    setError('');
    if (!newUser.name || !newUser.email) {
      setError('Both fields are required!');
      return;
    }
    if (!validateName(newUser.name)) {
      setError('Please enter a valid name (letters and spaces only)!');
      return;
    }
    if (!validateEmail(newUser.email)) {
      setError('Please enter a valid email address!');
      return;
    }
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ name: '', email: '' });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const startEdit = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email });
  };

  const updateUser = () => {
    setError('');
    if (!editingUser) return;
    if (!newUser.name || !newUser.email) {
      setError('Both fields are required!');
      return;
    }
    if (!validateName(newUser.name)) {
      setError('Please enter a valid name (letters and spaces only)!');
      return;
    }
    if (!validateEmail(newUser.email)) {
      setError('Please enter a valid email address!');
      return;
    }
    setUsers(users.map((user) => 
      user.id === editingUser.id ? { ...user, ...newUser } : user
    ));
    setNewUser({ name: '', email: '' });
    setEditingUser(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">User Management</h2> {/* Centered Heading */}
      
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {editingUser ? (
          <button onClick={updateUser} className="bg-green-500 text-white p-2">
            Update User
          </button>
        ) : (
          <button onClick={addUser} className="bg-blue-500 text-white p-2">
            Add User
          </button>
        )}
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <button 
                  onClick={() => startEdit(user)} 
                  className="bg-yellow-500 text-white p-1 mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteUser(user.id)} 
                  className="bg-red-500 text-white p-1 ml-2" // Added margin for spacing
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
