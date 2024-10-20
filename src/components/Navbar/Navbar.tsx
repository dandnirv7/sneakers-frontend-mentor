"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import avatar from "@/assets/images/image-avatar.png";
import logo from "@/assets/images/logo.svg";
import { FaBars, FaX } from "react-icons/fa6";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
          <div
            className={`absolute z-20 flex flex-col w-3/4 h-screen px-5 pt-8 bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-start gap-4 md:items-center">
              <FaX
                onClick={toggleMenu}
                className="font-semibold cursor-pointer size-4 text-dark-grayish-blue"
              />
              {navItems.map((item) => (
                <NavItem key={item.label} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>
        </>
      )}
      <nav className="flex-row items-center justify-between hidden pb-6 border-b border-gray-400 md:flex">
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
      <nav className="flex flex-row items-center justify-between p-5 md:hidden ">
        <section className="flex flex-row items-center justify-center gap-4">
          {isMenuOpen ? (
            <FaX onClick={toggleMenu} className="cursor-pointer size-5" />
          ) : (
            <FaBars onClick={toggleMenu} className="cursor-pointer size-5" />
          )}
          <Image src={logo} alt="logo" priority />
        </section>
        <section className="flex flex-row items-center justify-center gap-4">
          <CartPopover />
          <Image
            src={avatar}
            alt="avatar"
            width={32}
            height={32}
            priority
            className="rounded-full cursor-pointer hover:ring-2 hover:ring-offset-0 hover:ring-orange-500"
          />
        </section>
      </nav>
    </>
  );
};

export default Navbar;
