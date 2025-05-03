import { BriefcaseIcon, BuildingIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-32 bg-black circuit-bg relative overflow-hidden mobile-dark">
      {/* 背景装飾 */}
      <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* デジタルラインの装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scanline"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative">
            <span className="block text-sm text-blue-400 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Career
            </span>
            <span className="digital-text text-3xl md:text-5xl">
              Work Experience
              {/* 装飾ライン */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500/50"></span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* 現在の職場 */}
          <div className="relative border-l-2 border-blue-500/50 pl-4 md:pl-8 pb-8 md:pb-16 animate-fadeIn">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 bg-white rounded-full animate-blink"></div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-2">
                <BuildingIcon className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="text-lg md:text-xl font-medium highlight-text">株式会社tetra Core</h3>
              </div>
              <p className="text-white mb-4 text-sm md:text-base font-medium">現在</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="futuristic-card p-3 md:p-6 rounded-xl">
                  <p className="text-white leading-relaxed mobile-readable">
                    株式会社tetra
                    Coreでは、最新のテクノロジーを活用したソリューション開発に携わっています。特に生成AIの活用に力を入れ、革新的なサービス提供を目指しています。
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 border border-blue-500/30 hover-lift">
                  <img
                    src="/images/tetra-core-logo.png"
                    alt="株式会社tetra Core ロゴ"
                    className="h-24 md:h-32 object-contain"
                  />

                  {/* ホログラム効果 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* オフィス機器販売営業 */}
          <div className="relative border-l-2 border-indigo-500/50 pl-4 md:pl-8 pb-8 md:pb-16 animate-fadeIn animate-delay-200">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 bg-white rounded-full animate-blink"></div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-indigo-500" />
                <h3 className="text-lg md:text-xl font-medium highlight-text">オフィス機器販売営業</h3>
              </div>
              <p className="text-white mb-2 md:mb-4 text-sm md:text-base font-medium">9年間（BtoB）</p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-64 md:order-1 order-2 hover-lift relative">
                  <img
                    src="/images/work/office-equipment.jpg"
                    alt="オフィス機器販売営業の様子"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* デジタルオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-50"></div>

                  {/* コーナーアクセント */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500"></div>
                </div>

                <div className="futuristic-card p-3 md:p-6 rounded-xl md:order-2 order-1">
                  <p className="text-white leading-relaxed mobile-readable">
                    法人向けオフィス機器の販売営業として9年間勤務。クライアントのニーズを理解し、最適なソリューションを提案することで、長期的な信頼関係を構築。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 家電量販店 販売営業 */}
          <div className="relative border-l-2 border-purple-500/50 pl-4 md:pl-8 animate-fadeIn animate-delay-300">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 bg-white rounded-full animate-blink"></div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-purple-500" />
                <h3 className="text-lg md:text-xl font-medium highlight-text">家電量販店 販売営業</h3>
              </div>
              <p className="text-white mb-2 md:mb-4 text-sm md:text-base font-medium">3年間（BtoC）</p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div className="futuristic-card p-3 md:p-6 rounded-xl">
                  <p className="text-white leading-relaxed mobile-readable">
                    家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。多様な顧客ニーズに対応し、適切な商品提案と丁寧な説明を心がけました。
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-64 hover-lift relative">
                  <img
                    src="/images/work/electronics-retail.jpg"
                    alt="家電量販店での営業の様子"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* デジタルオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-50"></div>

                  {/* コーナーアクセント */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-purple-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-purple-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-purple-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
