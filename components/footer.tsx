import ScrollReveal from "./scroll-reveal"

export default function Footer() {
  return (
    <footer className="py-12 bg-white relative overflow-hidden">
      {/* 装飾線 */}
      <div className="decorative-line decorative-line-1"></div>
      <div className="decorative-line decorative-line-2"></div>

      {/* 動く背景ドット */}
      <div className="animated-dots">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 装飾的な円 */}
      <div className="absolute top-10 right-10 w-24 h-24 border border-[#0088ff]/20 rounded-full rotating"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating-reverse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <ScrollReveal direction="up" className="text-center">
            <h2 className="text-xl font-bold tracking-wider blue-text">KUNIYOSHI</h2>
            <p className="text-gray-700 mt-2">國吉泰史のプロフィールサイト</p>
          </ScrollReveal>
        </div>

        <ScrollReveal
          direction="up"
          className="border-t border-[#0088ff]/20 mt-8 pt-8 text-center text-gray-600 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} 國吉泰史. All rights reserved.</p>

          <div className="mt-4 flex justify-center space-x-4">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social, index) => (
              <a key={index} href="#" className="text-gray-600 hover:text-[#0088ff] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
