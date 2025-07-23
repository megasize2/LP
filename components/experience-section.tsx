import { BriefcaseIcon } from "lucide-react"
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
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* 装飾線 */}
      <div className="decorative-line decorative-line-1"></div>
      <div className="decorative-line decorative-line-2"></div>

      {/* 動く背景ドット */}
      <div className="animated-dots">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 装飾的な円 */}
      <div className="absolute top-20 right-20 w-36 h-36 border border-[#0088ff]/20 rounded-full rotating"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating-reverse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <h2 className="text-[#0088ff] text-xl mb-2 font-bold">CAREER JOURNEY</h2>
            <h1 className="text-4xl md:text-5xl font-bold blue-gradient-text" data-text="職歴">
              職歴
            </h1>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* タイムライン */}
          <div className="relative border-l-2 border-[#0088ff]/30 ml-6 md:ml-12 space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  {/* タイムラインノード */}
                  <div className="absolute -left-4 w-8 h-8 rounded-full bg-[#0088ff]/30 border-2 border-[#0088ff] flex items-center justify-center glow">
                    <div className="w-2 h-2 bg-[#0088ff] rounded-full pulse"></div>
                  </div>

                  <div className="modern-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-2/3">
                        <div className="flex items-center mb-4">
                          <BriefcaseIcon className="w-5 h-5 mr-2 text-[#0088ff]" />
                          <h3 className="text-xl font-bold blue-text">{exp.company}</h3>
                        </div>

                        <p className="text-[#0088ff] mb-4">{exp.period}</p>
                        <p className="text-gray-700 mb-3 leading-relaxed">{exp.description}</p>
                      </div>

                      <div className="md:w-1/3">
                        <div className="modern-card p-2 h-full flex items-center justify-center">
                          <img
                            src={exp.image || "/placeholder.svg"}
                            alt={exp.company}
                            className="w-full h-32 object-cover"
                          />
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
