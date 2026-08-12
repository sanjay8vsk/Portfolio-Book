import React from "react";

const LandingPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page will-change-transform">
      <div className="book-page-inner px-12 pt-12 pb-6 flex flex-col justify-start">
        <div className="page-lines absolute inset-0 pointer-events-none opacity-30" />
        {/* The h2 is text-2xl on mobile vs md:text-3xl on desktop, so its
            two-line block is 12 design px shorter on mobile and this divider
            rose to 80 while About Me's stayed at 96. -mt-6 (-24px) instead of
            -mt-10 (-40px) restores exactly the measured 16px on mobile only. */}
        <div className="relative z-10 -mt-6 md:-mt-10">
          <h2 className="text-2xl md:text-3xl font-serif text-page-text mb-3 leading-tight">
            {/* At the smaller mobile type size "Hello, I'm Sanjay" fits the line,
                so the natural break fell inside the name. Keeping the name
                unbreakable forces the break before it, matching desktop. */}
            Hello, I'm <span className="text-page-accent whitespace-nowrap md:whitespace-normal">Sanjay Babu</span>
          </h2>
          <div className="w-12 h-0.5 bg-page-accent/50 mb-5" />

          <p className="text-sm text-page-text/90 leading-relaxed mb-2">
            A data-driven engineer passionate about building intelligent and scalable systems.
          </p>

          <p className="text-sm text-page-text/90 leading-relaxed mb-2">
          I specialize in cloud technologies, data engineering, and AI-driven applications,
          focusing on creating impactful solutions that solve real-world problems.
          </p>

          <p className="text-sm italic text-page-text/80 leading-relaxed">
            "The best way to predict the future is to create it."
          </p>
          <p className="text-xs text-page-text/50 mt-2 tracking-wide">— Peter Drucker</p>
        </div>
        <p className="absolute bottom-6 right-10 text-xs font-body text-page-text/30">1</p>
      </div>
    </div>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;
