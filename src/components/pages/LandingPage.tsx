import React from "react";

const LandingPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-8 md:p-12 pt-8 flex flex-col justify-start">
        <div className="page-lines absolute inset-0 pointer-events-none opacity-30" />
        <div className="relative z-10 -mt-10">
          <h2 className="text-2xl md:text-3xl font-serif text-page-text mb-3 leading-tight">
            Hello, I'm <span className="text-page-accent">Sanjay Babu</span>
          </h2>
          <div className="w-12 h-0.5 bg-page-accent/50 mb-5" />

          <p className="text-sm text-page-text/90 leading-relaxed mb-4">
            A data-driven engineer passionate about building intelligent and scalable systems.
          </p>

          <p className="text-sm text-page-text/90 leading-relaxed mb-4">
          I specialize in cloud technologies, data engineering, and AI-driven applications,
          focusing on creating impactful solutions that solve real-world problems.
          </p>

          <p className="text-sm italic text-page-text/80 leading-relaxed">
            "The best way to predict the future is to create it."
          </p>
          <p className="text-xs text-page-text/50 mt-2 tracking-wide">— Peter Drucker</p>
        </div>
        <p className="absolute bottom-6 right-12 text-xs font-body text-page-text/30">1</p>
      </div>
    </div>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;
