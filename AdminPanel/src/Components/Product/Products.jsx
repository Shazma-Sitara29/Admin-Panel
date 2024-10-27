// import React, { useState } from 'react';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', quantity: '' });
//   const [error, setError] = useState('');
//   const [editProductId, setEditProductId] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const validateInputs = () => {
//     const nameRegex = /^[A-Za-z\s]+$/;
//     if (!nameRegex.test(newProduct.name)) {
//       return 'Name can only contain letters and spaces.';
//     }

//     const priceRegex = /^\d+$/;
//     if (!priceRegex.test(newProduct.price)) {
//       return 'Price must be a valid number.';
//     }

//     if (!newProduct.category || !newProduct.quantity) {
//       return 'All fields are required!';
//     }

//     return '';
//   };

//   const addOrUpdateProduct = (e) => {
//     e.preventDefault();
//     setError('');

//     const validationError = validateInputs();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     if (editProductId) {
//       setProducts(products.map(product => (product.id === editProductId ? { ...newProduct, id: editProductId } : product)));
//       setEditProductId(null);
//     } else {
//       setProducts([...products, { id: Date.now(), ...newProduct }]);
//     }

//     setNewProduct({ name: '', price: '', category: '', quantity: '' });
//   };

//   const editProduct = (product) => {
//     setNewProduct({ name: product.name, price: product.price, category: product.category, quantity: product.quantity });
//     setEditProductId(product.id);
//   };

//   const deleteProduct = (id) => {
//     setProducts(products.filter(product => product.id !== id));
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Product Management</h2>

//       <div className="bg-gray-100 p-6 rounded-lg mb-6">
//         <form onSubmit={addOrUpdateProduct} className="space-y-4">
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Product Name"
//               value={newProduct.name}
//               onChange={handleInputChange}
//               className="p-3 border rounded-lg w-full"
//             />
//             <input
//               type="text"
//               name="price"
//               placeholder="Price"
//               value={newProduct.price}
//               onChange={handleInputChange}
//               className="p-3 border rounded-lg w-full"
//             />
//             <input
//               type="text"
//               name="quantity"
//               placeholder="Quantity"
//               value={newProduct.quantity}
//               onChange={handleInputChange}
//               className="p-3 border rounded-lg w-full"
//             />
//             <select
//               name="category"
//               value={newProduct.category}
//               onChange={handleInputChange}
//               className="p-3 border rounded-lg w-full"
//             >
//               <option value="">Select Category</option>
//               <option value="Grocery">Grocery</option>
//               <option value="Electronics">Electronics</option>
//               <option value="Clothing">Clothing</option>
//             </select>
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full sm:w-auto">
//               {editProductId ? 'Update Product' : 'Add Product'}
//             </button>
//           </div>
//         </form>

//         {error && <div className="text-red-500 text-center mt-4">{error}</div>}
//       </div>

//       <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//         <table className="w-full bg-white border border-gray-300 rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border px-4 py-2 text-left">Product Name</th>
//               <th className="border px-4 py-2 text-left">Price</th>
//               <th className="border px-4 py-2 text-left">Quantity</th>
//               <th className="border px-4 py-2 text-left">Category</th>
//               <th className="border px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id} className="hover:bg-gray-100">
//                 <td className="border px-4 py-2">{product.name}</td>
//                 <td className="border px-4 py-2">{product.price}</td>
//                 <td className="border px-4 py-2">{product.quantity}</td>
//                 <td className="border px-4 py-2">{product.category}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => editProduct(product)}
//                     className="bg-yellow-500 text-white px-3 py-2 rounded-lg mr-2"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteProduct(product.id)}
//                     className="bg-red-500 text-white px-3 py-2 rounded-lg"
//                   >
//                     Delete
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

// export default ProductManagement;
                                               












import React, { useState } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', quantity: '', image: null });
  const [error, setError] = useState('');
  const [editProductId, setEditProductId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, image: URL.createObjectURL(file) });
    }
  };

  const validateInputs = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(newProduct.name)) {
      return 'Name can only contain letters and spaces.';
    }

    const priceRegex = /^\d+$/;
    if (!priceRegex.test(newProduct.price)) {
      return 'Price must be a valid number.';
    }

    if (!newProduct.category || !newProduct.quantity) {
      return 'All fields are required!';
    }

    return '';
  };

  const addOrUpdateProduct = (e) => {
    e.preventDefault();
    setError('');

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (editProductId) {
      setProducts(products.map(product => (product.id === editProductId ? { ...newProduct, id: editProductId } : product)));
      setEditProductId(null);
    } else {
      setProducts([...products, { id: Date.now(), ...newProduct }]);
    }

    setNewProduct({ name: '', price: '', category: '', quantity: '', image: null });
  };

  const editProduct = (product) => {
    setNewProduct({ name: product.name, price: product.price, category: product.category, quantity: product.quantity, image: product.image });
    setEditProductId(product.id);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Product Management</h2>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <form onSubmit={addOrUpdateProduct} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            />
            <select
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="p-3 border rounded-lg w-full"
            >
              <option value="">Select Category</option>
              <option value="Grocery">Grocery</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-3 border rounded-lg w-full"
            />
            {newProduct.image && (
              <img
                src={newProduct.image}
                alt="Product Preview"
                className="h-20 w-20 object-cover rounded-lg"
              />
            )}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full sm:w-auto">
              {editProductId ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Product Name</th>
              <th className="border px-4 py-2 text-left">Price</th>
              <th className="border px-4 py-2 text-left">Quantity</th>
              <th className="border px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">
                  {product.image && <img src={product.image} alt={product.name} className="h-10 w-10 object-cover rounded-lg" />}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => editProduct(product)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
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

export default ProductManagement;
