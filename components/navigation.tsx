"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SERVICE_LINKS = [
  { href: "/it-operations-management", label: "IT Operations Management" },
  { href: "/hr-service-delivery", label: "HR Service Delivery" },
  { href: "/strategic-portfolio-management", label: "Strategic Portfolio Management" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">


          <Link href="/" aria-label="BangMetric home">
            <Image
              src="/BM Logo.svg"
              alt="BANGMETRIC Logo"
              width={200}
              height={50}
              loading="eager"
              className="h-10 w-auto"
            />
          </Link>


          <div
            className="hidden lg:flex items-center justify-center gap-10 flex-1"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <Link href="/aboutUs" className="text-[16px] text-gray-900 hover:text-purple-600">
              About
            </Link>

            <div className="relative group">
              <Link
                href="/services"
                className="text-[16px] text-gray-900 hover:text-purple-600 inline-flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* focus-within keeps the menu reachable by keyboard, not just hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {SERVICE_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[15px] text-gray-900 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

             <Link href="/resources" className="text-[16px] text-gray-900 hover:text-purple-600">
              Resources
            </Link>

            <Link href="/careers" className="text-[16px] text-gray-900 hover:text-purple-600">
              Careers
            </Link>

            <Link href="/company" className="text-[16px] text-gray-900 hover:text-purple-600">
              Life at Bangmetric
            </Link>

          </div>


          <div className="hidden lg:flex">
            <Link
              href="/#getintouch"
              className="text-[16px] text-gray-900 hover:text-purple-600"
            >
              Get in Touch
            </Link>
          </div>


          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setOpen(false)} />
      )}


      {open && (
        <div className="lg:hidden bg-white border-t shadow-md relative z-40">
          <div className="flex flex-col gap-4 px-6 py-6">

            <Link href="/aboutUs" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
              {SERVICE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] text-gray-600"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/resources" onClick={() => setOpen(false)}>
              Resources
            </Link>

            <Link href="/careers" onClick={() => setOpen(false)}>
              Careers
            </Link>

            <Link href="/company" onClick={() => setOpen(false)}>
              Life at Bangmetric
            </Link>

            <Link
              href="/#getintouch"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#9562EB] text-white text-center py-2 rounded-md"
            >
              Get in Touch
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}
