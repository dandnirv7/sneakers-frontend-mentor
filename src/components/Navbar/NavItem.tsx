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
      className="after:content-[''] text-dark-grayish-blue hover:text-very-dark-blue after:w-full after:absolute after:-bottom-8 after:left-0 after:hover:border-b-4 after:hover:border-orange-500"
    >
      {children}
    </Link>
  </li>
);

export default NavItem;
