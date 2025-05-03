"use client"

export function Navbar() {
  return (
    <header className="py-3 sm:py-4 md:py-6 px-4">
      <div className="container mx-auto">
        {/* Logo container with left quarter positioning */}
        <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
          <div className="w-1/4 flex justify-start">
            <div className="h-10 md:h-14">
              <img src="/images/tetra-core-logo.png" alt="TETRA CORE" className="h-full object-contain" />
            </div>
          </div>
          <div className="w-3/4"></div>
        </div>
      </div>

      {/* Border line below logo */}
      <div className="border-b border-gray-100 mb-2 md:mb-4"></div>
    </header>
  )
}
