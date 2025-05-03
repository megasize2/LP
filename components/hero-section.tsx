import ScrollReveal from "./scroll-reveal"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-20 pb-12 md:pt-32 md:pb-20 bg-white section-pattern relative overflow-hidden mobile-dark"
    >
      {/* デジタル装飾要素 */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 md:bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-300 md:bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <ScrollReveal direction="left" className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:pr-12">
            <div className="relative inline-block">
              {/* 装飾的な要素 */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-blue-500 opacity-70 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-blue-500 opacity-70 animate-pulse-slow"></div>

              {/* 画像コンテナ */}
              <div className="relative z-10 bg-white dark:bg-gray-900 p-2 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="國吉泰史"
                  className="w-full max-w-md mx-auto rounded-md transition-transform duration-700 hover:scale-105"
                />

                {/* デジタルエフェクト装飾 */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-500/10 to-transparent opacity-60"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="md:w-1/2">
            <div className="relative">
              {/* 装飾的な円 */}
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full opacity-50 animate-float"></div>

              <div className="relative z-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl mobile-heading mb-4 md:mb-6">
                  <span className="block">國吉 泰史</span>
                  <span className="block text-lg md:text-2xl digital-text mt-1 md:mt-2 animate-pulse-slow">
                    YASUFUMI KUNIYOSHI
                  </span>
                </h1>
                <p className="mobile-readable-light text-base md:text-xl leading-relaxed max-w-lg">
                  つくるものを通して人とのつながり
                  <br />
                  新しい価値が生まれ、気持ちや想いが届く。
                  <br />
                  そんなお手伝いができればと考えています。
                </p>

                {/* デジタル装飾線 */}
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
