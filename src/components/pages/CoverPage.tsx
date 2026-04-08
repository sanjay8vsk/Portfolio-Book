import React from "react";

const CoverPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="cover-gradient cover-texture h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative border */}
        <div className="absolute inset-4 border border-page-accent/30 rounded-sm" />
        <div className="absolute inset-6 border border-page-accent/15 rounded-sm" />
        
        {/* Content */}
        <div className="text-center z-10 px-8">
          <div className="w-16 h-0.5 bg-page-accent/60 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground tracking-wide mb-4">
            Portfolio
          </h1>
          <p className="text-lg font-book text-primary-foreground/70 tracking-[0.3em] uppercase mb-2">
            John Doe
          </p>
          <p className="text-sm font-body text-primary-foreground/50 tracking-widest uppercase">
            Full Stack Developer
          </p>
          <div className="w-16 h-0.5 bg-page-accent/60 mx-auto mt-8" />
        </div>

        {/* Bottom year */}
        <p className="absolute bottom-8 text-xs font-body text-primary-foreground/40 tracking-[0.5em]">
          2026
        </p>
      </div>
    </div>
  );
});

CoverPage.displayName = "CoverPage";
export default CoverPage;
