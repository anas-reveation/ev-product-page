"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import Card from "./Card";
import { SliderDirection } from "@/app/Buttons/SliderButton";

interface Article {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: "1",
    title:
      "Honda Adventure & Touring Bikes in India 2025: The Complete Rider’s Guide",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/15155329/Honda-Adventure-Touring-Bikes-in-India-2025-The-Complete-Riders-Guide.jpg",
  },
  {
    id: "2",
    title: "Best Dirt Bikes in India 2025: Prices & Specs Guide",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/15155348/Best-Dirt-Bikes-in-India-2025-Prices-Specs-Guide.jpg",
  },
  {
    id: "3",
    title: "Harley-Davidson Bikes in India: Prices & Top Picks (2025 Guide)",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/15155410/Harley-Davidson-Bikes-in-India-Prices-Top-Picks-2025-Guide.jpg",
  },
  {
    id: "4",
    title:
      "Benelli Bikes in India: Complete Model Guide & Prices (2025 Edition)",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/15155320/Benelli-Bikes-in-India-Complete-Model-Guide-Prices-2025-Edition.jpg",
  },
  {
    id: "5",
    title: "Top 1000cc Bikes in India: Price, Specs & Reviews (2025 Guide)",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/15155338/Top-1000cc-Bikes-in-India-Price-Specs-Reviews-2025-Guide.jpg",
  },
  {
    id: "6",
    title:
      "How to Transfer Vehicle Ownership Online & Offline in India (2025 Guide)",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/15155359/How-to-Transfer-Vehicle-Ownership-Online-Offline-in-India-2025-Guide.jpg",
  },
  {
    id: "7",
    title: "All Driving License Categories & Classes in India: A Primer",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/13155939/All-Driving-License-Categories-Classes-in-India.jpg",
  },
  {
    id: "8",
    title:
      "How to Change Your Name on Driving Licence Online & Offline (2025 Guide)",
    date: "15/05/2025",
    imageUrl:
      "https://images.ecozaar.in/wp-content/uploads/2025/05/13153011/How-to-Change-Your-Name-on-Driving-Licence-Online-Offline-2025-Guide.jpg",
  },
];

const sliderSettings: Settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function RelatedArticles() {
  const sliderRef = useRef<Slider>(null);

  function handlePrev() {
    sliderRef.current?.slickPrev();
  }

  function handleNext() {
    sliderRef.current?.slickNext();
  }

  return (
    <section className="container mx-auto text-black my-5 py-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>

        <div className="flex space-x-2">
          <SliderDirection title="&lt;" variant="green" onClick={handlePrev} />
          <SliderDirection title="&gt;" variant="gray" onClick={handleNext} />
        </div>
      </div>

      <div className="relative ">
        <Slider ref={sliderRef} {...sliderSettings}>
          {articles.map((article) => (
            <div key={article.id} className="px-2 py-2">
              <div className=" h-[340px] w-full flex ">
                <Card
                  imageUrl={article.imageUrl}
                  title={article.title}
                  date={article.date}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
