import { Specifications } from "@/app/types/product";
import SpecificationTable from "./Table";

type SpecificationProps = {
  specifications: Specifications;
};

export default function Specification({ specifications }: SpecificationProps) {
  const specItems = [
    { label: "Ex-showroom price", value: `₹${specifications.exShowroomPrice}` },
    {
      label: "Certified range",
      value: `${specifications.certifiedRangeKm} km`,
    },
    { label: "True range", value: `${specifications.trueRangeKm} km` },
    {
      label: "Motor power (nominal/peak)",
      value: `${specifications.motorPowerKW} kW`,
    },
    { label: "Charging time", value: specifications.chargingTimeHours },
    {
      label: "Fast charging",
      value:
        specifications.fastChargingInfo ||
        "0-50% SOC (1.5 km/min), 50-80% SOC (1 km/min)",
    },
    { label: "Top Speed", value: `${specifications.topSpeedKmh} km/h` },
    {
      label: "Battery Capacity",
      value: `${specifications.batteryCapacityKWh} kWh`,
    },
    { label: "Weight", value: `${specifications.weightKg} kg` },
    { label: "Length", value: `${specifications.lengthCm} cm` },
    { label: "Width", value: `${specifications.widthCm} cm` },
    { label: "Height", value: `${specifications.heightCm} cm` },
    {
      label: "Warranty",
      value: `${specifications.warrantyYears} years / ${specifications.warrantyKm} km`,
    },
  ];

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm">
      <SpecificationTable title="General Comparisons" items={specItems} />
    </div>
  );
}
