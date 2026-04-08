import React from "react";

const ResumePage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-8 md:p-12 flex flex-col items-center justify-center text-center">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter VII</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">Resume</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-8" />
        
        <div className="w-32 h-44 border-2 border-page-accent/30 rounded-sm flex items-center justify-center mb-8 bg-page-accent/5">
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2 text-page-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-xs font-body text-page-text/40">PDF</p>
          </div>
        </div>

        <p className="text-base font-book text-page-text/70 mb-8 max-w-xs">
          Download my complete resume with detailed work history, skills, and certifications.
        </p>

        <button
          onClick={() => window.open("#", "_blank")}
          className="px-8 py-3 border-2 border-page-accent/40 text-page-accent font-body text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-page-accent/10 transition-colors duration-300"
        >
          Download Resume
        </button>

        <p className="absolute bottom-6 left-8 text-xs font-body text-page-text/30">8</p>
      </div>
    </div>
  );
});

ResumePage.displayName = "ResumePage";
export default ResumePage;
