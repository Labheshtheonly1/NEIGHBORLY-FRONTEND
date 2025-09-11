"use client";
import { Bell } from "lucide-react";
import Link from "next/link";

function GradientCard({ title, items, gradient, href }) {
  return (
    <Link href={href}>
      <div
        className={`rounded-xl shadow p-6 text-white bg-gradient-to-br ${gradient} 
        hover:scale-[1.03] hover:shadow-lg transition-transform cursor-pointer`}
      >
        <h3 className="font-semibold mb-2">{title}</h3>
        {items && (
          <ul className="space-y-1 text-sm">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-70 bg-white/10 p-8 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav className="space-y-4">
          <Link href="/dashboard">
            <span className="block w-full text-left px-3 py-2 rounded-md bg-gray-700 text-white font-semibold">
              Dashboard
            </span>
          </Link>
          <Link href="/profile">
            <span className="block w-full text-left px-3 py-2 rounded-md text-gray-400 hover:text-white">
              Profile
            </span>
          </Link>
          <Link href="/settings">
            <span className="block w-full text-left px-3 py-2 rounded-md text-gray-400 hover:text-white">
              Settings
            </span>
          </Link>
          <Link href="/logout">
            <span className="block w-full text-left px-3 py-2 rounded-md text-gray-400 hover:text-white">
              Logout
            </span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Top bar */}
        <div className="flex justify-end mb-6 relative">
          <Bell className="w-6 h-6 text-yellow-400" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
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
              href="/complaints"
            />
          </div>

          {/* Rectangle Card */}
          <div className="col-span-1  px-4 py-1 row-span-1">
            <GradientCard
              title="Finance and Budget"
              items={["Control and Insights", "Track Expenses"]}
              gradient="from-gray-800 to-gray-900"
              href="/finance"
            />
          </div>

          {/* Small Square */}
          <div className="relative flex flex-col justify-center ">
            <GradientCard
              title="Community Notices"
              items={["Post Announcements", "View Notices"]}
              gradient="from-gray-800 to-gray-900"
              href="/notices"
            />
          </div>

          {/* Rectangle wide */}
          <div className=" col-span-2 row-span-1">
            <GradientCard
              title="Maintenance"
              items={["Track Expenses", "Schedule Repairs"]}
              gradient="from-gray-800 to-gray-900"
              href="/maintenance"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
