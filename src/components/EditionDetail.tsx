import { useState, useEffect } from "react";
import { Edition, editions } from "@/data/editions";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Handshake,
} from "lucide-react";

// 2018
import img2018_1 from "@/assets/2018/img1.png";
import img2018_2 from "@/assets/2018/img2.jpg";
import img2018_3 from "@/assets/2018/img3.jpg";
import img2018_4 from "@/assets/2018/img4.jpg";
import img2018_5 from "@/assets/2018/img5.jpg";

// 2019
import img2019_1 from "@/assets/2019/img1.png";
import img2019_2 from "@/assets/2019/img2.jpg";
import img2019_3 from "@/assets/2019/img3.jpg";
import img2019_4 from "@/assets/2019/img4.jpg";
import img2019_5 from "@/assets/2019/img5.jpg";

// 2023
import img2023_1 from "@/assets/2023/img1.jpg";
import img2023_2 from "@/assets/2023/img2.jpg";
import img2023_3 from "@/assets/2023/img3.jpg";
import img2023_4 from "@/assets/2023/img4.jpg";
import img2023_5 from "@/assets/2023/img5.jpg";

// 2024
import img2024_1 from "@/assets/2024/img1.jpg";
import img2024_2 from "@/assets/2024/img2.jpg";
import img2024_3 from "@/assets/2024/img3.jpg";
import img2024_4 from "@/assets/2024/img4.jpg";
import img2024_5 from "@/assets/2024/img5.jpg";

// 2025
import img2025_1 from "@/assets/2025/img1.jpg";
import img2025_2 from "@/assets/2025/img2.jpg";
import img2025_3 from "@/assets/2025/img3.jpg";
import img2025_4 from "@/assets/2025/img4.jpg";
import img2025_5 from "@/assets/2025/img5.jpg";

// 2026
import img2026_1 from "@/assets/2026/img1.png";
import img2026_2 from "@/assets/2026/img2.jpg";
import img2026_3 from "@/assets/2026/img3.jpg";
import img2026_4 from "@/assets/2026/img4.jpg";
import img2026_5 from "@/assets/2026/img5.jpg";

// 🎯 IMAGE MAP
const editionImages: Record<number, string[]> = {
  2018: [img2018_1, img2018_2, img2018_3, img2018_4, img2018_5],
  2019: [img2019_1, img2019_2, img2019_3, img2019_4, img2019_5],
  2023: [img2023_1, img2023_2, img2023_3, img2023_4, img2023_5],
  2024: [img2024_1, img2024_2, img2024_3, img2024_4, img2024_5],
  2025: [img2025_1, img2025_2, img2025_3, img2025_4, img2025_5],
  2026: [img2026_1, img2026_2, img2026_3, img2026_4, img2026_5],
};

interface EditionDetailProps {
  edition: Edition;
  onNavigate: (year: number) => void;
  onScrollToAdutha: () => void;
}

const EditionDetail = ({
  edition,
  onNavigate,
  onScrollToAdutha,
}: EditionDetailProps) => {

  const currentIndex = editions.findIndex((e) => e.year === edition.year);
  const prevEdition = currentIndex > 0 ? editions[currentIndex - 1] : null;
  const nextEdition =
    currentIndex < editions.length - 1 ? editions[currentIndex + 1] : null;

  const images = editionImages[edition.year] || [];

  // 🎯 SLIDER STATE
  const [currentImage, setCurrentImage] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-5xl mx-auto px-4">

        {/* TITLE */}
        <div className="mb-10">
          <p className="text-sm text-secondary uppercase mb-2">
            {edition.year}
          </p>
          <h2 className="text-3xl font-bold mb-2">
            {edition.edition}
          </h2>
          <p className="text-lg italic text-muted-foreground">
            "{edition.theme}"
          </p>
        </div>

        {/* KEY INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: Calendar, label: "Date", value: edition.date },
            { icon: Users, label: "Participation", value: edition.participation },
            { icon: Handshake, label: "Partnerships", value: edition.partnerships },
            { icon: MapPin, label: "Location", value: edition.location },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-card rounded-lg border">
              <item.icon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 IMAGE SLIDER */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Image Gallery</h3>

          <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${edition.edition}`}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
                  i === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}

            {/* LEFT */}
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft />
            </button>

            {/* RIGHT */}
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev + 1) % images.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronRight />
            </button>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentImage ? "w-8 bg-blue-700" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mb-10 text-gray-700">{edition.description}</p>

        {/* NAVIGATION */}
        <div className="flex justify-between pt-6 border-t">
          {prevEdition ? (
            <Button onClick={() => onNavigate(prevEdition.year)}>
              ← Previous
            </Button>
          ) : <div />}

          {nextEdition ? (
            <Button onClick={() => onNavigate(nextEdition.year)}>
              Next Edition →
            </Button>
          ) : (
            <Button onClick={onScrollToAdutha}>
              Adutha Ilakku →
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditionDetail;