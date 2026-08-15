import Link from "next/link";

/**
 * Index for this frontend-only sandbox. Not part of the main site — it just
 * links to the three landing pages being worked on.
 */
const pages = [
  { href: "/it-operations-management", label: "IT Operations Management (ITOM)" },
  { href: "/strategic-portfolio-management", label: "Strategic Portfolio Management (SPM)" },
  { href: "/hr-service-delivery", label: "HR Service Delivery (HRSD)" },
  { href: "/integrated-risk-management", label: "Integrated Risk Management (IRM)" },
];

export default function SandboxIndex() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <h1 className="text-[28px] font-bold text-black mb-2">Bangmetric landing pages</h1>
        <p className="text-[14px] text-gray-500 mb-8">
          Frontend-only workspace for the three ServiceNow service pages.
        </p>
        <ul className="space-y-3">
          {pages.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="block bg-white rounded-[10px] px-5 py-4 text-[15px] text-black hover:opacity-80 transition"
              >
                {p.label}
                <span className="block text-[13px] text-gray-400 mt-1">{p.href}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
