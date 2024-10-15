import React, { useState } from 'react';

const StoresManagement = () => {
  const [stores, setStores] = useState([]);
  const [newStore, setNewStore] = useState({ name: '', location: '', contact: '', type: '' });
  const [error, setError] = useState('');
  const [editStoreId, setEditStoreId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore({ ...newStore, [name]: value });
  };

  const validateInputs = () => {
    // Name validation: Only letters and spaces allowed
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(newStore.name)) {
      return 'Name can only contain letters and spaces.';
    }

    // Contact validation: Only digits allowed
    const contactRegex = /^\d+$/;
    if (!contactRegex.test(newStore.contact)) {
      return 'Contact must be a valid number.';
    }

    // Check for empty fields
    if (!newStore.location || !newStore.type) {
      return 'All fields are required!';
    }

    return '';
  };

  const addOrUpdateStore = (e) => {
    e.preventDefault();
    setError('');

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (editStoreId) {
      // Update store
      setStores(stores.map(store => (store.id === editStoreId ? { ...newStore, id: editStoreId } : store)));
      setEditStoreId(null);
    } else {
      // Add new store
      setStores([...stores, { id: Date.now(), ...newStore }]);
    }

    setNewStore({ name: '', location: '', contact: '', type: '' });
  };

  const editStore = (store) => {
    setNewStore({ name: store.name, location: store.location, contact: store.contact, type: store.type });
    setEditStoreId(store.id);
  };

  const deleteStore = (id) => {
    setStores(stores.filter(store => store.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Stores Management</h2>

      <form onSubmit={addOrUpdateStore} className="mb-6">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="text"
            name="name"
            placeholder="Store Name"
            value={newStore.name}
            onChange={handleInputChange}
            className="border p-2 mr-2 mb-2 sm:mb-0"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newStore.location}
            onChange={handleInputChange}
            className="border p-2 mr-2 mb-2 sm:mb-0"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={newStore.contact}
            onChange={handleInputChange}
            className="border p-2 mr-2 mb-2 sm:mb-0"
          />
          <select
            name="type"
            value={newStore.type}
            onChange={handleInputChange}
            className="border p-2 mr-2 mb-2 sm:mb-0"
          >
            <option value="">Select Store Type</option>
            <option value="Grocery">Grocery</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white p-2">
            {editStoreId ? 'Update Store' : 'Add Store'}
          </button>
        </div>
      </form>

      {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Store Name</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Contact</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{store.name}</td>
              <td className="border px-4 py-2">{store.location}</td>
              <td className="border px-4 py-2">{store.contact}</td>
              <td className="border px-4 py-2">{store.type}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => editStore(store)}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteStore(store.id)}
                  className="bg-red-500 text-white px-2 py-1"
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

export default StoresManagement;
