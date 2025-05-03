import { BriefcaseIcon, BuildingIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-32 bg-black relative overflow-hidden mobile-dark section-overlay">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative text-outline">
            <span className="block text-sm text-blue-300 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Career
            </span>
            <span className="digital-text text-3xl md:text-5xl section-title">Work Experience</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* 現在の職場 */}
          <div className="relative border-l-2 border-blue-500/50 pl-4 md:pl-8 pb-8 md:pb-16 animate-fadeIn hidden md:block">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-2">
                <BuildingIcon className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="text-lg md:text-xl font-medium important-text">株式会社tetra Core</h3>
              </div>
              <p className="text-white mb-4 text-sm md:text-base font-medium">現在</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="important-section p-3 md:p-6 rounded-xl">
                  <p className="mobile-readable">
                    株式会社tetra
                    Coreでは、最新のテクノロジーを活用したソリューション開発に携わっています。特に生成AIの活用に力を入れ、革新的なサービス提供を目指しています。
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-black/90 p-4 border border-blue-500/30">
                  <img
                    src="/images/tetra-core-logo.png"
                    alt="株式会社tetra Core ロゴ"
                    className="h-24 md:h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* モバイル表示用 */}
          <div className="md:hidden space-y-6">
            <div className="important-section p-4 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                  <BuildingIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium important-text">株式会社tetra Core</h3>
                  <p className="text-sm text-blue-300">現在</p>
                </div>
              </div>
              <p className="mobile-readable mt-3">
                株式会社tetra
                Coreでは、最新のテクノロジーを活用したソリューション開発に携わっています。特に生成AIの活用に力を入れ、革新的なサービス提供を目指しています。
              </p>
              <div className="mt-4 flex justify-center">
                <img src="/images/tetra-core-logo.png" alt="株式会社tetra Core ロゴ" className="h-16 object-contain" />
              </div>
            </div>

            <div className="important-section p-4 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
                  <BriefcaseIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium important-text">オフィス機器販売営業</h3>
                  <p className="text-sm text-blue-300">9年間（BtoB）</p>
                </div>
              </div>
              <p className="mobile-readable mt-3">
                法人向けオフィス機器の販売営業として9年間勤務。クライアントのニーズを理解し、最適なソリューションを提案することで、長期的な信頼関係を構築。
              </p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src="/images/work/office-equipment.jpg"
                  alt="オフィス機器販売営業の様子"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>

            <div className="important-section p-4 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-3">
                  <BriefcaseIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium important-text">家電量販店 販売営業</h3>
                  <p className="text-sm text-blue-300">3年間（BtoC）</p>
                </div>
              </div>
              <p className="mobile-readable mt-3">
                家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。多様な顧客ニーズに対応し、適切な商品提案と丁寧な説明を心がけました。
              </p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src="/images/work/electronics-retail.jpg"
                  alt="家電量販店での営業の様子"
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>

          {/* デスクトップ表示用の残りの経歴 */}
          <div className="hidden md:block">
            {/* オフィス機器販売営業 */}
            <div className="relative border-l-2 border-indigo-500/50 pl-8 pb-16">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-indigo-500" />
                  <h3 className="text-lg md:text-xl font-medium important-text">オフィス機器販売営業</h3>
                </div>
                <p className="text-white mb-4 text-sm md:text-base font-medium">9年間（BtoB）</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="important-section p-3 md:p-6 rounded-xl">
                    <p className="mobile-readable">
                      法人向けオフィス機器の販売営業として9年間勤務。クライアントのニーズを理解し、最適なソリューションを提案することで、長期的な信頼関係を構築。
                    </p>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-64 relative">
                    <img
                      src="/images/work/office-equipment.jpg"
                      alt="オフィス機器販売営業の様子"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 家電量販店 販売営業 */}
            <div className="relative border-l-2 border-purple-500/50 pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-md">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <BriefcaseIcon className="w-5 h-5 mr-2 text-purple-500" />
                  <h3 className="text-lg md:text-xl font-medium important-text">家電量販店 販売営業</h3>
                </div>
                <p className="text-white mb-4 text-sm md:text-base font-medium">3年間（BtoC）</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="important-section p-3 md:p-6 rounded-xl">
                    <p className="mobile-readable">
                      家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。多様な顧客ニーズに対応し、適切な商品提案と丁寧な説明を心がけました。
                    </p>
                  </div>

                  <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-64 relative">
                    <img
                      src="/images/work/electronics-retail.jpg"
                      alt="家電量販店での営業の様子"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 opacity-70"></div>
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
