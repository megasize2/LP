"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Calendar,
  Briefcase,
  Mail,
  Plane,
  Fish,
  Tent,
  Leaf,
  Mountain,
  Tractor,
  Play,
  ChevronDown,
} from "lucide-react"
import { SideNavigation } from "@/components/side-navigation"
import { BottomNavigation } from "@/components/bottom-navigation"
import { motion } from "framer-motion"
import { FilmGrain } from "@/components/film-grain"
import { CinematicTitle } from "@/components/cinematic-title"

export default function ProfilePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Refs for scroll animations
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    hobbies: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = ["about", "skills", "hobbies", "contact"]

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection("")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pb-16 lg:pb-0 overflow-hidden">
      <FilmGrain />

      {/* Mobile-optimized cinematic hero section */}
      <motion.section
        ref={sectionRefs.hero}
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background video/image with parallax effect */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: scrolled ? 1.2 : 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90 z-10"></div>
          <img
            src="/images/profile-city-view.jpeg"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black z-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black z-20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4"
          >
            <CinematicTitle text="照喜名 和也" />
            <motion.p
              className="text-xl text-gray-300 mt-4 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              KAZUYA TERUKINA
            </motion.p>
          </motion.div>

          <motion.p
            className="max-w-md text-gray-300 mb-8 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            三方よしの精神を大切にし、お客様に寄り添い・社会貢献に努め・自分自身にとっても培っていけるよう
            すべてに価値をもたらすことを目指しています。
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.8 }}>
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-full px-8 py-6 group"
            >
              <span className="mr-2">DISCOVER</span>
              <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Play button overlay */}
          <motion.div
            className="absolute bottom-[15vh] right-[10vw]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30">
              <Play className="h-6 w-6 text-white fill-white" />
              <div className="absolute inset-0 rounded-full border border-white/50 animate-ping"></div>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" ref={sectionRefs.about} className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/images/film-texture.png')] opacity-5 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">PROFILE</p>
            <CinematicTitle text="About Me" size="medium" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* About Content */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="flex items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Calendar className="h-6 w-6 text-gray-300 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-lg text-white">生年月日</p>
                    <p className="text-gray-400">1980年3月</p>
                    <p className="text-gray-400">おひつじ座・申年</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <MapPin className="h-6 w-6 text-gray-300 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-lg text-white">出身</p>
                    <p className="text-gray-400">沖縄県浦添市</p>
                  </div>
                </div>
              </motion.div>

              {/* About Image */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-lg overflow-hidden border border-white/20 group">
                  <img src="/images/okinawa-view.jpeg" alt="沖縄の風景" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-lg">沖縄県浦添市の風景</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={sectionRefs.skills} className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/images/film-texture.png')] opacity-5 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">EXPERTISE</p>
            <CinematicTitle text="Skills" size="medium" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-white">資格</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-gray-300" />
                  </div>
                  <span className="font-medium text-lg text-white">情報技術検定２級</span>
                </div>
                <p className="text-gray-400">情報技術に関する知識と技能を証明する資格</p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-gray-300" />
                  </div>
                  <span className="font-medium text-lg text-white">電気工事２級</span>
                </div>
                <p className="text-gray-400">電気工事に関する専門的な技能を証明する資格</p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-full mr-4">
                    <Briefcase className="h-6 w-6 text-gray-300" />
                  </div>
                  <span className="font-medium text-lg text-white">顧客関係構築</span>
                </div>
                <p className="text-gray-400">顧客との関係構築に関する専門知識を証明する資格</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section
        id="hobbies"
        ref={sectionRefs.hobbies}
        className="py-20 bg-gradient-to-b from-gray-900 to-black relative"
      >
        <div className="absolute inset-0 bg-[url('/images/film-texture.png')] opacity-5 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">INTERESTS</p>
            <CinematicTitle text="Hobbies & Activities" size="medium" />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <HobbyCard
                  title="旅行"
                  description="国内外の様々な場所を訪れ、新しい文化や景色を発見し、日々の暮らしとは異なる体験を楽しんでいます。"
                  image="/images/mountain-temple.webp"
                  icon={<Plane className="w-5 h-5" />}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <HobbyCard
                  title="釣り"
                  description="桜の季節には川辺での釣りを特に楽しんでいます。自然の美しさを感じながら、静かな時間を過ごすことでリフレッシュしています。"
                  image="/images/fishing.jpeg"
                  icon={<Fish className="w-5 h-5" />}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <HobbyCard
                  title="キャンプ"
                  description="山々に囲まれた自然の中で、テントを張り、焚き火で料理を作ることを楽しんでいます。都会の喧騒から離れた静けさと、星空の美しさに心が癒されます。"
                  image="/images/camping.jpeg"
                  icon={<Tent className="w-5 h-5" />}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <HobbyCard
                  title="ゴルフ"
                  description="緑豊かなコースでのショットを楽しみ、技術向上に努めています。自然の中でのゴルフは心身ともにリフレッシュできる貴重な時間です。"
                  image="/images/golf.jpeg"
                  icon={<Mountain className="w-5 h-5" />}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <HobbyCard
                  title="野球"
                  description="地域のチームで野球を楽しんでいます。仲間との絆を深めながら、チームワークと協調性を大切にしています。夕暮れ時のグラウンドでの時間は格別です。"
                  image="/images/baseball.jpeg"
                  icon={<Mountain className="w-5 h-5" />}
                />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <HobbyCard
                  title="農業"
                  description="自然と共に生きる喜びを感じながら、季節ごとの作物を育てています。土に触れ、植物の成長を見守る時間は、心を落ち着かせてくれます。"
                  image="/images/rice-field.webp"
                  icon={<Leaf className="w-5 h-5" />}
                />
              </motion.div>
            </div>

            {/* 農業の特集セクション */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/images/agriculture-field.webp"
                    alt="農業フィールド"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="p-6 md:p-8 lg:p-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                    <Tractor className="mr-2 h-6 w-6 text-gray-300" />
                    農業への情熱
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    淡路島の美しい自然の中で農業に親しんでいます。奥さんの実家が農家を営んでおり、年に複数回お手伝いに訪れています。伝統的な農法と現代の技術を融合させた持続可能な農業に触れ、季節ごとの野菜や果物を育てる喜びを感じながら、土地との繋がりを大切にしています。家族との絆も深まる貴重な時間です。
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden border border-white/20">
                      <img src="/images/farm-equipment.webp" alt="農業設備" className="w-full h-32 object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-white/20">
                      <img src="/images/countryside-road.webp" alt="田舎道" className="w-full h-32 object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('/images/film-texture.png')] opacity-5 mix-blend-screen pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">GET IN TOUCH</p>
            <CinematicTitle text="Contact" size="medium" />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <Button
              className="w-full py-6 text-lg font-medium rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30"
              variant="outline"
            >
              <Mail className="mr-2 h-5 w-5" /> お問い合わせ
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bottom Navigation for mobile */}
      <BottomNavigation />

      {/* Side Navigation for desktop */}
      <div className="hidden lg:block">
        <SideNavigation />
      </div>
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
    <div className="relative overflow-hidden rounded-xl aspect-[4/3] group">
      {/* Background Image with Overlay */}
      <img src={image || "/placeholder.svg"} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        {/* Icon */}
        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm p-3 rounded-full">{icon}</div>

        {/* Title and Description */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gray-100">{title}</h3>
        <p className="text-white/80 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  )
}
