import { motion } from "framer-motion";
    import { cn } from "@/lib/utils"; // tailwind-merge üçün helper

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-[#1c1c1c] border border-[#2e2e2e] rounded-[32px] p-6 md:p-8",
        "light:bg-gray-100 light:border-gray-200", // Light mode üçün
        className
      )}
    >
      {children}
    </motion.div>
  );
};