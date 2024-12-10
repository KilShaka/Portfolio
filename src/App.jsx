import Navbar from "./components/layout/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "./assets/images/profile.jpg";
import Education from "./components/sections/Education";
import { Separator } from "@/components/ui/separator";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container p-8 flex items-center gap-8 justify-center">
        <Avatar className="h-64 w-64">
          <AvatarImage src={profileImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col items-center text-center ">
          <h1 className="text-4xl font-bold text-primary">Killian PEREAU</h1>
          <p className="mt-4 text-muted-foreground max-w-md">
            Full Stack Web Developer passionate about creating elegant solutions
            and delivering exceptional user experiences. Specialized in React,
            Node.js, and modern web technologies.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <h2 className="text-2xl font-bold text-primary">Formation</h2>
      <Education />
      <h2 className="text-2xl font-bold text-primary">Projects</h2>
      <Separator className="my-4" />
      <Projects />
      <h2 className="text-2xl font-bold text-primary">Skills</h2>
      <h2 className="text-2xl font-bold text-primary">Contact</h2>
    </div>
  );
}

export default App;
