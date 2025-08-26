"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [dots, setDots] = useState("");

  // Simple dots animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-red-300 text-red-700 font-poppins px-4 text-center">
      
      {/* Spinning Gear */}
      <div className="mb-8 animate-spin-slow">
        <svg
          className="w-24 h-24 text-red-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v2m0 12v2m8-8h-2M4 12H2m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce">
        Coming Soon
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl mb-8 text-neutral-700">
        We are working hard to launch our website{dots}
      </p>

      {/* Optional Image */}
      <div className="mb-8">
        <Image
          src="/under-construction.png"
          alt="Under Construction"
          width={200}
          height={200}
          className="animate-float"
        />
      </div>

      {/* Notify Me Button */}
      <a
        href="mailto:info@simassociates.com"
        className="inline-block bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-red-800 transition-all animate-pulse"
      >
        Notify Me
      </a>
    </div>
  );
}
