import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlassmorphismDiv from "../util/GlassmorphismDiv";
import github from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";

const tabs = ["home", "projects", "experience", "contact"];

export default function NavBar() {
    const [activeTab, setActiveTab] = useState("home");

    // Scroll observer to update active tab
    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.6,
        });

        tabs.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex w-full fixed  z-50 items-center p-3 justify-between">
            {/* Left: Tabs */}
            <GlassmorphismDiv otherStyles="flex space-x-5 relative">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            const section = document.getElementById(tab);
                            section?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`relative cursor-pointer z-10 px-4 py-3 font-semibold transition-colors duration-300 ${activeTab === tab ? "text-white" : "text-gray-400"
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="tab-pill"
                                className="absolute inset-0 rounded-full bg-primary pointer-events-none -z-10"
                                transition={{
                                    layout: { type: "spring", stiffness: 500, damping: 30 },
                                    scale: { type: "spring", stiffness: 500, damping: 20 },
                                }}
                            />
                        )}
                    </button>
                ))}
            </GlassmorphismDiv>

            {/* Right: Social Icons */}
            <div className="flex flex-row space-x-5">
                <div onClick={() => window.open("https://github.com/KAlShehhi", "_blank")}>
                    <img src={github} alt="github icon" className="w-8 h-8 object-contain cursor-pointer" />
                </div>
                <div onClick={() => window.open("https://www.linkedin.com/in/khalifa-alshehhi-0558822a0/", "_blank")}>
                    <img src={linkedin} alt="linkedin icon" className="w-8 h-8 object-contain cursor-pointer" />
                </div>
            </div>
        </div>

    );
}
