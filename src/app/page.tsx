"use client";

import SectionProductDetails from "@/components/ProductDetails/SectionProductDetails";
import SectionProductImage from "@/components/ProductImage/SectionProductImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:flex-row md:px-5 md:py-10 lg:px-10 lg:py-20 md:gap-20 lg:gap-36">
      <SectionProductImage />
      <SectionProductDetails />
    </main>
  );
}
