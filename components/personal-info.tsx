import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, CalendarIcon, UserIcon } from "lucide-react"

export default function PersonalInfo() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">基本情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <UserIcon className="w-5 h-5 mt-0.5 text-blue-500" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">名前</p>
            <p>國〇泰〇</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <CalendarIcon className="w-5 h-5 mt-0.5 text-blue-500" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">生年月日</p>
            <p>平成元年7月</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">かに座・蛇年</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPinIcon className="w-5 h-5 mt-0.5 text-blue-500" />
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">出身</p>
            <p>沖縄県与那原町</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
