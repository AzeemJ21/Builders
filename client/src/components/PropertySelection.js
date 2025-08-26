"use client";

import { useState } from "react";
import {
  Home,
  Building2,
  Warehouse,
  KeyRound,
  DollarSign,
  CreditCard,
  ArrowRightCircle,
} from "lucide-react";
import Link from "next/link";

export default function PropertySection() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  const propertyOptions = [
    { label: "Plots", icon: Warehouse, value: "plots" },
    { label: "House", icon: Home, value: "house" },
    { label: "Apartment", icon: Building2, value: "apartment" },
  ];

  const marlaOptions = [
    { size: "3", icon: ArrowRightCircle },
    { size: "5", icon: ArrowRightCircle },
    { size: "7", icon: ArrowRightCircle },
    { size: "10", icon: ArrowRightCircle },
  ];

  const handleSelect = (type) => {
    setSelectedType(type);
    setSelectedAction(null);
    setOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Find Your Dream Property
        </h2>
        <p className="mt-3 text-gray-500">
          Choose property type and explore tailored Rent, Sale or Installment
          options
        </p>

        {/* Property Options */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {propertyOptions.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className="flex flex-col items-center justify-center gap-4 p-10 bg-white rounded-2xl shadow-md hover:shadow-xl transition border hover:border-red-500"
            >
              <item.icon className="h-12 w-12 text-red-600" />
              <span className="text-lg font-semibold text-gray-700">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl animate-modalFadeIn mx-4 sm:mx-0">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="px-6 py-5 border-b">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {!selectedAction
                  ? `Select Option for ${
                      selectedType.charAt(0).toUpperCase() +
                      selectedType.slice(1)
                    }`
                  : `Choose Size (${selectedAction.toUpperCase()})`}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Step 1: Rent / Sale / Installments */}
              {!selectedAction && (
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setSelectedAction("rent")}
                    className="flex items-center gap-3 px-6 py-4 rounded-lg border text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition"
                  >
                    <KeyRound className="h-6 w-6 text-gray-500" />
                    Rent
                  </button>
                  <button
                    onClick={() => setSelectedAction("sale")}
                    className="flex items-center gap-3 px-6 py-4 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                  >
                    <DollarSign className="h-6 w-6" />
                    Sale
                  </button>
                  <button
                    onClick={() => setSelectedAction("installments")}
                    className="flex items-center gap-3 px-6 py-4 rounded-lg border text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition"
                  >
                    <CreditCard className="h-6 w-6 text-gray-500" />
                    Installments
                  </button>
                </div>
              )}

              {/* Step 2: Marla Options */}
              {selectedAction && (
                <div className="grid grid-cols-2 gap-4">
                  {marlaOptions.map((option) => (
                    <Link
                      key={option.size}
                      href={`/${selectedType}/${selectedAction}/${option.size}-marla`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-center gap-2 px-6 py-4 rounded-lg border text-gray-700 font-medium hover:bg-red-600 hover:text-white hover:border-red-600 transition"
                    >
                      <option.icon className="h-5 w-5 text-gray-500 group-hover:text-white" />
                      {option.size} Marla
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Modal Animation */}
          <style jsx>{`
            @keyframes modalFadeIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-modalFadeIn {
              animation: modalFadeIn 0.25s ease-out forwards;
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
