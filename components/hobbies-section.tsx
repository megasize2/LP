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
    },
    {
      icon: <YoutubeIcon className="w-8 h-8" />,
      name: "YouTube制作",
      description: "自分の経験や知識を共有するためのコンテンツ制作に取り組んでいます。編集技術の向上も目指しています。",
      imagePath: "/images/hobbies/youtube.jpeg",
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
    },
    {
      icon: <FishIcon className="w-8 h-8" />,
      name: "釣り",
      description:
        "海や川での釣りを通じて、自然との一体感を味わい、日常から離れてリラックスする時間を大切にしています。",
      imagePath: "/images/hobbies/fishing.jpeg",
    },
    {
      icon: <TentIcon className="w-8 h-8" />,
      name: "キャンプ",
      description: "アウトドアでの時間を通じて、シンプルな生活の喜びを再発見し、自然の中でのスキルを磨いています。",
      imagePath: "/images/hobbies/camping.jpeg",
    },
    {
      icon: <PlaneIcon className="w-8 h-8" />,
      name: "旅行",
      description: "年に2回程度の一人旅を通じて、新しい文化や場所を発見し、自分自身と向き合う時間を作っています。",
      imagePath: "/images/hobbies/travel.jpeg",
    },
  ]

  return (
    <section id="hobbies" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* 装飾線 - モバイルでは非表示 */}
      <div className="decorative-line decorative-line-1 hidden md:block"></div>
      <div className="decorative-line decorative-line-2 hidden md:block"></div>

      {/* 動く背景ドット - 固定数に変更 */}
      <div className="animated-dots">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="dot hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 3}px`,
              height: `${3 + Math.random() * 3}px`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 装飾的な円 - モバイルでは非表示 */}
      <div className="absolute top-40 right-10 w-40 h-40 border border-[#0088ff]/20 rounded-full rotating hidden md:block"></div>
      <div className="absolute bottom-40 left-10 w-28 h-28 border-2 border-dashed border-[#0088ff]/30 rounded-full rotating-reverse hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-blue-600 text-lg sm:text-xl mb-3 font-bold">HOBBIES & INTERESTS</h2>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold blue-gradient-text leading-tight"
              data-text="趣味"
            >
              趣味
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <ScrollReveal key={index} direction="scale" delay={index * 50}>
              <div className="modern-card p-0 h-80 group hover:scale-105 transition-all duration-300">
                {/* 背景画像 */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={hobby.imagePath || "/placeholder.svg"}
                    alt={hobby.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="w-14 h-14 rounded-full bg-[#0088ff]/10 flex items-center justify-center border border-[#0088ff]/50 glow">
                    <div className="text-[#0088ff]">{hobby.icon}</div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 blue-text">{hobby.name}</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">{hobby.description}</p>

                    <button className="text-[#0088ff] text-sm flex items-center gap-2 group-hover:underline">
                      詳細を見る
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
