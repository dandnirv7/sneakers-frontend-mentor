import { products } from "@/data/products";
import { calculateDiscount } from "@/lib/utils";
import AddToCartButton from "./AddToCartButton";
import QuantityControls from "./QuantityControls";

const SectionProductDetails = () => {
  const product = products[0];

  return (
    <section className="flex flex-col w-2/5 gap-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 mb-5">
          <h3 className="font-semibold uppercase">{product.brand}</h3>
          <h1 className="text-5xl font-semibold capitalize">
            {product.productName}
          </h1>
        </div>
        <p className="text-lg">{product.description}</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-4 discount-price">
            <h2 className="text-2xl font-semibold">
              $
              {calculateDiscount(
                product.originalPrice,
                product.discount
              )?.toFixed(2)}
            </h2>
            <span className="block px-2 py-.5 font-semibold text-white rounded-md bg-very-dark-blue w-max">
              {product.discount}%
            </span>
          </div>
          <p className="font-semibold line-through text-dark-grayish-blue">
            ${product.originalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <section className="flex flex-row items-start gap-4 actions">
        <QuantityControls />
        <AddToCartButton />
      </section>
    </section>
  );
};

export default SectionProductDetails;
