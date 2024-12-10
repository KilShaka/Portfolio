import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import bookiImage from "../../assets/images/booki.png";
import kasaImage from "../../assets/images/kasa.png";

const Projects = () => {
  const projects = [
    {
      title: "Booki",
      description: "Description du projet",
      imageUrl: bookiImage,
      demoUrl: "https://kilshaka.github.io/Booki/",
      githubUrl: "https://github.com/KilShaka/Booki",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "Sophie Bluel",
      description: "Description du projet",
      imageUrl: "/api/placeholder/600/400",
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Kasa",
      description: "Description du projet",
      imageUrl: kasaImage,
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com",
      technologies: ["React", "Sass"],
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild variant="default" className="w-full">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
