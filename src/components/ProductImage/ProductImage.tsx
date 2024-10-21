import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaX } from "react-icons/fa6";

import { useProductContext } from "@/context/ProductContext";
import { useThumbnailList } from "@/hooks/useThumbnailList";
import ThumbanilList from "./ThumbnailList";

const ProductImage: React.FC<{
  activeProduct: string | StaticImageData;
}> = ({ activeProduct }) => {
  const { activeImageProduct, imageProducts } = useProductContext();
  const { handlePrev, handleNext } = useThumbnailList();

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
          <Carousel className="mb-5">
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

          <ThumbanilList />
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
                src={activeImageProduct}
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
