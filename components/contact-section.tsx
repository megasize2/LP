import { BrainCircuitIcon } from "lucide-react"

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
    { name: "イルシルAI", url: "https://irusiru.jp/", description: "スライド作成AI", rating: "★★★☆☆" },
    { name: "bolt.new", url: "https://bolt.new/", description: "コーディング生成AI", rating: "★★☆☆☆" },
    { name: "Claude", url: "https://claude.ai/", description: "長文理解生成AI", rating: "★☆☆☆☆" },
  ]

  // 趣味用AIリスト
  const personalAiTools = [
    { name: "Suno AI", url: "https://suno.ai/", description: "音楽生成AI", rating: "★★★★★" },
    { name: "leonardo.ai", url: "https://leonardo.ai/", description: "画像生成AI", rating: "★★★★☆" },
    { name: "Whisk", url: "https://labs.google/fx/ja/tools/whisk", description: "画像合成AI", rating: "★★★★☆" },
    { name: "Riffusion", url: "https://www.riffusion.com/", description: "音楽生成AI", rating: "★★★☆☆" },
    { name: "Sora", url: "https://openai.com/sora", description: "テキスト動画生成AI", rating: "★★☆☆☆" },
    { name: "KLing", url: "https://klingai.com/global/", description: "動画生成AI", rating: "★★☆☆☆" },
  ]

  return (
    <section id="contact" className="py-12 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-2xl md:text-4xl font-light text-center mb-8 md:mb-16">
          <span className="block text-sm text-gray-500 mb-1 md:mb-2 uppercase tracking-wider">Interests</span>
          Current Trends
        </h2>

        <div className="max-w-5xl mx-auto bg-white p-5 md:p-12 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8 md:mb-12">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                <BrainCircuitIcon className="w-8 h-8 md:w-12 md:h-12" />
              </div>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">生成AI</h3>
              <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                最近のトレンドは生成AIです。情報を得るのが大変で常に頭を動かしています。最新技術の動向に敏感で、特に生成AIの可能性と活用方法に強い関心を持っています。
              </p>

              <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-4 md:mb-6">
                <p className="text-gray-600 italic text-sm md:text-base">
                  "今年生成AI関連に支払ったサブスク合計が5万円を突破。流石に懐事情でChatGPT
                  Proは契約できておらず毎月給料日に迷っています。"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm">
                  生成AI
                </span>
                <span className="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm">
                  テクノロジー
                </span>
                <span className="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm">
                  イノベーション
                </span>
                <span className="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm">
                  自己啓発
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-lg md:text-xl font-medium mb-4 md:mb-6 pb-2 border-b border-gray-200">
              実際使用したAIのオススメ+使用熟練度
            </h4>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              ★が多いほどオススメかつ私自身の使用練度が高い意味を示しています。
            </p>

            <div className="mb-6 md:mb-10">
              <h5 className="text-base md:text-lg font-medium mb-3 md:mb-4 bg-blue-50 p-2 rounded">仕事使用可能</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {workAiTools.map((tool, index) => (
                  <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base"
                      >
                        {tool.name}
                      </a>
                      <span className="text-yellow-500 text-xs md:text-sm">{tool.rating}</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-base md:text-lg font-medium mb-3 md:mb-4 bg-blue-50 p-2 rounded">
                個人的趣味で使用可能
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {personalAiTools.map((tool, index) => (
                  <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base"
                      >
                        {tool.name}
                      </a>
                      <span className="text-yellow-500 text-xs md:text-sm">{tool.rating}</span>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">{tool.description}</p>
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
