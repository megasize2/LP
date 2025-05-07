import { CalendarIcon, MapPinIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 cyber-bg relative overflow-hidden">
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      {/* バイオモーフィック形状 */}
      <div className="bio-shape bio-shape-1" style={{ top: "20%", right: "10%" }}></div>
      <div className="bio-shape bio-shape-2" style={{ bottom: "30%", left: "5%" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="neon-text-pink">PROFILE</span>
            <span className="block text-sm text-pink-400 mt-2">ABOUT ME</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="cyber-card p-6 h-full">
                <h3 className="text-xl font-bold mb-4 neon-text">基本情報</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CalendarIcon className="w-5 h-5 mr-3 text-cyan-500 mt-1" />
                    <div>
                      <p className="font-medium">生年月日</p>
                      <p className="text-gray-300">平成元年7月</p>
                      <p className="text-xs text-cyan-400">かに座・蛇年</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="w-5 h-5 mr-3 text-cyan-500 mt-1" />
                    <div>
                      <p className="font-medium">出身</p>
                      <p className="text-gray-300">沖縄県与那原町</p>
                    </div>
                  </li>
                </ul>

                {/* 装飾的なコーナー */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="cyber-card p-6 h-full">
                <h3 className="text-xl font-bold mb-4 neon-text-pink">学歴</h3>
                <div>
                  <p className="font-medium">九州共立大学</p>
                  <p className="text-gray-300">経済学部</p>
                  <p className="text-xs text-pink-400 mt-1">福岡県北九州市八幡西区折尾</p>

                  <div className="mt-4 pt-4 border-t border-pink-500/30">
                    <p className="font-medium">学生時代の活動</p>
                    <p className="text-gray-300 mt-1">野球部（代打の切り札だったため出番があまりなし・補欠）</p>
                  </div>
                </div>

                {/* 装飾的なコーナー */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500"></div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 pt-12 border-t border-cyan-500/30">
            <h3 className="text-xl font-bold mb-6 neon-text text-center md:text-left">MBTI</h3>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <ScrollReveal direction="left">
                <div className="cyber-card p-6">
                  <div className="flex items-center gap-4 mb-3 justify-center md:justify-start">
                    <p className="text-2xl font-bold neon-text">INTP</p>
                    <div className="relative">
                      <img
                        src="/images/mbti/intp.jpeg"
                        alt="INTP"
                        className="w-16 h-16 object-cover rounded-full border-2 border-cyan-500/30"
                      />
                    </div>
                  </div>
                  <p className="text-gray-300 text-center md:text-left">理論学者</p>

                  {/* 装飾的なコーナー */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="cyber-card p-6">
                  <p className="font-bold mb-4 neon-text-pink text-center md:text-left">相性のいいタイプ</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/esfp.jpeg"
                          alt="ESFP"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">ESFP</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/isfj.jpeg"
                          alt="ISFJ"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded-full text-xs">ISFJ</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <img
                          src="/images/mbti/entj.jpeg"
                          alt="ENTJ"
                          className="w-20 h-20 object-cover rounded-lg shadow-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      </div>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">ENTJ</span>
                    </div>
                  </div>

                  {/* 装飾的なコーナー */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
