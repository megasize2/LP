import { BriefcaseIcon, BuildingIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "株式会社tetra Core",
      position: "現在",
      period: "現在",
      description:
        "株式会社tetra Coreでは、最新のテクノロジーを活用したソリューション開発に携わっています。特に生成AIの活用に力を入れ、革新的なサービス提供を目指しています。",
      logo: "/images/tetra-core-logo.png",
    },
    {
      company: "オフィス機器販売営業",
      position: "営業担当",
      period: "9年間（BtoB）",
      description:
        "法人向けオフィス機器の販売営業として9年間勤務。クライアントのニーズを理解し、最適なソリューションを提案することで、長期的な信頼関係を構築。",
      image: "/images/work/office-equipment.jpg",
    },
    {
      company: "家電量販店 販売営業",
      position: "販売スタッフ",
      period: "3年間（BtoC）",
      description:
        "家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。多様な顧客ニーズに対応し、適切な商品提案と丁寧な説明を心がけました。",
      image: "/images/work/electronics-retail.jpg",
    },
  ]

  return (
    <section id="experience" className="py-20 society-bg hexagon-pattern relative overflow-hidden">
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <h2 className="english-title text-[#0ff] text-xl mb-2">CAREER JOURNEY</h2>
            <h1 className="text-4xl md:text-5xl font-bold gold-title">職歴</h1>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* タイムライン */}
          <div className="relative border-l-2 border-[#0ff]/30 ml-6 md:ml-12 space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  {/* タイムラインノード */}
                  <div className="absolute -left-4 w-8 h-8 rounded-full bg-[#0ff]/30 border-2 border-[#0ff] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="society-card p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-2/3">
                        <div className="flex items-center mb-4">
                          {index === 0 ? (
                            <BuildingIcon className="w-5 h-5 mr-2 text-[#0ff]" />
                          ) : (
                            <BriefcaseIcon className="w-5 h-5 mr-2 text-[#0ff]" />
                          )}
                          <h3 className="text-xl font-bold neon-text">{exp.company}</h3>
                        </div>

                        <p className="text-[#0ff] mb-4">{exp.period}</p>
                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        {/* 装飾的なコーナー */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#0ff]"></div>
                      </div>

                      <div className="md:w-1/3">
                        <div className="society-card p-2 h-full flex items-center justify-center">
                          {exp.logo ? (
                            <img
                              src={exp.logo || "/placeholder.svg"}
                              alt={exp.company}
                              className="h-16 object-contain"
                            />
                          ) : (
                            <img
                              src={exp.image || "/placeholder.svg"}
                              alt={exp.company}
                              className="w-full h-32 object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
