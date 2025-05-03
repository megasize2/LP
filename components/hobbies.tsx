import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ComputerIcon, YoutubeIcon, TentIcon, FishIcon, PlaneIcon, ClubIcon as GolfClubIcon } from "lucide-react"

export default function Hobbies() {
  const hobbies = [
    { name: "パソコン", icon: <ComputerIcon className="w-5 h-5" /> },
    { name: "YouTube制作", icon: <YoutubeIcon className="w-5 h-5" /> },
    { name: "ゴルフ", icon: <GolfClubIcon className="w-5 h-5" /> },
    { name: "釣り", icon: <FishIcon className="w-5 h-5" /> },
    { name: "キャンプ", icon: <TentIcon className="w-5 h-5" /> },
    { name: "旅行（年2回程度1人旅）", icon: <PlaneIcon className="w-5 h-5" /> },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">趣味</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                {hobby.icon}
              </div>
              <span>{hobby.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
