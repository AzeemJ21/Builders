"use client";

import {
  Users,
  ShieldCheck,
  Clock,
  Wallet,
  Network,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Experienced & Dedicated Team",
      desc: "Our team ensures expert guidance and reliable support throughout your investment journey.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Dealings",
      desc: "We believe in honesty and transparency for secure property transactions.",
    },
    {
      icon: Clock,
      title: "On-Time Project Completion",
      desc: "Delivering projects on schedule with efficiency and precision.",
    },
    {
      icon: Wallet,
      title: "Affordable & Secure Investment",
      desc: "Tailored investment solutions to fit your budget and goals.",
    },
    {
      icon: Network,
      title: "Strong Network in Lahore",
      desc: "Trusted connections across top housing societies in Lahore.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Why Choose <span className="text-red-600">SIM Associates?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We are committed to delivering <span className="font-semibold">trusted, secure, and profitable property investments</span> with a legacy of excellence in Lahore’s real estate market.
          </p>
          <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium shadow-lg hover:bg-red-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Features */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-red-200 transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
