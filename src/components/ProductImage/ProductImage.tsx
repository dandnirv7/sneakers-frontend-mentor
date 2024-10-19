import Image, { StaticImageData } from "next/image";
import React from "react";

const ProductImage = ({
  activeProduct,
}: {
  activeProduct: string | StaticImageData;
}) => {
  return (
    <Image
      src={activeProduct}
      alt="active product"
      priority
      className="aspect-square rounded-xl"
      width={512}
      height={512}
    />
  );
};

export default ProductImage;
