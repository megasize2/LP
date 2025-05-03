import { CalendarIcon, MapPinIcon } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-32 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 section-pattern opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <h2 className="text-2xl md:text-4xl font-light text-center mb-8 md:mb-16 animate-fadeIn">
          <span className="block text-sm text-gray-500 mb-1 md:mb-2 uppercase tracking-wider">Profile</span>
          <span className="digital-text text-3xl md:text-5xl">About Me</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="glass-effect p-6 rounded-xl hover-lift animate-fadeIn animate-delay-100">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 digital-text">基本情報</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start">
                  <CalendarIcon className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">生年月日</p>
                    <p className="text-gray-600 text-sm md:text-base">平成元年7月</p>
                    <p className="text-xs md:text-sm text-gray-500">かに座・蛇年</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-3 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium">出身</p>
                    <p className="text-gray-600 text-sm md:text-base">沖縄県与那原町</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-effect p-6 rounded-xl hover-lift animate-fadeIn animate-delay-200">
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 digital-text">学歴</h3>
              <div>
                <p className="font-medium">九州共立大学</p>
                <p className="text-gray-600 text-sm md:text-base">経済学部</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">福岡県北九州市八幡西区折尾</p>

                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                  <p className="font-medium">学生時代の活動</p>
                  <p className="text-gray-600 mt-1 text-sm md:text-base">
                    野球部（代打の切り札だったため出番があまりなし・補欠）
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-gray-100 animate-fadeIn animate-delay-300">
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 digital-text">MBTI</h3>
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              <div className="glass-effect p-4 md:p-6 rounded-xl hover-lift">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <p className="text-xl md:text-2xl font-medium">INTP</p>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 rounded-full"></div>
                    <img
                      src="/images/mbti/intp.jpeg"
                      alt="INTP"
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-2 border-blue-100 relative z-10"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base">理論学者</p>
              </div>

              <div className="glass-effect p-4 md:p-6 rounded-xl hover-lift">
                <p className="font-medium mb-2 md:mb-4 digital-text">相性のいいタイプ</p>
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 overflow-hidden rounded-lg hover-lift">
                      <img
                        src="/images/mbti/esfp.jpeg"
                        alt="ESFP"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-60"></div>
                    </div>
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 rounded-full text-xs md:text-sm">
                      ESFP
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 overflow-hidden rounded-lg hover-lift">
                      <img
                        src="/images/mbti/isfj.jpeg"
                        alt="ISFJ"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-60"></div>
                    </div>
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-700 rounded-full text-xs md:text-sm">
                      ISFJ
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative mb-2 overflow-hidden rounded-lg hover-lift">
                      <img
                        src="/images/mbti/entj.jpeg"
                        alt="ENTJ"
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-60"></div>
                    </div>
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 rounded-full text-xs md:text-sm">
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
