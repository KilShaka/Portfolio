import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "devicon-react-original colored",
      description:
        "Bibliothèque JavaScript pour créer des interfaces utilisateurs",
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain colored",
      description: "Environnement d'exécution JavaScript côté serveur",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain colored",
      description: "Base de données NoSQL orientée documents",
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain colored",
      description:
        "Framework CSS utilitaire pour un développement rapide et flexible",
    },
    {
      name: "Sass",
      icon: "devicon-sass-original colored",
      description:
        "Framework CSS utilitaire pour un développement rapide et flexible",
    },
    {
      name: "Express",
      icon: "devicon-express-original",
      description:
        "Framework CSS utilitaire pour un développement rapide et flexible",
    },
  ];

  return (
    <section id="skills" className="py-12 scroll-mt-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Compétences Techniques
        </h2>

        {/* Grille des skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HoverCard key={skill.name}>
                <HoverCardTrigger asChild>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                    <i
                      className={`${skill.icon} text-6xl transition-transform hover:scale-110`}
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </HoverCardTrigger>

                <HoverCardContent className="w-80">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
