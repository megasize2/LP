import { CalendarIcon, MapPinIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* 装飾線 */}
      <div className="decorative-line decorative-line-1"></div>
      <div className="decorative-line decorative-line-2"></div>

      {/* 動く背景ドット */}
      <div className="animated-dots">
        {Array.from({ length: 15 }).map((_, i) => (
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
      <div className="absolute top-20 left-20 w-32 h-32 border border-[#0088ff]/20 rounded-full rotating"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating-reverse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <h2 className="text-[#0088ff] text-xl mb-2 font-bold">ABOUT ME</h2>
            <h1 className="text-4xl md:text-5xl font-bold blue-gradient-text" data-text="プロフィール">
              プロフィール
            </h1>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="modern-card p-6 h-full hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 blue-text">基本情報</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CalendarIcon className="w-5 h-5 mr-3 text-[#0088ff] mt-1" />
                    <div>
                      <p className="font-medium">生年月日</p>
                      <p className="text-gray-700">平成元年7月</p>
                      <p className="text-xs text-[#0088ff]">かに座・蛇年</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="w-5 h-5 mr-3 text-[#0088ff] mt-1" />
                    <div>
                      <p className="font-medium">出身</p>
                      <p className="text-gray-700">沖縄県与那原町</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="modern-card p-6 h-full hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 blue-text">学歴</h3>
                <div>
                  <p className="font-medium">九州共立大学</p>
                  <p className="text-gray-700">経済学部</p>
                  <p className="text-xs text-[#0088ff] mt-1">福岡県北九州市八幡西区折尾</p>

                  <div className="mt-4 pt-4 border-t border-[#0088ff]/30">
                    <p className="font-medium mb-2">学生時代の活動</p>
                    <p className="text-gray-700">野球部</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 pt-12 border-t border-[#0088ff]/30">
            <h3 className="text-xl font-bold mb-6 blue-text text-center md:text-left">MBTI</h3>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <ScrollReveal direction="left">
                <div className="modern-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3 justify-center md:justify-start">
                    <p className="text-2xl font-bold blue-text">INTP</p>
                    <div className="relative glow">
                      <img
                        src="/images/mbti/intp.jpeg"
                        alt="INTP"
                        className="w-16 h-16 object-cover rounded-full border-2 border-[#0088ff]/30"
                      />
                    </div>
                  </div>
                  <p className="text-gray-700 text-center md:text-left">理論学者</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="modern-card p-6 hover:scale-105 transition-all duration-300">
                  <p className="font-bold mb-4 blue-text text-center md:text-left">相性のいいタイプ</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/esfp.jpeg"
                          alt="ESFP"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-[#0088ff]/20 text-[#0088ff] rounded-full text-xs">ESFP</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/isfj.jpeg"
                          alt="ISFJ"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-[#0088ff]/20 text-[#0088ff] rounded-full text-xs">ISFJ</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/entj.jpeg"
                          alt="ENTJ"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-[#0088ff]/20 text-[#0088ff] rounded-full text-xs">ENTJ</span>
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
