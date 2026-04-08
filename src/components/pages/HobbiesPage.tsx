import React from "react";

const HobbiesPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const hobbies = [
    { name: "Photography", icon: "📷", description: "Capturing moments in urban landscapes" },
    { name: "Reading", icon: "📚", description: "Sci-fi, philosophy, and technical books" },
    { name: "Hiking", icon: "🏔️", description: "Exploring trails and national parks" },
    { name: "Chess", icon: "♟️", description: "Strategy games and competitive play" },
    { name: "Cooking", icon: "🍳", description: "Experimenting with world cuisines" },
    { name: "Music", icon: "🎸", description: "Playing guitar and discovering indie bands" },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-8 md:p-12 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.3em] uppercase mb-2">Chapter VIII</p>
        <h2 className="text-3xl font-serif text-page-text mb-6">Hobbies</h2>
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
        <div className="grid grid-cols-2 gap-4 flex-1 content-start">
          {hobbies.map((hobby) => (
            <div key={hobby.name} className="p-4 border border-page-accent/15 rounded-sm text-center bg-page-accent/5">
              <span className="text-2xl">{hobby.icon}</span>
              <h3 className="text-sm font-serif text-page-text mt-2">{hobby.name}</h3>
              <p className="text-xs font-book text-page-text/60 mt-1">{hobby.description}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 right-8 text-xs font-body text-page-text/30">9</p>
      </div>
    </div>
  );
});

HobbiesPage.displayName = "HobbiesPage";
export default HobbiesPage;
