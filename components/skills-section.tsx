import { BadgeCheckIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-32 bg-black relative overflow-hidden mobile-dark section-overlay">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative">
            <span className="block text-sm text-blue-300 mb-1 md:mb-2 uppercase tracking-wider font-medium bg-black/60 py-1 px-3 rounded-lg inline-block">
              Qualifications
            </span>
            <span className="digital-text text-3xl md:text-5xl relative section-title block mt-2">
              <span className="bg-black/70 py-2 px-4 rounded-lg inline-block">Skills & Certifications</span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* 資格カード */}
          <ScrollReveal direction="flip" delay={100}>
            <div className="important-section p-5 md:p-8 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md relative">
                <BadgeCheckIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 important-text">資格</h3>
              <ul className="space-y-3 md:space-y-4">
                {["AIパスポート（取得学習中）", "普通運転免許", "情報処理士", "1級船舶免許"].map((item, index) => (
                  <li key={index} className="flex items-center group p-2 rounded-md">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></span>
                    <span className="mobile-readable">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 営業スキルカード */}
          <ScrollReveal direction="flip" delay={200}>
            <div className="important-section p-5 md:p-8 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md relative">
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
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 important-text">営業スキル</h3>
              <ul className="space-y-3 md:space-y-4">
                {["BtoB営業（9年）", "BtoC営業（3年）", "顧客関係構築", "ニーズ分析"].map((item, index) => (
                  <li key={index} className="flex items-center group p-2 rounded-md">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></span>
                    <span className="mobile-readable">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* テクノロジーカード */}
          <ScrollReveal direction="flip" delay={300}>
            <div className="important-section p-5 md:p-8 rounded-xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md relative">
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
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 important-text">テクノロジー</h3>
              <ul className="space-y-3 md:space-y-4">
                {["生成AI活用", "パソコン操作", "YouTube制作"].map((item, index) => (
                  <li key={index} className="flex items-center group p-2 rounded-md">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                    <span className="mobile-readable">{item}</span>
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
