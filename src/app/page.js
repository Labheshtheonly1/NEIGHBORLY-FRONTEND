'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import FeaturesPage from "./components/features";
import Faq from "./components/faq";
import Footer from "./components/Footer";
import About from "./components/About"; // <-- Corrected import path

export default function Home() {
  const [transparencyVisible, setTransparencyVisible] = useState(false);
  const [accountabilityVisible, setAccountabilityVisible] = useState(false);
  const [inclusivityVisible, setInclusivityVisible] = useState(false);
  const sectionRefs = useRef([]);

  const transparencySvgRef = useRef(null);
  const transparencyTextRef = useRef(null);
  const accountabilitySvgRef = useRef(null);
  const accountabilityTextRef = useRef(null);
  const inclusivitySvgRef = useRef(null);
  const inclusivityTextRef = useRef(null);
  const svgPathRef = useRef(null);

  const [svgPath, setSvgPath] = useState('');

  const updateSvgPath = () => {
    if (
      !transparencySvgRef.current ||
      !transparencyTextRef.current ||
      !accountabilitySvgRef.current ||
      !accountabilityTextRef.current ||
      !inclusivitySvgRef.current ||
      !inclusivityTextRef.current
    ) {
      return;
    }

    const transparencySvgRect = transparencySvgRef.current.getBoundingClientRect();
    const transparencyTextRect = transparencyTextRef.current.getBoundingClientRect();
    const accountabilitySvgRect = accountabilitySvgRef.current.getBoundingClientRect();
    const accountabilityTextRect = accountabilityTextRef.current.getBoundingClientRect();
    const inclusivitySvgRect = inclusivitySvgRef.current.getBoundingClientRect();
    const inclusivityTextRect = inclusivityTextRef.current.getBoundingClientRect();

    const scrollY = window.scrollY;

    const startX = transparencySvgRect.left + transparencySvgRect.width / 2;
    const startY = transparencySvgRect.top + transparencySvgRect.height / 2 + scrollY;
    const midX1 = transparencyTextRect.left + transparencyTextRect.width / 2;
    const midY1 = transparencyTextRect.top + transparencyTextRect.height / 2 + scrollY;
    const midX2 = accountabilitySvgRect.left + accountabilitySvgRect.width / 2;
    const midY2 = accountabilitySvgRect.top + accountabilitySvgRect.height / 2 + scrollY;
    const midX3 = accountabilityTextRect.left + accountabilityTextRect.width / 2;
    const midY3 = accountabilityTextRect.top + accountabilityTextRect.height / 2 + scrollY;
    const endX = inclusivitySvgRect.left + inclusivitySvgRect.width / 2;
    const endY = inclusivitySvgRect.top + inclusivitySvgRect.height / 2 + scrollY;

   
    const controlPoint1X = startX;
    const controlPoint1Y = midY1;
    const controlPoint2X = midX1;
    const controlPoint2Y = midY2;
    const controlPoint3X = midX2;
    const controlPoint3Y = midY3;
    const controlPoint4X = endX;
    const controlPoint4Y = endY;


    const pathData = `M${startX} ${startY}
                      C${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${midX2} ${midY2}
                      C${controlPoint3X} ${controlPoint3Y}, ${controlPoint4X} ${controlPoint4Y}, ${endX} ${endY}`;
                      
    setSvgPath(pathData);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'transparency') setTransparencyVisible(true);
          if (entry.target.id === 'accountability') setAccountabilityVisible(true);
          if (entry.target.id === 'inclusivity') setInclusivityVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateSvgPath);
    window.addEventListener('resize', updateSvgPath);
    updateSvgPath();
    return () => {
      window.removeEventListener('scroll', updateSvgPath);
      window.removeEventListener('resize', updateSvgPath);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative">
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        >
          <path
            ref={svgPathRef}
            d={svgPath}
            stroke="#54D1DC"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <div id="home">
          <LandingPage />
        </div>

        <div id="about" className="bg-gray-950 text-white flex flex-col space-y-24 relative z-20">
          <About />
        </div>

        <div id="features">
          <FeaturesPage />
        </div>
        
        <div id="faqs">
          <Faq />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}