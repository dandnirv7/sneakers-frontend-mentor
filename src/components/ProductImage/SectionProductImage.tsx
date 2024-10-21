import React from "react";

import { useProductContext } from "@/context/ProductContext";
import ProductImage from "./ProductImage";
import ThumbanilList from "./ThumbnailList";

const SectionProductImage: React.FC = () => {
  const { activeImageProduct } = useProductContext();

  return (
    <section className="flex flex-col md:gap-6">
      <ProductImage activeProduct={activeImageProduct} />
      <ThumbanilList className="w-[104px] h-[104px]" />
    </section>
  );
};

export default SectionProductImage;
