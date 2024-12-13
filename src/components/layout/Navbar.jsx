import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggler from "@/components/layout/ThemeToggler";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b sticky top-0 z-50 bg-background shadow-md">
      <div className="container flex h-16 items-center px-4">
        <div className="text-lg font-bold">Portfolio</div>

        {/* MENU HAMBURGER POUR MOBILE */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex ml-auto items-center gap-4">
          <Button variant="ghost" asChild>
            <a href="#projects">Projets</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#skills">Compétences</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#formation">Formation</a>
          </Button>
          <Separator className="h-8" orientation="vertical" />
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/KilShaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/killian-pereau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#contact">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col gap-4 p-4 border-t bg-background`}
      >
        <Button
          variant="ghost"
          asChild
          className="w-full justify-start"
          onClick={toggleMenu}
        >
          <a href="#projects">Projets</a>
        </Button>
        <Button
          variant="ghost"
          asChild
          className="w-full justify-start"
          onClick={toggleMenu}
        >
          <a href="#skills">Compétences</a>
        </Button>
        <Button
          variant="ghost"
          asChild
          className="w-full justify-start"
          onClick={toggleMenu}
        >
          <a href="#formation">Formation</a>
        </Button>
        <Separator className="my-2" />
        <div className="flex gap-4 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/KilShaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/killian-pereau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild onClick={toggleMenu}>
            <a href="#contact">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
