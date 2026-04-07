import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import hero1 from "@/assets/picture1.jpg";
import hero2 from "@/assets/picture2.jpg";
import hero3 from "@/assets/picture3.jpg";
import hero4 from "@/assets/picture4.jpg";
import hero5 from "@/assets/picture5.jpg";
import hero6 from "@/assets/picture6.jpg";

const slides = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-16 md:py-24">

      {/* 🔥 LOGO TOP LEFT */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src="/logo1.png"
          alt="Sairam Logo"
          className="w-24 md:w-28 object-contain opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: TEXT */}
        <div className="text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            SAITECH S2T
          </h1>

          <h2 className="text-lg md:text-xl text-blue-700 font-semibold tracking-wide">
            Schools Towards Technology (S2T)
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            A flagship initiative by Sairam Institutions focused on bridging school education 
            with modern technology, fostering innovation and real-world problem-solving since 2018.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Button
              onClick={scrollToTimeline}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3"
            >
              S2T Editions
            </Button>

            
          </div>

          {/* DOTS */}
          <div className="flex gap-2 pt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-blue-700" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: IMAGE SLIDER */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">

          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`S2T Event ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;