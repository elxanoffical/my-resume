"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "Framer",
    description: "No-Code Website Builder",
    icon: "/tools/Framer.svg", 
  },
  {
    name: "Affinity",
    description: "Design Tool",
    icon: "/tools/Affinity.svg",
  },
  {
    name: "Adobe Illustrator",
    description: "Design Tool",
    icon: "/tools/Adobe.svg",
  },
  {
    name: "Cursor",
    description: "AI Code Tool",
    icon: "/tools/Cursor.svg",
  },
];

export default function Tools() {
  return (
    <motion.section
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="max-w-[640px] mx-auto px-3 mb-2"
    >
      <div className="rounded-[28px] px-4 py-4 
                      bg-white 
                      dark:bg-neutral-800/60 ">
        
        {/* Başlıq Badge */}
        <div className="inline-flex items-center justify-center px-2 py-2 rounded-lg mb-4
                        bg-neutral-200 text-neutral-700
                        dark:bg-neutral-700/70 dark:text-neutral-300
                        text-[12px] md:text-[11px] font-bold tracking-wider">
          Tools
        </div>

        {/* Tools Grid - Mobil üçün 1, Desktop üçün 2 sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="p-4 rounded-[16px] border border-neutral-100 dark:border-neutral-700/50 cursor-pointer 
                         dark:bg-neutral-900/20 flex items-center gap-4 hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-all duration-150"
            >
              {/* Tool İkonu */}
              <div className="relative w-15 h-15 md:w-13 md:h-13 shrink-0 overflow-hidden rounded-lg">
                <Image 
                  src={tool.icon} 
                  alt={tool.name} 
                  fill 
                  className="object-cover "
                />
              </div>

              {/* Mətnlər */}
              <div className="flex flex-col">
                <h3 className="text-[17px] font-semibold text-neutral-800 dark:text-neutral-100 leading-tight">
                  {tool.name}
                </h3>
                <p className="text-[13px] md:text-[12px] text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}