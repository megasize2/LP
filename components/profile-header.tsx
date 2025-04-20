import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Avatar className="h-32 w-32 mb-4">
        <AvatarFallback className="text-4xl bg-slate-200">照喜</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold">照喜名 和也</h1>
      <p className="mt-2 text-lg text-gray-600 max-w-2xl text-center">
        三方よしの精神を大切にし、お客様に寄り添い・社会貢献に努め・自分自身にとっても培っていけるよう
        すべてに価値をもたらすことを目指しています。
      </p>
    </div>
  )
}
