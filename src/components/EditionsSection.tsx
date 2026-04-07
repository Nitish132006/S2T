import { useState } from "react";
import { editions } from "@/data/editions";
import EditionDetail from "@/components/EditionDetail";

const EditionsSection = () => {

  // ✅ DEFAULT = LAST EDITION (2026)
  const [selectedYear, setSelectedYear] = useState(
    editions[editions.length - 1].year
  );

  const currentEdition = editions.find(
    (e) => e.year === selectedYear
  );

  return (
    <section id="timeline" className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-10">
          S2T Timeline
        </h2>

        {/* TIMELINE */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {editions.map((e) => (
            <button
              key={e.year}
              onClick={() => setSelectedYear(e.year)}
              className={`px-4 py-2 rounded-full border ${
                selectedYear === e.year
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {e.year}
            </button>
          ))}
        </div>

        {/* EDITION */}
        {currentEdition && (
          <EditionDetail
            edition={currentEdition}
            onNavigate={(year) => setSelectedYear(year)}
            onScrollToAdutha={() =>
              document
                .getElementById("adutha-ilakku")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        )}
      </div>
    </section>
  );
};

export default EditionsSection;