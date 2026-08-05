"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white w-full">

      <div className="max-w-[1100px] mx-auto px-6 py-16">

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div className="max-w-[420px]">

            <Image
              src="/BM-Logo-white.png"
              alt="logo"
              width={220}
              height={60}
              className="mb-6 h-auto"
              style={{ width: "auto", height: "auto" }}
            />

            <h2 className="text-[26px] leading-[1.3]">
              Elevate, Innovate, Dominate
            </h2>

            <h3 className="text-[26px] font-semibold mb-6">
              With a <span className="text-[#66E000]">BANG!</span>
            </h3>

            <div className="flex items-center gap-6 mb-4 text-[14px]">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>084475 32355</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>connect@bangmetric.com</span>
              </div>
            </div>

            <input
              type="text"
              placeholder="Email:"
              className="
                w-full
                border border-white
                bg-transparent
                px-4 py-2
                rounded-[6px]
                outline-none
                text-white
                placeholder:text-white/70
              "
            />

          </div>

          <div className="flex flex-col gap-10">

            <div className="flex items-center gap-6 justify-end flex-wrap sm:flex-nowrap">
              <Image src="/RS.png" alt="RS" width={50} height={50} className="sm:w-[67px] sm:h-[68px]" />
              <Image src="/SP.png" alt="SP" width={50} height={50} className="sm:w-[67px] sm:h-[68px]" />
              <Image src="/ISO.png" alt="ISO" width={50} height={50} className="sm:w-[67px] sm:h-[68px]" />
              <Image src="/QC.png" alt="QC" width={50} height={50} className="sm:w-[67px] sm:h-[68px]" />
              <Image src="/MSM.png" alt="MSM" width={50} height={50} className="sm:w-[67px] sm:h-[68px]" />
            </div>
            <div className="flex gap-20 flex-col sm:flex-row mt-8">
              <div>
                <h4 className="font-semibold mb-4">Our Services</h4>
                <ul className="space-y-2 text-gray-300 text-[14px]">

                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      IT Asset Management
                    </Link>
                  </li>

                  <li>
                    <Link href="/it-operations-management" className="hover:text-white transition">
                      IT Operations Management
                    </Link>
                  </li>

                  <li>
                    <Link href="/hr-service-delivery" className="hover:text-white transition">
                      HR Service Delivery
                    </Link>
                  </li>

                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      GenAI Solutions
                    </Link>
                  </li>

                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      IT Risk Management
                    </Link>
                  </li>

                  <li>
                    <Link href="/strategic-portfolio-management" className="hover:text-white transition">
                      Strategic Portfolio Management
                    </Link>
                  </li>

                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      Legal Service Delivery
                    </Link>
                  </li>

                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-300 text-[14px]">

                  <li>
                    <Link href="/aboutUs" className="hover:text-white transition">
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link href="/careers" className="hover:text-white transition">
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link href="/resources" className="hover:text-white transition">
                      Resources
                    </Link>
                  </li>

                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      Our Jumpstart Offerings
                    </Link>
                  </li>

                  <li>
                    <Link href="/policy" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>

                </ul>
              </div>

            </div>

          </div>

        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-[13px] text-gray-400">
          Copyright © 2026 BANGMETRIC LLC. All Rights Reserved
        </div>

      </div>

    </footer>
  );
}