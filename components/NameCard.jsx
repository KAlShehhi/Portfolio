import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SplitText from "../util/animations/SplitText";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";

export default function NameCard() {
    return (
        <div >
            <SplitText
                text="Hi, I’m Khalifa AlShehhi"
                className="font-black text-white md:text-4xl lg:text-5xl text-3xl"
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
            <div>
                <p className="font-medium text-primary text-3xl">A Full-stack developer</p>
                <p className="font-light text-gray-100 text-base">Recent Computer Science graduate passionate about solving real-world problems through scalable technology solutions.</p>
            </div>
            <div className="mt-5 flex flex-row space-x-5">
                <a href="files/Khalifa_AlShehhi_CV.pdf" download className="bg-primary rounded-3xl hover:bg-teal-300 p-4 flex flex-row w-fit items-center space-x-3">
                    <FontAwesomeIcon icon={faDownload} size="xl"/>
                    <p className="font-bold">View CV</p>
                </a>
                <CustomButton title={"Connect with me"} icon={"linkedin"} link={"https://www.linkedin.com/in/khalifa-alshehhi-0558822a0/"}/>
            </div>
        </div>
    )
}