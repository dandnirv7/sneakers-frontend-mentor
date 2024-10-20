"use client";

import SectionProductDetails from "@/components/ProductDetails/SectionProductDetails";
import SectionProductImage from "@/components/ProductImage/SectionProductImage";

export default function Home() {
  return (
    <main className="flex flex-row items-center justify-between px-10 py-20">
      <SectionProductImage />
      <SectionProductDetails />
    </main>
  );
}
