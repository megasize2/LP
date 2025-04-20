import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Award, Heart, User, Briefcase } from "lucide-react"
import { ProfileHeader } from "@/components/profile-header"

export default function EnhancedProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProfileHeader />

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Personal Info Card */}
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2 text-slate-600" />
                基本情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-slate-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">生年月日</p>
                  <p className="text-sm text-slate-500">1980年3月</p>
                  <p className="text-sm text-slate-500">おひつじ座・申年</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-slate-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">出身</p>
                  <p className="text-sm text-slate-500">沖縄県浦添市</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qualifications Card */}
          <Card className="md:col-span-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-slate-600" />
                資格
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start bg-slate-50 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>情報技術検定２級</span>
                </li>
                <li className="flex items-start bg-slate-50 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>電気工事２級</span>
                </li>
                <li className="flex items-start bg-slate-50 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-slate-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>顧客関係構築</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Hobbies Card */}
          <Card className="md:col-span-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-slate-600" />
                趣味
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <HobbyCard icon="🧳" label="旅行" />
                <HobbyCard icon="🎣" label="釣り" />
                <HobbyCard icon="⛺" label="キャンプ" />
                <HobbyCard icon="⛳" label="ゴルフ" />
                <HobbyCard icon="⚾" label="野球" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function HobbyCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  )
}
