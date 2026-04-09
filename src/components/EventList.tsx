export default function EventList() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">
            Event Highlights
          </h2>
          <p className="text-gray-600 mt-2">
            Key events conducted under S2T initiative across various regions
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE 1 */}
          <div>
            <img
              src="/images/event-1.png"
              alt="Event 1"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Career Guidance Workshops
            </h3>
            <p className="text-gray-700">
              Interactive workshops were conducted to help students understand
              various career paths, industry trends, and future opportunities.
              Experts from different fields guided students in making informed decisions.
            </p>
          </div>

          {/* TEXT 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Mega Career Events & Seminars
            </h3>
            <p className="text-gray-700">
              Large-scale events brought together students, parents, and industry
              professionals. These sessions focused on real-world insights,
              scholarship opportunities, and skill development for future careers.
            </p>
          </div>

          {/* IMAGE 2 */}
          <div>
            <img
              src="/images/event-2.png"
              alt="Event 2"
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
}