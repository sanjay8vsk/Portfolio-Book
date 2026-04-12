import React from "react";

const AboutPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-6 md:p-8 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1">Chapter I</p>
        <h2 className="text-xl font-serif text-page-text mb-3">About Me</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-4" />
        <div className="font-book text-page-text/80 leading-[1.4] space-y-3 text-sm max-w-[95%] mx-auto">
          <p>
            Currently pursuing my Master's in Data Science, with interests at the intersection of cloud computing, data engineering, and artificial intelligence.
          </p>
          <p>
            I enjoy building data-driven applications and working with modern technologies to create scalable and impactful solutions.
          </p>
          <p>
            I'm continously learning and experimenting with new tools in the cloud and AI ecosystem.
          </p>
        </div>
  
        <p className="absolute bottom-6 right-10 text-xs font-body text-page-text/30">2</p>
      </div>
    </div>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
