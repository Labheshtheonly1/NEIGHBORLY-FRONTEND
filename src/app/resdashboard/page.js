"use client";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResDashboardPage() {
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
            <a href="/resdashboard"> User Dashboard </a>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
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

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">HELLO ! USER,</h1>
          <div className="relative">
            <Bell className="w-6 h-6 text-yellow-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-5 grid-rows-2 gap-6 h-[500px]">
          {/* My Complaints - Rectangle spanning 2 cols */}
          <Link
            href="/complaints"
            className="col-span-2 bg-white/10 rounded-lg p-6 relative hover:scale-105 transition"
          >
            <h3 className="text-teal-400 text-3xl font-bold mb-4">
              My Complaints
            </h3>
            <div className="space-y-2 text-gray-300 text-lg font-bold">
              <div>File a Complaint</div>
              <div>View My Complaints</div>
            </div>
            <div className="absolute bottom-6 right-6">
              <Image
                src="/alert.svg"
                width={100}
                height={100}
                alt="alert"
                className="animate-float"
              />
            </div>
          </Link>

          {/* Top Right White Rectangle - Notices */}
          <Link
            href="/notices"
            className="col-span-3 bg-white/10 rounded-lg p-6 relative hover:scale-105 transition"
          >
            <h3 className="text-teal-400 text-3xl font-bold mb-4">NOTICES</h3>
            <div className="space-y-2 text-gray-300 text-lg font-bold">
              <div>View Notices</div>
              <div>Stay Updated</div>
            </div>
            <div className="absolute bottom-6 right-6">
              <Image
                src="/notice.png"
                width={100}
                height={100}
                alt="notice"
                className="animate-float"
              />
            </div>
          </Link>

          {/* Row 2 */}
          {/* Finance and Budget - Square (1 col) */}
          <Link
            href="/finance"
            className="bg-white/10 rounded-lg p-6 relative hover:scale-105 transition"
          >
            <h3 className="text-teal-400 text-lg font-bold mb-3">
              My Budget
            </h3>
            <div className="space-y-1 text-gray-300 font-bold mb-4">
              <div>View Budget</div>
              <div>Track Expenses</div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/12">
              <Image
                src="/pie.svg"
                width={80}
                height={90}
                alt="pie-chart"
                className="animate-float-slow"
              />
            </div>
          </Link>

          {/* Bottom Middle White Rectangle */}
          <div className="col-span-2 bg-white/10 rounded-lg"></div>

          {/* Bottom Right White Rectangle */}
          <div className="col-span-2 bg-white/10 rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}