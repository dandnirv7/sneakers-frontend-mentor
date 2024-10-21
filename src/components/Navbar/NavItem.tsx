"use client";

import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li className="relative">
    <Link
      href={href}
      className="md:after:content-[''] md:text-dark-grayish-blue hover:text-very-dark-blue md:after:w-full md:after:absolute md:after:-bottom-8 md:after:left-0 md:after:hover:border-b-4 md:after:hover:border-orange-500 md:focus-within:outline-none md:focus-within:after:border-b-4 md:focus-within:after:border-orange-500 font-semibold text-black md:font-normal focus-within:text-very-dark-blue"
    >
      {children}
    </Link>
  </li>
);

export default NavItem;
