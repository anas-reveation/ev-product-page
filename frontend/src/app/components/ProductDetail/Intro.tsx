import React, { useState } from "react";
import CustomButton from "@/app/Buttons/CustomButton";
import { Product } from "@/app/types/product";

type Props = {
  product: Product;
};

const defaultProduct: Product = {
  name: "Product Name",
  price: 0,
  description: "Product description goes here.",
  brand: "Brand",
  category: "Category",
  colorOptions: ["Default colour"],
  slug: "",
  _id: undefined,
};

export default function ProductIntro({ product = defaultProduct }: Props) {
  const [selectedColour, setSelectedColour] = useState(product.colorOptions[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [pincode, setPincode] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("EMI");

  const formatCurrency = (num: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(num);

  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  return (
    <section className="container flex flex-col gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-black pb-4">
          {product.name}
        </h1>
        <p className="text-2xl text-green-600 font-semibold py-3">
          {formatCurrency(product.price)}
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-gray-500 mt-1">EMI starts at per month.</p>
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="w-20 border rounded-md px-2 py-1 text-black"
          >
            <option value="EMI">EMI</option>
            <option value="Subscription">Subscription</option>
          </select>
        </div>
      </div>

      <section className="text-gray-700 space-y-2">
        <p className="leading-relaxed">{product.description}</p>
        <div className="text-sm border-t border-b border-gray-300 py-3 flex flex-col md:flex-row space-y-2">
          <div>
            <span className="font-semibold">Brand:</span> {product.brand}{" "}
            &nbsp;&nbsp;
          </div>
          <div>
            <span className="font-semibold">Category:</span> {product.category}
          </div>
        </div>
      </section>

      <section className="flex items-center space-x-2 text-black">
        <h3 className="text-sm font-semibold">Color</h3>
        <select
          value={selectedColour}
          onChange={(e) => setSelectedColour(e.target.value)}
          className="w-full md:w-48 border rounded-md p-2"
        >
          {product.colorOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </section>

      <section className="space-y-2 text-black flex flex-col">
        <h3 className="text-sm font-semibold">Addons</h3>
        <div className="flex space-x-2">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selectedAddons.includes("addon1")}
              onChange={() => toggleAddon("addon1")}
              className="accent-green-600"
            />
            Extended Warranty
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selectedAddons.includes("addon2")}
              onChange={() => toggleAddon("addon2")}
              className="accent-green-600"
            />
            Roadside Assistance
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selectedAddons.includes("addon3")}
              onChange={() => toggleAddon("addon3")}
              className="accent-green-600"
            />
            Free Service Package
          </label>{" "}
        </div>
      </section>

      <a href="#" className="text-sm text-blue-600 underline">
        Save more with Exchange
      </a>

      <h3 className="text-sm font-semibold text-black">Pin Code</h3>

      <div className="flex flex-col md:flex-row justify-between w-full space-x-2 space-y-2 md:space-y-0 text-black">
        <input
          type="text"
          placeholder=" Enter Pin Code"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="w-full md:w-56 border rounded-md p-2"
        />
        <CustomButton
          label="Add to cart"
          variant="green"
          className="w-full px-5 md:w-60 py-3"
        />
      </div>

      <p className="text-sm text-green-500 font-bold text-start md:text-right">
        *Please enter your pincode to check
        <br />
        availability in your area.
      </p>
    </section>
  );
}
