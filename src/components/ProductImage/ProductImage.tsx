import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/products";
import Image, { StaticImageData } from "next/image";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaX } from "react-icons/fa6";

import EachUtils from "@/components/EachUtils";
import { useProductContext } from "@/context/ProductContext";
import { useActiveImage } from "@/features/useActiveImage";
import { useState } from "react";

const ProductImage = ({
  activeProduct,
}: {
  activeProduct: string | StaticImageData;
}) => {
  const { activeImageProduct, imageProducts, setActiveImageProduct } =
    useProductContext();
  const { changeActiveImage } = useActiveImage();

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imageProducts.length - 1 : prevIndex - 1
    );
    changeActiveImage(
      imageProducts[
        activeIndex === 0 ? imageProducts.length - 1 : activeIndex - 1
      ].src,
      imageProducts[
        activeIndex === 0 ? imageProducts.length - 1 : activeIndex - 1
      ].imageName
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === imageProducts.length - 1 ? 0 : prevIndex + 1
    );
    changeActiveImage(
      imageProducts[
        activeIndex === imageProducts.length - 1 ? 0 : activeIndex + 1
      ].src,
      imageProducts[
        activeIndex === imageProducts.length - 1 ? 0 : activeIndex + 1
      ].imageName
    );
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <Image
            src={activeProduct}
            alt="active product"
            priority
            className="hidden aspect-square md:rounded-xl md:block"
            width={512}
            height={512}
          />
        </AlertDialogTrigger>
        <AlertDialogContent className="p-0 bg-transparent border-0 shadow-none outline-none ring-0">
          <Carousel>
            <CarouselContent className="p-0 rounded-xl">
              {imageProducts.map((imageProduct) => (
                <CarouselItem key={imageProduct.id} className="rounded-xl">
                  <Image
                    src={activeProduct}
                    alt={imageProduct.imageName}
                    className="object-cover rounded-xl"
                    width={512}
                    height={512}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="top-1/2 -left-6"
              onClick={handlePrev}
            />
            <CarouselNext className="top-1/2 -right-6" onClick={handleNext} />
          </Carousel>
          <ul className="flex flex-row items-center justify-center gap-8 mt-5 cursor-pointer">
            <EachUtils
              items={imageProducts}
              render={(imageProduct, index) => (
                <li
                  key={imageProduct.id}
                  className={`rounded-xl hidden md:block ${
                    activeImageProduct === imageProduct.src
                      ? "ring ring-orange-500"
                      : ""
                  }`}
                  onClick={() => {
                    changeActiveImage(imageProduct.src, imageProduct.imageName);
                    setActiveIndex(index);
                  }}
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
                    width={80}
                    height={80}
                  />
                </li>
              )}
            />
          </ul>
          <AlertDialogFooter className="absolute -right-5 -top-10">
            <AlertDialogCancel className="text-white bg-transparent border-none hover:bg-transparent hover:border-none hover:text-orange-500">
              <FaX className="font-bold size-10" />
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Carousel className="w-screen overflow-hidden md:hidden">
        <CarouselContent>
          {imageProducts.map((imageProduct) => (
            <CarouselItem
              key={imageProduct.id}
              className="flex-shrink-0 w-full"
            >
              <Image
                src={imageProduct.src}
                alt={imageProduct.imageName}
                className="object-cover w-full h-full"
                width={512}
                height={512}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-1/2 left-4" onClick={handlePrev} />
        <CarouselNext className="top-1/2 right-4" onClick={handleNext} />
      </Carousel>
    </>
  );
};

export default ProductImage;
