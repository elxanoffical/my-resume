"use client";

import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[640px] mx-auto px-3 mt-2"
    >
      <div className="rounded-[28px] px-4 py-5 md:py-4  
                      bg-white dark:bg-neutral-800/60 ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">

          <div className="relative w-full h-[300px] md:w-[180px] md:h-[180px] flex-shrink-0">
            <Image
              src="/profile.avif"
              alt="Jonathan Unti"
              fill
              className="object-cover rounded-[22px] border border-neutral-200 dark:border-neutral-800"
              priority
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">

            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2 ">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[12px] font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
                Available for Work
              </span>
            </div>

            <h1 className="text-3xl md:text-[34px] font-normal tracking-tight mb-1">
              Jonathan Unti
            </h1>

            <p className="text-[15px] text-neutral-500 dark:text-neutral-300 md:mb-10 mb-4">
              Senior Designer at Swissio Agency
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] md:text-[12px] font-medium
                                 border border-neutral-200 dark:border-neutral-700
                                 bg-white hover:bg-neutral-200 cursor-pointer
                                 dark:bg-neutral-900/20 dark:hover:bg-neutral-700/40
                                 transition-all active:scale-95">
                <Download size={14} strokeWidth={1.5} />
                Download CV
              </button>

              <button className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] md:text-[12px] font-medium
                                 border border-neutral-200 dark:border-neutral-700
                                 bg-white hover:bg-neutral-200 cursor-pointer
                                 dark:bg-neutral-900/20 dark:hover:bg-neutral-700/40
                                 transition-all active:scale-95">
                <Mail size={14} strokeWidth={1.5} />
                Get in Touch
              </button>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}