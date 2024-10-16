// import React from 'react'
// import { Route, Router, Routes } from 'react-router-dom';
// import Sidebar from './Components/Dashboard/Sidebar';
// import  User  from './Components/User/User';
// import Stores from './Components/Stores/Stores';
// import  Products from './Components/Product/Products';
// import Navbar from './Components/Dashboard/Navbar';


// export const App = () => {
//   return (
    
//     <>
      
//       <Sidebar />
//        <Routes >
//           <Route path="/user/user" element={<User />} />
//           <Route path=" /stores/stores" element={<Stores />} />
//           <Route path="/product/products" element={<Products/>} />
//         </Routes>
//         <Navbar></Navbar>
    
//     </>
    
//   )
// }
// export default App;











import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Dashboard/Sidebar';
import User from './Components/User/User';
import Stores from './Components/Stores/Stores';
import Products from './Components/Product/Products';
import Navbar from './Components/Dashboard/Navbar';
import Dashborad from './Components/Dashboard/Dashborad';

export const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Routes with padding to adjust for Navbar */}
        <div className="p-4 pt-16">
          <Routes>
            <Route path="/dashboard"  element={<Dashborad/>}/>
            <Route path="/user" element={<User />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/product/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
