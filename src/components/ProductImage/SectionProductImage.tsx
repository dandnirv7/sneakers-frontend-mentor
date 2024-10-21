import React from "react";

import { useProductContext } from "@/context/ProductContext";
import ProductImage from "./ProductImage";
import ThumbnailList from "./ThumbnailList";

const SectionProductImage: React.FC = () => {
  const { activeImageProduct } = useProductContext();

  return (
    <section className="flex flex-col md:gap-3 lg:gap-6">
      <ProductImage activeProduct={activeImageProduct} />
      <ThumbnailList className="md:w-16 md:h-16 lg:w-[104px] lg:h-[104px]" />
    </section>
  );
};

export default SectionProductImage;
