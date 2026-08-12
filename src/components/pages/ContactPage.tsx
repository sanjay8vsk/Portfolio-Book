import React from "react";

const ContactPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner px-8 pt-8 pb-5 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1">Chapter IX</p>
        <h2 className="text-xl font-serif text-page-text mb-3">Get In Touch</h2>
        {/* shrink-0: this divider is a direct child of the flex-col page, so the
            default flex-shrink crushed its 2px height to under 0.5px (to 0 on
            mobile). Hobbies' divider sits inside a wrapper and is unaffected. */}
        <div className="w-12 h-0.5 shrink-0 bg-page-accent/50 mb-3" />

        <p className="text-sm font-book text-page-text/70 mb-2 max-w-[240px] justify-center text-center">
          I'd love to hear from you. Whether it's a project, job opportunity, 
          or just a friendly hello, feel free to reach out.
        </p>

        <div className="space-y-1 w-full max-w-[240px] md:max-w-xs justify-center text-center">
          {[
            { label: "Email", value: "sanjay8vsk@gmail.com", href: "mailto:sanjay8vsk@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/sanjaybabu", href: "https://www.linkedin.com/in/sanjaybabuvuddandi/" },
            { label: "GitHub", value: "github.com/sanjuu", href: "https://github.com/sanjay8vsk" },
            { label: "Instagram", value: "de__sanjay", href: "https://www.instagram.com/de__sanjay/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              /* mailto: must open in the mail client, not a blank tab */
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              /* [&_p]:pointer-events-none keeps the <a> itself as the event
                 target, so react-pageflip's clickEventForward sees a link and
                 skips the flip. Without it the inner <p> is the target and the
                 library treats the click as a page turn. */
              className="block p-1 border border-page-accent/15 rounded-sm hover:bg-page-accent/10 transition-colors duration-300 [&_p]:pointer-events-none"
            >
              {/* 11px below md for legibility on phones; md and up keeps the
                  authored 10px. 12px pushes "The End" below the page number. */}
              <p className="text-[11px] md:text-[10px] font-body text-page-accent uppercase tracking-[0.15em]">{link.label}</p>
              <p className="text-xs font-book text-page-text/70 mt-0.5">{link.value}</p>
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs font-body text-page-text/30 italic text-center">
          — The End —
        </p>
        <p className="absolute bottom-6 right-10 text-xs font-body text-page-text/30">10</p>
      </div>
    </div>
  );
});

ContactPage.displayName = "ContactPage";
export default ContactPage;
