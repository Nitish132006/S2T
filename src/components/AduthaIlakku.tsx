import { GraduationCap, Users, MapPin } from "lucide-react";

const AduthaIlakku = () => {
  return (
    <section id="adutha-ilakku" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-blue-700 mb-2">
            Career Guidance Initiative
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Adutha Ilakku
          </h2>

          <p className="text-lg text-gray-600">
            Transforming Aspirations into Achievements
          </p>
        </div>

        {/* HIGHLIGHT STRIP */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="p-5 border rounded-lg text-center">
            <GraduationCap className="mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-700">Started in 2018</p>
          </div>

          <div className="p-5 border rounded-lg text-center">
            <MapPin className="mx-auto mb-2 text-green-600" />
            <p className="text-sm text-gray-700">Expanded to 23 Districts</p>
          </div>

          <div className="p-5 border rounded-lg text-center">
            <Users className="mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-700">Thousands of Students Impacted</p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify text-[15px]">

          <h3 className="text-xl font-semibold text-gray-900">
            About the Program
          </h3>

          <p>
            Education is not just about learning from textbooks; it is about discovering one’s purpose 
            and confidently stepping into the future. With this vision, the Adutha Ilakku Career Guidance 
            Program, in association with Sairam Institutions, has been shaping young minds since 2018. 
            What began as a humble initiative across two districts has now grown into a powerful movement 
            spanning 23 districts, reaching thousands of students and families.
          </p>

          {/* LEADERSHIP BLOCK */}
          <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded">
            <p>
              Led by the visionary Chairman <strong>Dr. Sai Prakash Leo Muthu</strong>, 
              Sairam Institutions are committed to shaping the nation through education 
              that inspires and transforms lives. Their focus goes beyond academics, aiming 
              to develop students into responsible and capable leaders who can contribute 
              meaningfully to society.
            </p>
          </div>

          <p>
            Joining hands with this noble mission, <strong>Mr. Prem Kumar</strong>, Founder of 
            Pick My Career, brings his deep commitment to empowering students. His work 
            focuses on helping students grow into confident individuals and responsible 
            citizens of the nation.
          </p>

          <p>
            The program focuses on students from 9th standard onwards, guiding them through 
            one of the most crucial phases of their lives — choosing the right career path. 
            For Plus Two students, this becomes even more significant, as they stand at the 
            threshold of higher education and professional life.
          </p>

          <p>
            Through interactive sessions, expert talks, aptitude awareness, and real-world 
            insights, the program equips students with clarity, confidence, and direction. 
            It ensures that students are not only informed but also empowered to make 
            meaningful career decisions.
          </p>

          <p>
            Beyond information, Adutha Ilakku builds strong emotional connections. Many students 
            come from communities where career guidance is limited or unavailable. For them, 
            this initiative becomes a source of hope, reassuring anxious minds and inspiring 
            belief in possibilities they had never imagined.
          </p>

          <p>
            Parents too benefit significantly, gaining awareness about modern career opportunities 
            and bridging the gap between traditional expectations and emerging career pathways.
          </p>

          <p>
            The social impact of this initiative is profound. By empowering students with knowledge 
            and self-awareness, the program contributes to building a more informed and skilled 
            generation. It reduces confusion, prevents misguided career choices, and nurtures 
            individuals aligned with their strengths and aspirations.
          </p>

          <p>
            Over the years, Adutha Ilakku has evolved from a program into a mission — a mission to 
            ignite dreams, guide decisions, and transform lives. Its growth across districts reflects 
            not just expansion, but trust and impact.
          </p>

        </div>

        {/* FINAL STATEMENT */}
        <div className="mt-16 text-center border-t pt-10">
          <p className="text-lg italic text-gray-800 max-w-3xl mx-auto">
            "This initiative is not just about careers — it is about shaping futures, strengthening 
            communities, and creating a generation that dares to dream and is prepared to achieve."
          </p>
        </div>

      </div>
    </section>
  );
};

export default AduthaIlakku;