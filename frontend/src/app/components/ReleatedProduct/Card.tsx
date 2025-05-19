"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../../Buttons/CustomButton";
import Image from "next/image";

type CardProps = {
  imageUrl: string;
  name: string;
  price: number;
  slug: string;
};

export default function Card({ imageUrl, name, price, slug }: CardProps) {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/product/${slug}`);
  };

  return (
    <div className="flex flex-col h-full w-full rounded-2xl overflow-hidden shadow hover:shadow-lg bg-white transition-shadow">
      <Image src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-md text-gray-700 mt-1">₹{price}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <CustomButton label="Explore More" variant="gray" />
          <CustomButton
            label="Details"
            variant="green"
            className="w-25 cursor-pointer"
            onClick={handleDetailsClick}
          />
        </div>
      </div>
    </div>
  );
}
