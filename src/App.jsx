import EndToEnd from "../components/EndToEnd";
import Expertise from "../components/Expertise";
import HorizontalLineBreak from "../components/HorizontalLineBreak";
import NameCard from "../components/NameCard";
import NavBar from "../components/NavBar";
import Beams from "../util/animations/Beams";
import Threads from "../util/animations/Threads";
import GlassmorphismDiv from "../util/GlassmorphismDiv";

export default function App() {
    return (
        <>
            <div className="flex justify-center relative z-20 bg-black border border-b-primary border-t-0 border-x-0">
                <NavBar />

            </div>

            <div style={{ width: '100%', height: '50%', position: 'relative' }} className="border border-t-0 border-x-0 border-b-primary">
                <div className="absolute inset-0 z-0">
                    <Beams
                        beamWidth={2}
                        beamHeight={15}
                        beamNumber={12}
                        lightColor="#32B9AE"
                        speed={1}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={45}
                    />
                </div>



                {/* Center content */}
                <div className="relative z-20 flex items-center justify-center h-full flex-col">
                    <GlassmorphismDiv otherStyles={"p-10"}>
                        <NameCard />
                    </GlassmorphismDiv>
                </div>
            </div>

            <div className="flex items-center justify-center my-10 flex-col">
                <Expertise />
            </div>
        </>
    );
}
