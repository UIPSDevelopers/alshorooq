"use client";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* LOGO + COMPANY NAME */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://media.canva.com/v2/image-resize/format:PNG/height:369/quality:100/uri:ifs%3A%2F%2FM%2F680a9989-a488-4907-827f-c8973c4fcb6c/watermark:F/width:369?csig=AAAAAAAAAAAAAAAAAAAAAIB1SSqAY5FNcorzV-9BhKPtqsk7f79-DltgEr-xMJ6K&exp=1760521559&osig=AAAAAAAAAAAAAAAAAAAAAGYepOFM-KBwDQYRIdp_RSI_U6-FOlK67PBNO2mRv64-&signer=media-rpc&x-canva-quality=screen"
            alt="AlShorooq Logo"
            className="w-16 h-16 object-contain"
          />
          <span className="hidden xl:block text-gray-800 font-light text-xs md:text-sm leading-tight">
            AlShorooq AlSatae <br />
            Building Maintenance and Cleaning Services
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-6">
            {navLinks.map((l) => (
              <NavigationMenuItem key={l.name}>
                <NavigationMenuLink asChild>
                  <NavLink
                    to={l.path}
                    className={({ isActive }) =>
                      `relative font-medium text-gray-800 transition-colors 
               after:block after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 
               after:w-0 hover:after:w-full ${
                 isActive ? "text-blue-700 after:w-full" : ""
               }`
                    }
                  >
                    {l.name}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Book Now Button */}
            <NavigationMenuItem>
              <Button
                asChild
                className="ml-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg shadow-sm transition-all"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE MENU */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-800"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 sm:w-80 bg-white p-6">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((l) => (
                <NavLink
                  key={l.name}
                  to={l.path}
                  className={({ isActive }) =>
                    `block text-base font-medium p-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-800 hover:bg-blue-100 hover:text-blue-700"
                    }`
                  }
                >
                  {l.name}
                </NavLink>
              ))}
              <Button
                asChild
                className="mt-4 bg-blue-700 hover:bg-blue-800 text-white w-full"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
