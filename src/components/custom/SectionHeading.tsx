import { motion } from "motion/react";

type SectionHeadingProps = {
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-muted-foreground uppercase text-sm">{index}</span>
      <span className="font-serif text-4xl">{title}</span>
    </motion.div>
  );
}
