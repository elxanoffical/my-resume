"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <motion.section
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-[640px] mx-auto px-3 mb-2"
    >
      <div className="rounded-[28px]  px-4 py-4  bg-white  dark:bg-neutral-800/60 ">
        <div className="inline-flex items-center justify-center px-2 py-2 rounded-lg mb-4 bg-neutral-200 text-neutral-700 dark:bg-neutral-700/70 dark:text-neutral-300 text-[12px] md:text-[11px] font-bold tracking-wider">
          Projects
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectsData.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <motion.div className="group cursor-pointer border border-neutral-200 dark:border-neutral-700/40 rounded-[22px] p-3 hover:bg-neutral-100/30 hover:dark:bg-neutral-800/20 transition-colors">
                <div className="relative aspect-[4/3] w-full mb-3 overflow-hidden rounded-[22px] bg-[#F5F5F5] dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-center"
                  />
                </div>
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h3 className="text-[15px] font-semibold text-neutral-800 dark:text-neutral-100">{project.title}</h3>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 md:w-8 md:h-8 rounded-lg flex items-center justify-center bg-neutral-200/60 dark:bg-neutral-700/50 group-hover:w-12 transition-all duration-300">
                    <ArrowRight size={16} className="text-neutral-600 dark:text-neutral-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}