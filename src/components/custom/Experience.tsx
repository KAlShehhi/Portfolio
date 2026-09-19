import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ExperienceItem } from "./ExperienceItem";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import hessba from "@/assets/hessba.png";
import gymHub from "@/assets/GymHub.png";
import uaeufc from "@/assets/UAEUFC.png";
import dpproj from "@/assets/DPProj.png";
import AutoScroll from "embla-carousel-auto-scroll"
import { useMediaQuery } from "@/hooks/use-media-query"

const PROJECTS = [
  {
    title: "Hessba",
    description:
      "A POS and payments platform for UAE merchants, covering ordering, payments, and billing.",
    image: hessba,
    links: [{ label: "Link", href: "https://hessba.ae" }],
  },
  {
    title: "Gym Hub",
    description:
      "Gym Hub is an app that lets users find and subscribe to gyms, then scan at the gate to unlock access with their membership.",
    image: gymHub,
    links: [
      { label: "Application", href: "https://github.com/KAlShehhi/SmartGateApp" },
      { label: "API", href: "https://github.com/KAlShehhi/SmartGateAPI" },
      { label: "Gate", href: "https://github.com/KAlShehhi/GateAPI" },
    ],
  },
  {
    title: "UAEU Fitness Challenge",
    description:
      "A campus app where coaches post fitness classes and students register, earn points for attendance, and compete on a university scoreboard.",
    image: uaeufc,
    links: [
      { label: "Application", href: "https://github.com/KAlShehhi/UAEU-Contest-Clinet" },
      { label: "API", href: "https://github.com/KAlShehhi/UAEU-Contest-Backend" },
    ],
  },
  {
    title: "Internship Project",
    description:
      "An internship project built at Dubai Police to streamline day to day operations.",
    image: dpproj,
    links: [ ],
  },
]

export function Experience() {
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  return (
    <div className="flex flex-col px-12 2xl:px-48 py-24 bg-primary-foreground border-b ">
      <div className="flex flex-col gap-12">
        <SectionHeading index="01 - PATH" title="Experience & Education" />
        <div className="flex flex-col gap-3">
          <ExperienceItem
            company="e&"
            location="Abu Dhabi"
            isWork={true}
            isLast={false}
            roles={[
              {
                date: "2026 - NOW",
                title: "Sr. Analyst",
                type: "Full Time",
                isCurrent: true,
              },
              {
                date: "2025 - 2026",
                title: "Analyst",
                type: "Full Time",
                description:
                  "I completed a graduate program at e&, where I worked alongside experienced engineers and gained hands on exposure to how software is built and delivered in a real production environment.",
              },
            ]}
          />
          <ExperienceItem
            company="Dubai Police"
            location="Dubai"
            isWork={true}
            isLast={false}
            roles={[
              {
                date: "2024 - 2024",
                title: "Web developer",
                type: "Internship",
                description:
                  "During my time at Dubai Police, I built a full stack MERN application end to end, from database and APIs to the user interface. I presented the finished project to senior stakeholders and executive leadership.",
              },
            ]}
          />
          <ExperienceItem
            company="United Arab Emirates University"
            location="Al Ain"
            isWork={false}
            isLast={false}
            roles={[
              {
                date: "2021 - 2024",
                title: "BSc in Computer Science",
                description:
                  "Completed my Bachelor’s degree in Computer Science at the United Arab Emirates University (UAEU), where I gained a strong foundation in software development, data structures, algorithms, and system design.",
              },
            ]}
          />
          <ExperienceItem
            location="United Arab Emirates"
            isWork={true}
            isLast={false}
            roles={[{ date: "2019 - 2020", title: "Military Service" }]}
          />
          <ExperienceItem
            company="Electronic Goverment Autority"
            location="Ras Al Khaimah"
            isWork={true}
            isLast={false}
            roles={[
              {
                date: "2019 - 2019",
                title: "IT technician",
                type: "Internship",
                description:
                  "Completed an IT Support internship at the Electronic Government Authority, assisting in troubleshooting hardware and software issues, supporting end-users, and maintaining system functionality.",
              },
            ]}
          />
          <ExperienceItem
            company="Applied Technology Schools"
            location="Ras Al Khaimah"
            isWork={false}
            isLast={true}
            roles={[
              {
                date: "2015 - 2019",
                title: "Computer Science",
                description:
                  "Completed a specialized high school program with a focus on computer science fundamentals, including programming, networks, and IT systems.",
              },
            ]}
          />
        </div>
        <SectionHeading index="02 - Selected Work" title="Things I have shipped" />
        {isDesktop ? (
          <Carousel
            opts={{ loop: true, dragFree: true, align: "start" }}
            plugins={[AutoScroll({ speed: 1, stopOnInteraction: false })]}
            className="min-w-0 flex-1"
          >
            <CarouselContent className="-ml-3">
              {PROJECTS.map((project) => (
                <CarouselItem key={project.title} className="basis-md pl-3">
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="flex flex-col gap-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
