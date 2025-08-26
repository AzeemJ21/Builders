"use client";

import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const PHONE_NUMBER = "+923224488025";

  return (
    <footer className="bg-white text-red-700 pt-12 pb-6 font-poppins text-base">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={"/Footer2.png"}
              alt="Logo"
              width={200}
              height={100}
            />
          </div>
          <p className="mt-4 leading-relaxed text-neutral-700 text-lg">
            Your trusted partner for premium property investments in Lahore’s
            top housing societies.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-3 py-2 text-lg font-medium text-white shadow hover:bg-green-600 transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </Link>
            <Link
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-lg border border-red-600 text-red-600 px-3 py-2 text-lg font-medium shadow hover:bg-red-50 transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-red-600 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg">
            <li><Link href="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link href="/societies" className="hover:text-red-500 transition">Housing Societies</Link></li>
            <li><Link href="/plots" className="hover:text-red-500 transition">Available Plots</Link></li>
            <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-red-600 inline-block">
            Our Services
          </h3>
          <ul className="space-y-2 text-lg text-neutral-700">
            <li>Plot Sales & Purchase</li>
            <li>Property Consultation</li>
            <li>Legal Documentation</li>
            <li>Site Visits</li>
            <li>Investment Advisory</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-3 border-b-2 border-red-600 inline-block">
            Contact Information
          </h3>
          <ul className="space-y-3 text-lg text-neutral-700">
            <li className="flex gap-2"><MapPin className="h-5 w-5 mt-0.5 text-red-600" /> B 47 Commercial Area Grand Avenue Housing</li>
            <li className="flex gap-2"><Phone className="h-5 w-5 mt-0.5 text-red-600" /> +92 322 4488025</li>
            <li className="flex gap-2"><MessageCircle className="h-5 w-5 mt-0.5 text-red-600" /> WhatsApp: +92 300 1234567</li>
            <li className="flex gap-2"><Mail className="h-5 w-5 mt-0.5 text-red-600" /> info@simassociates.com</li>
            <li className="flex gap-2"><Clock className="h-5 w-5 mt-0.5 text-red-600" /> Mon-Sat: 9AM-8PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-red-200 pt-4 text-lg text-center text-neutral-600">
        <p>© 2024 SIM Associates. All rights reserved.<Link href="https:devminz.com" className="hover:text-blue-500 transition"> DevMinz</Link></p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-red-500 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-red-500 transition">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-red-500 transition">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
