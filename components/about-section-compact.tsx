import { CalendarIcon, GraduationCapIcon, BrainIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function AboutSectionCompact() {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium uppercase mb-2">
              About
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">プロフィール</h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* 超コンパクト版 - 2行レイアウト */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 基本情報 */}
            <ScrollReveal direction="left">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-md mr-2 flex items-center justify-center">
                    <CalendarIcon className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">基本情報</h3>
                </div>
                <div className="space-y-2 text-xs">
                  <p>
                    <span className="font-medium">生年月日:</span> 平成元年7月
                  </p>
                  <p>
                    <span className="font-medium">出身:</span> 沖縄県与那原町
                  </p>
                  <p className="text-blue-600">かに座・蛇年</p>
                </div>
              </div>
            </ScrollReveal>

            {/* 学歴 */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-md mr-2 flex items-center justify-center">
                    <GraduationCapIcon className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">学歴</h3>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="font-medium">九州共立大学</p>
                  <p className="text-gray-600">経済学部</p>
                  <p className="text-purple-600">野球部所属</p>
                </div>
              </div>
            </ScrollReveal>

            {/* MBTI */}
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-green-500 rounded-md mr-2 flex items-center justify-center">
                    <BrainIcon className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">MBTI</h3>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 relative">
                    <img src="/images/mbti/intp.jpeg" alt="INTP" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">INTP</p>
                  <p className="text-xs text-gray-600">理論学者</p>
                </div>
              </div>
            </ScrollReveal>

            {/* 相性タイプ */}
            <ScrollReveal direction="right" delay={300}>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-sm font-bold text-gray-900 mb-3 text-center">相性タイプ</h3>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { type: "ESFP", image: "/images/mbti/esfp.jpeg" },
                    { type: "ISFJ", image: "/images/mbti/isfj.jpeg" },
                    { type: "ENTJ", image: "/images/mbti/entj.jpeg" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.type}
                        className="w-8 h-8 object-cover rounded-md mx-auto mb-1"
                      />
                      <span className="text-xs font-medium text-gray-700">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* メッセージ */}
          <ScrollReveal delay={400}>
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">つくるものを通して人とのつながり</span> -
                新しい価値が生まれ、想いが届くお手伝いを
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
