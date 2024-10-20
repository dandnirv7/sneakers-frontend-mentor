"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

import imageProduct from "@/assets/images/image-product-1-thumbnail.jpg";
import EachUtils from "@/components/EachUtils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCartContext } from "@/context/CartContext";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CartItem {
  id: number;
  productName: string;
  brand: string;
  price: number;
  discountPrice?: number;
  quantity: number;
}

const CartPopover: React.FC = () => {
  const { cart, removeFromCart } = useCartContext();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <BsCart3 className="cursor-pointer size-6" />
      </PopoverTrigger>
      <PopoverContent className="w-[24rem] mt-5 p-0 shadow-black/30 shadow-xl">
        <section className="aspect-[16/9] rounded-lg">
          <div className="px-5 py-4 border-b border-grayish-blue">
            <h1 className="font-semibold">Cart</h1>
          </div>
          <div className="grid flex-col items-center h-full gap-4 p-6 contain">
            {cartItems.length === 0 ? (
              <h1 className="text-lg font-semibold text-center text-dark-grayish-blue">
                Your cart is empty
              </h1>
            ) : (
              <>
                <EachUtils
                  items={cartItems}
                  render={(cartItem) => (
                    <div
                      key={cartItem.id}
                      className="flex flex-row items-start justify-center gap-4"
                    >
                      <Image
                        src={imageProduct}
                        alt="thumbnail product"
                        priority
                        width={60}
                        height={60}
                        className="rounded-lg aspect-square"
                      />
                      <div className="flex flex-row items-center justify-between gap-5">
                        <div>
                          <h1 className="text-dark-grayish-blue text-[16px]">
                            {cartItem.productName}
                          </h1>
                          <div>
                            <p className="text-dark-grayish-blue">
                              $
                              {cartItem.discountPrice?.toFixed(2) ??
                                cartItem.price.toFixed(2)}{" "}
                              x {cartItem.quantity}{" "}
                              <span className="font-bold text-black">
                                $
                                {(
                                  (cartItem.discountPrice ?? cartItem.price) *
                                  cartItem.quantity
                                ).toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <AlertDialog>
                            <AlertDialogTrigger>
                              <FaTrashCan className="size-4 text-dark-grayish-blue" />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you sure you want to delete this item?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. The item will be
                                  permanently removed from your cart.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    handleRemoveFromCart(cartItem.id)
                                  }
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  )}
                />
                <button className="w-full px-6 py-4 bg-orange-500 rounded-xl hover:bg-orange-500/75">
                  Checkout
                </button>
              </>
            )}
          </div>
        </section>
      </PopoverContent>
    </Popover>
  );
};
export default CartPopover;
