"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const contacts = [
  { label: "E-mail", value: "elxanmeherremli9@gmail.com", href: "mailto:elxanmeherremli9@gmail.com" },
  { label: "Phone", value: "+994 55 492 67 31", href: "tel:+994554926731" },
  { label: "LinkedIn", value: "in/meherremli", href: "https://linkedin.com/in/meherremli" },
];

export default function Contact() {
  return (
    <footer className="max-w-[640px] mx-auto px-3">
      <motion.section
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="rounded-[28px] shadow-sm px-4 py-4 border
                   bg-white border-neutral-200
                   dark:bg-neutral-800/60 dark:border-neutral-800 mb-6"
      >
        <div className="space-y-2">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-[22px] border border-neutral-100 dark:border-neutral-700/50 
                         bg-neutral-50/50 dark:bg-neutral-900/20 flex items-center justify-between
                         hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all duration-150 group"
            >
              {/* Sol tərəf: Etiket */}
              <span className="text-[14px] text-neutral-500 dark:text-neutral-400 font-medium">
                {contact.label}
              </span>

              {/* Sağ tərəf: Dəyər və Ox düyməsi */}
              <div className="flex items-center gap-3">
                <span className="text-[12px] md:text-[16px] font-semibold text-neutral-800 dark:text-neutral-100">
                  {contact.value}
                </span>
                <div className="w-8 h-8 rounded-lg group-hover:w-11 transition-all duration-300 bg-neutral-200/50 dark:bg-neutral-700/50 
                                flex items-center justify-center 
                                dark:group-hover:bg-neutral-700">
                  <ArrowRight size={16} className="text-neutral-600 dark:text-neutral-400" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <div className="text-center">
        <p className="text-[12px] text-neutral-500 dark:text-neutral-500 font-medium tracking-tight">
          2026 © Elxan Meherremli
        </p>
      </div>
    </footer>
  );
}