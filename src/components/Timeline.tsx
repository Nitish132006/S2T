import { editions } from "@/data/editions";

interface TimelineProps {
  activeYear: number | null;
  onSelectYear: (year: number) => void;
}

const Timeline = ({ activeYear, onSelectYear }: TimelineProps) => {

  // 🔥 DEFAULT FALLBACK
  const currentYear = activeYear ?? 2018;

  return (
    <section id="timeline" className="py-16 bg-card">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
          S2T Timeline
        </h2>

        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Click on any year to explore the full details of each edition
        </p>

        <div className="relative flex items-center justify-between max-w-3xl mx-auto">

          {/* LINE */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          {editions.map((ed) => (
            <button
              key={ed.year}
              onClick={() => onSelectYear(ed.year)}
              className="relative z-10 flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center font-body font-semibold text-sm md:text-base transition-all ${
                  currentYear === ed.year
                    ? "bg-primary border-primary text-primary-foreground scale-110 shadow-lg"
                    : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {ed.year.toString().slice(2)}
              </div>

              <span
                className={`mt-2 text-xs md:text-sm font-body transition-colors ${
                  currentYear === ed.year
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {ed.year}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;