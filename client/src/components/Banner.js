"use client";

import Link from "next/link";
import { Phone, MessageCircle, Search, Home, Square, DollarSign } from "lucide-react";

export default function Banner() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: "url('/Bgb.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-red-700/90"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Find Your Perfect Plot in <br />
          <span className="text-yellow-300">Premium Housing Societies</span>
        </h1>
        <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
          Discover verified plots in top societies with detailed maps, pricing,
          and instant connectivity to <span className="font-semibold">SIM Associates</span>.
        </p>

        {/* Search Bar Card */}
        <div className="mt-8 bg-white text-gray-800 rounded-2xl shadow-xl max-w-5xl mx-auto p-8">
          <h2 className="text-lg font-semibold text-center text-red-600 mb-6">
            Search Available Plots
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* Select Society */}
            <div className="relative">
              <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select className="w-full p-3 pl-10 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-500 hover:border-red-400 transition">
                <option>Select Society</option>
                <option>DHA Lahore</option>
                <option>Bahria Town</option>
                <option>Lake City</option>
              </select>
            </div>

            {/* Plot Size */}
            <div className="relative">
              <Square className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select className="w-full p-3 pl-10 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-500 hover:border-red-400 transition">
                <option>Plot Size</option>
                <option>5 Marla</option>
                <option>10 Marla</option>
                <option>1 Kanal</option>
              </select>
            </div>

            {/* Budget Range */}
            <div className="relative flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-500 hover:border-red-400 transition"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 shadow-sm focus:ring-2 focus:ring-red-500 hover:border-red-400 transition"
              />
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-semibold shadow hover:bg-red-700 transition"
              >
                <Search className="h-5 w-5" /> Search Plots
              </button>
            </div>
          </form>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/+923224488025"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 px-6 py-3 rounded-lg font-semibold text-white shadow hover:bg-green-600 transition"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp Now
          </Link>
          <Link
            href="tel:+923224488025"
            className="inline-flex items-center gap-2 bg-yellow-400 text-red-700 font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
          >
            <Phone className="h-5 w-5" /> Call Expert
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-extrabold text-yellow-300">500+</h3>
            <p className="text-red-100">Happy Families</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-yellow-300">15+</h3>
            <p className="text-red-100">Premium Societies</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold text-yellow-300">10</h3>
            <p className="text-red-100">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
