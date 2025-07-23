import { BadgeCheckIcon, TrendingUpIcon, BrainIcon, UsersIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function SkillsSection() {
  const skills = [
    {
      category: "資格",
      icon: <BadgeCheckIcon className="w-8 h-8" />,
      items: ["AIパスポート（取得学習中）", "普通運転免許", "情報処理士", "1級船舶免許"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "営業スキル",
      icon: <TrendingUpIcon className="w-8 h-8" />,
      items: ["BtoB営業（9年）", "BtoC営業（3年）", "顧客関係構築", "ニーズ分析"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "テクノロジー",
      icon: <BrainIcon className="w-8 h-8" />,
      items: ["生成AI活用", "パソコン操作", "YouTube制作"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const skillLevels = [
    { name: "営業力", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "コミュニケーション", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "AI活用", level: 75, color: "from-purple-500 to-pink-500" },
    { name: "問題解決能力", level: 80, color: "from-orange-500 to-red-500" },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Skills & Certifications
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">スキル</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          {/* スキルカテゴリ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {skills.map((skillGroup, index) => (
              <ScrollReveal key={index} direction="flip" delay={index * 100}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-6 text-white shadow-lg`}
                  >
                    {skillGroup.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>

                  <ul className="space-y-4">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="flex items-center group">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} mr-3 group-hover:scale-150 transition-transform`}
                        />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* スキルレベル */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  <UsersIcon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">スキルレベル</h3>
                <p className="text-gray-600 text-lg">各分野での習熟度を可視化</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillLevels.map((skill, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
                        <span className="text-2xl font-bold text-gray-700">{skill.level}%</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
