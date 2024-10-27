import React from 'react';
import { ChartBarIcon } from '@heroicons/react/outline';

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Overview Section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Users</h2>
          <p className="text-2xl">150</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Stores</h2>
          <p className="text-2xl">25</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Products</h2>
          <p className="text-2xl">300</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h2 className="font-semibold">Total Orders</h2>
          <p className="text-2xl">100</p>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sales Overview</h2>
        <ChartBarIcon className="h-24 w-24 text-gray-500" />
        <p className="text-gray-600">Sales chart would go here.</p>
      </div>

      {/* Recent Activities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
        <ul className="list-disc pl-5">
          <li>New User: Ali</li>
          <li>New Store: ABC Store</li>
          <li>Order Placed: Order #101</li>
        </ul>
      </div>

      {/* User Management Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">User Management Overview</h2>
        <p className="text-gray-600">User growth chart would go here.</p>
      </div>

      {/* Store Management Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Store Management Overview</h2>
        <p className="text-gray-600">Pending store approvals list would go here.</p>
      </div>

      {/* Product Performance Overview */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Product Performance Overview</h2>
        <p className="text-gray-600">Top products list would go here.</p>
      </div>

      {/* Notifications Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
        <ul className="list-disc pl-5">
          <li>Important alert: User registration.</li>
          <li>User notification: Order shipped.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;















