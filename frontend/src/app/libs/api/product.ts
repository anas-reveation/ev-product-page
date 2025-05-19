import { notFound } from "next/navigation";
import { Product } from "@/app/types/product";

export async function fetchProduct(slug: string): Promise<Product> {
  const res = await fetch(`${process.env.API_BASE_URL}/api/products/${slug}`, {
    cache: "no-store", 
  });

  if (res.status === 404) {
    notFound(); 
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  const product: Product = await res.json();
  return product;
}
