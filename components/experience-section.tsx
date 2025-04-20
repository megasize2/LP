import { BriefcaseIcon, BuildingIcon } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl font-light text-center mb-8 md:mb-16">
          <span className="block text-sm text-gray-500 mb-1 md:mb-2 uppercase tracking-wider">Career</span>
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gray-200 pl-4 md:pl-8 pb-8 md:pb-16">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-2">
                <BuildingIcon className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="text-lg md:text-xl font-medium">株式会社tetra Core</h3>
              </div>
              <p className="text-gray-500 mb-4 text-sm md:text-base">現在</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-3 md:p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    株式会社tetra
                    Coreでは、最新のテクノロジーを活用したソリューション開発に携わっています。特に生成AIの活用に力を入れ、革新的なサービス提供を目指しています。
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden shadow-sm flex items-center justify-center bg-white p-4">
                  <img
                    src="/images/tetra-core-logo.png"
                    alt="株式会社tetra Core ロゴ"
                    className="h-24 md:h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-l-2 border-gray-200 pl-4 md:pl-8 pb-8 md:pb-16">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="text-lg md:text-xl font-medium">オフィス機器販売営業</h3>
              </div>
              <p className="text-gray-500 mb-2 md:mb-4 text-sm md:text-base">9年間（BtoB）</p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div className="rounded-lg overflow-hidden shadow-sm h-40 md:h-64 md:order-1 order-2">
                  <img
                    src="/images/work/office-equipment.jpg"
                    alt="オフィス機器販売営業の様子"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-gray-50 p-3 md:p-6 rounded-lg md:order-2 order-1 text-sm md:text-base">
                  <p className="text-gray-700 leading-relaxed">
                    法人向けオフィス機器の販売営業として9年間勤務。クライアントのニーズを理解し、最適なソリューションを提案することで、長期的な信頼関係を構築。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-l-2 border-gray-200 pl-4 md:pl-8">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <BriefcaseIcon className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="text-lg md:text-xl font-medium">家電量販店 販売営業</h3>
              </div>
              <p className="text-gray-500 mb-2 md:mb-4 text-sm md:text-base">3年間（BtoC）</p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div className="bg-gray-50 p-3 md:p-6 rounded-lg text-sm md:text-base">
                  <p className="text-gray-700 leading-relaxed">
                    家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。多様な顧客ニーズに対応し、適切な商品提案と丁寧な説明を心がけました。
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden shadow-sm h-40 md:h-64">
                  <img
                    src="/images/work/electronics-retail.jpg"
                    alt="家電量販店での営業の様子"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
