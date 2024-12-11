const Education = () => {
  const education = [
    {
      school: "OpenClassrooms",
      degree: "Développeur Web",
      period: "2023 - 2024",
      description: "Formation intensive en développement web full-stack",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Formation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
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
                <p className="text-muted-foreground mb-4">{edu.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
