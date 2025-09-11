"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center pt-24 pb-32">
      <h1 className="text-3xl md:text-4xl font-bold text-[#22e6dc] text-center mb-12">
        Why Choose Us?
      </h1>
      <div className="relative w-full max-w-3xl h-[600px] mx-auto z-10">
        {/* TRANSPARENCY */}
        <motion.div
          className="absolute right-0 top-0 flex flex-col items-center w-48"
          whileInView={{ y: [0, -18, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
        >
          <img
            src="/transparency.png"
            alt="Transparency"
            className="w-36 h-36 mb-2"
          />
          <span className="text-white text-xl font-bold text-center tracking-wide">
            TRANSPARENCY
          </span>
        </motion.div>
        {/* ACCOUNTABILITY */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/3 flex flex-col items-center w-52"
          whileInView={{ y: [0, -18, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
        >
          <img
            src="/accountability.png"
            alt="Accountability"
            className="w-36 h-36 mb-2"
          />
          <span className="text-[#22e6dc] text-xl font-bold text-center tracking-wide">
            ACCOUNTABILITY
          </span>
        </motion.div>
        {/* INCLUSIVITY */}
        <motion.div
          className="absolute left-0 bottom-0 flex flex-col items-center w-56"
          whileInView={{ y: [0, -18, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
        >
          <img
            src="/inclusivity.png"
            alt="Inclusivity"
            className="w-40 h-40 mb-2"
          />
          <span className="text-white text-xl font-bold text-center tracking-wide">
            INCLUSIVITY
          </span>
        </motion.div>
      </div>
    </section>
  );
}
