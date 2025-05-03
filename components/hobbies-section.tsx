import { ComputerIcon, YoutubeIcon, TentIcon, FishIcon, PlaneIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function HobbiesSection() {
  const hobbies = [
    {
      icon: <ComputerIcon className="w-6 h-6 md:w-8 md:h-8" />,
      name: "パソコン",
      description:
        "新しいテクノロジーの探求や、効率的な作業方法の研究など、パソコンを活用した様々な活動を楽しんでいます。",
      imagePath: "/images/hobbies/computer.jpeg",
    },
    {
      icon: <YoutubeIcon className="w-6 h-6 md:w-8 md:h-8" />,
      name: "YouTube制作",
      description: "自分の経験や知識を共有するためのコンテンツ制作に取り組んでいます。編集技術の向上も目指しています。",
      imagePath: "/images/hobbies/youtube.jpeg",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      ),
      name: "ゴルフ",
      description: "自然の中でリフレッシュしながら、技術向上を目指しています。コースでの戦略的思考も楽しんでいます。",
      imagePath: "/images/hobbies/golf.jpeg",
    },
    {
      icon: <FishIcon className="w-6 h-6 md:w-8 md:h-8" />,
      name: "釣り",
      description:
        "海や川での釣りを通じて、自然との一体感を味わい、日常から離れてリラックスする時間を大切にしています。",
      imagePath: "/images/hobbies/fishing.jpeg",
    },
    {
      icon: <TentIcon className="w-6 h-6 md:w-8 md:h-8" />,
      name: "キャンプ",
      description: "アウトドアでの時間を通じて、シンプルな生活の喜びを再発見し、自然の中でのスキルを磨いています。",
      imagePath: "/images/hobbies/camping.jpeg",
    },
    {
      icon: <PlaneIcon className="w-6 h-6 md:w-8 md:h-8" />,
      name: "旅行",
      description: "年に2回程度の一人旅を通じて、新しい文化や場所を発見し、自分自身と向き合う時間を作っています。",
      imagePath: "/images/hobbies/travel.jpeg",
    },
  ]

  return (
    <section id="hobbies" className="py-12 md:py-32 bg-black tech-grid-bg relative overflow-hidden mobile-dark">
      {/* 背景装飾 */}
      <div className="absolute inset-0 section-pattern opacity-30"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* デジタルラインの装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scanline"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative">
            <span className="block text-sm text-blue-400 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Interests
            </span>
            <span className="digital-text text-3xl md:text-5xl">
              Hobbies & Activities
              {/* 装飾ライン */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500/50"></span>
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {hobbies.map((hobby, index) => (
            <ScrollReveal
              key={index}
              direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "scale" : "right"}
              delay={index * 100}
              className="relative overflow-hidden rounded-xl shadow-lg h-64 md:h-80 hover-lift card-3d"
            >
              {/* 背景画像 */}
              <img
                src={hobby.imagePath || "/placeholder.svg"}
                alt={hobby.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* オーバーレイ - 未来的なグラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>

              {/* デジタル装飾 */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-70"></div>

              {/* コーナーアクセント */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500"></div>

              {/* スキャンライン */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-scanline"></div>

              {/* コンテンツ */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6 text-white">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-lg animate-pulse-slow">
                  {hobby.icon}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 highlight-text">{hobby.name}</h3>
                  <p className="text-sm md:text-base text-gray-100 leading-relaxed font-medium">{hobby.description}</p>

                  {/* インタラクティブなボタン */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="future-btn text-xs py-1 px-3 rounded-full">詳細を見る</button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
