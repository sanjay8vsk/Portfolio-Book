import { useState, useRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "./pages/CoverPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import SystemDesignPage from "./pages/SystemDesignPage";
import ResumePage from "./pages/ResumePage";
import HobbiesPage from "./pages/HobbiesPage";
import ContactPage from "./pages/ContactPage";
import BackCover from "./pages/BackCover";

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const bookRef = useRef<any>(null);

  const handleOpenBook = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback((e: any) => {
    setTotalPages(e.data?.pages?.length || 12);
  }, []);

  const flipNext = useCallback(() => {
    bookRef.current?.pageFlip()?.flipNext();
  }, []);

  const flipPrev = useCallback(() => {
    bookRef.current?.pageFlip()?.flipPrev();
  }, []);

  if (!isOpen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="relative cursor-pointer group" onClick={handleOpenBook}>
          {/* Book shadow */}
          <div className="absolute -bottom-6 left-4 right-4 h-8 bg-foreground/20 blur-xl rounded-full" />

          {/* Closed book */}
          <div className="relative">
            {/* Page thickness (right side) */}
            <div className="absolute top-1 -right-2 bottom-1 w-3 bg-gradient-to-r from-page/80 to-page/60 rounded-r-sm">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-b border-page-text/5"
                  style={{ top: `${(i + 1) * 11}%` }}
                />
              ))}
            </div>

            {/* Bottom page thickness */}
            <div className="absolute left-1 -bottom-1.5 right-0 h-2 bg-gradient-to-b from-page/70 to-page/50 rounded-b-sm" />

            {/* Cover */}
            <div className="w-[85vw] max-w-[400px] aspect-[3/4] cover-gradient cover-texture rounded-r-sm rounded-l-md overflow-hidden relative book-shadow animate-pulse-glow group-hover:shadow-[0_0_50px_rgba(180,140,80,0.4)] transition-shadow duration-500">
              <div className="absolute inset-4 border border-page-accent/55 rounded-sm" />
              <div className="absolute inset-6 border border-page-accent/35 rounded-sm" />

              <div className="flex flex-col items-center justify-center h-full relative z-10 px-8">
                <div className="w-20 h-0.5 bg-page-accent/50 mb-8" />
                <h1 className="text-4xl font-serif text-primary-foreground tracking-wide mb-3">
                  Welcome
                </h1>
                <p className="text-base font-book text-primary-foreground/60 tracking-[0.2em] uppercase mb-1">
                  Sanjay Babu
                </p>
                <p className="text-base font-book text-primary-foreground/60 tracking-[0.2em] uppercase mb-3">
                  Vuddandi
                </p>
                <p className="text-xs font-body tracking-[0.25em] text-primary-foreground/85 uppercase">
                  Software Engineer
                </p>
                <div className="w-20 h-0.5 bg-page-accent/50 mt-8 box-shadow: 0 0 20px rgba(255, 200, 120, 0.4);" />

                <p className="absolute bottom-10 text-xs font-body text-primary-foreground/30 tracking-[0.3em]">
                  Click to Open
                </p>
              </div>
            </div>

            {/* Spine edge */}
            <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-book-spine to-transparent rounded-l-md" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background overflow-hidden px-4">
      {/* Book container */}
      <div className="relative book-shadow rounded-sm flex justify-center bg-transparent">
        <div className="scale-[0.6] sm:scale-[0.85] md:scale-100 origin center">
        {/* Spine shadow overlay */}
        <div className="spine-shadow z-20" />

        {/* @ts-ignore - react-pageflip types */}
        <HTMLFlipBook
          ref={bookRef}
          width={Math.min(window.innerWidth - 32, 400)}
          height={(Math.min(window.innerWidth - 32, 400) * 550) / 400}
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={420}
          maxHeight={600}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={onFlip}
          onInit={onInit}
          className="book-flipbook"
          style={{ backgroundColor: "transparent" }}
          startPage={0}
          drawShadow={true}
          flippingTime={800}
          usePortrait={false}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          <CoverPage />
          <LandingPage />
          <AboutPage />
          <EducationPage />
          <SkillsPage />
          <ExperiencePage />
          <ProjectsPage />
          <SystemDesignPage />
          <ResumePage />
          <HobbiesPage />
          <ContactPage />
          <BackCover />
        </HTMLFlipBook>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={flipPrev}
          className="px-5 py-2 text-sm font-body text-foreground/60 border border-foreground/20 rounded-sm hover:bg-foreground/10 hover:text-foreground transition-all duration-300 uppercase tracking-[0.15em]"
        >
          ← Prev
        </button>
        <span className="text-xs font-body text-foreground/40 tracking-wider">
          {currentPage + 1} / 12
        </span>
        <button
          onClick={flipNext}
          className="px-5 py-2 text-sm font-body text-foreground/60 border border-foreground/20 rounded-sm hover:bg-foreground/10 hover:text-foreground transition-all duration-300 uppercase tracking-[0.15em]"
        >
          Next →
        </button>
      </div>

      {/* Close book button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 text-xs font-body text-foreground/40 hover:text-foreground/70 transition-colors uppercase tracking-[0.2em]"
      >
        Close Book
      </button>
    </div>
  );
};

export default Book;
