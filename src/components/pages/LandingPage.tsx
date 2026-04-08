import React from "react";

const LandingPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-8 md:p-12 flex flex-col justify-center">
        <div className="page-lines absolute inset-0 pointer-events-none opacity-30" />
        <div className="relative z-10">
          <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-4">Welcome</p>
          <h2 className="text-3xl md:text-4xl font-serif text-page-text mb-6 leading-tight">
            Hello, I'm <span className="text-page-accent">John Doe</span>
          </h2>
          <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
          <p className="text-lg font-book text-page-text/80 leading-relaxed mb-4">
            A passionate full-stack developer crafting beautiful digital experiences. 
            I believe in clean code, thoughtful design, and the power of technology 
            to transform ideas into reality.
          </p>
          <p className="text-base font-book text-page-text/60 italic">
            "The best way to predict the future is to create it."
          </p>
          <p className="text-xs font-body text-page-text/40 mt-2">— Peter Drucker</p>
        </div>
        <p className="absolute bottom-6 right-8 text-xs font-body text-page-text/30">1</p>
      </div>
    </div>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;
