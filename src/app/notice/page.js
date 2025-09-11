"use client";
import React from "react";

export default function NoticePage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar (already added by you) */}
      <aside className="w-64 bg-black p-6">
        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-500 rounded text-white font-medium">
            <div className="grid grid-cols-2 gap-1 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            <a href="/dashboard">Admin Dashboard</a>
          </div>
          <a href="/complaint" className="block px-4 py-3 hover:text-teal-400">
            Complaints
          </a>
          <a href="/notice" className="block px-4 py-3 hover:text-teal-400">
            Notices
          </a>
          <div className="px-4 py-3 hover:text-teal-400">Bookings</div>
          <a href="/finance" className="block px-4 py-3 hover:text-teal-400">
            Budget
          </a>
          <div className="px-4 py-3 hover:text-teal-400">Visitors</div>
          <div className="px-4 py-3 hover:text-teal-400">Settings</div>
          <div className="px-4 py-3 hover:text-teal-400 mt-8">Profile</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-black rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Notices & Communication</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-white/10 rounded hover:bg-teal-500">
              Create Notice
            </button>
            <button className="px-4 py-2 bg-white/10 rounded hover:bg-teal-500">
              Create
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-gray-700 rounded">Notices</button>
          <button className="px-4 py-2 bg-white/10 rounded hover:bg-gray-700">
            Polls
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column (Filter + Notices list) */}
          <div className="col-span-2 space-y-4">
            {/* Notice Card 1 */}
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 text-xs font-bold bg-green-600 rounded">
                  EVENT
                </span>
                <span className="text-sm text-gray-400">01/02/2024</span>
              </div>
              <h2 className="font-bold text-lg">Community Picnic</h2>
              <p className="text-gray-400 text-sm">
                Join us for a fun community picnic
              </p>
            </div>

            {/* Notice Card 2 */}
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 text-xs font-bold bg-yellow-600 rounded">
                  MAINTENANCE
                </span>
                <span className="text-sm text-gray-400">12/20/2023</span>
              </div>
              <h2 className="font-bold text-lg">Annual Maintenance</h2>
              <p className="text-gray-400 text-sm">
                Expect water supply to be temporarily unavailable
              </p>
            </div>

            {/* Notice Card 3 */}
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 text-xs font-bold bg-red-600 rounded">
                  EMERGENCY
                </span>
                <span className="text-sm text-gray-400">12/01/2023</span>
              </div>
              <h2 className="font-bold text-lg">Water Outage</h2>
              <p className="text-gray-400 text-sm">
                A water pipe burst, leaving no water supply. Please conserve
                water.
              </p>
            </div>
          </div>

          {/* Right Column (Filter box) */}
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="font-bold mb-4">Filter</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Filter"
                className="w-full px-3 py-2 bg-white/10 rounded text-white"
              />
              <div>
                <label className="block mb-1 text-sm text-white">
                  Category
                </label>
                <select className="w-full px-3 py-2 bg-white/10 rounded text-white">
                  <option>All</option>
                  <option>Event</option>
                  <option>Maintenance</option>
                  <option>Emergency</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm text-white">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 bg-white/10 rounded text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
