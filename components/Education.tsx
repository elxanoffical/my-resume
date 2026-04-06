"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    school: "Adams Digital Agency",
    degree: "Full Stack Development Program",
    period: "2024 - 2025",
    location: "Baku, AZ",
    description:
      "Deepened expertise in Next.js, Node.js, and MongoDB through complex projects. Focused on building REST/GraphQL APIs, implementing JWT-based authentication with NextAuth.js, and managing dynamic content using Strapi CMS.",
  },
  {
    school: "IT Innovation Academy",
    degree: "Front-end Development Course",
    period: "2023 - 2024",
    location: "Baku, AZ",
    description:
      "Mastered fundamental web technologies including HTML, CSS, JavaScript, and React. Specialized in component-based architecture, state management, and modern UI/UX best practices while working on real-world projects under professional mentorship.",
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
      <div
        className="rounded-[28px] px-4 py-4 
                      bg-white 
                      dark:bg-neutral-800/60 "
      >
        {/* Başlıq Badge */}
        <div
          className="inline-flex items-center justify-center px-2 py-2 rounded-lg mb-4
                        bg-neutral-200 text-neutral-700
                        dark:bg-neutral-700/70 dark:text-neutral-300
                        text-[12px] md:text-[11px] font-bold tracking-wider"
        >
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
