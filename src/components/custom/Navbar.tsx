import { Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { CV_URL, LINKEDIN_URL, MAILTO } from "@/lib/links";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <div className="border-b p-3 w-full flex flex-row items-center px-6 lg:px-12 2xl:px-48">
      <div className="flex flex-row flex-1 min-w-0 gap-3 items-center">
        <Avatar size="lg">
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
        <h1 className="truncate">Khalifa AlShehhi</h1>
      </div>
      <div className="hidden lg:flex items-center gap-3">

        <Button
          variant="secondary"
          className="transition-transform hover:scale-[1.03]"
          render={<a href={CV_URL} target="_blank" rel="noopener noreferrer" />}
        >
          Resume
        </Button>
        <Button variant="secondary" className="transition-transform hover:scale-[1.03]" render={<a href={MAILTO} />}>
          Email
        </Button>
        <Button
          variant="secondary"
          className="transition-transform hover:scale-[1.03]"
          render={
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" />
          }
        >
          LinkedIn
        </Button>
        <ThemeToggle />
      </div>
      <div className="flex lg:hidden items-center gap-1">
        <ThemeToggle />
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className={"px-6"}>
            <SheetHeader />
            <Button
              variant="ghost"
              render={<a href={CV_URL} target="_blank" rel="noopener noreferrer" />}
            >
              Resume
            </Button>
            <Button variant="ghost" render={<a href={MAILTO} />}>
              Email
            </Button>
            <Button
              variant="ghost"
              render={
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              LinkedIn
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
