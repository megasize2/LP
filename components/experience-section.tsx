import { BriefcaseIcon, CalendarIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "オフィス機器販売営業",
      position: "営業担当",
      period: "9年間（BtoB）",
      description:
        "法人向けオフィス機器の販売営業として9年間勤務。クライアントのニーズを理解し、最適なソリューションを提案することで、長期的な信頼関係を構築。",
      image: "/images/work/office-equipment.jpg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      company: "家電量販店 販売営業",
      position: "販売スタッフ",
      period: "3年間（BtoC）",
      description:
        "家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。多様な顧客ニーズに対応し、適切な商品提案と丁寧な説明を心がけました。",
      image: "/images/work/electronics-retail.jpg",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Career Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">職歴</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* タイムライン */}
          <div className="relative">
            {/* 中央線 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    {/* コンテンツ */}
                    <div className="w-5/12">
                      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center mr-4 text-white shadow-lg`}
                          >
                            <BriefcaseIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                            <p className="text-gray-600">{exp.position}</p>
                          </div>
                        </div>

                        <div className="flex items-center mb-4 text-gray-500">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>

                        <div className="rounded-2xl overflow-hidden">
                          <img
                            src={exp.image || "/placeholder.svg"}
                            alt={exp.company}
                            className="w-full h-32 object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 中央のノード */}
                    <div className="w-2/12 flex justify-center">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10`}
                      />
                    </div>

                    {/* 空のスペース */}
                    <div className="w-5/12" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
