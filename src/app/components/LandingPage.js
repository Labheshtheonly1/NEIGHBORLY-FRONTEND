"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UserCog, Home, Users } from "lucide-react";

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-black p-4 text-white">
      {/* Title Section */}
      <div className="relative top-150 right-59 z-20 ">
        <p className="text-7xl">Digital Society.</p>
        <p className="text-7xl text-[#54D1DC]">Simplified.</p>
      </div>

      {/* Container for the image, glow, and particles */}
      <div className="relative my-15 bottom-0 flex justify-center">
        <div
          className="glowing-particle absolute top-270 left-[100%]"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-0 left-[95%]"
          style={{ animationDelay: "0.8s", animationDuration: "2.5s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-0 left-[90%]"
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-[10%] left-[85%]"
          style={{ animationDelay: "0.3s", animationDuration: "2.2s" }}
        ></div>{" "}
        <div
          className="glowing-particle absolute bottom-[10%] left-[80%]"
          style={{ animationDelay: "1.1s", animationDuration: "2.8s" }}
        ></div>
        <Image
          src="/landing-house.svg"
          width={510}
          height={510}
          alt="House"
          draggable="false"
          className="animate-float top-90 left-140 relative"
        />
        {/* glowing neon */}
        <div className="relative inset-x-40 top-170 bottom-1/2 z-30">
          <div className="mx-auto bottom-0 h-[100px] w-[390px] bg-[#54D1DC] opacity-60 blur-2xl"></div>
        </div>
      </div>

      {/* Description text */}
      <div className="relative z-10 mt-18 top-10 right-59 text-3xl">
        <p>
          Unifying residents, owners, and workers on <br /> one transparent
          platform
        </p>
      </div>

      {/* Register button */}
      <div className="relative top-10 right-59 z-10 mt-10">
        <button
          onClick={() => setShowModal(true)}
          className="rounded-lg bg-[#54D1DC] px-8 py-3 text-3xl text-black shadow-lg hover:scale-110 transition"
        >
          REGISTER
        </button>
      </div>

      {/* === Modal Popup === */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-[url('/register.png')] shadow-2xl border border-white/90 p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Join Your Community
            </h2>

            <div className="flex flex-col gap-5">
              <button className="flex items-center gap-3 rounded-lg border border-white/60 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition">
                <UserCog className="w-6 h-6 text-[#54D1DC]" />
                ADMIN [Create New Society]
              </button>
              <button className="flex items-center gap-3 rounded-lg border border-white/60 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition">
                <Home className="w-6 h-6 text-[#54D1DC]" />
                RESIDENT
              </button>
              <button className="flex items-center gap-3 rounded-lg border border-white/60 bg-black/50 px-6 py-4 text-lg font-semibold text-white hover:bg-[#54D1DC]/20 transition">
                <Users className="w-6 h-6 text-[#54D1DC]" />
                STAFF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
