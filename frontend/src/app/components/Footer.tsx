"use client";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useState } from "react";

const linkSections = [
  {
    title: "Resources",
    links: [
      "About us",
      "FAQs",
      "Offers T&C",
      "Calculator",
      "Webstories",
      "Glossary",
    ],
  },
  {
    title: "More",
    links: [
      "Blogs",
      "Privacy Policy",
      "Sell on Ecozaar",
      "We are in news",
      "Refer and Earn",
    ],
  },
  {
    title: "Products",
    links: ["Rooftop Solar", "2 Wheeler EVs"],
  },
];

export default function Footer() {
  // State to track which sections are open on mobile
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <footer className="bg-white border-t border-border-gray mt-12 text-sm font-body container">
        <div className="max-w-container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 text-black">
          <div>
            <img
              src="https://images.ecozaar.in/wp-content/uploads/2024/08/09131255/Logo.png"
              alt="Ecozaar Logo"
              className="h-15 w-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Collapsible sections for mobile */}
            {linkSections.map(({ title, links }, index) => (
              <div key={title}>
                <button
                  type="button"
                  className="flex justify-between items-center w-full font-semibold mb-3 sm:hidden"
                  onClick={() => toggleSection(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`section-${index}`}
                >
                  {title}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                <h3 className="hidden sm:block font-semibold mb-3">{title}</h3>

                <ul
                  id={`section-${index}`}
                  className={`space-y-2 text-medium-gray sm:block hover:text-[#39B542] ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  {links.map((link) => (
                    <li
                      key={link}
                      className="hover:text-[#39B542] cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-semibold mb-3">Contact Us</h3>

              <div className="flex items-start gap-2 text-medium-gray text-sm mb-2">
                <FaMapMarkerAlt className="mt-1" />
                <p className="hover:text-[#39B542] cursor-pointer">
                  Autovertt Technologies Pvt. Ltd.
                  <br />
                  1082, 2nd Floor, 12th Main Rd, Indiranagar,
                  <br />
                  Bangalore 560008
                </p>
              </div>

              <div className="flex items-center gap-2 text-medium-gray text-sm mb-2">
                <FaPhoneAlt />
                <p className="hover:text-[#39B542] cursor-pointer">
                  (+91) 6366303807
                </p>
              </div>

              <div className="flex items-center gap-2 text-medium-gray text-sm">
                <FaEnvelope />
                <p className="hover:text-[#39B542] cursor-pointer">
                  support@ecozaar.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#2A1C4D] text-white text-center text-xs py-5">
        Autovertt © Copyright {new Date().getFullYear()}, Inc. All rights
        reserved
      </div>
    </>
  );
}
