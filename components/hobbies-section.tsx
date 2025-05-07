import { ComputerIcon, YoutubeIcon, TentIcon, FishIcon, PlaneIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function HobbiesSection() {
  const hobbies = [
    {
      icon: <ComputerIcon className="w-8 h-8" />,
      name: "パソコン",
      description:
        "新しいテクノロジーの探求や、効率的な作業方法の研究など、パソコンを活用した様々な活動を楽しんでいます。",
      imagePath: "/images/hobbies/computer.jpeg",
      color: "cyan",
    },
    {
      icon: <YoutubeIcon className="w-8 h-8" />,
      name: "YouTube制作",
      description: "自分の経験や知識を共有するためのコンテンツ制作に取り組んでいます。編集技術の向上も目指しています。",
      imagePath: "/images/hobbies/youtube.jpeg",
      color: "pink",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      color: "purple",
    },
    {
      icon: <FishIcon className="w-8 h-8" />,
      name: "釣り",
      description:
        "海や川での釣りを通じて、自然との一体感を味わい、日常から離れてリラックスする時間を大切にしています。",
      imagePath: "/images/hobbies/fishing.jpeg",
      color: "cyan",
    },
    {
      icon: <TentIcon className="w-8 h-8" />,
      name: "キャンプ",
      description: "アウトドアでの時間を通じて、シンプルな生活の喜びを再発見し、自然の中でのスキルを磨いています。",
      imagePath: "/images/hobbies/camping.jpeg",
      color: "pink",
    },
    {
      icon: <PlaneIcon className="w-8 h-8" />,
      name: "旅行",
      description: "年に2回程度の一人旅を通じて、新しい文化や場所を発見し、自分自身と向き合う時間を作っています。",
      imagePath: "/images/hobbies/travel.jpeg",
      color: "purple",
    },
  ]

  return (
    <section id="hobbies" className="py-20 cyber-bg relative overflow-hidden">
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      {/* バイオモーフィック形状 */}
      <div className="bio-shape bio-shape-1" style={{ top: "10%", right: "20%" }}></div>
      <div className="bio-shape bio-shape-2" style={{ bottom: "30%", left: "15%" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="neon-text-pink">HOBBIES</span>
            <span className="block text-sm text-pink-400 mt-2">& INTERESTS</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <ScrollReveal key={index} direction="scale" delay={index * 50}>
              <div className="cyber-card p-0 h-80 group transform-3d rotate-3d">
                {/* 背景画像 */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={hobby.imagePath || "/placeholder.svg"}
                    alt={hobby.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div
                    className={`w-14 h-14 rounded-full bg-${hobby.color}-500/20 flex items-center justify-center border border-${hobby.color}-500/50`}
                  >
                    <div className={`text-${hobby.color}-400`}>{hobby.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 neon-text">{hobby.name}</h3>
                    <p className="text-gray-300 mb-4">{hobby.description}</p>

                    <button className={`text-${hobby.color}-400 text-sm flex items-center gap-2 group-hover:underline`}>
                      詳細を見る
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 装飾的なコーナー */}
                <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-${hobby.color}-500`}></div>
                <div
                  className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-${hobby.color}-500`}
                ></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
