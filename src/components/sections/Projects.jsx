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
import bluelImage from "../../assets/images/SophieBluelPhoto2.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Booki",
      description:
        "Création de la page d'accueil d'un site de réservation de logements",
      imageUrl: bookiImage,
      demoUrl: "https://kilshaka.github.io/Booki/",
      githubUrl: "https://github.com/KilShaka/Booki",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "Sophie Bluel",
      description:
        "Création d'un site interactif pour une architecte, avec gestion d'API ",
      imageUrl: bluelImage,
      demoUrl: "https://demo.com",
      githubUrl: "https://github.com/KilShaka/Sophie-Bluel-Projet3",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "Kasa",
      description: "Création d'une application web de location immobilière",
      imageUrl: kasaImage,
      demoUrl: "https://kasa-projet-5.vercel.app/",
      githubUrl: "https://github.com/KilShaka/Kasa-Projet_5",
      technologies: ["React", "Sass"],
    },
  ];

  return (
    <section id="projects" className="py-12 scroll-mt-16">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Mes Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                key={index}
                className="hover:scale-105 hover:shadow-xl transition-all duration-300"
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
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
