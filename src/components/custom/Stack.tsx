import {
  faDocker,
  faFigma,
  faGit,
  faJava,
  faNodeJs,
  faPostgresql,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import AutoScroll from "embla-carousel-auto-scroll"

import ExpoIcon from "@/assets/expo.svg?react"
import SpringBootIcon from "@/assets/spring-boot.svg?react"
import ExpressIcon from "@/assets/express.svg?react"
import MongoIcon from "@/assets/mongo.svg?react"

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { Separator } from "../ui/separator"
import { StackItem } from "./StackItem"

const STACK = [
  { name: "React", icon: faReact, iconClassName: "text-sky-500" },
  { name: "Node.js", icon: faNodeJs, iconClassName: "text-green-700" },
  { name: "MongoDB", svg: MongoIcon },
  { name: "Express", svg: ExpressIcon },
  { name: "Expo", svg: ExpoIcon },
  { name: "Java", icon: faJava, iconClassName: "text-[#ED8B00]" },
  { name: "Spring Boot", svg: SpringBootIcon, iconClassName: "text-[#6DB33F]" },
  { name: "PostgreSQL", icon: faPostgresql, iconClassName: "text-[#336791]" },
  { name: "Docker", icon: faDocker, iconClassName: "text-[#1D63ED]" },
  { name: "Git", icon: faGit },
  { name: "Figma", icon: faFigma },
]

export function Stack() {
  return (
    <div className="flex flex-row items-center gap-6 border-b py-6 lg:px-12 2xl:px-48">
      <span className="hidden uppercase lg:flex">Stack</span>
      <Separator orientation="vertical" className="hidden lg:flex" />
      <Carousel
        opts={{ loop: true, dragFree: true, align: "start" }}
        plugins={[AutoScroll({ speed: 1, stopOnInteraction: false })]}
        className="min-w-0 flex-1"
      >
        <CarouselContent className="-ml-3">
          {STACK.map((item) => (
            <CarouselItem key={item.name} className="basis-auto pl-3">
              <StackItem {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
