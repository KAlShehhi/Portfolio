import DotGrid from "../../../util/animations/DotGrid";

export default function ExpertisePage() {
    return (
        <div className="w-full h-full relative">
            <div className="absolute inset-0 z-0">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#32B9AE"
                    activeColor="#36cfc2"
                    proximity={50}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1}
                />
            </div>
        </div>
    );
}
