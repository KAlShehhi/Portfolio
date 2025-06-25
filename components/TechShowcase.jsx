import { useState } from "react"
import { AnimatePresence, motion, } from "motion/react"

export default function TechShowcase({ icon, name, desc }) {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <div className="flex flex-col relative ">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="p-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-md cursor-pointer"
            >
                <img src={icon} alt="tech icon" className="w-12 h-12 object-contain" />
            </motion.div>
            <AnimatePresence>
                {(isHovering && desc) && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 border-2 min-w-44 border-white/30 rounded-3xl p-3 shadow-lg z-10 bg-white/10 backdrop-blur-md"
                    >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white/30" />
                        <p className="text-base font-bold text-center mb-2">{name}</p>
                        <p className="text-sm font-light text-center">{desc}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}