import { CalendarIcon, MapPinIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-32 bg-black relative overflow-hidden mobile-dark section-overlay">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative text-outline">
            <span className="block text-sm text-blue-300 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Profile
            </span>
            <span className="digital-text text-3xl md:text-5xl section-title">About Me</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="important-section p-6 rounded-xl">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 important-text text-center md:text-left">
                基本情報
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <CalendarIcon className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">生年月日</p>
                    <p className="mobile-readable">平成元年7月</p>
                    <p className="text-xs md:text-sm text-blue-300">かに座・蛇年</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">出身</p>
                    <p className="mobile-readable">沖縄県与那原町</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="important-section p-6 rounded-xl">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 important-text text-center md:text-left">
                学歴
              </h3>
              <div>
                <p className="font-medium">九州共立大学</p>
                <p className="mobile-readable">経済学部</p>
                <p className="text-xs md:text-sm text-blue-300 mt-1">福岡県北九州市八幡西区折尾</p>

                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-blue-500/30">
                  <p className="font-medium">学生時代の活動</p>
                  <p className="mobile-readable mt-1">野球部（代打の切り札だったため出番があまりなし・補欠）</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-blue-500/30">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 important-text text-center md:text-left">
              MBTI
            </h3>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="important-section p-4 md:p-6 rounded-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3 justify-center md:justify-start">
                  <p className="text-xl md:text-2xl font-medium">INTP</p>
                  <div className="relative">
                    <img
                      src="/images/mbti/intp.jpeg"
                      alt="INTP"
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-2 border-blue-500/30"
                    />
                  </div>
                </div>
                <p className="mobile-readable text-center md:text-left">理論学者</p>
              </div>

              <div className="important-section p-4 md:p-6 rounded-xl">
                <p className="font-medium mb-2 md:mb-4 important-text text-center md:text-left">相性のいいタイプ</p>
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 overflow-hidden rounded-lg">
                      <img
                        src="/images/mbti/esfp.jpeg"
                        alt="ESFP"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs md:text-sm">ESFP</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 overflow-hidden rounded-lg">
                      <img
                        src="/images/mbti/isfj.jpeg"
                        alt="ISFJ"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                    <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs md:text-sm">
                      ISFJ
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 overflow-hidden rounded-lg">
                      <img
                        src="/images/mbti/entj.jpeg"
                        alt="ENTJ"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm"
                      />
                    </div>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs md:text-sm">
                      ENTJ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
