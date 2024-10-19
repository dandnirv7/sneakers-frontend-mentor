"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { StaticImageData } from "next/image";

import imageProduct1 from "@/assets/images/image-product-1.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";

const products = [
  { id: 1, src: imageProduct1, name: "sneakers-1" },
  { id: 2, src: imageProduct2, name: "sneakers-2" },
  { id: 3, src: imageProduct3, name: "sneakers-3" },
  { id: 4, src: imageProduct4, name: "sneakers-4" },
];

interface ProductContextType {
  activeProduct: StaticImageData;
  setActiveProduct: (src: StaticImageData) => void;
  products: { id: number; src: StaticImageData; name: string }[];
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [activeProduct, setActiveProduct] = useState<StaticImageData>(
    products[0].src
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

  return (
    <ProductContext.Provider
      value={{
        activeProduct,
        setActiveProduct,
        products,
        quantity,
        incrementQuantity,
        decrementQuantity,
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
