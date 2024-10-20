import imageProduct1 from "@/assets/images/image-product-1.jpg";
import imageProduct2 from "@/assets/images/image-product-2.jpg";
import imageProduct3 from "@/assets/images/image-product-3.jpg";
import imageProduct4 from "@/assets/images/image-product-4.jpg";
import { StaticImageData } from "next/image";

interface imageProduct {
  id: number;
  src: StaticImageData;
  imageName: string;
}

interface Products {
  id: number;
  brand: string;
  productName: string;
  originalPrice: number;
  discount: number;
  imageProducts: imageProduct[];
  description: string;
}

export const products: Products[] = [
  {
    id: 1,
    brand: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    originalPrice: 250,
    discount: 50,
    imageProducts: [
      { id: 1, src: imageProduct1, imageName: "sneakers-1" },
      { id: 2, src: imageProduct2, imageName: "sneakers-2" },
      { id: 3, src: imageProduct3, imageName: "sneakers-3" },
      { id: 4, src: imageProduct4, imageName: "sneakers-4" },
    ],
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  },
];
