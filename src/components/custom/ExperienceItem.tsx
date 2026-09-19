import { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export type ExperienceRole = {
  date: string;
  title: string;
  type?: string;
  description?: string;
  isCurrent?: boolean;
};

type ExperienceItemProps = {
  company?: string;
  location: string;
  roles: ExperienceRole[];
  isWork: boolean;
  isLast?: boolean;
};

function spanOf(roles: ExperienceRole[]) {
  if (roles.length === 1) return roles[0].date;
  const [start] = roles[roles.length - 1].date.split(" - ");
  const [, end] = roles[0].date.split(" - ");
  return `${start} - ${end ?? start}`;
}

function Role({ role, showTitle }: { role: ExperienceRole; showTitle: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      {showTitle && (
        <span className="font-bold leading-tight">{role.title}</span>
      )}
      <p className="text-xs text-muted-foreground text-pretty">
        {[role.date, role.type].filter(Boolean).join("\u00A0- ")}
      </p>
      {role.description && (
        <>
          <span
            className={cn(
              "mt-2 text-sm text-pretty lg:text-base lg:line-clamp-none",
              !expanded && "line-clamp-3"
            )}
          >
            {role.description}
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
  );
}

export function ExperienceItem({ company, location, roles, isWork, isLast }: ExperienceItemProps) {
  const isCurrent = roles.some((role) => role.isCurrent);
  const heading = company ?? roles[0].title;

  return (
    <motion.div
      className="flex flex-row items-start gap-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="uppercase w-28 shrink-0 hidden lg:flex">{spanOf(roles)}</div>
      <div className="hidden lg:flex flex-col items-center self-stretch">
        <div className={`h-4 w-4 ${isCurrent ? 'bg-chart-2' : 'border'} rounded-full`} />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border rounded-full my-1" />
        )}
      </div>
      <div className="flex-1 min-w-0 bg-primary-foreground rounded-lg border shadow p-4 lg:p-6 text-primary">
        <div className="flex gap-3">
          <div className="flex flex-col flex-1 min-w-0 gap-3">
            <div className="flex flex-col">
              <span className="text-sm uppercase text-muted-foreground lg:hidden">
                {spanOf(roles)}
              </span>
              <span className="text-xl lg:text-2xl font-bold text-balance leading-tight">
                {heading}
              </span>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            {roles.map((role) => (
              <Role key={role.title + role.date} role={role} showTitle={Boolean(company)} />
            ))}
          </div>
          <div className={`shrink-0 h-fit rounded-lg p-2 ${isCurrent ? "bg-secondary-foreground text-secondary" : "bg-secondary text-secondary-foreground"} uppercase text-xs lg:text-sm`}>
            {isWork ? "WORK" : "EDUCATION"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
