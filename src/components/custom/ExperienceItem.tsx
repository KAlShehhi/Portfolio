import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type ExperienceItemProps = {
  date: string;
  title: string;
  company?: string;
  location: string;
  type?: string;
  description?: string;
  isWork: boolean;
  isCurrent: boolean;
  isLast?: boolean;
};

export function ExperienceItem({ date, title, company, location, type, description, isWork, isCurrent, isLast }: ExperienceItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="flex flex-row items-start gap-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="uppercase w-28 shrink-0 hidden lg:flex">{date}</div>
      <div className="hidden lg:flex flex-col items-center self-stretch">
        <div className={`h-4 w-4 ${isCurrent ? 'bg-chart-2' : 'border'} rounded-full`} />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border rounded-full my-1" />
        )}
      </div>
      <div className="flex-1 min-w-0 bg-primary-foreground rounded-lg border shadow p-4 lg:p-6 text-primary">
        <div className="flex gap-3">
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm uppercase text-muted-foreground lg:hidden">{date}</span>
            <span className="text-xl lg:text-2xl font-bold text-balance leading-tight">{title}</span>
            <p className="text-xs text-muted-foreground text-pretty">
              {[company, location, type]
                .filter(Boolean)
                .join(" - ")}
            </p>
            {description && (
              <>
                <span
                  className={cn(
                    "mt-3 text-sm text-pretty lg:text-base lg:line-clamp-none",
                    !expanded && "line-clamp-3"
                  )}
                >
                  {description}
                </span>
                <button
                  type="button"
                  onClick={() => setExpanded((value) => !value)}
                  className="mt-2 w-fit text-sm text-muted-foreground underline underline-offset-4 lg:hidden"
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              </>
            )}
          </div>
          <div className={`shrink-0 h-fit rounded-lg p-2 ${isCurrent ? "bg-secondary-foreground text-secondary" : "bg-secondary text-secondary-foreground"} uppercase text-xs lg:text-sm`}>
            {isWork ? "WORK" : "EDUCATION"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
