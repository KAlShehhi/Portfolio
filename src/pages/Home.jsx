import ExpertisePage from "./subPages/ExpertisePape";
import Intro from "./subPages/Intro";
export default function Home() {
    return (
        <div className="relative min-h-screen bg-black">
            <section id="home" className="h-screen "><Intro /></section>
            <section id="projects" className="h-screen"><ExpertisePage/></section>
            <section id="experience" className="h-screen ">Experience</section>
            <section id="contact" className="h-screen ">Contact</section>
        </div>
    )
}