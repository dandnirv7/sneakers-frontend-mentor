import { useProductContext } from "@/context/ProductContext";
import { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useActiveImage = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product") || "sneakers-1";
  const { setActiveImageProduct, imageProducts } = useProductContext();

  const changeActiveImage = (src: StaticImageData, name: string) => {
    setActiveImageProduct(src);
    const url = new URL(window.location.href);
    url.searchParams.set("product", name);
    window.history.pushState({}, "", url.toString());
  };

  useEffect(() => {
    const imageProduct = imageProducts.find((p) => p.imageName === productName);
    if (imageProduct) {
      setActiveImageProduct(imageProduct.src);
    }
  }, [productName, setActiveImageProduct, imageProducts]);

  return {
    changeActiveImage,
  };
};
