import { faDatabase, faMobile, faServer } from "@fortawesome/free-solid-svg-icons"
import GlassmorphismDiv from "../util/GlassmorphismDiv"
import BidirectionalArrows from "./BidirectionalArrows"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TechCard from "./TechCard"


export default function EndToEnd() {
    return (
        <div>
            <div>
                <p className="text-3xl font-bold text-center">End-to-End development</p>
            </div>
            <div className="flex flex-row space-x-5 my-5 items-center">
                <GlassmorphismDiv>
                    <TechCard
                        icon={faMobile}
                        title={"Client"}
                        desc={"Whether it's a web app or mobile app—is the frontend built with React and other libraries. It interacts with the backend through APIs to fetch or send data, enabling a smooth user experience."}
                    />
                </GlassmorphismDiv>
                <BidirectionalArrows/>
                <GlassmorphismDiv>
                <TechCard
                        icon={faServer}
                        title={"Server"}
                        desc={"Backend logic layer that handles client requests, processes data, and communicates with the database. It's built using technologies like Node.js and Express."}
                    />
                </GlassmorphismDiv>
                <BidirectionalArrows/>
                <GlassmorphismDiv>
                <TechCard
                        icon={faDatabase}
                        title={"Database"}
                        desc={"Where application data is stored and retrieved. It works closely with the server to manage user information, content, and other persistent data—using systems like MongoDB."}
                    />
                </GlassmorphismDiv>
            </div>
        </div>
    )
}