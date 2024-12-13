import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import bookiImage from "../../assets/images/Booki.png";
import kasaImage from "../../assets/images/Kasa.png";
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
      detailedInfo: {
        context:
          "Premier projet de la formation OpenClassrooms visant à créer une interface responsive.",
        objectives: [
          "Intégrer une maquette en HTML et CSS",
          "Implémenter une interface responsive",
          "Versionner le code avec Git et GitHub",
        ],
        challenges: [
          "Apprentissage des bases du responsive design",
          "Gestion des différents breakpoints",
          "Organisation du code CSS",
        ],
        solutions:
          "Utilisation des media queries et flexbox pour créer une mise en page adaptative. Structure du code CSS avec une approche modulaire.",
      },
    },
    {
      title: "Sophie Bluel",
      description:
        "Création d'un site interactif pour une architecte, avec gestion d'API",
      imageUrl: bluelImage,
      githubUrl: "https://github.com/KilShaka/Sophie-Bluel-Projet3",
      technologies: ["HTML", "CSS", "Javascript"],
      detailedInfo: {
        context: "Portfolio dynamique pour une architecte d'intérieur.",
        objectives: [
          "Manipuler les éléments du DOM",
          "Gérer les événements utilisateurs",
          "Récupérer les données via l'API",
        ],
        challenges: [
          "Première expérience avec les appels API",
          "Gestion de l'authentification",
          "Mise en place d'une modale de gestion de projet",
        ],
        solutions:
          "Utilisation de fetch pour les appels API, création d'un système de filtre dynamique, et mise en place d'un système de login sécurisé.",
      },
    },
    {
      title: "Kasa",
      description: "Création d'une application web de location immobilière",
      imageUrl: kasaImage,
      demoUrl: "https://kasa-projet-5.vercel.app/",
      githubUrl: "https://github.com/KilShaka/Kasa-Projet_5",
      technologies: ["React", "Sass"],
      detailedInfo: {
        context: "Application de location immobilière type Airbnb avec React.",
        objectives: [
          "Développer une application React complète",
          "Créer des composants réutilisables",
          "Implémenter du routing avec React Router",
        ],
        challenges: [
          "Première application React complète",
          "Gestion des états et des props",
          "Animation des composants",
        ],
        solutions:
          "Utilisation des hooks React, création de composants réutilisables, et mise en place d'animations CSS avec Sass.",
      },
    },
  ];

  const InfoDialog = ({ project }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-2 z-10"
        >
          <Info className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4 text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold mb-2 text-foreground">
                  Contexte
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.detailedInfo.context}
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold mb-2 text-foreground">
                  Objectifs
                </h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground">
                  {project.detailedInfo.objectives.map((objective, idx) => (
                    <li key={idx} className="mb-1">
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold mb-2 text-foreground">
                  Défis rencontrés
                </h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground">
                  {project.detailedInfo.challenges.map((challenge, idx) => (
                    <li key={idx} className="mb-1">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold mb-2 text-foreground">
                  Solutions apportées
                </h4>
                <p className="text-sm text-muted-foreground">
                  {project.detailedInfo.solutions}
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );

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
              <Card className="hover:scale-105 hover:shadow-xl transition-all duration-300 relative">
                <InfoDialog project={project} />
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
                  {project.demoUrl && (
                    <Button asChild variant="default" className="w-full">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </Button>
                  )}
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
