import React from "react";

const ContactPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-6 md:p-12 flex flex-col items-center justify-center text-center">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter IX</p>
        <h2 className="text-sm md:text-sm font-serif text-page-text mb-1">Get In Touch</h2>
        <div className="w-12 h-0.5 bg-page-accent/50" />

        <p className="text-sm font-book text-page-text/70 mb-5 max-w-[240px]">
          I'd love to hear from you. Whether it's a project, job opportunity, 
          or just a friendly hello, feel free to reach out.
        </p>

        <div className="space-y-1.5 w-full max-w-[240px] md:max-w-xs">
          {[
            { label: "Email", value: "sanjay8vsk@gmail.com", href: "mailto:sanjay8vsk@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/sanjuu", href: "#" },
            { label: "GitHub", value: "github.com/sanjuu", href: "#" },
            { label: "Instagram", value: "de__sanjay", href: "https://www.instagram.com/de__sanjay/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-0.25 border border-page-accent/15 rounded-sm hover:bg-page-accent/10 transition-colors duration-300"
            >
              <p className="text-[10px] font-body text-page-accent uppercase tracking-[0.15em]">{link.label}</p>
              <p className="text-xs font-book text-page-text/70 mt-0.5">{link.value}</p>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs font-body text-page-text/30 italic">
          — The End —
        </p>
        <p className="absolute bottom-6 right-9 text-xs font-body text-page-text/30">10</p>
      </div>
    </div>
  );
});

ContactPage.displayName = "ContactPage";
export default ContactPage;
