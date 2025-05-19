import CustomButton from "@/app/Buttons/CustomButton";
import Card from "./Card";
import { Product } from "@/app/types/product";
import Image from "next/image";

type Props = {
  product: Product;
};

export default function ShowCase({ product }: Props) {
  const { specifications } = product;

  const cardsData = [
    {
      iconUrl: "https://ecozaar.in/wp-content/uploads/2024/10/Group.svg",
      title: specifications?.batteryCapacityKWh + "Kwh" || "",
      subtitle: "Battery",
    },
    {
      iconUrl: "https://ecozaar.in/wp-content/uploads/2024/10/Group-1.svg",
      title: specifications?.certifiedRangeKm + "Km" || "",
      subtitle: "Range",
    },
    {
      iconUrl: "https://ecozaar.in/wp-content/uploads/2024/10/gas-station.svg",
      title: specifications?.chargingTimeHours || "",
      subtitle: "Charging Time",
    },
  ];

  return (
    <div className=" ">
      <CustomButton
        label="Buy or Subscribe"
        variant="gray"
        className="font-semibold"
      />

      <div className="mt-6">
        <Image
          src={product.imageUrl ?? ''}
          alt="Large Banner"
          className="w-full  object-cover rounded-lg"
        />
      </div>

      <div className="mt-10 grid grid-cols-3 gap-2 md:gap-6">
        {cardsData.map(({ iconUrl, title, subtitle }, index) => (
          <Card
            key={index}
            iconUrl={iconUrl}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </div>
    </div>
  );
}
