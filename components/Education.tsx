"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    school: "Bern University of Applied Sciences",
    degree: "Bachelor of Arts / Visual Communication",
    period: "September 2016 - June 2020",
    location: "Bern, CH",
    description: "Studied Visual Communication (BA) in Bern, developing skills in graphic design, branding, and visual systems.",
  },
  {
    school: "International School of Bern",
    degree: "University Preparatory Education",
    period: "September 2010 - June 2016",
    location: "Bern, CH",
    description: "Completed upper secondary education at a Gymnasium in Bern, Switzerland, with a strong academic and university-preparatory focus.",
  },
];

export default function Education() {
  return (
    <motion.section
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
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
          Education
        </div>

        {/* Təhsil Siyahısı */}
        <div className="space-y-2">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="p-4 rounded-[22px] border border-neutral-200 dark:border-neutral-700/50 
                         dark:bg-neutral-900/20"
            >
              <div className="flex flex-col gap-1 mb-3">
                {/* Universitet/Məktəb Adı */}
                <h4 className="text-[13px] md:text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
                  {edu.school}
                </h4>
                {/* Dərəcə/İxtisas */}
                <h3 className="text-[17px] font-semibold text-neutral-800 dark:text-neutral-100 leading-tight">
                  {edu.degree}
                </h3>
              </div>

              {/* Təsvir */}
              <p className="text-[14px] md:text-[12px] leading-[1.6] text-neutral-600 dark:text-neutral-400 mb-5 font-medium">
                {edu.description}
              </p>

              {/* Meta Məlumatlar (Tarix və Yer) */}
              <div className="flex flex-wrap gap-2 md:gap-4 text-[13px] md:text-[12px] text-neutral-500 dark:text-neutral-500 font-medium">
                <div className="flex items-center gap-1">
                  <Calendar size={14} strokeWidth={2} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} strokeWidth={2} />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}