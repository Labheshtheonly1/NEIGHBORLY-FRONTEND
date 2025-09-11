"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function NoticePage() {
  const [activeView, setActiveView] = useState("default");
  const [activeTab, setActiveTab] = useState("notices"); 


  const pollsData = [
    {
      id: 1,
      title: "New Gym Equipment",
      description:
        "Should we purchase new gym equipment for the community center?",
      options: ["Yes, definitely", "No, not needed", "Maybe later"],
      date: "01/15/2024",
      votes: { "Yes, definitely": 12, "No, not needed": 3, "Maybe later": 7 },
    },
    {
      id: 2,
      title: "Pool Maintenance Schedule",
      description: "When should we schedule the monthly pool cleaning?",
      options: ["First week", "Second week", "Third week", "Fourth week"],
      date: "01/10/2024",
      votes: {
        "First week": 8,
        "Second week": 15,
        "Third week": 4,
        "Fourth week": 2,
      },
    },
    {
      id: 3,
      title: "Community Garden",
      description:
        "Would you like to start a community garden in the empty lot?",
      options: ["Yes, great idea", "No, not interested"],
      date: "12/28/2023",
      votes: { "Yes, great idea": 18, "No, not interested": 5 },
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black p-6">
        
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              width={520}
              height={520}
              alt="logo"
              className="rounded-full"
            />
          </div>
        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-500 rounded text-white font-medium">
            <div className="grid grid-cols-2 gap-1 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            <a href="/Admindashboard">Admin Dashboard</a>
          </div>
          <a
            href="/Admincomplaint"
            className="block px-4 py-3 hover:text-teal-400"
          >
            Complaints
          </a>
          <a
            href="/Adminnotice"
            className="block px-4 py-3 hover:text-teal-400"
          >
            Notices
          </a>
          <div className="px-4 py-3 hover:text-teal-400">Bookings</div>
          <a
            href="/resbudget"
            className="block px-4 py-3 hover:text-teal-400"
          >
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
        <h1 className="text-xl font-bold mb-6">
          <span className="text-white/60">Dashboard</span> › Notices &
          Communication
        </h1>

        {/* Buttons (only when default view) */}
        {activeView === "default" && (
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl text-cyan-400 font-bold">
              Notices & Communication
            </h1>
            <div className="space-x-4">
              <button
                onClick={() => setActiveView("notice")}
                className="px-4 py-2 bg-white/10 rounded hover:bg-teal-500"
              >
                Create Notice
              </button>
              <button
                onClick={() => setActiveView("poll")}
                className="px-4 py-2 bg-white/10 rounded hover:bg-teal-500"
              >
                Create Poll
              </button>
            </div>
          </div>
        )}

        {/* Tabs (always visible) - Now functional */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("notices")}
            className={`px-4 py-2 rounded ${
              activeTab === "notices"
                ? "bg-gray-700 text-white"
                : "bg-white/10 hover:bg-gray-700 text-gray-300"
            }`}
          >
            Notices
          </button>
          <button
            onClick={() => setActiveTab("polls")}
            className={`px-4 py-2 rounded ${
              activeTab === "polls"
                ? "bg-gray-700 text-white"
                : "bg-white/10 hover:bg-gray-700 text-gray-300"
            }`}
          >
            Polls
          </button>
        </div>

        {/* Default List View */}
        {activeView === "default" && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column (Cards) */}
            <div className="col-span-2 space-y-4">
              {/* Notices Tab Content */}
              {activeTab === "notices" && (
                <>
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
                      A water pipe burst, leaving no water supply. Please
                      conserve water.
                    </p>
                  </div>
                </>
              )}

              {/* Polls Tab Content */}
              {activeTab === "polls" && (
                <>
                  {pollsData.map((poll) => (
                    <div key={poll.id} className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 text-xs font-bold bg-blue-600 rounded">
                          POLL
                        </span>
                        <span className="text-sm text-gray-400">
                          {poll.date}
                        </span>
                      </div>
                      <h2 className="font-bold text-lg">{poll.title}</h2>
                      <p className="text-gray-400 text-sm mb-3">
                        {poll.description}
                      </p>

                      {/* Poll Options with Vote Counts */}
                      <div className="space-y-2">
                        {poll.options.map((option) => {
                          const voteCount = poll.votes[option] || 0;
                          const totalVotes = Object.values(poll.votes).reduce(
                            (a, b) => a + b,
                            0
                          );
                          const percentage =
                            totalVotes > 0
                              ? Math.round((voteCount / totalVotes) * 100)
                              : 0;

                          return (
                            <div
                              key={option}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="text-white">{option}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 bg-gray-700 rounded-full h-2">
                                  <div
                                    className="bg-teal-500 h-2 rounded-full"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                                <span className="text-gray-400 w-12 text-right">
                                  {voteCount} ({percentage}%)
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </>
              )}
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
                    {activeTab === "notices" ? (
                      <>
                        <option>All</option>
                        <option>Event</option>
                        <option>Maintenance</option>
                        <option>Emergency</option>
                      </>
                    ) : (
                      <>
                        <option>All Polls</option>
                        <option>Active</option>
                        <option>Closed</option>
                      </>
                    )}
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
        )}

        {/* Create Notice Form */}
        {activeView === "notice" && (
          <div className="max-w-lg mx-auto bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Create Notice</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full px-3 py-2 mb-3 bg-black rounded text-white"
            />
            <input
              type="date"
              placeholder="Date of expiry"
              className="w-full px-3 py-2 mb-3 bg-black rounded text-white"
            />
            <textarea
              placeholder="Description"
              className="w-full px-3 py-2 mb-3 bg-black rounded text-white"
              rows={4}
            />
            <div className="flex justify-between">
              <button
                onClick={() => setActiveView("default")}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-teal-600 rounded hover:bg-teal-500">
                Publish
              </button>
            </div>
          </div>
        )}

        {/* Create Poll Form */}
        {activeView === "poll" && (
          <div className="max-w-lg mx-auto bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Create Poll</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full px-3 py-2 mb-3 bg-black rounded text-white"
            />
            <input
              type="date"
              placeholder="Date of expiry"
              className="w-full px-3 py-2 mb-3 bg-black rounded text-white"
            />
            <textarea
              placeholder="Options (one per line)"
              className="w-full px-3 py-2 mb-3 bg-black rounded text-white"
              rows={4}
            />
            <div className="flex justify-between">
              <button
                onClick={() => setActiveView("default")}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-teal-600 rounded hover:bg-teal-500">
                Publish
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
