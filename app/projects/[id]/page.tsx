"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Moon } from "lucide-react";
import { projectsData } from "@/data/projects";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function ProjectPage() {
  const { id } = useParams();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // immediate: true -> animasiyasız, dərhal yuxarı atır
      // force: true -> hər ehtimala qarşı skrolu məcbur edir
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Əgər hansısa səbəbdən Lenis hələ yüklənməyibsə, köhnə üsul
      window.scrollTo(0, 0);
    }
  }, [id, lenis]); // id hər dəyişəndə (yeni proyektə keçəndə) işləyəcək

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  if (!project)
    return <div className="text-center py-20">Project not found.</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-[640px] mx-auto px-3 mt-2"
    >
      {/* 2. Info Card (Ayrıca Div) */}
      <div
        className="rounded-[28px]  bg-white 
                    dark:bg-neutral-800/60 dark:border-neutral-800 p-4 mb-2"
      >
        <Link
          href="/"
          className="w-9 h-9 rounded-lg hover:w-13 transition-all duration-300 bg-neutral-100 dark:bg-neutral-700/40 flex items-center justify-center mb-4"
        >
          <ArrowLeft
            size={18}
            className="text-neutral-500 dark:text-neutral-300"
          />
        </Link>
        <h1 className="text-[32px] md:text-[40px] font-bold mb-5 dark:text-white leading-tight tracking-tight">
          {project.title}
        </h1>
        <div className="grid grid-cols-2 gap-4 p-4 rounded-[22px] border border-neutral-200/70 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/10 mb-2">
          <div>
            <p className="text-[11px] text-neutral-600 font-bold uppercase mb-1">
              Industry
            </p>
            <p className="text-[14px] font-normal text-neutral-500 dark:text-neutral-400">
              {project.industry}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-600 font-bold uppercase mb-1">
              Year
            </p>
            <p className="text-[14px] font-normal text-neutral-500 dark:text-neutral-400">
              {project.year}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-600 font-bold uppercase mb-1">
              Client
            </p>
            <p className="text-[14px] font-normal text-neutral-500 dark:text-neutral-400">
              {project.client}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-neutral-600 font-bold uppercase mb-1">
              Services
            </p>
            <p className="text-[14px] font-normal text-neutral-500 dark:text-neutral-400">
              {project.services}
            </p>
          </div>
        </div>
        <div className="gap-4 p-4 rounded-[22px] border border-neutral-200/70 dark:border-neutral-700/50">
          <p className="text-[11px] text-neutral-600 font-bold uppercase ">
            Description
          </p>
          <p className="text-[15px] md:text-[12px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium">
            {project.description}
          </p>
        </div>
      </div>

      {/* 3. Images Gallery */}
      <div className="space-y-3 mb-2 bg-white dark:bg-neutral-800/60 rounded-[28px] p-4">
        {project.images.map((img, idx) => (
          <div
            key={idx}
            className="w-full rounded-[18px] overflow-hidden border border-neutral-100 dark:border-neutral-700/50"
          >
            <Image
              src={img}
              alt={`${project.title}-${idx}`}
              width={1200} // Şəklin keyfiyyəti üçün yüksək rəqəm veririk
              height={0} // Hündürlük avtomatik hesablanacaq
              sizes="100vw"
              className="w-full h-auto block" // Şəkil tam genişlikdə və orijinal hündürlükdə olacaq
              priority={idx === 0} // İlk şəklin tez yüklənməsi üçün
            />
          </div>
        ))}
      </div>

      {/* 4. Footer (Next Project & Contact - Ayrıca Div-lərdə) */}
      <div className="space-y-4 mb-2">
        <div className="p-4 rounded-[28px] bg-white dark:bg-neutral-800/60 border border-neutral-100 dark:border-neutral-700/30">
          {/* "Next Project" Badge Style */}
          <div
            className="inline-block items-center justify-center px-2 py-2 rounded-lg mb-4 bg-neutral-200 text-neutral-700
           dark:bg-neutral-700/70 dark:text-neutral-300 text-[12px] md:text-[11px] font-bold tracking-wider"
          >
            Next Project
          </div>

          <Link href={`/projects/${nextProject.id}`} scroll={true}>
            <div
              className="group flex flex-col p-3 rounded-[22px]  dark:bg-neutral-900/40
             hover:bg-neutral-100/50 dark:hover:bg-neutral-800/40 transition-all duration-300"
            >
              {/* Şəkil Konteyneri */}
              <div className="w-full relative rounded-[18px] overflow-hidden bg-neutral-200">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  width={1200}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto block"
                />
              </div>

              {/* Başlıq və Düymə Hissəsi */}
              <div className="flex items-center justify-between mt-4 px-1">
                <div className="flex flex-col">
                  <span className="font-bold text-[18px] text-neutral-800 dark:text-white">
                    {nextProject.title}
                  </span>
                  {/* Əgər datada varsa sub-text (məs: Eyewear) əlavə edilə bilər */}
                  <span className="text-[12px] text-neutral-500 dark:text-neutral-400">
                    {nextProject.category || "Project View"}
                  </span>
                </div>

                <button className="w-8 h-8 rounded-lg group-hover:w-11 transition-all duration-300 bg-neutral-200/50 dark:bg-neutral-700/50 flex items-center justify-center">
                  <ArrowRight
                    size={16}
                    className="text-neutral-600 dark:text-neutral-400"
                  />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
