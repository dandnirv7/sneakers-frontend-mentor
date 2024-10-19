import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

import logo from "@/assets/images/logo.svg";
import avatar from "@/assets/images/image-avatar.png";
import imageProduct from "@/assets/images/image-product-1-thumbnail.jpg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const cart = [];

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li className="relative">
    <Link
      href={href}
      className="after:content-[''] text-dark-grayish-blue hover:text-very-dark-blue after:w-full after:absolute after:-bottom-8 after:left-0 after:hover:border-b-4 after:hover:border-orange-500"
    >
      {children}
    </Link>
  </li>
);

const CartPopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <BsCart3 className="size-6 cursor-pointer" />
    </PopoverTrigger>
    <PopoverContent className="w-[24rem] mt-5 p-0 shadow-black/30 shadow-xl">
      <section className="aspect-[16/9] rounded-lg">
        <div className="border-b border-grayish-blue px-5 py-4">
          <h1 className="font-semibold">Cart</h1>
        </div>
        <div className="contain p-6 h-full flex-col gap-4 grid items-center">
          {cart?.length === 0 ? (
            <h1 className="font-semibold text-dark-grayish-blue text-center text-lg ">
              Your cart is empty
            </h1>
          ) : (
            <>
              <div className="flex flex-row items-start justify-center gap-4">
                <Image
                  src={imageProduct}
                  alt="thumbnail product"
                  priority
                  width={60}
                  height={60}
                  className="rounded-lg aspect-square"
                />
                <div className="flex flex-row justify-between items-center gap-5">
                  <div>
                    <h1 className="text-dark-grayish-blue text-[16px]">
                      Fall Limited Edition Series Sneakers
                    </h1>
                    <div>
                      <p className="text-dark-grayish-blue">
                        $125.00 x 3{" "}
                        <span className="font-bold text-black">$375.00</span>
                      </p>
                    </div>
                  </div>
                  <FaTrashCan className="size-4 text-dark-grayish-blue" />
                </div>
              </div>
              <button className="bg-orange-500 rounded-xl hover:bg-orange-500/75 py-4 px-6 w-full">
                Checkout
              </button>
            </>
          )}
        </div>
      </section>
    </PopoverContent>
  </Popover>
);

const Navbar = () => {
  const navItems = [
    { href: "/collections", label: "Collections" },
    { href: "/collections", label: "Men" },
    { href: "/collections", label: "Women" },
    { href: "/collections", label: "About" },
    { href: "/collections", label: "Contact" },
  ];

  return (
    <nav className="flex flex-row items-center justify-between pb-6 border-b border-gray-400">
      <section className="flex items-center justify-center gap-20">
        <Image src={logo} alt="logo" priority />
        <ul className="flex items-center gap-10 justify-center text-center w-full">
          {navItems.map((item) => (
            <NavItem key={item.label} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </ul>
      </section>
      <section className="flex flex-row items-center justify-center gap-8">
        <CartPopover />
        <Image
          src={avatar}
          alt="avatar"
          width={64}
          height={64}
          priority
          className="cursor-pointer hover:ring-2 hover:ring-offset-0 hover:ring-orange-500 rounded-full"
        />
      </section>
    </nav>
  );
};

export default Navbar;
