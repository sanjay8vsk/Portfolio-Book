import React from "react";

const EducationPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const education = [
    {
      degree: "Master of Data Science",
      school: "University of Skövde",
      year: "2025 - 2027",
      details: "Focused on Machine Learning, Data Engineering, and Scalable Systems.",
    },
    {
      degree: "Bachelor of Technology",
      school: "MIT",
      year: "2020 - 2024",
      details: "Strong foundation in Computer Science, Data Structures, and Algorithms.",
    },
  ];

  return (
    <div ref={ref} className="book-page overflow-y-auto">
      <div className="book-page-inner p-5 md:p-8 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1">Chapter II</p>
        <h2 className="text-xl font-serif text-page-text mb-3">Education</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6"></div>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.degree} className="relative pl-4 border-l border-page-accent/30">
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-page-accent" />
              <h3 className="text-base font-serif text-page-text">{edu.degree}</h3>
              <p className="text-xs font-book text-page-accent mt-1">{edu.school}</p>
              <p className="text-[11px] font-body text-page-text/50 mt-1">{edu.year}</p>
              <p className="text-[11px] font-book text-page-text/70 mt-2 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-6">
          {/* <p className="text-xs font-book text-page-text/50 italic">
            "Education is not preparation for life; education is life itself."
          </p> */}
        </div>
        <p className="absolute bottom-6 right-12 text-xs font-body text-page-text/30">3</p>
      </div>
    </div>
  );
});

EducationPage.displayName = "EducationPage";
export default EducationPage;
