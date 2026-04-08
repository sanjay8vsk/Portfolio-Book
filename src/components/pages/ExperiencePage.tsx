import React from "react";

const ExperiencePage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Google",
      period: "2023 - Present",
      description: "Leading the design system team, building scalable UI components used across multiple products.",
    },
    {
      role: "Full Stack Developer",
      company: "Stripe",
      period: "2021 - 2023",
      description: "Built payment dashboard features serving millions of merchants worldwide.",
    },
    {
      role: "Software Engineer",
      company: "Airbnb",
      period: "2019 - 2021",
      description: "Developed booking flow optimizations that increased conversions by 15%.",
    },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-8 md:p-12 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter IV</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">Experience</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
        <div className="space-y-6 flex-1">
          {experiences.map((exp) => (
            <div key={exp.role} className="relative pl-6 border-l-2 border-page-accent/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-page-accent" />
              <h3 className="text-lg font-serif text-page-text">{exp.role}</h3>
              <p className="text-sm font-book text-page-accent">{exp.company} · {exp.period}</p>
              <p className="text-sm font-book text-page-text/70 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 right-8 text-xs font-body text-page-text/30">5</p>
      </div>
    </div>
  );
});

ExperiencePage.displayName = "ExperiencePage";
export default ExperiencePage;
