"use client";

import { useEffect, useState } from "react";

export default function MumbaiClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Always fetch time for Mumbai (Asia/Kolkata timezone)
      const now = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="serif-typeface text-2xl uppercase">
      MUMBAI, INDIA : {time}
    </div>
  );
}
