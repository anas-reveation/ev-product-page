"use client";

import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import Card from "./Card";
import { SliderDirection } from "@/app/Buttons/SliderButton";
import { Product } from "@/app/types/product";

type RelatedProductsProps = {
  products: Product[];
};

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

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <section className="container mx-auto text-black py-5 my-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="flex space-x-2">
          <SliderDirection title="&lt;" variant="green" onClick={handlePrev} />
          <SliderDirection title="&gt;" variant="gray" onClick={handleNext} />
        </div>
      </div>

      <Slider ref={sliderRef} {...sliderSettings}>
        {products.map((product) => (
          <div key={product._id} className="px-2 py-2">
            <div className="h-[360px] w-full flex">
              <Card
                imageUrl={product.imageUrl || ""}
                name={product.name}
                price={product.price}
                slug={product.slug}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
