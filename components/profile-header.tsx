import { CalendarIcon, MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProfileHeaderProps {
  name: string
  birthDate: string
  zodiac: string
  chineseZodiac: string
  hometown: string
}

export default function ProfileHeader({ name, birthDate, zodiac, chineseZodiac, hometown }: ProfileHeaderProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
      <CardContent className="relative pt-0">
        <div className="flex flex-col md:flex-row gap-6 -mt-12">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-lg">
              <img src="/images/profile.jpg" alt="プロフィール画像" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 pt-12 md:pt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{name}</h1>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <span>
                  {birthDate}（{zodiac}・{chineseZodiac}）
                </span>
              </div>

              <div className="flex items-center gap-1">
                <MapPinIcon className="w-4 h-4" />
                <span>{hometown}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
