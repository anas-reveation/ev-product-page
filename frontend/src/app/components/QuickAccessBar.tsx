import React from "react";

const categories = [
  "EV Scooters",
  "Rooftop Solar",
  "Comparisons",
  "Exchange",
  "Check Loan Eligibility",
  "Subscription",
  "Calculators",
  "Blogs",
];

export default function QuickAccessBar() {
  return (
    <div className="hidden sm:block sticky top-20 z-40 bg-gray-100 shadow-sm ">
      <div className="w-full overflow-x-auto no-scrollbar container">
        <div className="grid grid-flow-col auto-cols-max gap-4 px-4 py-2 text-sm font-medium whitespace-nowrap">
          {categories.map((title) => (
            <button
              key={title}
              className="px-4 py-2  text-black hover:bg-[#39B542] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
