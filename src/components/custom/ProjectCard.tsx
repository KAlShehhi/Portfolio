import type { ComponentProps, ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";

export type ProjectLink = {
  label: string;
  href: string;
  icon?: ReactNode;
  variant?: ComponentProps<typeof Button>["variant"];
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  links?: ProjectLink[];
};

export function ProjectCard({ title, description, image, links }: ProjectCardProps) {
  return (
    <motion.div
      className="flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <AspectRatio ratio={16 / 9}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      <div className="bg-secondary p-3 border-t flex flex-1 flex-col gap-3">
        <span className="text-2xl font-bold text-balance">{title}</span>
        <span className="text-sm">{description}</span>
        {links && links.length > 0 && (
          <div className="mt-auto flex flex-row flex-wrap gap-2">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={link.variant}
                className="w-fit"
                render={
                  <a href={link.href} target="_blank" rel="noopener noreferrer" />
                }
              >
                {link.label} {link.icon ?? <Link />}
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
