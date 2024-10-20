import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CalculateDiscount = (
  price: number,
  discountPercentage: number
) => number | undefined;

export const calculateDiscount: CalculateDiscount = (
  price,
  discountPercentage
) => {
  if (!discountPercentage) return;

  const discountAmount = price * (discountPercentage / 100);
  const finalPrice = price - discountAmount;

  return finalPrice;
};
