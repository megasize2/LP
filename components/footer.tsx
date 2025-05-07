import ScrollReveal from "./scroll-reveal"

export default function Footer() {
  return (
    <footer className="py-12 society-bg relative overflow-hidden">
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ScrollReveal direction="left" className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold tracking-wider neon-text">KUNIYOSHI</h2>
            <p className="text-gray-300 mt-2">國吉泰史のプロフィールサイト</p>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex items-center mb-6 md:mb-0">
            <div className="p-1 rounded-lg mr-3 relative society-card">
              <img src="/images/company-logo.png" alt="TETRA CORE" className="h-8 bg-white p-1 rounded" />
            </div>
            <span className="text-gray-300">株式会社tetra Core</span>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" className="border-t border-[#0ff]/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 國吉泰史. All rights reserved.</p>

          <div className="mt-4 flex justify-center space-x-4">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-[#0ff] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
