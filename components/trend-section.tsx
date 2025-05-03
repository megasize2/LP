import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuitIcon, WalletIcon } from "lucide-react"

export default function TrendSection() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">最近のトレンド</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <BrainCircuitIcon className="w-5 h-5 text-blue-500" />
          </div>

          <div className="flex-1">
            <h3 className="font-medium">生成AI</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              情報を得るのが大変で常に頭を動かしています。最新技術のトレンドに敏感で、特に生成AIに興味を持っています。
            </p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <WalletIcon className="w-4 h-4 text-blue-500" />
            <h4 className="font-medium">AI関連投資</h4>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
            今年生成AI関連に支払ったサブスク合計が5万円を突破。
          </p>

          <div className="bg-white dark:bg-slate-700 p-3 rounded border border-slate-200 dark:border-slate-600">
            <p className="text-sm italic text-slate-500 dark:text-slate-400">
              "流石に懐事情でChatGPT Proは契約できておらず毎月給料日に迷っています。"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
