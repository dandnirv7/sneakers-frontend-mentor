"use client";

import SectionProductDetails from "@/components/ProductDetails/SectionProductDetails";
import SectionProductImage from "@/components/ProductImage/SectionProductImage";
import { ProductProvider } from "@/context/ProductContext";

export default function Home() {
  return (
    <ProductProvider>
      <main className="flex flex-row items-center justify-between px-10 py-20">
        <SectionProductImage />
        <SectionProductDetails />
      </main>
    </ProductProvider>
  );
}
