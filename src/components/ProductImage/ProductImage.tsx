import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/products";
import Image, { StaticImageData } from "next/image";

const ProductImage = ({
  activeProduct,
}: {
  activeProduct: string | StaticImageData;
}) => {
  const imageProducts = products[0].imageProducts;

  return (
    <>
      <Image
        src={activeProduct}
        alt="active product"
        priority
        className="hidden aspect-square md:rounded-xl md:block"
        width={512}
        height={512}
      />
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
        <CarouselPrevious className="top-1/2 left-4" />
        <CarouselNext className="top-1/2 right-4" />
      </Carousel>
    </>
  );
};

export default ProductImage;
