import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-52">
        {/* Left - About */}
        <div>
          <p className="text-sm leading-relaxed">
            <span className="text-teal-400 font-semibold">Neighborly</span> is a
            smart society management platform that connects residents, staff,
            and admins in one place. From paying maintenance and booking
            facilities to raising complaints and staying updated with notices,
            Neighborly makes community living easy, transparent, and
            hassle-free.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-teal-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-teal-400">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="hover:text-teal-400">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-teal-400">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-teal-400">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-teal-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:xyz@gmail.com" className="hover:text-teal-400">
                xyz@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+91678567567" className="hover:text-teal-400">
                +91 678567567
              </a>
            </li>
            <li>
              <span className="hover:text-teal-400 cursor-pointer">
                Vellore, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © 2025 Neighborly. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
