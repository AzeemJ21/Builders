"use client";

import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedSocieties() {
  const societies = [
    {
      name: "DHA Lahore",
      location: "Lahore Cantt",
      desc: "Premium plots, modern infrastructure, and top-tier amenities.",
      image: "/DHA.jfif",
      link: "/societies/dha",
    },
    {
      name: "Bahria Town",
      location: "Canal Road, Lahore",
      desc: "Luxurious lifestyle with parks, schools, and commercial hubs.",
      image: "/BT.jfif",
      link: "/societies/bahria",
    },
    {
      name: "Lake City",
      location: "Raiwind Road, Lahore",
      desc: "A modern gated society offering golf course living.",
      image: "/lakecity.png",
      link: "/societies/lake-city",
    },
    {
      name: "Park View City",
      location: "Multan Road, Lahore",
      desc: "Affordable plots with modern facilities and rapid development.",
      image: "/pvc.png",
      link: "/societies/park-view-city",
    },
    {
      name: "Al Kabir Town",
      location: "Raiwind Road, Lahore",
      desc: "Fast-growing society with residential & commercial opportunities.",
      image: "/akt.jfif",
      link: "/societies/al-kabir-town",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Housing Societies
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover top housing societies offering luxury living, modern
            facilities, and excellent investment opportunities.
          </p>
        </div>

        {/* Auto Scrolling Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-scroll hover:[animation-play-state:paused]">
            {[...societies, ...societies].map((society, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-sm bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={society.image}
                    alt={society.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-80 transition" />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    Hot Society
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition">
                    {society.name}
                  </h3>
                  <p className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <MapPin className="h-4 w-4 text-red-500" />{" "}
                    {society.location}
                  </p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {society.desc}
                  </p>

                  {/* Button */}
                  <Link
                    href={society.link}
                    className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition group"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
