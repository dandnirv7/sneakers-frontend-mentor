import { useProductContext } from "@/context/ProductContext";
import React from "react";

const QuantityControls: React.FC = () => {
  const { quantity, incrementQuantity, decrementQuantity } =
    useProductContext();

  return (
    <div className="flex flex-row items-center justify-between gap-10 px-6 py-4 bg-light-grayish-blue rounded-xl">
      <button
        className="text-2xl font-bold text-orange-500 hover:text-orange-500/75"
        onClick={decrementQuantity}
        disabled={quantity === 0}
      >
        -
      </button>
      <span className="text-xl font-semibold">{quantity}</span>
      <button
        className="text-2xl font-bold text-orange-500 hover:text-orange-500/75"
        onClick={incrementQuantity}
        disabled={quantity === 99}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControls;
