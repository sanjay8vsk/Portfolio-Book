/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useCallback, useEffect } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
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

/* The book renders as a two-page spread (usePortrait={false}), so react-pageflip's
   page index advances by two per turn. These convert that index into the spread
   number the reader actually sees: cover, five spreads, back cover. */
const toSpread = (pageIndex: number) => Math.ceil(pageIndex / 2) + 1;
const countSpreads = (pages: number) => Math.ceil(pages / 2) + 1;

/* Width the pages are authored against. The book never renders wider than this;
   below it, page contents scale by the same factor (see --page-scale). */
const BOOK_DESIGN_WIDTH = 600;
const COVER_DESIGN_WIDTH = 400;

const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(12);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pageScale, setPageScale] = useState(1);
  const [coverScale, setCoverScale] = useState(1);
  const bookRef = useRef<any>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const handleOpenBook = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseBook = useCallback(() => {
    setIsOpen(false);
    // The flipbook remounts at startPage={0}, so the counter must follow it.
    setCurrentPage(0);
  }, []);

  const handleCoverKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
    },
    [],
  );

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

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isOpen) return;
    const el = coverRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const update = () => {
      const width = el.getBoundingClientRect().width;
      if (width > 0) setCoverScale(Math.min(1, width / COVER_DESIGN_WIDTH));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isOpen]);

  /* Keep page contents proportional to the rendered book width. Measured rather
     than derived in CSS because CSS cannot divide one length by another. */
  useEffect(() => {
    if (!isOpen) return;
    const el = frameRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const update = () => {
      const width = el.getBoundingClientRect().width;
      /* Not clamped to 1: above the design width the pages scale up too, so a
         larger book is a pure zoom and page proportions stay identical. */
      if (width > 0) setPageScale(width / BOOK_DESIGN_WIDTH);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        flipNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        flipPrev();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, flipNext, flipPrev]);

  if (!isOpen) {
    return (
      <div className="viewport-min-h flex items-center justify-center bg-background py-8">
        <div
          className="relative cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-page-accent/60 rounded-md"
          onClick={handleOpenBook}
          onKeyDown={handleCoverKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Open the portfolio of Sanjay Babu Vuddandi"
        >
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
            <div
              ref={coverRef}
              className="cover-frame aspect-[3/4] cover-gradient cover-texture rounded-r-sm rounded-l-md overflow-hidden relative book-shadow animate-pulse-glow group-hover:shadow-[0_0_50px_rgba(180,140,80,0.4)] transition-shadow duration-500"
              style={{ "--cover-scale": coverScale } as CSSProperties}
            >
              <div className="absolute inset-4 border border-page-accent/55 rounded-sm" />
              <div className="absolute inset-6 border border-page-accent/35 rounded-sm" />

              <div className="cover-content flex flex-col items-center justify-center h-full relative z-10 px-8">
                <div className="w-20 h-0.5 bg-page-accent/50 mb-8" />
                <h1 className="text-2xl font-serif text-primary-foreground tracking-wide mb-3">
                  The Portfolio of
                </h1>
                <p className="text-base font-book text-primary-foreground/60 tracking-[0.2em] uppercase mb-1">
                  Sanjay Babu
                </p>
                <p className="text-base font-book text-primary-foreground/60 tracking-[0.2em] uppercase mb-3">
                  Vuddandi
                </p>
                <p className="text-xs font-body tracking-[0.25em] text-primary-foreground/85 uppercase">
                  AI & Software Engineer
                </p>
                <div
                className="w-20 h-0.5 bg-page-accent/50 mt-8"
                style={{ boxShadow: "0 0 20px rgba(255,200,120,0.4)" }}
                />

                <p className="absolute bottom-10 text-xs font-body text-primary-foreground/30 tracking-[0.3em]">
                  Begin Reading &rarr;
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
    <div className="viewport-h w-full flex flex-col items-center justify-center bg-background overflow-hidden px-4">
      {/* Book container. The width lives here (.book-frame) so react-pageflip's
          size="stretch" has a definite parent width to size itself from, and so
          the shadow stays attached to the book at every viewport size. */}
      {/* Not a flex container: as a flex item the flipbook's min-width:auto
          floors it at its 600px content width and it ignores the frame. */}
      <div
        ref={frameRef}
        className="book-frame relative book-shadow rounded-sm bg-transparent"
        style={{ "--page-scale": pageScale } as CSSProperties}
      >
        {/* Spine shadow overlay */}
        <div className="spine-shadow z-20" />

        <HTMLFlipBook
          ref={bookRef}
          /* width/height define the page aspect ratio only; size="stretch"
             derives the rendered size from the parent's width. */
          width={400}
          height={550}
          size="stretch"
          /* These are per-page bounds; the library doubles them for the book.
             minWidth must stay low or its inline min-width floors the book and
             it can't shrink. maxWidth={450} allows the 900px book cap. */
          minWidth={120}
          maxWidth={450}
          minHeight={165}
          maxHeight={620}
          maxShadowOpacity={0.5}
          showCover={true}
          /* Must stay true: with false, react-pageflip registers touchmove as
             passive and never drives a flip, which kills tap/swipe on mobile. */
          mobileScrollSupport={true}
          onFlip={onFlip}
          onInit={onInit}
          className="book-flipbook"
          style={{ backgroundColor: "transparent" }}
          startPage={0}
          drawShadow={true}
          flippingTime={reducedMotion ? 200 : 800}
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

      {/* Navigation */}
      {/* gap-3 on the narrowest phones keeps Prev/counter/Next on one line;
          sm and up keeps the original gap-6 spacing. */}
      <nav className="flex items-center gap-3 sm:gap-6 mt-8" aria-label="Page navigation">
        <button
          onClick={flipPrev}
          aria-label="Previous page"
          className="px-5 py-2 text-sm font-body text-foreground/60 border border-foreground/20 rounded-sm hover:bg-foreground/10 hover:text-foreground transition-all duration-300 uppercase tracking-[0.15em]"
        >
          ← Prev
        </button>
        <span
          className="text-xs font-body text-foreground/40 tracking-wider"
          aria-live="polite"
          aria-atomic="true"
        >
          {toSpread(currentPage)} / {countSpreads(totalPages)}
        </span>
        <button
          onClick={flipNext}
          aria-label="Next page"
          className="px-5 py-2 text-sm font-body text-foreground/60 border border-foreground/20 rounded-sm hover:bg-foreground/10 hover:text-foreground transition-all duration-300 uppercase tracking-[0.15em]"
        >
          Next →
        </button>
      </nav>

      {/* Close book button. On phones it joins the centred stack above the book
          so the controls read as one group; from sm up it keeps its original
          fixed position in the top-right corner. */}
      <button
        onClick={handleCloseBook}
        aria-label="Close the book and return to the cover"
        className="order-first self-end mb-4 sm:absolute sm:top-6 sm:right-6 sm:order-none sm:self-auto sm:mb-0 text-xs font-body text-foreground/40 hover:text-foreground/70 transition-colors uppercase tracking-[0.2em]"
      >
        Close Book
      </button>
    </div>
  );
};

export default Book;
