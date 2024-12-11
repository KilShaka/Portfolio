import Navbar from "./components/layout/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "./assets/images/profile.jpg";
import { Separator } from "@/components/ui/separator";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <div className="min-h-screen backdrop-blur-[2px]">
        <div className="container p-8 flex items-center gap-8 justify-center">
          <Avatar className="h-64 w-64">
            <AvatarImage src={profileImage} />
            <AvatarFallback>KP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-primary">Killian PEREAU</h1>
            <p className="mt-4 text-muted-foreground max-w-md">
              Full Stack Web Developer passionate about creating elegant
              solutions and delivering exceptional user experiences. Specialized
              in React, Node.js, and modern web technologies.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <Projects id="projects" />
        <Separator className="my-4" />
        <Skills id="skills" />
        <Separator className="my-4" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
