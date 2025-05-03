import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-20 pb-12 md:pt-32 md:pb-20 bg-black relative overflow-hidden mobile-dark section-overlay min-h-[85vh] md:min-h-0 flex items-center"
    >
      {/* デジタルラインの装飾 - デスクトップのみ表示 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scanline hidden md:block"></div>
      <div
        className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 animate-scanline hidden md:block"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center">
          <ScrollReveal direction="left" className="md:w-1/2 mb-6 md:mb-0 md:pr-8 md:pr-12 w-full">
            <div className="relative max-w-[280px] mx-auto md:max-w-none">
              {/* 装飾的な要素 - デスクトップのみ表示 */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-blue-500 opacity-70 animate-pulse-slow hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-blue-500 opacity-70 animate-pulse-slow hidden md:block"></div>

              {/* 画像コンテナ */}
              <div className="relative z-10 bg-gray-900 p-2 rounded-lg shadow-lg overflow-hidden border border-blue-500/30">
                <img src="/images/profile.jpg" alt="國吉泰史" className="w-full max-w-md mx-auto rounded-md" />

                {/* コーナーアクセント - デスクトップのみ表示 */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 hidden md:block"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 hidden md:block"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 hidden md:block"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 hidden md:block"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2 w-full">
            <div className="relative text-container important-section p-4 rounded-lg">
              <div className="relative z-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mobile-heading mb-4 md:mb-6 relative text-center md:text-left">
                  <span className="block relative py-2 px-4 inline-block">
                    <span className="relative z-10 text-white font-medium">國吉 泰史</span>
                  </span>
                  <span className="block text-lg md:text-xl digital-text mt-3 md:mt-4 relative section-title py-1 px-4 inline-block">
                    YASUFUMI KUNIYOSHI
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-blue-500/40 hidden md:block"></span>
                  </span>
                </h1>

                <p className="mobile-readable text-base md:text-xl leading-relaxed max-w-lg p-3 mt-4 mx-auto md:mx-0 text-center md:text-left">
                  つくるものを通して人とのつながり
                  <br />
                  新しい価値が生まれ、気持ちや想いが届く。
                  <br />
                  そんなお手伝いができればと考えています。
                </p>

                {/* スクロールダウンインジケーター */}
                <div className="mt-8 flex items-center gap-2 text-sm text-blue-400 justify-center md:justify-start">
                  <span className="inline-block w-5 h-5 border-b-2 border-r-2 border-blue-400 transform rotate-45"></span>
                  <span className="bg-black/60 px-2 py-1 rounded text-white">スクロールして詳細を見る</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
