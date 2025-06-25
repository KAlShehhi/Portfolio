import arrowRight from "../src/assets/arrowRight.svg";
import arrowLeft from "../src/assets/arrowLeft.svg";
export default function BidirectionalArrows() {
    return(
        <div className="flex flex-col">
            <img src={arrowRight} alt="arrow right" className="w-12 h-12 object-contain" />
            <img src={arrowLeft} alt="arrow left" className="w-12 h-12 object-contain" />
        </div>
    )
}