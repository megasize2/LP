import ScrollReveal from "./scroll-reveal"

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full filter blur-3xl"></div>

      {/* デジタルグリッド背景 */}
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ScrollReveal direction="left" className="mb-4 md:mb-0">
            <h2 className="text-lg md:text-xl font-medium tracking-wider digital-text">KUNIYOSHI</h2>
            <p className="text-white mt-1 md:mt-2 text-sm md:text-base">國吉泰史のプロフィールサイト</p>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex items-center mb-4 md:mb-0">
            <div className="glass-effect p-1 rounded-lg mr-3 animate-pulse-slow relative">
              <img
                src="/images/tetra-core-logo.png"
                alt="株式会社tetra Core"
                className="h-8 md:h-10 bg-white p-1 rounded"
              />

              {/* ホログラム効果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-50"></div>
            </div>
            <span className="text-sm md:text-base text-white">株式会社tetra Core</span>
          </ScrollReveal>
        </div>

        <ScrollReveal
          direction="up"
          className="border-t border-blue-500/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-white text-xs md:text-sm"
        >
          <p>&copy; {new Date().getFullYear()} 國吉泰史. All rights reserved.</p>

          {/* デジタルライン装飾 */}
          <div className="mt-4 h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
