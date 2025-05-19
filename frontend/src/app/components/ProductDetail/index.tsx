"use client";
import ProductIntro from "./Intro";
import ShowCase from "./ShowCase";

export default function ProductDetail({ product }: { product: any }) {
  return (
    <div className="container px-4 md:p-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ShowCase product={product} />

        <div className="flex flex-col  md:p-4">
          <ProductIntro product={product} />
        </div>
      </div>
    </div>
  );
}
