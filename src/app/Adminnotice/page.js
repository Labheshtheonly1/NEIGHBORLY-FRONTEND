'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "../api/api"; // shared axios (withCredentials enabled)
import { useRouter } from "next/navigation";

export default function NoticePage() {
  const [activeView, setActiveView] = useState("default");
  const [activeTab, setActiveTab] = useState("notices");

  // State for fetched notices
  const [noticesData, setNoticesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for the "Create Notice" form
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeExpiry, setNoticeExpiry] = useState("");
  const [noticeDescription, setNoticeDescription] = useState("");
  const [noticeCategory, setNoticeCategory] = useState("Event"); // Default category
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // --- Data Fetching ---
  const fetchNotices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/api/notice/fetchnotices");
      // Backend returns { message, data: Array<{ id, title, content, category, created_at }> }
      const list = Array.isArray(response?.data?.data)
        ? response.data.data
        : [];
      // Sort by created_at desc
      const sorted = [...list].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setNoticesData(sorted);
    } catch (err) {
      const status = err?.response?.status;
      const msg = err?.response?.data?.message || err.message;
      setError(`Failed to fetch notices: ${msg}`);
      if (status === 401) {
        // Not authenticated: send user to login
        router.push("/login");
      }
      console.error("Fetch notices error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch notices when the component mounts
  useEffect(() => {
    fetchNotices();
  }, []);

  // --- Helper Functions ---
  const getCategoryStyle = (category) => {
    switch (category?.toUpperCase()) {
      case "EVENT":
        return "bg-green-600";
      case "MAINTENANCE":
        return "bg-yellow-600";
      case "EMERGENCY ":
        return "bg-red-600";
      default:
        return "bg-gray-500";
    }
  };

  // --- Event Handlers ---
  const handlePublishNotice = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const noticePayload = {
      title: noticeTitle,
      content: noticeDescription, // backend expects `content`
      category: noticeCategory,
    };

    try {
      await api.post("/notice/createnotice", noticePayload);

      // Reset form and view
      setNoticeTitle("");
      setNoticeDescription("");
      setNoticeExpiry("");
      setNoticeCategory("Event");
      setActiveView("default");

      // Refresh the notices list
      await fetchNotices();
    } catch (err) {
      const status = err?.response?.status;
      const msg = err?.response?.data?.message || err.message;
      setError(`Failed to publish notice: ${msg}`);
      if (status === 401) router.push("/login");
      alert(`Error: ${err.response?.data?.message || err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <h1 className="text-xl font-bold mb-6">
          <span className="text-white/60">Dashboard</span> › Notices &
          Communication
        </h1>

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

        {activeView === "default" && (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-4">
              {activeTab === "notices" && (
                <>
                  {loading && (
                    <p className="text-gray-400">Loading notices...</p>
                  )}
                  {error && !loading && (
                    <p className="text-red-400">{error}</p>
                  )}
                  {!loading && !error && noticesData.length === 0 && (
                    <p className="text-gray-400">No notices found.</p>
                  )}
                  {!loading &&
                    !error &&
          noticesData.map((notice) => (
                      <div
            key={notice.id}
                        className="bg-white/10 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`px-2 py-1 text-xs font-bold ${getCategoryStyle(
                              notice.category
                            )} rounded`}
                          >
              {notice.category?.toUpperCase() || "GENERAL"}
                          </span>
                          <span className="text-sm text-gray-400">
              {new Date(notice.created_at).toLocaleDateString()}
                          </span>
                        </div>
            <h2 className="font-bold text-lg">{notice.title}</h2>
                        <p className="text-gray-400 text-sm">
              {notice.content}
                        </p>
                      </div>
                    ))}
                </>
              )}

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

        {activeView === "notice" && (
          <div className="max-w-lg mx-auto bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Create Notice</h2>
            <form onSubmit={handlePublishNotice} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={noticeTitle}
                onChange={(e) => setNoticeTitle(e.target.value)}
                required
                className="w-full px-3 py-2 bg-black rounded text-white"
              />
              <select
                value={noticeCategory}
                onChange={(e) => setNoticeCategory(e.target.value)}
                required
                className="w-full px-3 py-2 bg-black rounded text-white"
              >
                <option value="Event">Event</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Emergency">Emergency</option>
                <option value="General">General</option>
              </select>
              <input
                type="date"
                value={noticeExpiry}
                onChange={(e) => setNoticeExpiry(e.target.value)}
                className="w-full px-3 py-2 bg-black rounded text-white"
                placeholder="Date of expiry (optional)"
              />
              <textarea
                placeholder="Description"
                value={noticeDescription}
                onChange={(e) => setNoticeDescription(e.target.value)}
                required
                className="w-full px-3 py-2 bg-black rounded text-white"
                rows={4}
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setActiveView("default")}
                  className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-teal-600 rounded hover:bg-teal-500 disabled:bg-teal-800"
                >
                  {isSubmitting ? "Publishing..." : "Publish"}
                </button>
              </div>
            </form>
          </div>
        )}

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