import type { ComponentType, SVGProps } from "react"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"
type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>

type StackItemProps = {
  name: string
  iconClassName?: string
  className?: string
} & (
  | { icon: IconDefinition; svg?: never }
  | { svg: SvgIcon; icon?: never }
)

export function StackItem({
  icon,
  svg: Svg,
  name,
  iconClassName,
  className,
}: StackItemProps) {
  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border px-3 py-2",
        className
      )}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {Svg ? (
        <Svg
          aria-hidden
          className={cn("size-6 shrink-0", iconClassName)}
        />
      ) : (
        <FontAwesomeIcon
          icon={icon!}
          className={cn("size-6 shrink-0", iconClassName)}
        />
      )}
      <span className="uppercase">{name}</span>
    </motion.div>
  )
}
