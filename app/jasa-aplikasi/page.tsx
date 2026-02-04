import type { Metadata } from "next";
import Link from "next/link";
import { 
  Smartphone, 
  Layers, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Code2, 
  Rocket 
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Android & iOS Profesional | Merangintech",
  description: "Layanan pengembangan aplikasi mobile (Android & iOS) profesional. Teknologi sesuai kebutuhan, pengerjaan 3-6 bulan, harga mulai Rp 15 Juta. Konsultasi gratis!",
  keywords: ["jasa pembuatan aplikasi android", "jasa pembuatan aplikasi ios", "jasa aplikasi mobile", "pengembang aplikasi semarang", "merangintech app development"],
  alternates: {
    canonical: "https://merangintech.com/jasa-aplikasi",
  },
  openGraph: {
    title: "Jasa Pembuatan Aplikasi Android & iOS Profesional | Merangintech",
    description: "Wujudkan ide startup atau bisnis Anda menjadi aplikasi mobile berkualitas. Harga kompetitif mulai Rp 15 Juta.",
    url: "https://merangintech.com/jasa-aplikasi",
    siteName: "Merangintech",
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaAplikasi() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Mobile App Development
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Jasa Pembuatan Aplikasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Android & iOS</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Kami membangun aplikasi mobile berkualitas tinggi dengan teknologi terkini sesuai kebutuhan bisnis Anda. Solusi tepat untuk skala startup hingga enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://wa.me/6288293334443?text=Halo%20Merangintech,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20aplikasi%20mobile." 
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-blue-500/30"
              >
                Konsultasi Gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="#details" 
                className="inline-flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features / Tech Stack */}
      <section id="details" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Platform</h3>
              <p className="text-slate-600">
                Pengembangan aplikasi untuk Android dan iOS. Bisa Native (Kotlin/Swift) atau Hybrid (Flutter/React Native) sesuai preferensi Anda.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Teknologi Fleksibel</h3>
              <p className="text-slate-600">
                Kami menggunakan teknologi yang disesuaikan dengan kebutuhan fitur, skalabilitas, dan budget proyek Anda.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Full Stack Solution</h3>
              <p className="text-slate-600">
                Layanan mencakup Backend, API, Database, hingga Panel Admin Dashboard untuk mengelola konten aplikasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Pricing Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Waktu & Biaya <br />
                <span className="text-blue-400">Transparan</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Kami berkomitmen memberikan estimasi yang jujur dan hasil berkualitas tinggi. 
                Setiap proyek dikerjakan dengan metodologi terstruktur.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Estimasi Waktu</h4>
                    <p className="text-slate-400">3 - 6 Bulan</p>
                    <p className="text-sm text-slate-500 mt-1">Tergantung kerumitan fitur & flow aplikasi</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Rocket className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Investasi Mulai</h4>
                    <p className="text-slate-400 text-2xl font-semibold">Rp 15.000.000,-</p>
                    <p className="text-sm text-slate-500 mt-1">Include: Desain UI/UX, Backend, & Deploy</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link 
                  href="https://wa.me/6288293334443?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi."
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-bold text-white transition-all hover:bg-blue-500"
                >
                  Hubungi Kami Sekarang
                </Link>
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-1"></div>
               <div className="relative bg-slate-800 border border-slate-700 p-6 md:p-8 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Tahapan Pengerjaan</h3>
                  <ul className="space-y-6">
                    {[
                      { step: "1", title: "Analisa & Konsultasi", desc: "Memahami kebutuhan bisnis & flow sistem" },
                      { step: "2", title: "UI/UX Design", desc: "Perancangan antarmuka & prototype" },
                      { step: "3", title: "Development", desc: "Coding Frontend, Backend, & Integrasi" },
                      { step: "4", title: "Testing (QA)", desc: "Uji coba fungsionalitas & performa" },
                      { step: "5", title: "Deployment", desc: "Rilis ke Play Store / App Store" }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-blue-400 border border-slate-600">
                          {item.step}
                        </span>
                        <div>
                          <h4 className="font-bold text-slate-200">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Siap Mewujudkan Aplikasi Impian Anda?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto relative z-10 font-medium">
              Jangan biarkan ide hebat Anda hanya menjadi wacana. Diskusikan dengan tim ahli kami dan dapatkan penawaran terbaik.
            </p>
            <Link 
              href="https://wa.me/6288293334443" 
              aria-label="Konsultasi via WhatsApp" 
              className="relative z-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-blue-600 shadow-lg transition-all hover:bg-slate-50 hover:scale-105"
            >
              <Smartphone className="w-5 h-5" />
              Konsultasi via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
