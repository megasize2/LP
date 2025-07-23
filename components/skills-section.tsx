import { BadgeCheckIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function SkillsSection() {
  const skills = [
    {
      category: "資格",
      items: ["AIパスポート（取得学習中）", "普通運転免許", "情報処理士", "1級船舶免許"],
    },
    {
      category: "営業スキル",
      items: ["BtoB営業（9年）", "BtoC営業（3年）", "顧客関係構築", "ニーズ分析"],
    },
    {
      category: "テクノロジー",
      items: ["生成AI活用", "パソコン操作", "YouTube制作"],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white relative overflow-hidden">
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
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#0088ff]/20 rounded-full rotating hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating-reverse hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-blue-600 text-lg sm:text-xl mb-3 font-bold">SKILLS & CERTIFICATIONS</h2>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold blue-gradient-text leading-tight"
              data-text="スキル"
            >
              スキル
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <ScrollReveal key={index} direction="flip" delay={index * 100}>
              <div className="modern-card p-6 sm:p-8 h-full hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0088ff]/10 flex items-center justify-center mb-6 mx-auto glow">
                  <BadgeCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#0088ff]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 blue-text">{skillGroup.category}</h3>

                <ul className="space-y-3 sm:space-y-4">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center group transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-[#0088ff] rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 group-hover:text-[#0088ff] text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* スキルメーター */}
        <div className="mt-16 sm:mt-20">
          <ScrollReveal>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 blue-text">スキルレベル</h3>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-3xl mx-auto lg:grid-cols-2">
              {[
                { name: "営業力", level: 90 },
                { name: "コミュニケーション", level: 85 },
                { name: "AI活用", level: 75 },
                { name: "問題解決能力", level: 80 },
              ].map((skill, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="modern-card p-4 sm:p-6">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 text-sm sm:text-base font-medium">{skill.name}</span>
                      <span className="text-[#0088ff] font-bold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0066ff] to-[#00ccff]"
                        style={{
                          width: `${skill.level}%`,
                          animation: `gradient-shift 5s ease infinite`,
                        }}
                      ></div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
