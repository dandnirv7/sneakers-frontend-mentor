import { useProductContext } from "@/context/ProductContext";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { calculateDiscount } from "@/lib/utils";
import React from "react";
import { BsCart3 } from "react-icons/bs";

interface CartItem {
  id: number;
  productName: string;
  brand: string;
  price: number;
  discountPrice?: number;
  quantity: number;
}

import { useCartContext } from "@/context/CartContext";

const AddToCartButton: React.FC = () => {
  const { toast } = useToast();
  const { quantity, resetQuantity } = useProductContext();
  const { addToCart } = useCartContext();

  const product = products[0];

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct: CartItem = {
      id: product.id,
      productName: product.productName,
      brand: product.brand,
      price: product.originalPrice,
      discountPrice: product.discount
        ? calculateDiscount(product.originalPrice, product.discount)
        : product.originalPrice,
      quantity,
    };

    addToCart(newProduct);

    toast({
      title: "Product Successfully Added",
      description: `${product.productName} x ${quantity}`,
    });

    resetQuantity();
  };

  return (
    <form onSubmit={handleAddToCart} className="flex w-full">
      <button
        type="submit"
        disabled={quantity === 0}
        className="flex items-center justify-center w-full gap-4 px-6 py-4 bg-orange-500 shadow-xl md:py-3 lg:py-4 rounded-xl hover:bg-orange-500/75 disabled:bg-orange-500/80 shadow-orange-500/25 md:shadow-none focus-within:outline-none focus-within:bg-orange-500/75"
      >
        <BsCart3 className="md:size-5 size-6 lg:size-6" />
        <span className="text-lg font-semibold md:text-base lg:text-lg">
          Add to cart
        </span>
      </button>
    </form>
  );
};

export default AddToCartButton;
