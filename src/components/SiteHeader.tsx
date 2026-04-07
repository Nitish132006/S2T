import { useState } from "react";
import { Menu, X } from "lucide-react";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">

      {/* HEADER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LEFT: LOGO + BRAND */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          {/* LOGO */}
          <img
            src="/logo.jpg"
            alt="Sairam College Logo"
            className="w-48 h-20 object-contain"
          />

          {/* OPTIONAL DIVIDER (premium look) */}
          <div className="hidden md:block h-10 w-[1px] bg-gray-300" />

          {/* TEXT */}
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-gray-900 tracking-wide">
              SAITECH S2T
            </span>

            <span className="text-sm text-blue-700 font-semibold tracking-wide">
              Schools Towards Technology (S2T)
            </span>

            <span className="text-[11px] text-gray-500 tracking-wide">
              Sairam Institutions
            </span>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="hidden md:flex items-center gap-12">
          {[
            { label: "S2T Editions", id: "timeline" },
            { label: "Adutha Ilakku", id: "adutha-ilakku" },
            { label: "Leadership", id: "leadership" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-sm font-medium text-gray-600 hover:text-blue-700 transition
              after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-4 shadow">
          {[
            { label: "Timeline", id: "timeline" },
            { label: "Adutha Ilakku", id: "adutha-ilakku" },
            { label: "Leadership", id: "leadership" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-base font-medium text-gray-700 hover:text-blue-700 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;