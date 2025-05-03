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
    <section id="hobbies" className="py-12 md:py-32 bg-black relative overflow-hidden mobile-dark section-overlay">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative text-outline">
            <span className="block text-sm text-blue-300 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Interests
            </span>
            <span className="digital-text text-3xl md:text-5xl section-title">Hobbies & Activities</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {hobbies.map((hobby, index) => (
            <ScrollReveal
              key={index}
              direction="scale"
              delay={index * 50}
              className="relative overflow-hidden rounded-xl shadow-lg h-64 md:h-80 important-section"
            >
              {/* 背景画像 */}
              <img
                src={hobby.imagePath || "/placeholder.svg"}
                alt={hobby.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* オーバーレイ - 視認性向上 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/90 to-black/60"></div>

              {/* コンテンツ */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6 text-white">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/70 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-lg">
                  {hobby.icon}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 important-text">{hobby.name}</h3>
                  <p className="text-sm md:text-base mobile-readable leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
