import { BadgeCheckIcon } from "lucide-react"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl font-light text-center mb-8 md:mb-16">
          <span className="block text-sm text-gray-500 mb-1 md:mb-2 uppercase tracking-wider">Qualifications</span>
          Skills & Certifications
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white p-5 md:p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <BadgeCheckIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">資格</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>AIパスポート（取得学習中）</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>普通運転免許</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>情報処理士</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>1級船舶免許</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 md:p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 text-blue-500"
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
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">営業スキル</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>BtoB営業（9年）</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>BtoC営業（3年）</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>顧客関係構築</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>ニーズ分析</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 md:p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 text-blue-500"
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
            <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">テクノロジー</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>生成AI活用</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>パソコン操作</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>YouTube制作</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
