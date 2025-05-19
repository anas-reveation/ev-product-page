import ProductDetail from "@/app/components/ProductDetail";
import ProductDetailTabs from "@/app/components/ProductDetailTabs";
import RelatedArticles from "@/app/components/ReleatedArticle";
import RelatedProducts from "@/app/components/ReleatedProduct";
import { SavingOverview } from "@/app/components/SavingsOverview";
import SocialSection from "@/app/components/SocialSection";
import { fetchProduct } from "@/app/libs/api/product";
import { Product } from "@/app/types/product";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product: Product = await fetchProduct(params.slug);

  return (
    <div className=" mx-auto px-4 py-8 ">
      <ProductDetail product={product} />
      <SavingOverview />
      <ProductDetailTabs product={product} />
      <RelatedProducts products={product.relatedProducts ?? []} />
      <RelatedArticles />
      <SocialSection />
    </div>
  );
}
