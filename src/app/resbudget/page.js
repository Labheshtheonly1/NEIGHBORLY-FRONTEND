'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const ResBudgetPage = () => {
  useEffect(() => {
    // PIE CHART
    const pieCtx = document.getElementById("pieChart").getContext("2d");
    if (pieCtx) {
        new window.Chart(pieCtx, {
            type: "pie",
            data: {
                labels: ["Events", "Maintenance", "Salaries", "Others"],
                datasets: [{
                    data: [10, 30, 60, 40],
                    backgroundColor: [
                        "rgba(34,197,94,0.9)",
                        "rgba(217,70,239,0.9)",
                        "rgba(99,102,241,0.9)",
                        "rgba(6,182,212,0.9)"
                    ],
                    hoverOffset: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: "#ddd", font: { size: 14, family: "Poppins" } }
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 1600,
                    easing: "easeOutElastic"
                }
            }
        });
    }

    // LINE CHART
    const lineCtx = document.getElementById("lineChart").getContext("2d");
    if (lineCtx) {
        new window.Chart(lineCtx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Expenses",
                    data: [20, 35, 30, 45, 40, 55, 50, 65, 60, 75, 70, 90],
                    borderColor: "rgba(0,242,255,1)",
                    backgroundColor: "rgba(0,242,255,0.15)",
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#00f2ff",
                    pointRadius: 6,
                    pointHoverRadius: 9,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                animation: {
                    duration: 2000,
                    easing: "easeInOutQuart"
                },
                scales: {
                    x: {
                        ticks: { color: "#aaa", font: { family: "Poppins" } },
                        grid: { color: "rgba(255,255,255,0.08)" }
                    },
                    y: {
                        ticks: { color: "#aaa", font: { family: "Poppins" } },
                        grid: { color: "rgba(255,255,255,0.08)" }
                    }
                }
            }
        });
    }
  }, []);

  return (
    <div className="flex min-h-screen font-poppins bg-[#0a0a0f] text-white">
      {/* Chart.js Library */}
      <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="beforeInteractive" />

      {/* User Sidebar */}
      <aside className="w-64 bg-black p-6">
        <nav className="space-y-2">
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <Link href="/resdashboard">User Dashboard</Link>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <Link href="/complaints">Complaints</Link>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <Link href="/notices">Notices</Link>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <Link href="/bookings">Bookings</Link>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-500 rounded text-white font-medium">
            <div className="grid grid-cols-2 gap-1 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
            </div>
            <Link href="/resbudget">Budget</Link>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <Link href="/visitors">Visitors</Link>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group">
            <Link href="/settings">Settings</Link>
          </div>
          <div className="px-4 py-3 text-white hover:text-teal-400 transition-colors duration-200 relative group mt-8">
            <Link href="/profile">Profile</Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-lg text-gray-400 tracking-wider">Dashboard &gt; <span className="text-white">Budget</span></h2>

        <div className="bg-gradient-to-br from-[#111] to-[#1c1c24] p-6 rounded-xl inline-block mt-3 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
          Total Budget: <span className="text-[#00f2ff] font-bold text-xl drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">50 lakh</span>
        </div>

        {/* Budget Allocation Bars */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#ff00ff] mb-4">Budget Allocation</h3>
          <div className="space-y-6">
            <div className="bar-group">
              <div className="text-gray-300 mb-1">Events</div>
              <div className="w-full h-4 bg-[#1c1c24] rounded-lg overflow-hidden shadow-inner shadow-black/60">
                <div className="h-full rounded-lg" style={{ width: '10%', background: '#22c55e', boxShadow: '0 0 12px #22c55e' }}></div>
              </div>
            </div>
            <div className="bar-group">
              <div className="text-gray-300 mb-1">Maintenance</div>
              <div className="w-full h-4 bg-[#1c1c24] rounded-lg overflow-hidden shadow-inner shadow-black/60">
                <div className="h-full rounded-lg" style={{ width: '30%', background: '#d946ef', boxShadow: '0 0 12px #d946ef' }}></div>
              </div>
            </div>
            <div className="bar-group">
              <div className="text-gray-300 mb-1">Salaries</div>
              <div className="w-full h-4 bg-[#1c1c24] rounded-lg overflow-hidden shadow-inner shadow-black/60">
                <div className="h-full rounded-lg" style={{ width: '60%', background: '#6366f1', boxShadow: '0 0 12px #6366f1' }}></div>
              </div>
            </div>
            <div className="bar-group">
              <div className="text-gray-300 mb-1">Others</div>
              <div className="w-full h-4 bg-[#1c1c24] rounded-lg overflow-hidden shadow-inner shadow-black/60">
                <div className="h-full rounded-lg" style={{ width: '40%', background: '#06b6d4', boxShadow: '0 0 12px #06b6d4' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-8">
            <div className="bg-gradient-to-br from-[#111] to-[#191925] rounded-xl p-5 flex-1 min-w-[340px] h-[380px] shadow-[0_0_20px_rgba(0,255,255,0.08)]">
              <canvas id="pieChart"></canvas>
            </div>
            <div className="bg-gradient-to-br from-[#111] to-[#191925] rounded-xl p-5 flex-1 min-w-[340px] h-[380px] shadow-[0_0_20px_rgba(0,255,255,0.08)]">
              <canvas id="lineChart"></canvas>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResBudgetPage;
