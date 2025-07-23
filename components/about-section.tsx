import { CalendarIcon, MapPinIcon, GraduationCapIcon, BrainIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium tracking-wider uppercase mb-3">
              About Me
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">プロフィール</h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {/* メイン情報を3カラムレイアウト */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* 基本情報 */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-3 flex items-center justify-center">
                    <CalendarIcon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">基本情報</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CalendarIcon className="w-4 h-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">生年月日</p>
                      <p className="text-sm text-gray-600">平成元年7月</p>
                      <p className="text-xs text-blue-600">かに座・蛇年</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPinIcon className="w-4 h-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">出身</p>
                      <p className="text-sm text-gray-600">沖縄県与那原町</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 学歴 */}
            <ScrollReveal direction="up">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
                    <GraduationCapIcon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">学歴</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">九州共立大学</h4>
                    <p className="text-sm text-gray-600">経済学部</p>
                    <p className="text-xs text-purple-600">福岡県北九州市</p>
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm font-medium text-gray-900 mb-2">学生時代の活動</p>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700 font-medium">野球部</p>
                      <p className="text-xs text-gray-600">代打の切り札として活動</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* MBTI */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-3 flex items-center justify-center">
                    <BrainIcon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">MBTI</h3>
                </div>

                {/* INTP表示 */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-3 relative">
                    <img
                      src="/images/mbti/intp.jpeg"
                      alt="INTP"
                      className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">I</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">INTP</h4>
                  <p className="text-sm text-gray-600">理論学者</p>
                </div>

                {/* 相性タイプ */}
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-3 text-center">相性のいいタイプ</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { type: "ESFP", image: "/images/mbti/esfp.jpeg", color: "from-pink-500 to-rose-500" },
                      { type: "ISFJ", image: "/images/mbti/isfj.jpeg", color: "from-blue-500 to-indigo-500" },
                      { type: "ENTJ", image: "/images/mbti/entj.jpeg", color: "from-purple-500 to-violet-500" },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="relative mb-2">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.type}
                            className="w-12 h-12 object-cover rounded-lg shadow-sm mx-auto"
                          />
                          <div
                            className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white text-xs font-bold">{item.type[0]}</span>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{item.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
