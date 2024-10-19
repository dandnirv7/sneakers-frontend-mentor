import React from "react";

import { useProductContext } from "@/context/ProductContext";
import { useActiveProduct } from "@/features/useActiveProduct";
import Image from "next/image";
import EachUtils from "@/components/EachUtils";
import ProductImage from "./ProductImage";

const SectionProductImage: React.FC = () => {
  const { activeProduct, products } = useProductContext();
  const { changeActiveProduct } = useActiveProduct();

  return (
    <section className="flex flex-col gap-6">
      <ProductImage activeProduct={activeProduct} />
      <ul className="flex flex-row items-center gap-8 cursor-pointer">
        <EachUtils
          items={products}
          render={(product) => (
            <li
              key={product.id}
              className={`rounded-xl ${
                activeProduct === product.src ? "ring ring-orange-500" : ""
              }`}
              onClick={() => changeActiveProduct(product.src, product.name)}
            >
              <Image
                src={product.src}
                alt="Product thumbnail"
                priority
                className={`aspect-square rounded-xl ${
                  activeProduct === product.src
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
