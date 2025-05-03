import { BadgeCheckIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-32 bg-black circuit-bg relative overflow-hidden mobile-dark">
      {/* 背景装飾 */}
      <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      {/* デジタルラインの装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scanline"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative">
            <span className="block text-sm text-blue-400 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Qualifications
            </span>
            <span className="digital-text text-3xl md:text-5xl relative">
              Skills & Certifications
              {/* 装飾ライン */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500/50"></span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* 資格カード */}
          <ScrollReveal direction="flip" delay={100}>
            <div className="futuristic-card p-5 md:p-8 rounded-xl hover-lift">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md animate-pulse-slow relative">
                <BadgeCheckIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                {/* パルスエフェクト */}
                <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></span>
              </div>
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 highlight-text">資格</h3>
              <ul className="space-y-3 md:space-y-4">
                {["AIパスポート（取得学習中）", "普通運転免許", "情報処理士", "1級船舶免許"].map((item, index) => (
                  <li key={index} className="flex items-center group data-display p-2 rounded-md">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-white transition-colors mobile-readable">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 営業スキルカード */}
          <ScrollReveal direction="flip" delay={200}>
            <div className="futuristic-card p-5 md:p-8 rounded-xl hover-lift">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md animate-pulse-slow relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                {/* パルスエフェクト */}
                <span className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping"></span>
              </div>
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 highlight-text">営業スキル</h3>
              <ul className="space-y-3 md:space-y-4">
                {["BtoB営業（9年）", "BtoC営業（3年）", "顧客関係構築", "ニーズ分析"].map((item, index) => (
                  <li key={index} className="flex items-center group data-display p-2 rounded-md">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-white transition-colors mobile-readable">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* テクノロジーカード */}
          <ScrollReveal direction="flip" delay={300}>
            <div className="futuristic-card p-5 md:p-8 rounded-xl hover-lift">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md animate-pulse-slow relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {/* パルスエフェクト */}
                <span className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></span>
              </div>
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 highlight-text">テクノロジー</h3>
              <ul className="space-y-3 md:space-y-4">
                {["生成AI活用", "パソコン操作", "YouTube制作"].map((item, index) => (
                  <li key={index} className="flex items-center group data-display p-2 rounded-md">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    <span className="group-hover:text-white transition-colors mobile-readable">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
