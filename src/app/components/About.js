'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// The individual item component with parallax and staggered animations
const AnimatedItem = ({ id, text, imgSrc, isReversed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  const textVariants = {
    hidden: { opacity: 0, x: isReversed ? 150 : -150, skewX: isReversed ? -10 : 10 },
    visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  // Determine the glow color class based on the item ID
  let glowColorClass = '';
  if (id === 'transparency') {
    glowColorClass = 'bg-purple-500'; // Purple for transparency
  } else if (id === 'accountability') {
    glowColorClass = 'bg-sky-400';    // Sky blue for accountability
  } else if (id === 'inclusivity') {
    glowColorClass = 'bg-white';      // White for inclusivity
  }

  return (
    <div
      ref={ref}
      id={id}
      className={`min-h-[100vh] relative p-8 flex items-center justify-center overflow-hidden`}
    >
      <div className={`w-full max-w-6xl flex items-center justify-between ${isReversed ? 'flex-row-reverse' : ''}`}>
        <motion.div
          style={{ y: imageY }}
          className="flex-1 p-4 z-10"
        >
          <div className="relative animate-float">
            <Image src={imgSrc} alt={text} width={500} height={500} />
            {/* Conditional glow element */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 rounded-full blur-3xl opacity-60 ${glowColorClass}`}></div>
          </div>
        </motion.div>
        <div className="flex-1 p-4 text-center z-20">
          <motion.h3
            className={`text-5xl font-extrabold drop-shadow-lg text-[#54D1DC]`}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {text}
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

// The main About section component
export default function About() {
  return (
    <section className="bg-gray-950 text-white relative">
      <div className="sticky top-0 bg-gray-950 text-white pt-20 pb-16 z-30">
        <h2 className="text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#54D1DC] to-white">
          Why Choose Us?
        </h2>
      </div>
      <div className="relative z-10">
        <AnimatedItem
          id="transparency"
          text="TRANSPARENCY"
          imgSrc="/transparency.svg"
          isReversed={false}
        />
        <AnimatedItem
          id="accountability"
          text="ACCOUNTABILITY"
          imgSrc="/accountability.svg"
          isReversed={true}
        />
        <AnimatedItem
          id="inclusivity"
          text="INCLUSIVITY"
          imgSrc="/inclusivity.svg"
          isReversed={false}
        />
      </div>
    </section>
  );
}