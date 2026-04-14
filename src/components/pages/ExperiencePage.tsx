import React from "react";

const ExperiencePage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const experiences = [
    {
      role: "Cloud Engineer",
      company: "HeproAi",
      period: "March 2026 - Present",
      description: "Leading the design system team, building scalable UI components used across multiple products.",
    },
    {
      role: "Software Engineer Intern",
      company: "Kenexoft Technologies",
      period: "June 2023 - August 2023",
      description: "Built payment dashboard features serving millions of merchants worldwide.",
    },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-5 md:p-8 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1">Chapter IV</p>
        <h2 className="text-xl font-serif text-page-text mb-3">Experience</h2>
        <div className="space-y-2.5">
        <div className="w-12 h-[2px] bg-page-accent/50 mb-3"></div>
        {/* <div className="space-y-6 flex-1"> */}
          {experiences.map((exp) => (
            <div key={exp.role} className="relative pl-6 border-l-2 border-page-accent/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-page-accent" />
              <h3 className="text-lg font-serif text-page-text">{exp.role}</h3>
              <p className="text-sm font-book text-page-accent">{exp.company} · {exp.period}</p>
              <p className="text-sm font-book text-page-text/70 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 right-12 text-xs font-body text-page-text/30">5</p>
      </div>
    </div>
  );
});

ExperiencePage.displayName = "ExperiencePage";
export default ExperiencePage;
