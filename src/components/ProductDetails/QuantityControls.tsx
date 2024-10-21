import { useProductContext } from "@/context/ProductContext";
import React from "react";

const QuantityControls: React.FC = () => {
  const { quantity, incrementQuantity, decrementQuantity } =
    useProductContext();

  return (
    <div className="flex flex-row items-center justify-between w-full gap-10 px-6 py-4 md:py-3 lg:py-4 bg-light-grayish-blue rounded-xl lg:w-auto ">
      <button
        className="text-4xl font-bold text-orange-500 md:text-2xl hover:text-orange-500/75 focus-within:outline-none focus-within:text-orange-500/75"
        onClick={decrementQuantity}
        disabled={quantity === 0}
      >
        -
      </button>
      <span className="w-6 text-xl font-semibold text-center">{quantity}</span>
      <button
        className="text-4xl font-bold text-orange-500 md:text-2xl hover:text-orange-500/75 focus-within:outline-none focus-within:text-orange-500/75"
        onClick={incrementQuantity}
        disabled={quantity === 99}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControls;
