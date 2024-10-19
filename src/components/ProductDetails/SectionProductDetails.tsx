import ProductDescription from "./ProductDescription";
import ProductHeader from "./ProductHeader";
import ProductPricing from "./ProductPricing";
import QuantityControls from "./QuantityControls";
import AddToCartButton from "./AddToCartButton";

const SectionProductDetails = () => {
  return (
    <section className="flex flex-col w-2/5 gap-6">
      <div className="flex flex-col gap-5">
        <ProductHeader />
        <ProductDescription />
        <ProductPricing />
      </div>

      <div className="flex flex-row items-center gap-4 actions">
        <QuantityControls />
        <AddToCartButton />
      </div>
    </section>
  );
};

export default SectionProductDetails;
