"use client";

import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[640px] mx-auto px-3 mt-2 "
    >
      <div className="bg-[var(--card)] border border-[var(--card-border)] rounded-[28px] px-4 py-5 md:py-4 ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Profile Image */}

          <div className="relative w-full h-[300px] md:w-[180px] md:h-[180px] flex-shrink-0">
            <Image
              src="/profile.avif"
              alt="Jonathan Unti"
              fill
              className="object-cover rounded-[22px] border"
              priority
            />
          </div>

          {/* Content */}

          <div className="flex flex-col items-center  md:items-start text-center md:text-left flex-1">
            {/* Status */}

            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-25"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>

              <span className="text-[12px] font-medium tracking-wide text-[var(--text-muted)]">
                Available for Work
              </span>
            </div>

            {/* Name */}

            <h1 className="text-3xl md:text-[34px] font-normal tracking-tight mb-1">
              Jonathan Unti
            </h1>

            {/* Role */}

            <p className="text-[15px] text-[var(--text-muted)] md:mb-10 mb-4">
              Senior Designer at Swissio Agency
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button className="flex items-center justify-center cursor-pointer gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium border border-neutral-500/10 hover:bg-[var(--btn-hover)] text-[var(--foreground)]  transition-all active:scale-95 shadow-sm">
                <Download size={16} strokeWidth={2.5} />
                Download CV
              </button>

              <button className="flex items-center justify-center cursor-pointer gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium border border-neutral-500/10 hover:bg-[var(--btn-hover)] text-[var(--foreground)] transition-all active:scale-95 shadow-sm">
                <Mail size={16} strokeWidth={2.5} />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
