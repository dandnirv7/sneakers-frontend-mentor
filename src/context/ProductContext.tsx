"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
} from "react";
import { StaticImageData } from "next/image";
import { products } from "@/data/products";

interface ProductContextType {
  activeImageProduct: StaticImageData;
  setActiveImageProduct: (src: StaticImageData) => void;
  imageProducts: { id: number; src: StaticImageData; imageName: string }[];
  quantity: number;
  setQuantity: React.Dispatch<SetStateAction<number>>;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  resetQuantity: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const imageProducts = products[0].imageProducts;

  const [activeImageProduct, setActiveImageProduct] = useState<StaticImageData>(
    imageProducts[0].src
  );
  const [quantity, setQuantity] = useState<number>(0);

  const incrementQuantity = () => {
    setQuantity((prev) => {
      const newQty = prev + 1;
      const url = new URL(window.location.href);
      url.searchParams.set("qty", newQty.toString());
      window.history.pushState({}, "", url.toString());
      return newQty;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prev) => {
      const newQty = Math.max(0, prev - 1);
      const url = new URL(window.location.href);
      url.searchParams.set("qty", newQty.toString());
      window.history.pushState({}, "", url.toString());
      return newQty;
    });
  };

  const resetQuantity = () => {
    setQuantity(() => {
      const newQty = 0;
      const url = new URL(window.location.href);
      url.searchParams.set("qty", newQty.toString());
      window.history.pushState({}, "", url.toString());
      return newQty;
    });
  };

  return (
    <ProductContext.Provider
      value={{
        activeImageProduct,
        setActiveImageProduct,
        imageProducts,
        quantity,
        setQuantity,
        incrementQuantity,
        decrementQuantity,
        resetQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
