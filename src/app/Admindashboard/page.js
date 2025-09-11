"use client";
import { Bell, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
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

          {/* Admin Dashboard Link */}
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

            {/* Sidebar Links */}
            <Link
              href="/Admincomplaint"
              className="block px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200"
            >
              Complaints
            </Link>
            <Link
              href="/Adminnotice"
              className="block px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200"
            >
              Notices
            </Link>
            <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200">
              Bookings
            </div>
            <Link
              href="/resbudget"
              className="block px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200"
            >
              Budget
            </Link>
            <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200">
              Visitors
            </div>
            <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200">
              Settings
            </div>
            <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 mt-8">
              Profile
            </div>
          </nav>
        </div>

        {/* Bottom Section - Logout */}
        <button className="flex items-center gap-2 px-4 py-3 text-red-400 hover:text-red-500 transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">HELLO ! ADMIN,</h1>
          <div className="relative">
            <Bell className="w-6 h-6 text-yellow-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-5 grid-rows-2 gap-6 h-[500px]">
          {/* Complaint Tracking */}
          <Link
            href="/Admincomplaint"
            className="col-span-2 bg-white/10 rounded-lg p-6 relative hover:scale-105 transition"
          >
            <h3 className="text-teal-400 text-3xl font-bold mb-4">
              Complaint Tracking
            </h3>
            <div className="space-y-2 text-gray-300 text-lg font-bold">
              <div>Track Complaints</div>
              <div>Resolve Complaints</div>
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

          {/* Notices */}
          <Link
            href="/Adminnotice"
            className="col-span-3 bg-white/10 rounded-lg p-6 relative hover:scale-105 transition"
          >
            <h3 className="text-teal-400 text-3xl font-bold mb-4">NOTICES</h3>
            <div className="space-y-2 text-gray-300 text-lg font-bold">
              <div>Upload Notice</div>
              <div>View Notices</div>
            </div>
            <div className="absolute bottom-6 right-6">
              <Image
                src="/notice.png"
                width={80}
                height={100}
                alt="notice"
                className="animate-float"
              />
            </div>
          </Link>

          {/* Finance and Budget */}
          <Link
            href="/Adminfinance"
            className="bg-white/10 rounded-lg p-6 relative hover:scale-105 transition"
          >
            <h3 className="text-teal-400 text-lg font-bold mb-3">
              Finance and Budget
            </h3>
            <div className="space-y-1 text-gray-300 font-bold mb-4">
              <div>Control and Insights</div>
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

          {/* Empty Cards */}
          <div className="col-span-2 bg-white/10 rounded-lg"></div>
          <div className="col-span-2 bg-white/10 rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}
