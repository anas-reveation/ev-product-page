import { Key } from "react";

export type Specifications = {
  exShowroomPrice: number;
  certifiedRangeKm: number;
  trueRangeKm: number;
  motorPowerKW: number;
  chargingTimeHours: string;
  fastChargingInfo?: string;
  lengthCm: number;
  widthCm: number;
  heightCm: number;
  weightKg: number;
  topSpeedKmh: number;
  batteryCapacityKWh: number;
  warrantyKm: number;
  warrantyYears: number;
};

export type Product = {
  _id: Key | null | undefined;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  colorOptions: string[];
  description: string;
  imageUrl?: string;
  specifications?: Specifications;
  relatedProducts?: Product[];
};
