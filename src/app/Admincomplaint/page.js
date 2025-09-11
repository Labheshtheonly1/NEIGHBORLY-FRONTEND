"use client";
import { Bell } from "lucide-react";

export default function ComplaintPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black p-6">
        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-500 rounded text-white font-medium">
            <div className="grid grid-cols-2 gap-1 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            <a href="/Admindashboard"> Admin Dashboard </a>
          </div>
          <div className="px-4 py-3  text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/Admincomplaint"> Complaints </a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/Adminnotice">Notices </a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            Bookings
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/Adminfinance"> Budget</a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            Visitors
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            Settings
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group mt-8">
            Profile
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold">
            <span className="text-white/60"> Dashboard </span>› Complaint
          </h1>
          <div className="relative">
            <Bell className="w-6 h-6 text-yellow-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Complaint Tracking
        </h2>

        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <h3 className="text-white text-lg">Open</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center border-2 border-cyan-500">
            <h3 className="text-white text-lg">In progress</h3>
            <p className="text-3xl font-bold mt-2">8</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <h3 className="text-white text-lg">Resolved</h3>
            <p className="text-3xl font-bold mt-2">5</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <h3 className="text-white text-lg">Closed</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
        </div>

        {/* Filters + Table */}
        <div className="flex gap-6">
          {/* Filters */}
          <div className="w-1/4 bg-white/10 p-4 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Filter by Status</h4>
              <div className="space-y-1 text-gray-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Open
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> In progress
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Resolved
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Closed
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Filter by Priority</h4>
              <div className="space-y-1 text-gray-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> High
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Medium
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Low
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Filter by Date</h4>
              <input
                type="date"
                className="w-full bg-gray-700 p-2 rounded text-white"
              />
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 bg-white/10 p-4 rounded-lg">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-2">Complaint ID</th>
                  <th className="p-2">Issue</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Priority</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-2">#C001</td>
                  <td className="p-2">Water Leakage</td>
                  <td className="p-2">In progress</td>
                  <td className="p-2">High</td>
                  <td className="p-2">2025-09-11</td>
                  <td className="p-2">
                    <button className="bg-cyan-500 px-3 py-1 rounded text-black">
                      View
                    </button>
                  </td>
                </tr>
                {/* more rows later */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
