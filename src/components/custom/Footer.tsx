import { CopyrightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, MAILTO } from "@/lib/links";

export function Footer() {
  return (
    <div className="flex flex-col gap-6 border-b p-6 lg:p-12 2xl:px-48">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col flex-1 min-w-0 text-5xl lg:text-7xl font-serif">
          <span className="">Let's build</span>
          <span className="italic text-chart-2">something</span>
        </div>
        <div className="flex flex-col gap-3 min-w-0">
          <span className="uppercase text-muted-foreground">reach me</span>
          <a href={MAILTO} className="uppercase hover:underline break-all">
            {EMAIL}
          </a>
          <Separator />
          <div className="flex flex-row space-x-3">
            <Button
              variant={"secondary"}
              render={
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              Linkedin
            </Button>
            <Button
              variant={"secondary"}
              render={
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-row text-muted-foreground text-sm gap-3 items-center">
        <CopyrightIcon size={12} />
        <span>2026</span>
        <span className="uppercase">Khalifa Al Shehhi</span>
      </div>
    </div>
  );
}
