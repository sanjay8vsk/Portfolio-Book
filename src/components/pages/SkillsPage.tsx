import React from "react";

const SkillsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "API Design", "PostgreSQL", "SQL"] },
    { category: "Data & AI", items: ["Pandas", "NumPy", "Scikit-learn"] },
    { category: "Cloud & DevOps", items: ["Docker", "AWS", "GitHub Actions", "Azure"] },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-5 sm:p-5 md:p-8 flex flex-col overflow-visible">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1 ml-4">Chapter III</p>
        <h2 className="text-lg font-serif text-page-text mb-3 ml-4">Skills</h2>
        <div className="space-y-2.5">
        <div className="w-12 h-[2px] bg-page-accent/50 mb-4 ml-4"></div>
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-body text-page-accent uppercase tracking-[0.2em] mb-1.5 ml-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1 ml-4">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-1 py-[2px] text-xs font-body text-page-text/80 border border-page-accent/25 rounded-full bg-page-accent/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 right-10 text-xs font-body text-page-text/30">4</p>
      </div>
    </div>
  );
});

SkillsPage.displayName = "SkillsPage";
export default SkillsPage;
