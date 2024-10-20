import React from "react";

import { useProductContext } from "@/context/ProductContext";
import { useActiveImage } from "@/features/useActiveImage";
import Image from "next/image";
import EachUtils from "@/components/EachUtils";
import ProductImage from "./ProductImage";

const SectionProductImage: React.FC = () => {
  const { activeImageProduct, imageProducts } = useProductContext();
  const { changeActiveImage } = useActiveImage();

  return (
    <section className="flex flex-col gap-6">
      <ProductImage activeProduct={activeImageProduct} />
      <ul className="flex flex-row items-center gap-8 cursor-pointer">
        <EachUtils
          items={imageProducts}
          render={(imageProduct) => (
            <li
              key={imageProduct.id}
              className={`rounded-xl ${
                activeImageProduct === imageProduct.src
                  ? "ring ring-orange-500"
                  : ""
              }`}
              onClick={() =>
                changeActiveImage(imageProduct.src, imageProduct.imageName)
              }
            >
              <Image
                src={imageProduct.src}
                alt="Product thumbnail"
                priority
                className={`aspect-square rounded-xl ${
                  activeImageProduct === imageProduct.src
                    ? "opacity-50"
                    : "opacity-100 hover:opacity-50"
                }`}
                width={104}
                height={104}
              />
            </li>
          )}
        />
      </ul>
    </section>
  );
};

export default SectionProductImage;
