import SplitText from "../util/animations/SplitText";

export default function NameCard() {
    return (
        <div >
            <SplitText
                text="Hi, I’m Khalifa AlShehhi"
                className="font-bold text-white text-5xl"
                delay={30}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <p className="font-medium text-primary text-3xl">A Full-stack developer</p>
            <p className="font-light text-gray-100 text-base">Recent Computer Science graduate passionate about solving real-world problems through scalable technology solutions.</p>
        </div>
    )
}