"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] px-4">
      <div className="text-center max-w-md">
        <h2 className="text-[28px] font-bold text-black mb-4">Something went wrong</h2>
        <p className="text-[14px] text-gray-500 mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-[#9562EB] text-white rounded-[6px] text-[14px] hover:opacity-90 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
