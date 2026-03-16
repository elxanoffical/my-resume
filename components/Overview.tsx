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
        className="mt-2 rounded-[28px] shadow-sm px-4 py-4 border
                      bg-white border-neutral-200
                      dark:bg-neutral-800/60 dark:border-neutral-800"
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
                        text-neutral-600 dark:text-neutral-300"
        >
          <p>
            Senior Designer with a strong background in brand and digital
            design, currently based in Zurich. Experienced in creating projects
            from early concept through to final delivery, combining strategic
            thinking with a hands-on design approach.
          </p>
          <p>
            I enjoy shaping visual identities, defining design systems, and
            guiding teams to produce work that is both conceptually strong and
            meticulously crafted. With experience in agency environments, I work
            closely with clients and collaborators to create meaningful,
            long-lasting design solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
