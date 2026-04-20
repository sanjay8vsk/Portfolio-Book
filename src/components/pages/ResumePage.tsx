import React from "react";

const ResumePage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-5 md:p-8 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1 ml-4">Chapter VII</p>
        <h2 className="text-xl font-serif text-page-text mb-3 ml-4">Resume</h2>
        <div className="space-y-2.5 ml-4">
        <div className="w-12 h-0.5 bg-page-accent/50 mb-7" />
        </div>
        <p className="text-base font-book text-page-text/70 mb-6 max-w-xs text-center leading-relaxed">
          Download my complete resume with detailed work history, skills, and certifications.
        </p>

        <button
          onClick={() => window.open("#", "_blank")}
          className="w-[180px] px-5 py-3 border-2 border-page-accent/40 text-page-accent font-body text-sm uppercase tracking-[0.15em] mx-auto block hover:bg-page-accent/10 hover:scale-[1.02] transition-all duration-300"
        >
          Download Resume
        </button>

        <p className="absolute bottom-6 right-10 text-xs font-body text-page-text/30">8</p>
      </div>
    </div>
  );
});

ResumePage.displayName = "ResumePage";
export default ResumePage;
