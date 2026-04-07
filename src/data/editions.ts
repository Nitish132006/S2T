export interface Edition {
  year: number;
  edition: string;
  theme: string;
  date: string;
  participation: string;
  partnerships: string;
  location: string;
  highlights: string[];
  description: string;
  outcomes: string[];
  studentCount: number;
}

export const editions: Edition[] = [

  // 🔹 2018
  {
    year: 2018,
    edition: "SAI TECH S2T – Edition 1.0",
    theme: "Technology Dissemination and Awareness",
    date: "27 October 2018",
    participation: "3,000+ students",
    partnerships: "Tamil Nadu State Council for Science and Technology (TNSCST)",
    location: "Sri Sairam Engineering College & Sri Sairam Institute of Technology",

    highlights: [
      "Inaugural S2T event",
      "Association with TNSCST",
      "Focused on school students (9th–12th)",
      "Bridged theory with practical engineering",
      "Laid foundation for future editions"
    ],

    description: `The inaugural edition of SAI TECH SCIENCE (S2T) was conducted on 27th October 2018 as a landmark initiative aimed at introducing school students to the evolving world of science and technology. Designed as a premier platform for high school and higher secondary students, the event served as a bridge between academic learning and real-world technological applications.

With participation exceeding 3,000 students, the program created an engaging environment where learners could explore engineering concepts beyond textbooks. Conducted in association with the Tamil Nadu State Council for Science and Technology (TNSCST), the event gained strong academic credibility and institutional support.

A distinguished panel of academic experts and industry professionals inaugurated the vision of “Schools Towards Technology,” emphasizing the importance of nurturing scientific curiosity at an early stage. This foundational edition successfully established a sustainable model for annual engagement and set the stage for future growth and innovation.`,

    outcomes: [
      "Engaged over 3,000 students",
      "Established strong academic partnerships",
      "Created awareness about modern technology",
      "Laid a scalable foundation for future editions"
    ],

    studentCount: 3000,
  },

  // 🔹 2019
  {
    year: 2019,
    edition: "SAI TECH S2T – Edition 2.0",
    theme: "Empowering through Knowledge and Tangible Resources",
    date: "2 November 2019",
    participation: "3,700+ students",
    partnerships: "ICT Academy & TNSCST",
    location: "Tamil Nadu",

    highlights: [
      "Release of S2T technology manual",
      "Partnership with ICT Academy",
      "Structured learning introduced",
      "Expansion in participation",
      "Improved curriculum delivery"
    ],

    description: `Building on the success of the inaugural edition, SAI TECH S2T 2.0 marked a significant evolution in the program by shifting from awareness to structured knowledge delivery. Conducted on 2nd November 2019, the event expanded its reach to over 3,700 students, reflecting growing trust and engagement from the academic community.

A major highlight of this edition was the official release of the S2T technology manual, which served as a comprehensive guide for students to explore scientific concepts and pursue independent research. The collaboration with ICT Academy further strengthened the program by introducing industry-relevant knowledge and technological insights.

This edition emphasized providing tangible learning resources, enabling students to move beyond passive participation and actively engage in technology-driven exploration. The structured approach and expanded partnerships demonstrated the program’s scalability and long-term vision.`,

    outcomes: [
      "23% increase in student participation",
      "Introduced structured learning framework",
      "Strengthened industry-academia collaboration",
      "Enhanced student engagement and learning outcomes"
    ],

    studentCount: 3700,
  },

  // 🔹 2023
  {
    year: 2023,
    edition: "SAI TECH S2T – Edition 3.0",
    theme: "Rewarding Creative Genius and Active Participation",
    date: "9 February 2023",
    participation: "4,500+ students",
    partnerships: "Academic & Industry Partners",
    location: "Tamil Nadu",

    highlights: [
      "Innovation competition introduced",
      "₹10,000 grand prize",
      "Student-led project exhibitions",
      "Focus on real-world solutions",
      "Recognition of innovation"
    ],

    description: `After a brief hiatus, SAI TECH S2T returned in 2023 with a renewed focus on innovation, competition, and active student participation. The third edition transformed the campus into a vibrant hub of creativity, where students showcased their ideas through project-based learning and exhibitions.

A key highlight of this edition was the introduction of innovation rewards, including a grand prize of ₹10,000 for outstanding projects. This competitive approach encouraged students to think critically, solve real-world problems, and present their ideas confidently.

With over 4,500 students participating, the program successfully transitioned from awareness-based learning to hands-on innovation. The event demonstrated the importance of experiential learning and positioned science as an exciting and rewarding career pathway.`,

    outcomes: [
      "Enhanced innovation and creativity",
      "4,500+ student participation",
      "Improved problem-solving skills",
      "Recognition of student achievements"
    ],

    studentCount: 4500,
  },

  // 🔹 2024
  {
    year: 2024,
    edition: "SAI TECH S2T – Edition 4.0",
    theme: "Technology for a Better World and Social Impact",
    date: "12 January 2024",
    participation: "5,000+ students",
    partnerships: "Government bodies & NGOs",
    location: "Multi-district (Tamil Nadu)",

    highlights: [
      "Integration of UN SDGs",
      "Multi-district expansion",
      "Focus on social impact",
      "Sustainability-driven projects",
      "Community-oriented innovation"
    ],

    description: `SAI TECH S2T 4.0 marked a transformative phase by aligning technology education with global humanitarian goals. Conducted on 12th January 2024, this edition integrated the United Nations Sustainable Development Goals (SDGs) into its core framework, encouraging students to develop solutions addressing real-world challenges such as poverty, hunger, and education.

The program expanded its reach across multiple districts, engaging over 5,000 students and significantly increasing its regional impact. This edition emphasized that innovation should not only focus on technical excellence but also on creating meaningful social change.

Students were encouraged to think beyond conventional boundaries and design solutions that contribute to sustainable development. This shift highlighted the role of technology as a tool for societal progress and global responsibility.`,

    outcomes: [
      "Expanded to multiple districts",
      "5,000+ students engaged",
      "Promoted SDG-based innovation",
      "Strengthened community impact"
    ],

    studentCount: 5000,
  },

  // 🔹 2025
  {
    year: 2025,
    edition: "SAI TECH S2T – Edition 5.0",
    theme: "Inclusive Innovation and Women in STEM",
    date: "9 January 2025",
    participation: "7,000+ students",
    partnerships: "Academic & Industry Leaders",
    location: "State-wide, Tamil Nadu",

    highlights: [
      "Focus on inclusivity",
      "Women in STEM empowerment",
      "State-wide participation",
      "Diverse student engagement",
      "Recognition of emerging talent"
    ],

    description: `Celebrating five years of excellence, SAI TECH S2T 5.0 emerged as a milestone edition that emphasized inclusivity and diversity in technology education. With participation exceeding 7,000 students across Tamil Nadu, the program achieved unprecedented scale and impact.

A key highlight of this edition was its focus on empowering women in STEM, encouraging greater participation and representation in science and technology fields. The program created an inclusive environment where students from diverse backgrounds could explore their potential and contribute to innovation.

This edition successfully strengthened the S2T ecosystem, positioning it as a premier platform for nurturing future engineers and scientists while promoting equal opportunities in education.`,

    outcomes: [
      "7,000+ students participated",
      "Increased women participation in STEM",
      "Achieved state-wide reach",
      "Strengthened inclusive education model"
    ],

    studentCount: 7000,
  },

  // 🔹 2026
  {
    year: 2026,
    edition: "SAI TECH S2T – Edition 6.0",
    theme: "Peace on Earth through the Power of Technology",
    date: "2026",
    participation: "9,000+ students",
    partnerships: "Academic & Global Organizations",
    location: "Tamil Nadu",

    highlights: [
      "Theme of peace through technology",
      "Largest participation",
      "Global perspective",
      "Focus on ethical innovation",
      "Expansion of program impact"
    ],

    description: `SAI TECH S2T 6.0 represents a significant milestone in the evolution of the program, focusing on the visionary theme “Peace on Earth through the Power of Technology.” This edition emphasized the role of technology in fostering harmony, addressing global challenges, and promoting sustainable development.

With participation reaching over 9,000 students, the program achieved its highest scale to date, reflecting its growing influence and credibility. Students were encouraged to develop innovative solutions that contribute to social harmony, environmental sustainability, and global well-being.

This edition successfully integrated technical excellence with ethical responsibility, preparing students to become future leaders who can use technology as a force for positive change in society.`,

    outcomes: [
      "9,000+ students engaged",
      "Largest edition conducted",
      "Expanded regional and global outlook",
      "Promoted ethical and responsible innovation"
    ],

    studentCount: 9000,
  },

];