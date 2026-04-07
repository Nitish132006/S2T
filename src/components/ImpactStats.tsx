import { useEffect, useState, useRef } from "react";
import { Users, Calendar, MapPin, TrendingUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: 6, suffix: "", label: "Editions Conducted" },
  { icon: Users, value: 30000, suffix: "+", label: "Students Impacted" },
  { icon: MapPin, value: 0, suffix: "", label: "State-wide Reach", text: "State-wide" },
  { icon: TrendingUp, value: 0, suffix: "", label: "Continuous Growth", text: "Continuous" },
];

const ImpactStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 section-gradient">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
          Our Impact at a Glance
        </h2>
        <p className="text-center text-muted-foreground font-body mb-14 max-w-xl mx-auto">
          Six editions of transforming school education through technology
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                visible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {stat.text
                  ? stat.text
                  : visible
                  ? `${stat.value.toLocaleString()}${stat.suffix}`
                  : "0"}
              </p>
              <p className="text-sm text-muted-foreground font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
