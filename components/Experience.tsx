"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Swissio Agency",
    role: "Senior Designer",
    period: "July 2024 - Now",
    location: "Zurich, CH",
    description: "From early concept through final delivery, I guide projects with a balance of strategic insight and hands-on design. My agency experience allows me to work closely with clients and collaborators to deliver impactful, long-lasting solutions.",
    logo: "/experince/Swissio.svg", 
  },
  {
    company: "Dethrone Studio",
    role: "Intermediate Graphic Designer & Coding Intern",
    period: "August 2022 - June 2024",
    location: "Milan, IT",
    description: "As an Intermediate Graphic Designer and Coding Intern, I supported brand and digital projects, combining visual design with basic front-end development to deliver cohesive design solutions.",
    logo: "/experince/dethrone.svg",
  },
  {
    company: "Moondo Studio",
    role: "Junior Graphic Designer",
    period: "September 2020 - July 2022",
    location: "Bern, CH",
    description: "First role as a Junior Graphic Designer in a studio environment, assisting with branding, digital assets, and visual design across client projects.",
    logo: "/experince/moondo.svg",
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-[640px] mx-auto px-3 mb-2"
    >
      <div className="rounded-[28px] shadow-sm px-4 py-4 border
                      bg-white border-neutral-200
                      dark:bg-neutral-800/60 dark:border-neutral-800">
        
        {/* Başlıq Badge */}
        <div className="inline-flex items-center justify-center px-2 py-2 rounded-lg mb-4
                        bg-neutral-200 text-neutral-700
                        dark:bg-neutral-700/70 dark:text-neutral-300
                        text-[12px] md:text-[11px] font-bold tracking-wider">
          Experience
        </div>

        {/* Təcrübə Siyahısı */}
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-4 rounded-[22px] border border-neutral-200 dark:border-neutral-700/50 
                         dark:bg-neutral-900/20"
            >
              {/* Ana Konteyner: Loqo və Mətnləri yan-yana gətirir */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                
                {/* 1. Div: Şirkət Loqosu (Sol sütun) */}
                <div className="relative w-11 h-11 md:w-9 md:h-9 shrink-0 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <Image 
                    src={exp.logo} 
                    alt={exp.company} 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* 2. Div: Bütün Yazılı Məlumatlar (Sağ sütun) */}
                <div className="flex-1 min-w-0 ">
                  {/* Şirkət və Vəzifə */}
                  <div className="mb-3">
                    <h4 className="text-[13px] md:text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                      {exp.company}
                    </h4>
                    <h3 className="text-[17px] font-semibold text-neutral-800 dark:text-neutral-100 leading-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Təsvir - Artıq loqonun altına keçmir */}
                  <p className="text-[14px] md:text-[12px] leading-[1.6] text-neutral-600 dark:text-neutral-400 mb-5 font-medium">
                    {exp.description}
                  </p>

                  {/* Meta Məlumatlar (Tarix və Yer) */}
                  <div className="flex flex-wrap gap-4 text-[13px] md:text-[12px] text-neutral-500 dark:text-neutral-500 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} strokeWidth={2} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} strokeWidth={2} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}