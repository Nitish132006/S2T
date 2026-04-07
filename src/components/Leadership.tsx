const leaders = [
  {
    name: "Dr. Sai Prakash Leo Muthu",
    role: "Chairman",
    description:
      "Dr. Sai Prakash Leo Muthu is a distinguished academician and visionary leader who has dedicated his career to advancing educational excellence. As Chairman, he provides strategic direction and institutional leadership for the SAI TECH SCIENCE initiative, ensuring that the program maintains the highest standards of academic rigor and social impact. His commitment to bridging the gap between school education and modern technology has been the driving force behind S2T's remarkable growth and success.",
  },
  {
    name: "Mr. Prem Kumar",
    role: "Founder, Pick My Career",
    description:
      "Mr. Prem Kumar is the visionary founder of Pick My Career and a passionate advocate for accessible career guidance. Through the Adutha Ilakku program, he has transformed the landscape of career counseling for school students across Tamil Nadu. His innovative approach combines technology with personalized mentorship, reaching students in 23 districts and helping thousands make informed decisions about their futures. His dedication to empowering underserved communities has made Adutha Ilakku a cornerstone of the institution's social impact initiatives.",
  },
];

const Leadership = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-4">
          Leadership
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Visionaries driving the S2T and Adutha Ilakku initiatives
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="p-6 bg-background rounded-lg border border-border">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <span className="text-2xl font-heading font-bold text-accent-foreground">
                  {leader.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{leader.name}</h3>
              <p className="text-sm font-body text-secondary font-medium mb-4">{leader.role}</p>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
