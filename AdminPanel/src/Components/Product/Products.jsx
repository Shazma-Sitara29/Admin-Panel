// import React, { useState } from 'react';

// const ProductManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', quantity: '', image: null });
//   const [error, setError] = useState('');
//   const [editProductId, setEditProductId] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewProduct({ ...newProduct, image: URL.createObjectURL(file) });
//     }
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

//     setNewProduct({ name: '', price: '', category: '', quantity: '', image: null });
//   };

//   const editProduct = (product) => {
//     setNewProduct({ name: product.name, price: product.price, category: product.category, quantity: product.quantity, image: product.image });
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
//           <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="p-3 border rounded-lg w-full"
//             />
//             {newProduct.image && (
//               <img
//                 src={newProduct.image}
//                 alt="Product Preview"
//                 className="h-20 w-20 object-cover rounded-lg"
//               />
//             )}
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
//               <th className="border px-4 py-2 text-left">Image</th>
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
//                   {product.image && <img src={product.image} alt={product.name} className="h-10 w-10 object-cover rounded-lg" />}
//                 </td>
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






// import React, { useState } from 'react';

// const ProductManagement = () => {
//     // Dummy data for notifications
//     const initialProducts = [
//         { id: 1, name: 'Product A', quantity: 10, price: 100, image: 'https://via.placeholder.com/100', category: 'Electronics' },
//         { id: 2, name: 'Product B', quantity: 5, price: 50, image: 'https://via.placeholder.com/100', category: 'Apparel' },
//     ];

//     const [products, setProducts] = useState(initialProducts);
//     const [acceptedProducts, setAcceptedProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const handleAccept = (product) => {
//         setAcceptedProducts([...acceptedProducts, product]);
//         setProducts(products.filter(p => p.id !== product.id));
//     };

//     const handleView = (product) => {
//         setSelectedProduct(product);
//     };

//     return (
//         <div className="p-5 bg-gray-50">
//             <h2 className="text-2xl font-bold mb-4">Stores Management</h2>

//             <h2 className="text-xl font-bold">Notifications</h2>
//             <div className="bg-gray-100 p-4 mb-5 rounded shadow">
//                 {products.length === 0 ? (
//                     <p>No notifications.</p>
//                 ) : (
//                     products.map(product => (
//                         <div key={product.id} className="flex justify-between p-2 border-b border-gray-300">
//                             <span>{product.name} - {product.category}</span>
//                             <div>
//                                 <button onClick={() => handleView(product)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">View</button>
//                                 <button onClick={() => handleAccept(product)} className="bg-blue-500 text-white px-2 py-1 rounded">Accept</button>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>

//             {selectedProduct && (
//                 <div className="mb-5">
//                     <h3 className="text-lg font-bold">Product Details:</h3>
//                     <img src={selectedProduct.image} alt={selectedProduct.name} className="w-24 h-24 mb-2" />
//                     <p><strong>Name:</strong> {selectedProduct.name}</p>
//                     <p><strong>Quantity:</strong> {selectedProduct.quantity}</p>
//                     <p><strong>Price:</strong> ${selectedProduct.price}</p>
//                     <p><strong>Category:</strong> {selectedProduct.category}</p>
//                 </div>
//             )}

//             <h2 className="text-xl font-bold">Accepted Products</h2>
//             <table className="min-w-full border-collapse border border-gray-200 mt-4">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-2">Product Name</th>
//                         <th className="border border-gray-300 p-2">Quantity</th>
//                         <th className="border border-gray-300 p-2">Price</th>
//                         <th className="border border-gray-300 p-2">Image</th>
//                         <th className="border border-gray-300 p-2">Category</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {acceptedProducts.length === 0 ? (
//                         <tr>
//                             <td className="border border-gray-300 p-2" colSpan="5">No accepted products.</td>
//                         </tr>
//                     ) : (
//                         acceptedProducts.map(product => (
//                             <tr key={product.id}>
//                                 <td className="border border-gray-300 p-2">{product.name}</td>
//                                 <td className="border border-gray-300 p-2">{product.quantity}</td>
//                                 <td className="border border-gray-300 p-2">${product.price}</td>
//                                 <td className="border border-gray-300 p-2">
//                                     <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
//                                 </td>
//                                 <td className="border border-gray-300 p-2">{product.category}</td>
//                             </tr>
//                         ))
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ProductManagement;



// import React, { useState } from 'react';

// const ProductManagement = () => {
//     // Dummy data for notifications (products to be accepted)
//     const initialProducts = [
//         { id: 1, name: 'Product A', quantity: 10, price: 100, image: 'https://via.placeholder.com/100', category: 'Electronics' },
//         { id: 2, name: 'Product B', quantity: 5, price: 50, image: 'https://via.placeholder.com/100', category: 'Apparel' },
//     ];

//     const [products, setProducts] = useState([]); // Products accepted will be stored here
//     const [notifications, setNotifications] = useState(initialProducts); // Notifications for acceptance
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [newProduct, setNewProduct] = useState({ name: '', quantity: '', price: '', image: '', category: '' });
//     const [isEditing, setIsEditing] = useState(false);
//     const [editProductId, setEditProductId] = useState(null);

//     // Function to accept a product (move it to the main product list)
//     const handleAccept = (product) => {
//         // Check if the product is already in the accepted products
//         if (!products.some(p => p.id === product.id)) {
//             setProducts([...products, product]); // Add to accepted products
//         }
//         setNotifications(notifications.filter(p => p.id !== product.id)); // Remove from notifications
//     };

//     // Function to view or hide product details
//     const handleViewToggle = (product) => {
//         setSelectedProduct(selectedProduct?.id === product.id ? null : product);
//     };

//     // Function to handle input changes for adding/editing products
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewProduct({ ...newProduct, [name]: value });
//     };

//     // Function to add a new product
//     const handleAddProduct = () => {
//         const newId = products.length ? products[products.length - 1].id + 1 : 1;
//         setProducts([...products, { ...newProduct, id: newId }]);
//         setNewProduct({ name: '', quantity: '', price: '', image: '', category: '' });
//     };

//     // Function to delete a product
//     const handleDelete = (id) => {
//         setProducts(products.filter(p => p.id !== id));
//     };

//     // Function to set up editing a product
//     const handleEdit = (product) => {
//         setIsEditing(true);
//         setEditProductId(product.id);
//         setNewProduct(product);
//     };

//     // Function to update a product
//     const handleUpdateProduct = () => {
//         setProducts(products.map(p => (p.id === editProductId ? { ...newProduct, id: editProductId } : p)));
//         setIsEditing(false);
//         setNewProduct({ name: '', quantity: '', price: '', image: '', category: '' });
//         setEditProductId(null);
//     };

//     return (
//         <div className="p-5 bg-gray-50">
//             <h2 className="text-2xl font-bold mb-4">Stores Management</h2>

//             {/* Notifications Section */}
//             <h2 className="text-xl font-bold">Notifications</h2>
//             <div className="bg-gray-100 p-4 mb-5 rounded shadow">
//                 {notifications.length === 0 ? (
//                     <p>No notifications.</p>
//                 ) : (
//                     notifications.map(product => (
//                         <div key={product.id} className="flex justify-between p-2 bg-gray-200 rounded mb-2">
//                             <span>{product.name} - {product.category}</span>
//                             <div>
//                                 <button onClick={() => handleViewToggle(product)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">View</button>
//                                 <button onClick={() => handleAccept(product)} className="bg-blue-500 text-white px-2 py-1 rounded">Accept</button>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>

//             {/* Add/Edit Product Form */}
//             <div className="bg-gray-100 p-4 mb-5 rounded shadow">
//                 <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" className="p-2 border rounded w-full mb-2" />
//                 <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} placeholder="Quantity" className="p-2 border rounded w-full mb-2" />
//                 <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" className="p-2 border rounded w-full mb-2" />
//                 <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="Image URL" className="p-2 border rounded w-full mb-2" />
//                 <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" className="p-2 border rounded w-full mb-2" />
//                 {isEditing ? (
//                     <button onClick={handleUpdateProduct} className="bg-green-500 text-white px-4 py-2 rounded">Update Product</button>
//                 ) : (
//                     <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
//                 )}
//             </div>

//             {/* Product List Table */}
//             <h2 className="text-xl font-bold mt-5">Product List</h2>
//             <table className="min-w-full border-collapse border border-gray-200 mt-4">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">Image</th>
//                         <th className="border border-gray-300 p-2">Product Name</th>
//                         <th className="border border-gray-300 p-2">Quantity</th>
//                         <th className="border border-gray-300 p-2">Price</th>
//                         <th className="border border-gray-300 p-2">Category</th>
//                         <th className="border border-gray-300 p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.length === 0 ? (
//                         <tr>
//                             <td className="border border-gray-300 p-2" colSpan="6">No products available.</td>
//                         </tr>
//                     ) : (
//                         products.map(product => (
//                             <tr key={product.id}>
//                                 <td className="border border-gray-300 p-2">
//                                     <img src={product.image} alt={product.name} className="w-16 h-16" />
//                                 </td>
//                                 <td className="border border-gray-300 p-2">{product.name}</td>
//                                 <td className="border border-gray-300 p-2">{product.quantity}</td>
//                                 <td className="border border-gray-300 p-2">${product.price}</td>
//                                 <td className="border border-gray-300 p-2">{product.category}</td>
//                                 <td className="border border-gray-300 p-2 flex space-x-2">
//                                     <button onClick={() => handleViewToggle(product)} className="bg-gray-500 text-white px-2 py-1 rounded">View</button>
//                                     <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
//                                     <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//                                 </td>
//                             </tr>
//                         ))
//                     )}
//                 </tbody>
//             </table>

//             {/* View Product Details Modal */}
//             {selectedProduct && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-gray-200 p-4 rounded shadow-lg">
//                         <h3 className="text-lg font-bold">Product Details:</h3>
//                         <img src={selectedProduct.image} alt={selectedProduct.name} className="w-24 h-24 mb-2" />
//                         <p><strong>Name:</strong> {selectedProduct.name}</p>
//                         <p><strong>Quantity:</strong> {selectedProduct.quantity}</p>
//                         <p><strong>Price:</strong> ${selectedProduct.price}</p>
//                         <p><strong>Category:</strong> {selectedProduct.category}</p>
//                         <button onClick={() => setSelectedProduct(null)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductManagement;











       




import React, { useState } from 'react';

const ProductManagement = () => {
    const initialProducts = [
        { id: 1, name: 'Product A', quantity: 10, price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGfLTXIibqCmND6jK2Jpu1sDDfqm2hy1A8A&s', category: 'Grocery' },
        { id: 2, name: 'Product B', quantity: 5, price: 50, image: 'https://thumbs.dreamstime.com/b/global-washing-detergent-brands-poznan-poland-jan-soap-industry-includes-companies-remains-highly-84822558.jpg', category: 'Detergents' },
    ];

    const [products, setProducts] = useState([]);
    const [notifications, setNotifications] = useState(initialProducts);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: '', quantity: '', price: '', image: '', category: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

    const handleAccept = (product) => {
        if (!products.some(p => p.id === product.id)) {
            setProducts([...products, product]);
        }
        setNotifications(notifications.filter(p => p.id !== product.id));
    };

    const handleViewToggle = (product) => {
        setSelectedProduct(selectedProduct?.id === product.id ? null : product);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewProduct({ ...newProduct, image: URL.createObjectURL(file) });
        }
    };

    const handleAddProduct = () => {
        const newId = products.length ? products[products.length - 1].id + 1 : 1;
        setProducts([...products, { ...newProduct, id: newId }]);
        setNewProduct({ name: '', quantity: '', price: '', image: '', category: '' });
    };

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const handleEdit = (product) => {
        setIsEditing(true);
        setEditProductId(product.id);
        setNewProduct(product);
    };

    const handleUpdateProduct = () => {
        setProducts(products.map(p => (p.id === editProductId ? { ...newProduct, id: editProductId } : p)));
        setIsEditing(false);
        setNewProduct({ name: '', quantity: '', price: '', image: '', category: '' });
        setEditProductId(null);
    };

    return (
        <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Product Management</h2>

            {/* Notifications Section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                {notifications.length === 0 ? (
                    <p className="text-gray-600">No new notifications</p>
                ) : (
                    notifications.map(product => (
                        <div key={product.id} className="flex justify-between items-center bg-gray-200 p-3 rounded-lg mb-2">
                            <span>{product.name} - {product.category}</span>
                            <div>
                                <button onClick={() => handleViewToggle(product)} className="bg-green-500 text-white px-3 py-2 rounded-lg mr-2">
                                    View
                                </button>
                                <button onClick={() => handleAccept(product)} className="bg-blue-500 text-white px-3 py-2 rounded-lg">
                                    Accept
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add/Edit Product Form */}
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" className="p-3 border rounded-lg w-full" />
                        <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} placeholder="Quantity" className="p-3 border rounded-lg w-full" />
                        <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" className="p-3 border rounded-lg w-full" />
                        <input type="file" name="image" onChange={handleImageUpload} className="p-3 border rounded-lg w-full" />
                        <select name="category" value={newProduct.category} onChange={handleInputChange} className="p-3 border rounded-lg w-full">
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Home Goods">Home Goods</option>
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={isEditing ? handleUpdateProduct : handleAddProduct} className="bg-blue-500 text-white px-3 py-2 rounded-lg w-full sm:w-auto">
                            {isEditing ? 'Update Product' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Product List Table */}
           {/* Products Table */}
<div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <table className="w-full bg-white border border-gray-300 rounded-lg">
    <thead>
      <tr className="bg-gray-200">
        <th className="border px-4 py-2 text-left">Image</th>
        <th className="border px-4 py-2 text-left">Product Name</th>
        <th className="border px-4 py-2 text-left">Quantity</th>
        <th className="border px-4 py-2 text-left">Price</th>
        <th className="border px-4 py-2 text-left">Category</th>
        <th className="border px-4 py-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id} className="hover:bg-gray-100">
          <td className="border px-4 py-2">
            <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
          </td>
          <td className="border px-4 py-2">{product.name}</td>
          <td className="border px-4 py-2">{product.quantity}</td>
          <td className="border px-4 py-2">${product.price}</td>
          <td className="border px-4 py-2">{product.category}</td>
          <td className="border px-4 py-2">
            <button
              onClick={() => handleViewToggle(product)}
              className="bg-gray-500 text-white px-3 py-2 rounded-lg mr-2"
            >
              View
            </button>
            <button
              onClick={() => handleEdit(product)}
              className="bg-yellow-500 text-white px-3 py-2 rounded-lg mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(product.id)}
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


            {/* View Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold mb-2">Product Details</h3>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-40 h-40 mb-2 rounded-lg" />
                        <p><strong>Name:</strong> {selectedProduct.name}</p>
                        <p><strong>Quantity:</strong> {selectedProduct.quantity}</p>
                        <p><strong>Price:</strong> ${selectedProduct.price}</p>
                        <p><strong>Category:</strong> {selectedProduct.category}</p>
                        <button onClick={() => setSelectedProduct(null)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;









