import { Button } from "@/components/ui/button";
import ThemeToggler from "@/components/ui/ThemeToggler";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  return (
    <nav className="border-b sticky top-0 z-50 bg-background">
      <div className="container flex h-16 items-center px-4">
        <div className="text-lg font-bold">Portfolio</div>

        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost">Projets</Button>
          <Button variant="ghost">Skills</Button>
          <Separator className="h-8" orientation="vertical" />
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/votre-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Contact</span>
          </Button>

          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
