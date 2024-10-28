// import React from 'react';
// import { ChartBarIcon } from '@heroicons/react/outline';

// const Dashboard = () => {
//   return (
//     <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//       {/* Overview Section */}
//       <div className="grid grid-cols-4 gap-4 mb-6">
//         <div className="bg-blue-100 p-4 rounded-lg shadow">
//           <h2 className="font-semibold">Total Users</h2>
//           <p className="text-2xl">150</p>
//         </div>
//         <div className="bg-green-100 p-4 rounded-lg shadow">
//           <h2 className="font-semibold">Total Stores</h2>
//           <p className="text-2xl">25</p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-lg shadow">
//           <h2 className="font-semibold">Total Products</h2>
//           <p className="text-2xl">300</p>
//         </div>
//         <div className="bg-red-100 p-4 rounded-lg shadow">
//           <h2 className="font-semibold">Total Orders</h2>
//           <p className="text-2xl">100</p>
//         </div>
//       </div>

//       {/* Sales Overview */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Sales Overview</h2>
//         <ChartBarIcon className="h-24 w-24 text-gray-500" />
//         <p className="text-gray-600">Sales chart would go here.</p>
//       </div>

//       {/* Recent Activities */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
//         <ul className="list-disc pl-5">
//           <li>New User: Ali</li>
//           <li>New Store: ABC Store</li>
//           <li>Order Placed: Order #101</li>
//         </ul>
//       </div>

//       {/* User Management Overview */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">User Management Overview</h2>
//         <p className="text-gray-600">User growth chart would go here.</p>
//       </div>

//       {/* Store Management Overview */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Store Management Overview</h2>
//         <p className="text-gray-600">Pending store approvals list would go here.</p>
//       </div>

//       {/* Product Performance Overview */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Product Performance Overview</h2>
//         <p className="text-gray-600">Top products list would go here.</p>
//       </div>

//       {/* Notifications Section */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Notifications</h2>
//         <ul className="list-disc pl-5">
//           <li>Important alert: User registration.</li>
//           <li>User notification: Order shipped.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;











import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Dashboard = () => {
  // Sample data for charts
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [500, 800, 600, 1200, 900],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const userDemographicsData = {
    labels: ['Active', 'Inactive', 'New'],
    datasets: [
      {
        label: 'Users',
        data: [150, 100, 30],
        backgroundColor: ['#4CAF50', '#FFC107', '#2196F3'],
      },
    ],
  };

  const productPerformanceData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 300, 150],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const ordersOverTimeData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Orders',
        data: [20, 35, 40, 60, 45],
        borderColor: 'rgba(153, 102, 255, 0.6)',
        fill: false,
      },
    ],
  };

  const revenueSplitData = {
    labels: ['Electronics', 'Grocery', 'Clothing'],
    datasets: [
      {
        label: 'Revenue Split',
        data: [4000, 3000, 2000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Dashboard</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Users</h2>
          <p className="text-2xl">150</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Products</h2>
          <p className="text-2xl">300</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Orders</h2>
          <p className="text-2xl">100</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Sales</h2>
          <p className="text-2xl">$50,000</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trends */}
        <div className="bg-white p-4 rounded-lg shadow chart-container">
          <h2 className="text-xl font-semibold mb-2">Sales Trends</h2>
          <div className="chart-container">
            <Bar data={salesData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* User Demographics */}
        <div className="bg-white p-4 rounded-lg shadow chart-container">
          <h2 className="text-xl font-semibold mb-2">User Demographics</h2>
          <div className="chart-container">
            <Pie data={userDemographicsData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-white p-4 rounded-lg shadow chart-container">
          <h2 className="text-xl font-semibold mb-2">Product Performance</h2>
          <div className="chart-container">
            <Bar data={productPerformanceData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Orders Over Time */}
        <div className="bg-white p-4 rounded-lg shadow chart-container">
          <h2 className="text-xl font-semibold mb-2">Orders Over Time</h2>
          <div className="chart-container">
            <Line data={ordersOverTimeData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Revenue Split */}
        <div className="bg-white p-4 rounded-lg shadow chart-container">
          <h2 className="text-xl font-semibold mb-2">Revenue Split</h2>
          <div className="chart-container">
            <Pie data={revenueSplitData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




