"use client";

import SectionProductDetails from "@/components/ProductDetails/SectionProductDetails";
import SectionProductImage from "@/components/ProductImage/SectionProductImage";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between md:px-10 md:py-20">
      <SectionProductImage />
      <SectionProductDetails />
    </main>
  );
}
