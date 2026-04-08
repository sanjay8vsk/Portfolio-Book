import React from "react";

const BackCover = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="book-page">
      <div className="cover-gradient cover-texture h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-4 border border-page-accent/20 rounded-sm" />
        <div className="text-center z-10">
          <div className="w-10 h-0.5 bg-page-accent/40 mx-auto mb-6" />
          <p className="text-sm font-body text-primary-foreground/50 tracking-[0.3em] uppercase">
            Thank You
          </p>
          <div className="w-10 h-0.5 bg-page-accent/40 mx-auto mt-6" />
        </div>
      </div>
    </div>
  );
});

BackCover.displayName = "BackCover";
export default BackCover;
