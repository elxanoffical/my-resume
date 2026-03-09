"use client"
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-[640px] mx-auto px-3 mb-4"
    >
      <div className="bg-[var(--card)] border border-[var(--card-border)] mt-2 rounded-[28px] shadow-sm px-4 py-5">
        {/* Balaca Etiket */}
        <div className="inline-flex items-center justify-center px-2 py-2 rounded-lg bg-neutral-700 dark:bg-neutral-800/60 text-[12px] md:text-[11px]
         font-bold tracking-wider text-[var(--text-muted)] text-neutral-200 dark:text-neutral-400 mb-4">
          Overview
        </div>
        
        {/* Əsas Mətn */}
        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-[1.7] text-[15px] md:text-[16px] font-medium">
          <p>
            Senior Designer with a strong background in brand and digital design, currently based in Zurich. 
            Experienced in creating projects from early concept through to final delivery, combining strategic thinking with a hands-on design approach.
          </p>
          <p>
            I enjoy shaping visual identities, defining design systems, and guiding teams to produce work that 
            is both conceptually strong and meticulously crafted. With experience in agency environments, I work closely with clients and collaborators to create meaningful, long-lasting design solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}