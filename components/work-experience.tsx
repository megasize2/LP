import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, ClockIcon } from "lucide-react"

export default function WorkExperience() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">職歴</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-4 h-4 text-blue-500" />
              <h3 className="font-medium">オフィス機器販売営業</h3>
            </div>
            <div className="flex items-center gap-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
              <ClockIcon className="w-3.5 h-3.5" />
              <span>9年（BtoB）</span>
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              法人向けオフィス機器の販売営業として9年間勤務。ビジネス向け（BtoB）の営業経験を積む。
            </p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
          <div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-4 h-4 text-blue-500" />
              <h3 className="font-medium">家電量販店 販売営業</h3>
            </div>
            <div className="flex items-center gap-1 mt-1 text-sm text-slate-500 dark:text-slate-400">
              <ClockIcon className="w-3.5 h-3.5" />
              <span>3年（BtoC）</span>
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              家電量販店で個人顧客向け（BtoC）の販売営業として3年間勤務。顧客対応やセールススキルを習得。
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
