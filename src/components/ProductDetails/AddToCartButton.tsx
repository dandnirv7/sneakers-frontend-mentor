import React from "react";
import { BsCart3 } from "react-icons/bs";

const AddToCartButton: React.FC = () => (
  <button className="flex items-center w-full justify-center gap-4 px-6 py-4 bg-orange-500 rounded-xl hover:bg-orange-500/75">
    <BsCart3 className="size-6" />
    <span className="text-lg font-semibold">Add to cart</span>
  </button>
);

export default AddToCartButton;
