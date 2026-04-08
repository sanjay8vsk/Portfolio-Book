import React from "react";

const ContactPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner book-page-inner-right p-8 md:p-12 flex flex-col items-center justify-center text-center">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter IX</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">Get In Touch</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-8" />

        <p className="text-base font-book text-page-text/70 mb-8 max-w-xs">
          I'd love to hear from you. Whether it's a project, job opportunity, 
          or just a friendly hello — feel free to reach out.
        </p>

        <div className="space-y-4 w-full max-w-xs">
          {[
            { label: "Email", value: "john@example.com", href: "mailto:john@example.com" },
            { label: "LinkedIn", value: "linkedin.com/in/johndoe", href: "#" },
            { label: "GitHub", value: "github.com/johndoe", href: "#" },
            { label: "Twitter", value: "@johndoe", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block p-3 border border-page-accent/15 rounded-sm hover:bg-page-accent/10 transition-colors duration-300"
            >
              <p className="text-xs font-body text-page-accent uppercase tracking-[0.2em]">{link.label}</p>
              <p className="text-sm font-book text-page-text/70 mt-1">{link.value}</p>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs font-body text-page-text/30 italic">
          — The End —
        </p>
        <p className="absolute bottom-6 left-8 text-xs font-body text-page-text/30">10</p>
      </div>
    </div>
  );
});

ContactPage.displayName = "ContactPage";
export default ContactPage;
