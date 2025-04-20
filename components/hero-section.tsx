export default function HeroSection() {
  return (
    <section id="hero" className="pt-20 pb-12 md:pt-32 md:pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 md:pr-12">
            <div className="relative inline-block">
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-blue-500"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-20 md:h-20 border-b-2 border-r-2 border-blue-500"></div>
              <div className="relative z-10 bg-white p-2">
                <img src="/images/profile.jpg" alt="國吉泰史" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6">
                  <span className="block">國吉 泰史</span>
                  <span className="block text-lg md:text-2xl text-gray-500 mt-1 md:mt-2">YASUFUMI KUNIYOSHI</span>
                </h1>
                <p className="text-base md:text-xl font-light leading-relaxed text-gray-600 max-w-lg">
                  つくるものを通して人とのつながり
                  <br />
                  新しい価値が生まれ、気持ちや想いが届く。
                  <br />
                  そんなお手伝いができればと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
