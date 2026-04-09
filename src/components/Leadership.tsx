const leaders = [
  {
    name: "Dr. Sai Prakash LeoMuthu",
    role: "Chairman & CEO, Sairam Institutions",
    image: "/images/s1.jpg",
    description:
      "Dr. Sai Prakash Leo Muthu is a distinguished academician and visionary leader who has dedicated his career to advancing educational excellence. As Chairman, he provides strategic direction and institutional leadership for the SAI TECH SCIENCE initiative, ensuring that the program maintains the highest standards of academic rigor and social impact.",
  },
  {
    name: "Mr. S. Prem Kumar",
    role: "Founder, Lmes Academy",
    image: "/images/s2.jpg",
    description:
      "Mr. Prem Kumar is the visionary founder of Pick My Career and a passionate advocate for accessible career guidance. Through the Adutha Ilakku program, he has transformed the landscape of career counseling for school students across Tamil Nadu.",
  },
];

const Leadership = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
          Leadership
        </h2>

        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Visionaries driving the S2T and Adutha Ilakku initiatives
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {leaders.map((leader, i) => (
            <div
              key={i}
              className="p-6 bg-background rounded-2xl border border-border shadow hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="flex justify-center mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-accent shadow"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl font-heading font-bold text-center text-foreground mb-1">
                {leader.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-center font-body text-secondary font-medium mb-4">
                {leader.role}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm font-body text-muted-foreground leading-relaxed text-center">
                {leader.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Leadership;