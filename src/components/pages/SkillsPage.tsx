import React from "react";

const SkillsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"] },
    { category: "Design", items: ["Figma", "UI/UX", "Responsive", "Animation", "A11y"] },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-8 md:p-12 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter III</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">Skills</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
        <div className="space-y-6 flex-1">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-body text-page-accent uppercase tracking-[0.2em] mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-body text-page-text/70 border border-page-accent/20 rounded-full bg-page-accent/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 left-8 text-xs font-body text-page-text/30">4</p>
      </div>
    </div>
  );
});

SkillsPage.displayName = "SkillsPage";
export default SkillsPage;
