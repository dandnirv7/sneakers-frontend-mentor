import Image from "next/image";
import React from "react";

import avatar from "@/assets/images/image-avatar.png";
import logo from "@/assets/images/logo.svg";
import CartPopover from "./CartPopover";
import NavItem from "./NavItem";

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
        <ul className="flex items-center justify-center w-full gap-10 text-center">
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
          className="rounded-full cursor-pointer hover:ring-2 hover:ring-offset-0 hover:ring-orange-500"
        />
      </section>
    </nav>
  );
};

export default Navbar;
