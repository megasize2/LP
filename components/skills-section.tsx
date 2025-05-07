import { BadgeCheckIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function SkillsSection() {
  const skills = [
    {
      category: "資格",
      items: ["AIパスポート（取得学習中）", "普通運転免許", "情報処理士", "1級船舶免許"],
      color: "cyan",
    },
    {
      category: "営業スキル",
      items: ["BtoB営業（9年）", "BtoC営業（3年）", "顧客関係構築", "ニーズ分析"],
      color: "cyan",
    },
    {
      category: "テクノロジー",
      items: ["生成AI活用", "パソコン操作", "YouTube制作"],
      color: "cyan",
    },
  ]

  return (
    <section id="skills" className="py-20 society-bg hexagon-pattern relative overflow-hidden">
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <h2 className="english-title text-[#0ff] text-xl mb-2">SKILLS & CERTIFICATIONS</h2>
            <h1 className="text-4xl md:text-5xl font-bold gold-title">スキル</h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <ScrollReveal key={index} direction="flip" delay={index * 100}>
              <div className="society-card p-6 h-full">
                <div className="w-16 h-16 rounded-full bg-[#0ff]/20 flex items-center justify-center mb-6 mx-auto">
                  <BadgeCheckIcon className="w-8 h-8 text-[#0ff]" />
                </div>

                <h3 className="text-xl font-bold text-center mb-6 neon-text">{skillGroup.category}</h3>

                <ul className="space-y-4">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center group transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-[#0ff] rounded-full mr-3"></span>
                      <span className="text-gray-300 group-hover:text-white">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* 装飾的なコーナー */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0ff]"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0ff]"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* スキルメーター */}
        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-center mb-10 neon-text">スキルレベル</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { name: "営業力", level: 90, color: "cyan" },
                { name: "コミュニケーション", level: 85, color: "cyan" },
                { name: "AI活用", level: 75, color: "cyan" },
                { name: "問題解決能力", level: 80, color: "cyan" },
              ].map((skill, i) => (
                <div key={i} className="society-card p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-[#0ff]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#0a0e2a] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0ff]/60 to-[#0ff]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
