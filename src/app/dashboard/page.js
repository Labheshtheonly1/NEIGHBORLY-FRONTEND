"use client";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-r from-[#605C5C] to-[#363535] p-6">
        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-500 rounded text-white font-medium">
            <div className="grid grid-cols-2 gap-1 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            Dashboard
          </div>
          <div className="px-4 py-3 text-gray-300 hover:text-white cursor-pointer">
            Profile
          </div>
          <div className="px-4 py-3 text-gray-300 hover:text-white cursor-pointer">
            Settings
          </div>
          <div className="px-4 py-3 text-gray-300 hover:text-white cursor-pointer mt-8">
            logout
          </div>
        </nav>
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

        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          {/* Square Card */}
          <div className="col-span-2 row-span-1">
            <GradientCard
              title="Complaint Tracking"
              items={["Track Complaints", "Resolve Complaints"]}
              gradient="from-gray-800 to-gray-900"
              href="/dashboard/complaint"
            />
          </div>

          {/* Top Right White Rectangle */}
          <div className="col-span-3 bg-white rounded-lg"></div>

          {/* Row 2 */}
          {/* Finance and Budget - Square (1 col) */}
          <Link
            href="/finance"
            className="bg-gray-800 rounded-lg p-6 relative hover:scale-105 transition"
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

          {/* Bottom Middle White Rectangle */}
          <div className="col-span-2 bg-white rounded-lg"></div>

          {/* Bottom Right White Rectangle */}
          <div className="col-span-2 bg-white rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}