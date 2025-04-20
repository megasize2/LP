import type React from "react"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Calendar,
  Briefcase,
  Mail,
  Plane,
  Fish,
  Tent,
  ClubIcon as GolfIcon,
  BeerIcon as Baseball,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SideNavigation } from "@/components/side-navigation"
import { BottomNavigation } from "@/components/bottom-navigation"
import { SocialIcons } from "@/components/social-icons"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white pb-16 lg:pb-0">
      <Navbar />
      {/* デスクトップのみサイドナビゲーションを表示 */}
      <div className="hidden lg:block">
        <SideNavigation />
      </div>
      <BottomNavigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
          {/* Profile Image with Border */}
          <div className="w-full md:w-1/2 relative">
            <div className="border-t-2 border-l-2 border-gray-300 absolute top-0 left-0 w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 z-10"></div>
            <img
              src="/images/profile-city-view.jpeg"
              alt="照喜名和也"
              className="w-full aspect-[3/4] object-cover object-center"
            />
            <div className="border-r-2 border-b-2 border-gray-300 absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 lg:w-16 h-8 sm:h-10 md:h-12 lg:h-16 z-10"></div>
          </div>

          {/* Profile Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">照喜名 和也</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-3 sm:mb-4 md:mb-6">KAZUYA TERUKINA</p>

            <p className="text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              三方よしの精神を大切にし、お客様に寄り添い・社会貢献に努め・自分自身にとっても培っていけるよう
              すべてに価値をもたらすことを目指しています。
            </p>

            <SocialIcons />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-10 md:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1 sm:mb-2">PROFILE</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* About Content */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">生年月日</p>
                    <p className="text-gray-600">1980年3月</p>
                    <p className="text-gray-600">おひつじ座・申年</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">出身</p>
                    <p className="text-gray-600">沖縄県浦添市</p>
                  </div>
                </div>
              </div>

              {/* About Image */}
              <div className="w-full md:w-1/2 mt-4 sm:mt-5 md:mt-0">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img src="/images/okinawa-view.jpeg" alt="沖縄の風景" className="w-full h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                    沖縄県浦添市の風景
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 sm:py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1 sm:mb-2">EXPERTISE</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Skills</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">資格</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div className="p-3 sm:p-4 md:p-6 border border-gray-200 rounded-md hover:border-gray-400 transition-colors">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="font-medium">情報技術検定２級</span>
                </div>
                <p className="text-gray-600 text-sm">情報技術に関する知識と技能を証明する資格</p>
              </div>
              <div className="p-3 sm:p-4 md:p-6 border border-gray-200 rounded-md hover:border-gray-400 transition-colors">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="font-medium">電気工事２級</span>
                </div>
                <p className="text-gray-600 text-sm">電気工事に関する専門的な技能を証明する資格</p>
              </div>
              <div className="p-3 sm:p-4 md:p-6 border border-gray-200 rounded-md hover:border-gray-400 transition-colors">
                <div className="flex items-center mb-2 sm:mb-3">
                  <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="font-medium">顧客関係構築</span>
                </div>
                <p className="text-gray-600 text-sm">顧客との関係構築に関する専門知識を証明する資格</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-8 sm:py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1 sm:mb-2">INTERESTS</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Hobbies & Activities</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <HobbyCard
                title="旅行"
                description="国内外の様々な場所を訪れ、新しい文化や景色を発見し、日々の暮らしとは異なる体験を楽しんでいます。"
                image="https://picsum.photos/600/400?random=6"
                icon={<Plane className="w-5 h-5" />}
              />
              <HobbyCard
                title="釣り"
                description="桜の季節には川辺での釣りを特に楽しんでいます。自然の美しさを感じながら、静かな時間を過ごすことでリフレッシュしています。"
                image="/images/fishing.jpeg"
                icon={<Fish className="w-5 h-5" />}
              />
              <HobbyCard
                title="キャンプ"
                description="山々に囲まれた自然の中で、テントを張り、焚き火で料理を作ることを楽しんでいます。都会の喧騒から離れた静けさと、星空の美しさに心が癒されます。"
                image="/images/camping.jpeg"
                icon={<Tent className="w-5 h-5" />}
              />
              <HobbyCard
                title="ゴルフ"
                description="緑豊かなコースでのショットを楽しみ、技術向上に努めています。自然の中でのゴルフは心身ともにリフレッシュできる貴重な時間です。"
                image="/images/golf.jpeg"
                icon={<GolfIcon className="w-5 h-5" />}
              />
              <HobbyCard
                title="野球"
                description="地域のチームで野球を楽しんでいます。仲間との絆を深めながら、チームワークと協調性を大切にしています。夕暮れ時のグラウンドでの時間は格別です。"
                image="/images/baseball.jpeg"
                icon={<Baseball className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-10 md:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-1 sm:mb-2">GET IN TOUCH</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Contact</h2>
          </div>

          <div className="max-w-md mx-auto">
            <Button className="w-full py-3 sm:py-4 md:py-6 text-base md:text-lg" variant="outline">
              <Mail className="mr-2 h-5 w-5" /> お問い合わせ
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function HobbyCard({
  title,
  description,
  image,
  icon,
}: {
  title: string
  description: string
  image: string
  icon: React.ReactNode
}) {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-[4/3] group">
      {/* Background Image with Overlay */}
      <img src={image || "/placeholder.svg"} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative h-full p-3 sm:p-4 md:p-6 flex flex-col justify-end">
        {/* Icon */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
          {icon}
        </div>

        {/* Title and Description */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{title}</h3>
        <p className="text-white/80 text-xs md:text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
