import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon, MapPinIcon } from "lucide-react"

export default function Education() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">学歴</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <GraduationCapIcon className="w-5 h-5 text-blue-500" />
          </div>

          <div className="flex-1">
            <h3 className="font-medium">九州共立大学</h3>
            <p className="text-slate-600 dark:text-slate-300">経済学部</p>
            <div className="flex items-center gap-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
              <MapPinIcon className="w-3.5 h-3.5" />
              <span>福岡県北九州市八幡西区折尾</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
          <h4 className="font-medium mb-2">学生時代の活動</h4>
          <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
            <h5 className="font-medium text-slate-700 dark:text-slate-200">野球部</h5>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              代打の切り札だったため出番があまりなし（補欠）
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
