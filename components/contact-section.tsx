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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              Current Interests
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">トレンド</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col gap-8 md:flex-row md:items-start mb-12">
              <div className="flex justify-center md:w-1/4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-200 shadow-lg">
                  <BrainCircuitIcon className="w-12 h-12 text-blue-600" />
                </div>
              </div>

              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center md:text-left">生成AI</h3>
                <div className="text-gray-700 mb-8 text-center md:text-left space-y-3 text-lg leading-relaxed">
                  <p>最近のトレンドは生成AIです。情報を得るのが大変で常に頭を動かしています。</p>
                  <p>最新技術の動向に敏感で、特に生成AIの可能性と活用方法に強い関心を持っています。</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-8 border border-blue-100">
                  <p className="text-gray-700 italic text-lg">
                    {
                      "今年生成AI関連に支払ったサブスク合計が10万円を突破。"
                    }
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["生成AI", "テクノロジー", "イノベーション", "自己啓発"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="text-2xl font-bold mb-8 text-gray-900 text-center">
                実際使用したAIのオススメ + 使用熟練度
              </h4>
              <p className="text-gray-600 mb-8 text-center text-lg">
                ★が多いほどオススメかつ私自身の使用練度が高い意味を示しています。
              </p>

              <div className="mb-12">
                <h5 className="text-xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl">
                    仕事使用可能
                  </span>
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workAiTools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 hover:text-blue-800 text-lg"
                        >
                          {tool.name}
                        </a>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${i < tool.rating ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl">
                    個人的趣味で使用可能
                  </span>
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {personalAiTools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-purple-600 hover:text-purple-800 text-lg"
                        >
                          {tool.name}
                        </a>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${i < tool.rating ? "text-yellow-400" : "text-gray-300"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
