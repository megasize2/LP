import { CalendarIcon, MapPinIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">プロフィール</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側：基本情報 */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-3" />
                  基本情報
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                      <CalendarIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">生年月日</p>
                      <p className="text-gray-600">平成元年7月</p>
                      <p className="text-sm text-blue-600 font-medium">かに座・蛇年</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                      <MapPinIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">出身</p>
                      <p className="text-gray-600">沖縄県与那原町</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 右側：学歴 */}
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3" />
                  学歴
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">九州共立大学</h4>
                    <p className="text-gray-600 mb-2">経済学部</p>
                    <p className="text-sm text-purple-600 font-medium">福岡県北九州市八幡西区折尾</p>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h5 className="font-semibold text-gray-900 mb-3">学生時代の活動</h5>
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                      <p className="text-gray-700 font-medium">野球部</p>
                      <p className="text-sm text-gray-600 mt-1">代打の切り札として活動</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* MBTI セクション */}
          <div className="mt-20">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">MBTI</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto" />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-500">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <img
                      src="/images/mbti/intp.jpeg"
                      alt="INTP"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">I</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">INTP</h4>
                  <p className="text-gray-600">理論学者</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">相性のいいタイプ</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { type: "ESFP", image: "/images/mbti/esfp.jpeg", color: "from-pink-500 to-rose-500" },
                      { type: "ISFJ", image: "/images/mbti/isfj.jpeg", color: "from-blue-500 to-indigo-500" },
                      { type: "ENTJ", image: "/images/mbti/entj.jpeg", color: "from-purple-500 to-violet-500" },
                    ].map((item, index) => (
                      <div key={index} className="text-center group">
                        <div className="relative mb-3">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.type}
                            className="w-16 h-16 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow mx-auto"
                          />
                          <div
                            className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white text-xs font-bold">{item.type[0]}</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.type}</span>
                      </div>
                    ))}
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
