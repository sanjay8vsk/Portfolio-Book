import React from "react";

const SystemDesignPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  const designs = [
    {
      title: "Distributed Cache System",
      description: "Designed a multi-tier caching system reducing API latency by 60% across global data centers.",
    },
    {
      title: "Event-Driven Architecture",
      description: "Built an event sourcing platform handling 1M+ events/sec with guaranteed delivery.",
    },
  ];

  return (
    <div ref={ref} className="book-page">
      <div className="book-page-inner p-5 md:p-8 flex flex-col">
        <p className="text-sm font-body text-page-accent tracking-[0.2em] uppercase mb-1">Chapter VI</p>
        <h2 className="text-xl font-serif text-page-text mb-3">System Design</h2>
        <div className="space-y-2.5">
        <div className="w-12 h-0.5 bg-page-accent/50 mb-6" />
        {/* <div className="space-y-6 flex-1"> */}
          {designs.map((item) => (
            <div key={item.title} className="relative">
              <h3 className="text-lg font-serif text-page-text flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-page-accent inline-block" />
                {item.title}
              </h3>
              <p className="text-sm font-book text-page-text/70 mt-2 pl-4">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="absolute bottom-6 right-12 text-xs font-body text-page-text/30">7</p>
      </div>
    </div>
  );
});

SystemDesignPage.displayName = "SystemDesignPage";
export default SystemDesignPage;
