import { useProductContext } from "@/context/ProductContext";
import { useActiveImage } from "@/features/useActiveImage";
import { useThumbnailList } from "@/hooks/useThumbnailList";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ThumbnailList: React.FC<{ className?: string }> = ({ className }) => {
  const { activeImageProduct, imageProducts } = useProductContext();
  const { changeActiveImage } = useActiveImage();
  const { setActiveIndex } = useThumbnailList();

  return (
    <ul className="flex flex-row items-center justify-center cursor-pointer md:gap-5 lg:gap-8">
      {imageProducts.map((imageProduct, index) => (
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
            className={cn(
              "aspect-square rounded-xl w-20 h-20",
              {
                "opacity-50": activeImageProduct === imageProduct.src,
                "opacity-100 hover:opacity-50":
                  activeImageProduct !== imageProduct.src,
              },
              className
            )}
          />
        </li>
      ))}
    </ul>
  );
};

export default ThumbnailList;
