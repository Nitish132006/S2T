const FinalImpact = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-12">
          Cumulative Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "30,000+", label: "Students Impacted" },
            { value: "6", label: "Editions Conducted" },
            { value: "23", label: "Districts Reached" },
            { value: "Strong", label: "Academic & Social Impact" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">{s.value}</p>
              <p className="text-sm text-primary-foreground/70 font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalImpact;
