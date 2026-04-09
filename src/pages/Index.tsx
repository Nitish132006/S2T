import { useState, useCallback } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import Timeline from "@/components/Timeline";
import EditionDetail from "@/components/EditionDetail";
import AduthaIlakku from "@/components/AduthaIlakku";
import Leadership from "@/components/Leadership";
import FinalImpact from "@/components/FinalImpact";
import SiteFooter from "@/components/SiteFooter";
import { editions } from "@/data/editions";
import ParticipationGrowth from "@/components/ParticipationGrowth";
import EventList from "@/components/EventList";

const Index = () => {
  const [activeYear, setActiveYear] = useState<number | null>(2018);

  const handleSelectYear = useCallback((year: number) => {
    setActiveYear(year);
    setTimeout(() => {
      document.getElementById("edition-detail")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  const scrollToAdutha = useCallback(() => {
    document.getElementById("adutha-ilakku")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const activeEdition = editions.find((e) => e.year === activeYear);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div id="hero">
        <HeroSection />
      </div>
      <ImpactStats />
      <Timeline activeYear={activeYear} onSelectYear={handleSelectYear} />
      {activeEdition && (
        <EditionDetail
          edition={activeEdition}
          onNavigate={handleSelectYear}
          onScrollToAdutha={scrollToAdutha}
        />
      )}
      <ParticipationGrowth />
      <EventList />
      <div id="leadership">
      
        <Leadership />
      </div>
      <FinalImpact />
      <SiteFooter />
    </div>
  );
};

export default Index;
