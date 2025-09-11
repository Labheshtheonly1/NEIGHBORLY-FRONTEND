'use client';

import { useState } from 'react';

// Mock data for the complaints list
const initialComplaints = [
  { id: 1, title: 'Network Outage', description: 'The internet connection has been down for 2 hours.' },
  { id: 2, title: 'Slow Loading', description: 'Dashboard is taking too long to load on mobile.' },
];

// Functional File Upload Area Component
const FileUploadArea = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
    } else {
      alert('Please drop a valid image file.');
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log('Uploading file:', file);
      // Here you would implement your API call to upload the file
      alert('File uploaded successfully!');
      setFile(null); // Reset after upload
      onClose();
    } else {
      alert('Please select an image to upload.');
    }
  };

  return (
    <div className="w-[50rem] bg-[#1C1C1E] p-8 rounded-2xl border border-[#2c2c2e] flex flex-col items-center justify-center space-y-6">
      <div
        className="w-full h-48 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center text-gray-400 cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3.75 3.75M12 9.75L8.25 13.5m-3.75 6a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 1.5a.75.75 0 100-1.5.75.75 0 000 1.5zM18.75 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
        </svg>
        <p>Drag and drop your file here</p>
        {file && <p className="text-white mt-2">{file.name}</p>}
      </div>
      <button
        onClick={handleUpload}
        className="px-8 py-3 bg-[#54D1DC] text-gray-950 font-bold rounded-full"
      >
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
      {/* Left Sidebar */}
      <aside className="w-64 flex flex-col justify-between py-8 px-6 bg-gradient-to-r from-[#2a2a2a] to-[#0d0d0d] shadow-[10px_0_20px_0_rgba(0,0,0,0.6)] border-r border-gray-800">
        <div>
          <div className="flex items-center space-x-2 mb-12">
            <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
          </div>
          <nav className="space-y-4">
            <a
              href="/dashboard"
              className="block p-3 rounded-md text-white font-semibold bg-[#414141] shadow-[5px_0_10px_-5px_rgba(0,0,0,0.4)]"
            >
              Dashboard
            </a>
            <a
              href="/dashboard/profile"
              className="block p-3 rounded-md text-gray-400 font-medium hover:text-white transition-colors duration-200"
            >
              Profile
            </a>
            <a
              href="/dashboard/settings"
              className="block p-3 rounded-md text-gray-400 font-medium hover:text-white transition-colors duration-200"
            >
              Settings
            </a>
          </nav>
        </div>
        <div className="mt-auto pt-6 border-t border-gray-700">
          <a href="#" className="flex items-center space-x-3 p-3 text-red-400 font-medium hover:text-red-500 transition-colors duration-200">
              Logout
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-extrabold mb-2 text-white">
          Dashboard <span className="text-[#54D1DC] font-normal">&gt; Complaint</span>
        </h1>
        <h2 className="text-3xl font-bold text-[#54D1DC] mb-12">Write Complaint</h2>
        
        <section className="mb-12 flex justify-center">
            {showFileUpload ? (
              <FileUploadArea onClose={() => setShowFileUpload(false)} />
            ) : (
                <div className="w-[50rem] bg-[#1C1C1E] p-8 rounded-2xl border border-[#2c2c2e]">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <button
                        type="submit"
                        form="complaint-form"
                        className="px-6 py-3 bg-[#54D1DC] text-gray-950 font-bold rounded-full transition-transform transform hover:scale-105"
                      >
                        Create Complaint
                      </button>
                      <button
                        onClick={() => setShowFileUpload(true)}
                        className="px-6 py-3 bg-[#333333] text-gray-400 font-bold rounded-full transition-transform transform hover:scale-105"
                      >
                        Add Media/Files
                      </button>
                    </div>
                    <form id="complaint-form" className="space-y-6">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 bg-[#2C2C2E] text-white rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#54D1DC] border border-[#444444]"
                      />
                      <textarea
                        placeholder="Description"
                        rows="6"
                        className="w-full p-4 bg-[#2C2C2E] text-white rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#54D1DC] resize-none border border-[#444444]"
                      />
                    </form>
                </div>
            )}
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-[#54D1DC]">My Complaints</h3>
          <div className="space-y-4">
            {initialComplaints.map((complaint) => (
              <div key={complaint.id} className="bg-[#1C1C1E] p-6 rounded-xl shadow-md">
                <h4 className="text-xl font-semibold text-[#54D1DC]">{complaint.title}</h4>
                <p className="mt-2 text-gray-400">{complaint.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComplaintsPage;