"use client";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <motion.section
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-[640px] mx-auto px-3 mb-2"
    >
      <div
        className="mt-2 rounded-[28px]  px-4 py-4 
                      bg-white 
                      dark:bg-neutral-800/60 "
      >
        <div
          className="inline-flex items-center justify-center px-2 py-2 rounded-lg mb-4
                        bg-neutral-200 text-neutral-700
                        dark:bg-neutral-700/70 dark:text-neutral-300
                        text-[12px] md:text-[11px] font-bold tracking-wider"
        >
          Overview
        </div>

        <div
          className="space-y-4.5 leading-[1.7] text-[15px] md:text-[12px] font-medium
                        text-neutral-600 dark:text-neutral-300/80"
        >
          <p>
            Frontend Developer based in Baku, dedicated to building clean and
            functional web applications. I focus on creating responsive
            interfaces that provide a seamless user experience across all
            devices, taking projects from initial ideas to finished products.
          </p>
          <p>
            I am passionate about writing organized code and developing simple
            yet effective digital solutions. My goal is to combine technical
            skills with a strong eye for detail to build websites that are both
            visually appealing and easy to use.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
