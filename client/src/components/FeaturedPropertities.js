"use client";

import Image from "next/image";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  MessageCircle,
  Home,
} from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "10 Marla House in DHA Phase 5",
      location: "DHA Phase 5, Lahore",
      price: "PKR 4.5 Crore",
      area: "10 Marla",
      beds: 5,
      baths: 6,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 2,
      title: "1 Kanal Plot in Bahria Town",
      location: "Bahria Town, Lahore",
      price: "PKR 3.2 Crore",
      area: "1 Kanal",
      beds: 0,
      baths: 0,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 3,
      title: "Luxury Apartment",
      location: "Gulberg, Lahore",
      price: "PKR 2.1 Crore",
      area: "2200 sq.ft",
      beds: 3,
      baths: 3,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 4,
      title: "5 Marla House",
      location: "Johar Town, Lahore",
      price: "PKR 1.8 Crore",
      area: "5 Marla",
      beds: 3,
      baths: 4,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 5,
      title: "12 Marla House",
      location: "Valencia Town, Lahore",
      price: "PKR 3.0 Crore",
      area: "12 Marla",
      beds: 4,
      baths: 5,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 6,
      title: "Penthouse Apartment",
      location: "Gulberg Heights, Lahore",
      price: "PKR 4.8 Crore",
      area: "2800 sq.ft",
      beds: 4,
      baths: 4,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 7,
      title: "Corner Plot 1 Kanal",
      location: "DHA Phase 8, Lahore",
      price: "PKR 4.0 Crore",
      area: "1 Kanal",
      beds: 0,
      baths: 0,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 8,
      title: "7 Marla House",
      location: "Bahria Orchard, Lahore",
      price: "PKR 2.2 Crore",
      area: "7 Marla",
      beds: 4,
      baths: 4,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 9,
      title: "Commercial Plaza",
      location: "MM Alam Road, Lahore",
      price: "PKR 12 Crore",
      area: "8 Marla",
      beds: 0,
      baths: 0,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
    {
      id: 10,
      title: "Farmhouse Land",
      location: "Bedian Road, Lahore",
      price: "PKR 6.5 Crore",
      area: "4 Kanal",
      beds: 0,
      baths: 0,
      image: "/property1.png",
      phone: "+923001234567",
      whatsapp: "+923001234567",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Properties
          </h2>
          <p className="mt-3 text-gray-500">
            Explore premium properties handpicked for you.
          </p>
        </div>

       {/* Swiper Slider */}
<Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={20}
  slidesPerView={3}
  autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
  pagination={{ clickable: true }}
  loop={true}
  className="pb-10"
  breakpoints={{
    0: { slidesPerView: 1 },   // Mobile small screen = 1 property
    640: { slidesPerView: 2 }, // Mobile landscape & tablets = 2 properties
    1024: { slidesPerView: 3 } // Desktop = 3 properties
  }}
>
  {properties.map((property) => (
    <SwiperSlide key={property.id}>
      <div className="bg-white w-[360px] rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group border border-gray-100">
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white font-semibold text-sm bg-red-600 px-3 py-1 rounded-lg shadow-md">
            {property.price}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition line-clamp-2">
            {property.title}
          </h3>

          <p className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-red-500" />
            {property.location}
          </p>

          {/* Property Details */}
          <div className="flex items-center justify-between text-gray-600 text-sm border-t border-b py-3">
            <span className="flex items-center gap-1">
              <Square className="h-4 w-4 text-gray-500" /> {property.area}
            </span>
            <span className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-gray-500" /> {property.beds} Beds
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-gray-500" /> {property.baths} Baths
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <Link
              href={`tel:${property.phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              <Phone className="h-4 w-4" /> Call Now
            </Link>
            <Link
              href={`https://wa.me/${property.whatsapp}`}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Link>
          </div>

          {/* Details Button */}
          <Link
            href={`/properties/${property.id}`}
            className="inline-flex items-center justify-center w-full mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
          >
            <Home className="h-4 w-4 mr-2 text-red-600" />
            View Details
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
