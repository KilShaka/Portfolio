import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      school: "OpenClassrooms",
      degree: "Développeur Web",
      period: "2023 - 2024",
      description: "Formation en développement web full-stack",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    },
  ];

  return (
    <section className="py-12 scroll-mt-16" id="formation">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Formation
        </motion.h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                key={index}
                className="bg-card text-card-foreground rounded-lg border shadow-sm hover:shadow-xl transition-shadow p-6"
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{edu.school}</h3>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-base font-medium">{edu.degree}</p>
                </div>

                <div>
                  <p className="text-muted-foreground mb-4">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Table>
              {/* <TableCaption>Parcours</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] font-bold">
                    Expériences
                  </TableHead>
                  <TableHead className="font-bold">Années</TableHead>
                  <TableHead className="font-bold">Skills</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Personal Trainer
                  </TableCell>
                  <TableCell className="w-[100px]">2017-2019</TableCell>
                  <TableCell className="italic">
                    Création de sites web (WordPress), Webmarketing, conception
                    graphique, montage vidéo.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Commercial sédentaire
                  </TableCell>
                  <TableCell>2018</TableCell>
                  <TableCell className="italic">
                    Analyse des besoins clients, gestion de leads via CRM,
                    négociation commerciale.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Chargé de clientèle
                  </TableCell>
                  <TableCell>2010-2017</TableCell>
                  <TableCell className="italic">
                    Support utilisateur, résolution de problèmes techniques,
                    gestion des interactions clients en français et en anglais.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bac Pro AMA</TableCell>
                  <TableCell>2009</TableCell>
                  <TableCell className="italic">
                    Design graphique, maîtrise de la Suite Adobe (Photoshop,
                    Illustrator, InDesign). Développement d'une sensibilité
                    UX/UI.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
