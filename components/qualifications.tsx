import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheckIcon } from "lucide-react"

export default function Qualifications() {
  const qualifications = [{ name: "普通運転免許" }, { name: "情報処理士" }, { name: "1級船舶免許" }]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">資格</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {qualifications.map((qualification, index) => (
            <li key={index} className="flex items-center gap-2">
              <BadgeCheckIcon className="w-5 h-5 text-blue-500" />
              <span>{qualification.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
