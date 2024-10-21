import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProductContext } from "@/context/ProductContext";
import { useThumbnailList } from "@/hooks/useThumbnailList";
import Image from "next/image";

const ProductImageCarousel: React.FC = () => {
  const { activeImageProduct, imageProducts } = useProductContext();
  const { handlePrev, handleNext } = useThumbnailList();

  return (
    <Carousel>
      <CarouselContent>
        {imageProducts.map((imageProduct) => (
          <CarouselItem key={imageProduct.id} className="flex-shrink-0 w-full">
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
  );
};

export default ProductImageCarousel;
