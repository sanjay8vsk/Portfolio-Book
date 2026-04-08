import React from "react";

const ProjectsPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {
      name: "CloudSync",
      tech: "React · Node.js · AWS",
      description: "Real-time collaboration platform for distributed teams with live editing.",
    },
    {
      name: "FinTrack",
      tech: "Next.js · Python · PostgreSQL",
      description: "Personal finance dashboard with AI-powered spending insights.",
    },
    {
      name: "DevFlow",
      tech: "TypeScript · Go · Docker",
      description: "CI/CD pipeline management tool with visual workflow builder.",
    },
    {
      name: "PixelCraft",
      tech: "React · WebGL · Three.js",
      description: "Browser-based 3D design tool for creating immersive web experiences.",
    },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-8 md:p-12 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter V</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">Projects</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
        <div className="space-y-5 flex-1">
          {projects.map((project) => (
            <div key={project.name} className="p-4 border border-page-accent/15 rounded-sm bg-page-accent/5">
              <h3 className="text-lg font-serif text-page-text">{project.name}</h3>
              <p className="text-xs font-body text-page-accent tracking-wider mt-1">{project.tech}</p>
              <p className="text-sm font-book text-page-text/70 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 left-8 text-xs font-body text-page-text/30">6</p>
      </div>
    </div>
  );
});

ProjectsPage.displayName = "ProjectsPage";
export default ProjectsPage;
