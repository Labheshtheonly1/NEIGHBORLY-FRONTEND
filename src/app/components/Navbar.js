import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="relative flex items-center justify-between bottom-80 px-29 py-4 bg-[#3e4040cc] rounded-full shadow-lg z-20 w-fit mx-auto">
        {/* Left links */}
        <div className="flex gap-8">
          {[
            { label: "HOME" },
            { label: "ABOUT", path: "#about" },
            { label: "FEATURES", path: "#ps" },
            { label: "FAQs", path: "#faqs" },
          ].map(({ label, path }) => (
            <a
              key={label}
              href={path}
              className="text-xl lg:text-2xl font-bold  text-white hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 ml-8"></div>
      </nav>
      <div className='relative flex left-135 bottom-94 px-9 py-2 bg-white text-black text-2xl font-bold rounded-full shadow-lg z-20 w-fit mx-auto'>
        <button>LOGIN</button>
      </div>
    </div>
  );
}
