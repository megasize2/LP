import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainIcon, UsersIcon } from "lucide-react"

export default function MbtiSection() {
  const compatibleTypes = [
    { type: "ESFP", name: "エンターテイナー" },
    { type: "ISFJ", name: "擁護者" },
    { type: "ENTJ", name: "指揮官" },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">MBTI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
            <BrainIcon className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium">INTP</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">理論学者</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <UsersIcon className="w-4 h-4 text-blue-500" />
            <h4 className="font-medium">相性のいいタイプ</h4>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {compatibleTypes.map((type, index) => (
              <div key={index} className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <p className="font-medium">{type.type}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
