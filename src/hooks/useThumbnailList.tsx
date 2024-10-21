"use client";

import { useProductContext } from "@/context/ProductContext";
import { useActiveImage } from "@/features/useActiveImage";
import { useState } from "react";

export const useThumbnailList = () => {
  const { imageProducts } = useProductContext();
  const { changeActiveImage } = useActiveImage();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateActiveImage = (index: number) => {
    const { src, imageName } = imageProducts[index];
    changeActiveImage(src, imageName);
  };

  const handlePrev = () => {
    const newIndex =
      activeIndex === 0 ? imageProducts.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    updateActiveImage(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      activeIndex === imageProducts.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    updateActiveImage(newIndex);
  };

  return {
    activeIndex,
    setActiveIndex,
    handlePrev,
    handleNext,
  };
};
