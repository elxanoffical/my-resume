"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Moon } from "lucide-react";
import { projectsData } from "@/data/projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function ProjectPage() {
  const { id } = useParams();
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  if (!project) return <div className="text-center py-20">Project not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[640px] mx-auto px-3 mt-3"
    >

      {/* 2. Info Card (Ayrıca Div) */}
      <div className="rounded-[28px] border border-neutral-200 bg-white 
                    dark:bg-neutral-800/60 dark:border-neutral-800 p-4 shadow-sm mb-2">
        <Link href="/" className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-700/40 flex items-center justify-center mb-4 
        hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700/50">
          <ArrowLeft size={18} className="text-neutral-600 dark:text-neutral-300" />
        </Link>
        <h1 className="text-[32px] md:text-[40px] font-bold mb-5 dark:text-white leading-tight tracking-tight">{project.title}</h1>
        <div className="grid grid-cols-2 gap-4 p-5 rounded-[22px] border border-neutral-100 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/10 mb-2">
          <div>
            <p className="text-[11px] text-neutral-300 font-bold uppercase mb-1">Industry</p>
            <p className="text-[14px] font-semibold dark:text-neutral-400">{project.industry}</p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-300 font-bold uppercase mb-1">Year</p>
            <p className="text-[14px] font-semibold dark:text-neutral-400">{project.year}</p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-300 font-bold uppercase mb-1">Client</p>
            <p className="text-[14px] font-semibold dark:text-neutral-400">{project.client}</p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-300 font-bold uppercase mb-1">Services</p>
            <p className="text-[14px] font-semibold dark:text-neutral-400">{project.services}</p>
          </div>
        </div>
        <div className="gap-4 p-5 rounded-[22px] border border-neutral-100 dark:border-neutral-700/50">
          <p className="text-[11px] text-neutral-300 font-bold uppercase ">Description</p>
          <p className="text-[15px] md:text-[12px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium">{project.description}</p>
        </div>
      </div>

      {/* 3. Images Gallery (Hər şəkil üçün ayrı div) */}
      <div className="space-y-4 mb-4">
        {project.images.map((img, idx) => (
          <div key={idx} className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm bg-white dark:bg-neutral-800/60 p-4">
             <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <Image src={img} alt={`${project.title}-${idx}`} fill className="object-center" />
             </div>
          </div>
        ))}
      </div>

      {/* 4. Footer (Next Project & Contact - Ayrıca Div-lərdə) */}
      <div className="space-y-4 mb-2">
        <div className="p-4 rounded-[28px] border border-neutral-200 bg-white dark:bg-neutral-800/60 dark:border-neutral-800 shadow-sm">
            <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-4 px-2">Next Project</p>
            <Link href={`/projects/${nextProject.id}`}>
              <div className="group flex items-center justify-between p-3 rounded-[22px] bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-11 relative rounded-lg overflow-hidden bg-neutral-200">
                        <Image src={nextProject.image} alt="Next" fill className="object-cover" />
                    </div>
                    <span className="font-bold text-[16px] dark:text-white">{nextProject.title}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white dark:bg-neutral-700 flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </div>
              </div>
            </Link>
        </div>
      </div>
    </motion.div>
  );
}