"use client";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400"
    >
      <div className="flex items-center gap-2">
        <MapPin size={16} />
        <span>Zurich, Switzerland</span>
      </div>
      <div className="flex items-center gap-2">
        <span>{time || "Loading..."}</span>
        <Clock size={16} />
      </div>
    </motion.div>
  );
};