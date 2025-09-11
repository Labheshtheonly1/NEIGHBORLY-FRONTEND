'use client';

import { useState } from 'react';

// Mock data for the complaints list
const initialComplaints = [
  { id: 1, title: 'Network Outage', description: 'The internet connection has been down for 2 hours.', status: 'Resolved' },
  { id: 2, title: 'Slow Loading', description: 'Dashboard is taking too long to load on mobile.', status: 'In progress' },
];

// Cloud Upload Area Component
const CloudUploadArea = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-full h-48 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center text-gray-400">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-400 mb-2">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711C16.3166 10.0976 15.6834 10.0976 15.2929 9.70711L13 7.41421V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V7.41421L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289L11.2929 4.29289ZM6 18C6 17.4477 6.44772 17 7 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H7C6.44772 19 6 18.5523 6 18ZM4 12V13H5V12H4ZM19 12V13H20V12H19ZM12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21ZM4 15V16H5V15H4ZM19 15V16H20V15H19Z" fill="currentColor"/>
                </svg>
                <p>Drag and drop your file here</p>
            </div>
            <button className="px-8 py-3 bg-[#358289] text-white text-lg font-bold rounded-lg">
                Upload
            </button>
        </div>
    );
};

const ComplaintsPage = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [complaints, setComplaints] = useState(initialComplaints);

  const handleComplaintSubmit = (newComplaint) => {
    setComplaints(prevComplaints => [
      { id: prevComplaints.length + 1, ...newComplaint },
      ...prevComplaints,
    ]);
  };

  return (
    <div className="flex min-h-screen bg-[#111111] text-white">
      {/* User Sidebar */}
      <aside className="w-64 bg-black p-6">
        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 text-white font-medium">
            <div className="grid grid-cols-2 gap-1 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            <a href="/resdashboard"> User Dashboard </a>
          </div>
          <div className="px-4 py-3 bg-gray-500 rounded text-white font-medium relative group">
            <a href="/complaints"> Complaints </a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/notices">Notices </a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/bookings">Bookings</a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/finance"> Budget</a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/visitors">Visitors</a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <a href="/settings">Settings</a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group mt-8">
            <a href="/profile">Profile</a>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-12">
        <h1 className="text-xl font-normal mb-2 text-white flex items-center space-x-2">
          <span className="text-gray-400">User Dashboard</span>
          <img src="/tri.svg" alt="separator" className="h-4 w-4" />
          <span>Complaints</span>
        </h1>
        <h2 className="text-3xl font-bold text-[#358289] mb-12">Write Complaint</h2>
        
        <section className="mb-12 flex justify-center">
            <div className="w-[50rem] bg-[#1C1C1E] p-8 rounded-2xl border border-[#2c2c2e] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center items-center mb-6">
                    <div className="flex bg-[#333333] rounded-full overflow-hidden">
                        <button
                            onClick={() => setShowFileUpload(false)}
                            className={`px-6 py-3 font-bold transition-colors duration-300 ${!showFileUpload ? 'bg-[#358289] text-gray-950' : 'text-[#358289]'}`}
                        >
                            Create Complaint
                        </button>
                        <button
                            onClick={() => setShowFileUpload(true)}
                            className={`px-6 py-3 font-bold transition-colors duration-300 ${showFileUpload ? 'bg-[#358289] text-gray-950' : 'text-[#358289]'}`}
                        >
                            Add Media/Files
                        </button>
                    </div>
                </div>
                {showFileUpload ? (
                  <CloudUploadArea />
                ) : (
                    <form id="complaint-form" className="space-y-6">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 bg-[#2C2C2E] text-white rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#358289] border border-[#444444]"
                      />
                      <textarea
                        placeholder="Description"
                        rows="6"
                        className="w-full p-4 bg-[#2C2C2E] text-white rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#358289] resize-none border border-[#444444]"
                      />
                    </form>
                )}
            </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-[#358289]">My Complaints</h3>
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="bg-[#1C1C1E] p-6 rounded-xl shadow-md flex justify-between items-center transition-all duration-300 transform hover:-translate-y-1">
                <div>
                    <h4 className="text-xl font-semibold text-[#358289]">{complaint.title}</h4>
                    <p className="mt-2 text-gray-400">{complaint.description}</p>
                </div>
                <span className="text-sm font-semibold text-gray-400">
                    {complaint.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComplaintsPage;