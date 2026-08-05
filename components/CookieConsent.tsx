"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bm_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("bm_cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("bm_cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-[13px] text-gray-700 flex-1 leading-relaxed">
          We use cookies to improve your experience. This site embeds YouTube
          videos which may set cookies when played. By clicking{" "}
          <strong>Accept All</strong>, you consent to our use of cookies as
          described in our{" "}
          <a
            href="/policy"
            className="text-[#9562EB] underline underline-offset-2 hover:text-[#7A4ED9]"
          >
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-[6px] border border-gray-300 text-[13px] text-gray-600 hover:bg-gray-50 transition"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-[6px] bg-gradient-to-r from-[#9562EB] to-[#7A4ED9] text-white text-[13px] hover:opacity-90 transition shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
