import { DownloadIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { CV_URL, MAILTO } from "@/lib/links";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <motion.div
      className="flex flex-col px-12 2xl:px-48 py-24 gap-12 bg-primary-foreground border-b"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="flex flex-row items-center gap-3 uppercase">
        <div className="flex flex-row gap-3 border shadow rounded-2xl p-2 items-center bg-secondary">
          <div className="h-4 w-4 bg-chart-2 rounded-full" />
          <span className="text-secondary-foreground"> Available For Work</span>
        </div>
        <div className="hidden lg:flex gap-3 ">
          <span>United Arab Emirates</span>
          <span>-</span>
          <span>UTC+04</span>
        </div>
      </motion.div>

      <motion.div variants={item} className="flex flex-col lg:text-9xl text-7xl font-serif">
          <span className="">Khalifa</span>
          <span className="italic relative w-fit">
            Al Shehhi
            <span className="absolute inset-x-0 -bottom-0.5 h-[0.08em] bg-chart-2 origin-left animate-underline-draw motion-reduce:animate-none" />
          </span>
      </motion.div>

      <motion.div variants={item} className="lg:hidden flex">
          <span className="">Sr. Analyst at e& building E2E applications</span>
      </motion.div>

      <motion.div variants={item} className="hidden lg:flex">
        <Separator />
      </motion.div>

      <motion.div variants={item} className="hidden lg:flex flex-row gap-6 ">
        <div className="flex flex-col flex-1">
          <span className="text-muted-foreground uppercase text-sm">Current Role</span>
          <span className="text-primary">Sr. Analyst at e&</span>
        </div>
        <div className="flex flex-1 text-pretty">A Computer Science graduate from United Arab Emirates University based in Ras Al Khaimah, UAE. As a solo founder I build and ship software end to end, covering backend architecture, payments infrastructure, and the product decisions behind it.</div>
      </motion.div>

      <motion.div variants={item} className="flex flex-row gap-3">
        <Button className="p-6 lg:flex-0 flex-1 transition-transform hover:scale-[1.02]" render={<a href={MAILTO} />}>Email</Button>
        <Button className="p-6 lg:flex-0 flex-1 transition-transform hover:scale-[1.02]" variant={"secondary"} render={<a href={CV_URL} download target="_blank" rel="noopener noreferrer" />}>Download CV <DownloadIcon/></Button>
      </motion.div>
    </motion.div>
  )
}
