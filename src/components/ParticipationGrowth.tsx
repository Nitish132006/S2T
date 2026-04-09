export default function ParticipationGrowth() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div>
          <img
            src="/images/participate.jpeg"
            alt="Participation Growth"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Participation Growth
          </h2>

          <p className="text-gray-700 mb-4">
            The S2T initiative has witnessed a remarkable increase in student participation
            over the years. What started as a small-scale initiative has now evolved into
            a large-scale movement impacting thousands of students across Tamil Nadu.
          </p>

          <p className="text-gray-700 mb-4">
            Each edition has contributed to expanding outreach, increasing awareness, and
            strengthening engagement through structured programs, workshops, and career
            guidance sessions.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Consistent year-on-year growth in student participation</li>
            <li>✔ Increased district-level outreach</li>
            <li>✔ Strong engagement from schools and parents</li>
            <li>✔ Expansion into multiple career domains</li>
          </ul>
        </div>

      </div>
    </section>
  );
}