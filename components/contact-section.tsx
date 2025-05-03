import { BrainCircuitIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ContactSection() {
  // 仕事用AIリスト
  const workAiTools = [
    { name: "ChatGPT", url: "https://chat.openai.com/", description: "マルチモーダルAI", rating: "★★★★☆" },
    {
      name: "NoteBookLM",
      url: "https://notebooklm.google.com/",
      description: "コード支援、クローズドAI",
      rating: "★★★★★",
    },
    { name: "V0", url: "https://v0.dev/", description: "UIコーディング生成AI", rating: "★★★★★" },
    { name: "Gemini", url: "https://gemini.google.com/", description: "マルチモーダルAI", rating: "★★★★★" },
    { name: "Nolang", url: "https://no-lang.com/home", description: "音声動画合成AI", rating: "★★★★★" },
    { name: "Perplexity", url: "https://www.perplexity.ai/", description: "検索応答AI", rating: "★★★★☆" },
  ]

  // 趣味用AIリスト
  const personalAiTools = [
    { name: "Suno AI", url: "https://suno.ai/", description: "音楽生成AI", rating: "★★★★★" },
    { name: "leonardo.ai", url: "https://leonardo.ai/", description: "画像生成AI", rating: "★★★★☆" },
    { name: "Whisk", url: "https://labs.google/fx/ja/tools/whisk", description: "画像合成AI", rating: "★★★★☆" },
    { name: "Riffusion", url: "https://www.riffusion.com/", description: "音楽生成AI", rating: "★★★☆☆" },
  ]

  return (
    <section id="contact" className="py-12 md:py-32 bg-black relative overflow-hidden mobile-dark section-overlay">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-2xl md:text-4xl mobile-heading text-center mb-8 md:mb-16 relative text-outline">
            <span className="block text-sm text-blue-300 mb-1 md:mb-2 uppercase tracking-wider font-medium">
              Interests
            </span>
            <span className="digital-text text-3xl md:text-5xl section-title">Current Trends</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto important-section p-5 md:p-12 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8 md:mb-12">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg relative">
                <BrainCircuitIcon className="w-8 h-8 md:w-12 md:h-12" />
              </div>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 important-text text-center md:text-left">
                生成AI
              </h3>
              <p className="mobile-readable mb-4 md:mb-6 text-center md:text-left">
                最近のトレンドは生成AIです。情報を得るのが大変で常に頭を動かしています。最新技術の動向に敏感で、特に生成AIの可能性と活用方法に強い関心を持っています。
              </p>

              <div className="bg-black/80 p-4 md:p-6 rounded-lg mb-4 md:mb-6 border border-blue-500/30 relative">
                <p className="mobile-readable italic">
                  "今年生成AI関連に支払ったサブスク合計が5万円を突破。流石に懐事情でChatGPT
                  Proは契約できておらず毎月給料日に迷っています。"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                {["生成AI", "テクノロジー", "イノベーション", "自己啓発"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 text-white rounded-full text-xs md:text-sm border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg md:text-xl font-medium mb-4 md:mb-6 pb-2 border-b border-blue-500/30 important-text text-center md:text-left">
              実際使用したAIのオススメ+使用熟練度
            </h4>
            <p className="mobile-readable mb-4 md:mb-6 text-center md:text-left">
              ★が多いほどオススメかつ私自身の使用練度が高い意味を示しています。
            </p>

            <div className="mb-6 md:mb-10">
              <h5 className="text-base md:text-lg font-medium mb-3 md:mb-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 p-2 rounded-lg border-l-2 border-blue-500 text-center md:text-left">
                仕事使用可能
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {workAiTools.map((tool, index) => (
                  <div key={index} className="bg-black/70 p-3 rounded-lg border border-blue-500/30">
                    <div className="flex justify-between items-start">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-300 hover:text-white"
                      >
                        {tool.name}
                      </a>
                      <span className="text-yellow-300 text-sm md:text-base font-bold">{tool.rating}</span>
                    </div>
                    <p className="mobile-readable mt-1">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-base md:text-lg font-medium mb-3 md:mb-4 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 p-2 rounded-lg border-l-2 border-indigo-500 text-center md:text-left">
                個人的趣味で使用可能
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {personalAiTools.map((tool, index) => (
                  <div key={index} className="bg-black/70 p-3 rounded-lg border border-blue-500/30">
                    <div className="flex justify-between items-start">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-300 hover:text-white"
                      >
                        {tool.name}
                      </a>
                      <span className="text-yellow-300 text-sm md:text-base font-bold">{tool.rating}</span>
                    </div>
                    <p className="mobile-readable mt-1">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
