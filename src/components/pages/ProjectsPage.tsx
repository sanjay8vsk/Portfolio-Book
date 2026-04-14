import React from "react";

const ProjectsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {
      name: "CloudSync",
      tech: "React · Node.js · AWS",
      description: "Real-time collaboration platform for distributed teams.",
    },
    {
      name: "FinTrack",
      tech: "Next.js · Python · PostgreSQL",
      description: "Personal finance dashboard with AI-powered spending insights.",
    },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-5 md:p-8 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1 ml-3">Chapter V</p>
        <h2 className="text-xl font-serif text-page-text mb-3 ml-3">Projects</h2>
        <div className="space-y-3 ml-3">
        <div className="w-12 h-[2px] bg-page-accent/50 mb-3" />
        {/* <div className="space-y-5 flex-1"> */}
          {projects.map((project) => (
            <div key={project.name} className="p-2.5 border border-page-accent/15 rounded-sm max-w-[95%] bg-page-accent/5">
              <h3 className="text-base font-serif text-page-text">{project.name}</h3>
              <p className="text-xs font-body text-page-accent tracking-wider mt-1">{project.tech}</p>
              <p className="text-sm font-book text-page-text/70 mt-1">{project.description}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 right-10 text-xs font-body text-page-text/30">6</p>
      </div>
    </div>
  );
});

ProjectsPage.displayName = "ProjectsPage";
export default ProjectsPage;
