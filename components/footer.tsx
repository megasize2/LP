export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg md:text-xl font-medium tracking-wider">KUNIYOSHI</h2>
            <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">國吉泰史のプロフィールサイト</p>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/images/tetra-core-logo.png"
              alt="株式会社tetra Core"
              className="h-8 md:h-10 mr-3 bg-white p-1 rounded"
            />
            <span className="text-sm md:text-base text-gray-300">株式会社tetra Core</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} 國吉泰史. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
