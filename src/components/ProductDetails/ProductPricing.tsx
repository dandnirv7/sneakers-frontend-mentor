import React from "react";

const ProductPricing: React.FC = () => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-row items-center gap-4 discount-price">
      <h2 className="text-2xl font-semibold">$125.00</h2>
      <span className="block px-2 py-.5 font-semibold text-white rounded-md bg-very-dark-blue w-max">
        50%
      </span>
    </div>
    <p className="font-semibold line-through text-dark-grayish-blue">$250.00</p>
  </div>
);

export default ProductPricing;
