import React from "react";

const AboutPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-8 md:p-12 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter I</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">About Me</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
        <div className="font-book text-page-text/80 leading-relaxed space-y-4 text-base">
          <p>
            I'm a software engineer with 5+ years of experience building web applications
            that are both beautiful and performant. My journey started with curiosity about
            how things work on the internet.
          </p>
          <p>
            Today, I specialize in React, TypeScript, and modern web technologies.
            I'm passionate about creating seamless user experiences and writing 
            maintainable, scalable code.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open source, or enjoying a good book with a cup of coffee.
          </p>
        </div>
        <div className="mt-auto pt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Years Exp.", value: "5+" },
            { label: "Projects", value: "30+" },
            { label: "Clients", value: "15+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-serif text-page-accent">{stat.value}</p>
              <p className="text-xs font-body text-page-text/50 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 left-8 text-xs font-body text-page-text/30">2</p>
      </div>
    </div>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
