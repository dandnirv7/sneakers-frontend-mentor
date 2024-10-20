import { products } from "@/data/products";
import { calculateDiscount } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import QuantityControls from "./QuantityControls";

const SectionProductDetails: React.FC = () => {
  const product = products[0];
  const discountedPrice = calculateDiscount(
    product.originalPrice,
    product.discount
  )?.toFixed(2);

  return (
    <section className="flex flex-col gap-6 px-6 py-5 md:gap-3 lg:gap-6 md:p-0 ">
      <div className="flex flex-col gap-5 md:gap-3 lg:gap-5">
        <div className="flex flex-col gap-3 lg:mb-5">
          <h3 className="text-sm font-semibold uppercase lg:text-base text-dark-grayish-blue">
            {product.brand}
          </h3>
          <h1 className="text-2xl font-semibold capitalize lg:text-5xl">
            {product.productName}
          </h1>
        </div>
        <p className="text-xs text-dark-grayish-blue lg:text-lg">
          {product.description}
        </p>
        <div className="flex flex-row items-center justify-between md:items-start md:flex-col md:gap-3">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center justify-center gap-3">
              <h2 className="text-4xl font-semibold md:text-2xl">
                ${discountedPrice}
              </h2>
              <span className="block px-2 py-.5 font-semibold text-white rounded-md md:text-base text-lg bg-very-dark-blue w-max">
                {product.discount}%
              </span>
            </div>
          </div>
          <p className="text-lg font-semibold line-through text-dark-grayish-blue md:text-base">
            ${product.originalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <section className="flex flex-col items-start md:gap-4 lg:flex-row">
        <QuantityControls />
        <AddToCartButton />
      </section>
    </section>
  );
};

export default SectionProductDetails;
