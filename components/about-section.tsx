import { CalendarIcon, MapPinIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 装飾線 - モバイルでは非表示 */}
      <div className="decorative-line decorative-line-1 hidden md:block"></div>
      <div className="decorative-line decorative-line-2 hidden md:block"></div>

      {/* 動く背景ドット - モバイルでは数を減らす */}
      <div className="animated-dots">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="dot hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 3}px`,
              height: `${3 + Math.random() * 3}px`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 装飾的な円 - モバイルでは非表示 */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-[#0088ff]/20 rounded-full rotating hidden md:block"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating-reverse hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-blue-600 text-lg sm:text-xl mb-3 font-bold">ABOUT ME</h2>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold blue-gradient-text leading-tight"
              data-text="プロフィール"
            >
              プロフィール
            </h1>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <ScrollReveal direction="left">
              <div className="modern-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 blue-text">基本情報</h3>
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex items-start">
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-[#0088ff] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base sm:text-lg">生年月日</p>
                      <p className="text-gray-700 text-sm sm:text-base">平成元年7月</p>
                      <p className="text-xs sm:text-sm text-[#0088ff]">かに座・蛇年</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-[#0088ff] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base sm:text-lg">出身</p>
                      <p className="text-gray-700 text-sm sm:text-base">沖縄県与那原町</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="modern-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 blue-text">学歴</h3>
                <div>
                  <p className="font-semibold text-base sm:text-lg">九州共立大学</p>
                  <p className="text-gray-700 text-sm sm:text-base">経済学部</p>
                  <p className="text-xs sm:text-sm text-[#0088ff] mt-2">福岡県北九州市八幡西区折尾</p>

                  <div className="mt-6 pt-6 border-t border-[#0088ff]/30">
                    <p className="font-semibold text-base sm:text-lg mb-3">学生時代の活動</p>
                    <p className="text-gray-700 text-sm sm:text-base">野球部</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 pt-12 border-t border-[#0088ff]/30">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 blue-text text-center">MBTI</h3>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
              <ScrollReveal direction="left" className="flex-1">
                <div className="modern-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                    <p className="text-2xl sm:text-3xl font-bold blue-text">INTP</p>
                    <div className="relative glow">
                      <img
                        src="/images/mbti/intp.jpeg"
                        alt="INTP"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-[#0088ff]/30"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 text-center lg:text-left text-sm sm:text-base">理論学者</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="flex-1">
                <div className="modern-card p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                  <p className="font-bold mb-6 blue-text text-center lg:text-left text-base sm:text-lg">
                    相性のいいタイプ
                  </p>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/esfp.jpeg"
                          alt="ESFP"
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-[#0088ff]/20 text-[#0088ff] rounded-full text-xs sm:text-sm font-medium">
                        ESFP
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/isfj.jpeg"
                          alt="ISFJ"
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-[#0088ff]/20 text-[#0088ff] rounded-full text-xs sm:text-sm font-medium">
                        ISFJ
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/entj.jpeg"
                          alt="ENTJ"
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-[#0088ff]/20 text-[#0088ff] rounded-full text-xs sm:text-sm font-medium">
                        ENTJ
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
