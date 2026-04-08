import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AduthaIlakku from "@/components/AduthaIlakku";

export default function AduthaIlakkuPage() {
  return (
    <div className="min-h-screen bg-background">

      <SiteHeader />

      {/* HERO SECTION */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">
          Adutha Ilakku
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Transforming Aspirations into Achievements
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main className="py-10">
        <AduthaIlakku />
      </main>

      <SiteFooter />
    </div>
  );
}