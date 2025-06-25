import { useState } from "react";
import { motion } from "framer-motion";
import GlassmorphismDiv from "../util/GlassmorphismDiv";

const tabs = ["Home", "Projects", "Contact"];

export default function NavBar() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <GlassmorphismDiv otherStyles={"m-10 flex space-x-5"}>
            <button className="flex space-x-4 cursor-pointer" onClick={() => {console.log(123);}}>
                wewewewewewew
            </button>
            <button className="flex space-x-4 cursor-pointer" onClick={() => {console.log(123);}}>
                wewewewewewew
            </button>
            <button className="flex space-x-4 cursor-pointer" onClick={() => {console.log(123);}}>
                wewewewewewew
            </button>
        </GlassmorphismDiv>
    );
}
