import { BrainCircuitIcon } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ContactSection() {
  // 仕事用AIリスト
  const workAiTools = [
    { name: "ChatGPT", url: "https://chat.openai.com/", description: "マルチモーダルAI", rating: 4 },
    { name: "NoteBookLM", url: "https://notebooklm.google.com/", description: "コード支援、クローズドAI", rating: 5 },
    { name: "V0", url: "https://v0.dev/", description: "UIコーディング生成AI", rating: 5 },
    { name: "Gemini", url: "https://gemini.google.com/", description: "マルチモーダルAI", rating: 5 },
    { name: "Nolang", url: "https://no-lang.com/home", description: "音声動画合成AI", rating: 5 },
    { name: "Perplexity", url: "https://www.perplexity.ai/", description: "検索応答AI", rating: 4 },
  ]

  // 趣味用AIリスト
  const personalAiTools = [
    { name: "Suno AI", url: "https://suno.ai/", description: "音楽生成AI", rating: 5 },
    { name: "leonardo.ai", url: "https://leonardo.ai/", description: "画像生成AI", rating: 4 },
    { name: "Whisk", url: "https://labs.google/fx/ja/tools/whisk", description: "画像合成AI", rating: 4 },
    { name: "Riffusion", url: "https://www.riffusion.com/", description: "音楽生成AI", rating: 3 },
  ]

  return (
    <section id="contact" className="py-20 society-bg network-grid relative overflow-hidden">
      {/* スキャナーライン */}
      <div className="scanner-line"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <h2 className="english-title text-[#0ff] text-xl mb-2">CURRENT INTERESTS</h2>
            <h1 className="text-4xl md:text-5xl font-bold gold-title">トレンド</h1>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto society-card p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0ff]/30 to-[#0ff]/10 flex items-center justify-center border border-[#0ff]/50 shadow-lg">
                <BrainCircuitIcon className="w-12 h-12 text-[#0ff]" />
              </div>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-4 neon-text text-center md:text-left">生成AI</h3>
              <p className="text-gray-300 mb-6 text-center md:text-left">
                最近のトレンドは生成AIです。情報を得るのが大変で常に頭を動かしています。最新技術の動向に敏感で、特に生成AIの可能性と活用方法に強い関心を持っています。
              </p>

              <div className="society-card p-6 mb-6 border-[#0ff]/30">
                <p className="text-gray-300 italic">
                  "今年生成AI関連に支払ったサブスク合計が5万円を突破。流石に懐事情でChatGPT
                  Proは契約できておらず毎月給料日に迷っています。"
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {["生成AI", "テクノロジー", "イノベーション", "自己啓発"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-[#0ff]/20 to-[#0ff]/10 text-white rounded-full text-sm border border-[#0ff]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-bold mb-6 pb-2 border-b border-[#0ff]/30 neon-text text-center md:text-left">
              実際使用したAIのオススメ+使用熟練度
            </h4>
            <p className="text-gray-300 mb-6 text-center md:text-left">
              ★が多いほどオススメかつ私自身の使用練度が高い意味を示しています。
            </p>

            <div className="mb-10">
              <h5 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#0ff]/20 to-[#0ff]/10 p-2 rounded-lg border-l-2 border-[#0ff] text-center md:text-left">
                仕事使用可能
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workAiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="society-card p-4 border-[#0ff]/30 hover:border-[#0ff]/60 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#0ff] hover:text-white"
                      >
                        {tool.name}
                      </a>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-1">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-lg font-bold mb-4 bg-gradient-to-r from-[#0ff]/20 to-[#0ff]/10 p-2 rounded-lg border-l-2 border-[#0ff] text-center md:text-left">
                個人的趣味で使用可能
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {personalAiTools.map((tool, index) => (
                  <div
                    key={index}
                    className="society-card p-4 border-[#0ff]/30 hover:border-[#0ff]/60 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#0ff] hover:text-white"
                      >
                        {tool.name}
                      </a>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < tool.rating ? "text-yellow-400" : "text-gray-600"}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mt-1">{tool.description}</p>
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
