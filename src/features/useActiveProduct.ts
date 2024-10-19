import { useProductContext } from "@/context/ProductContext";
import { StaticImageData } from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useActiveProduct = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product") || "sneakers-1";
  const { setActiveProduct, products } = useProductContext();

  const changeActiveProduct = (src: StaticImageData, name: string) => {
    setActiveProduct(src);
    const url = new URL(window.location.href);
    url.searchParams.set("product", name);
    window.history.pushState({}, "", url.toString());
  };

  useEffect(() => {
    const product = products.find((p) => p.name === productName);
    if (product) {
      setActiveProduct(product.src);
    }
  }, [productName, setActiveProduct, products]);

  return {
    changeActiveProduct,
  };
};
