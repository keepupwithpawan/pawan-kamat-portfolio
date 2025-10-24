"use client";

import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface BoxProps {
  image: string;
  title: string;
  description?: string;
  height?: string;        // desktop height
  phoneHeight?: string;   // mobile/tablet height
  link?: string;
  contain?: boolean;
}

export default function Box({
  image,
  title,
  description,
  height = "50%",
  phoneHeight = "500px",
  link,
  contain = false,
}: BoxProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width **after mount** to be SSR-safe
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const boxHeight = isMobile ? phoneHeight : height;

  return (
    <div
      className="relative w-full rounded-lg hover:rounded-2xl overflow-hidden cursor-pointer"
      style={{ height: boxHeight }}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          contain ? "bg-contain bg-no-repeat bg-center bg-black" : "bg-cover bg-center"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 rounded-lg group-hover:rounded-2xl transition-all duration-300"></div>

      {/* Text + Icon */}
      <div className="relative z-10 w-full h-full flex justify-between items-end p-6 text-white">
        <div>
          <h2 className="serif-typeface text-(--color-foreground) text-2xl mb-1 max-lg:text-3xl font-light">
            {title}
          </h2>
          {description && (
            <p className="max-w-[80%] text-lg text-(--color-foreground)/70 font-light">
              {description}
            </p>
          )}
        </div>

        {link && (
          <div className="flex justify-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 z-10 bg-white text-black text-2xl p-3 rounded-full shadow-md hover:bg-white/80 transition-all duration-300"
            >
              <FiArrowUpRight />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
