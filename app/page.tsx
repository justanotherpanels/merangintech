import Image from "next/image";
import Link from "next/link";
import { 
  Smartphone, 
  Search, 
  Palette, 
  Headset, 
  ShieldCheck, 
  Code2, 
  CheckCircle2,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Zap
} from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// --- Components ---

function CodeAnimus() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Dynamic Gradients */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Code Snippets Floating */}
      <div className="absolute inset-0 opacity-[0.03] text-slate-900 font-mono text-sm leading-relaxed overflow-hidden">
        <div className="absolute top-10 left-[10%] transform -rotate-6 animate-float">
          <pre>{`const Website = () => {
  return <Success />
}`}</pre>
        </div>
        <div className="absolute top-40 right-[15%] transform rotate-12 animate-float delay-100">
           <pre>{`npm install success`}</pre>
        </div>
        <div className="absolute bottom-20 left-[20%] transform rotate-3 animate-float delay-200">
           <pre>{`if (client) {
  business.grow()
}`}</pre>
        </div>
        <div className="absolute top-1/2 right-[5%] transform -rotate-12 animate-float delay-300">
           <pre>{`<Meta seo="boost" />`}</pre>
        </div>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <CodeAnimus />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <Link href="https://merangintech.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm mb-8 animate-fade-in-up hover:text-blue-600 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Jasa Pembuatan Website Semarang
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Bangun Citra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital</span> <br className="hidden md:block" />
            Terbaik Bisnis Anda
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto">
            Transformasi bisnis Anda dengan website modern, cepat, dan profesional. 
            Kami menggabungkan seni desain dan teknologi terkini untuk hasil maksimal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="https://wa.me/6288293334443" 
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-blue-600 hover:scale-105 hover:shadow-blue-500/30"
            >
              Konsultasi Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="#pricing" 
              className="inline-flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
            >
              Lihat Paket
            </Link>
          </div>
          
          {/* Tech Stack Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-200/60 w-full max-w-3xl flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Globe className="w-5 h-5" /> Modern Web
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Zap className="w-5 h-5" /> Fast Performance
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Search className="w-5 h-5" /> SEO Optimized
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Smartphone className="w-5 h-5" /> Mobile Ready
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl transform rotate-2 opacity-50 blur-lg"></div>
             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-2xl border border-slate-200/50 group">
                {/* Mockup UI */}
                <div className="absolute inset-0 bg-white">
                   <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="p-8 grid gap-4">
                      <div className="h-32 bg-slate-100 rounded-lg animate-pulse"></div>
                      <div className="grid grid-cols-3 gap-4">
                         <div className="h-24 bg-slate-50 rounded-lg"></div>
                         <div className="h-24 bg-slate-50 rounded-lg"></div>
                         <div className="h-24 bg-slate-50 rounded-lg"></div>
                      </div>
                   </div>
                </div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-slate-100 transform transition-transform group-hover:-translate-y-2 duration-300">
                   <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                         <Code2 className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="font-bold text-slate-900">High Quality Code</p>
                         <p className="text-sm text-slate-500">Built with modern standards</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
               <span className="w-8 h-[2px] bg-blue-600"></span> About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Solusi Digital Terpercaya untuk Pertumbuhan Bisnis
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Merangintech hadir sebagai partner digital Anda. Kami tidak hanya membuat website, 
              tapi menciptakan alat bisnis yang bekerja 24/7 untuk Anda.
            </p>
            <div className="space-y-4">
               {[
                  "Layanan jasa pembuatan website profesional Semarang",
                  "Cocok untuk UMKM, Perusahaan, Sekolah, & Personal",
                  "Pengerjaan cepat dengan hasil maksimal",
                  "Support teknis berkelanjutan"
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                     </div>
                     <span className="text-slate-700 font-medium">{item}</span>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: string }) {
  return (
    <div className={`group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${delay}`}>
      <div className="h-14 w-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Profesional & Terpercaya",
      description: "Kami bekerja dengan standar profesional tinggi untuk memastikan kepuasan setiap klien.",
      delay: "delay-0"
    },
    {
      icon: Headset,
      title: "Premium Support",
      description: "Tim support kami siap membantu Anda kapanpun dibutuhkan. Kami tidak meninggalkan Anda setelah project selesai.",
      delay: "delay-100"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Desain responsif yang terlihat sempurna di semua perangkat, dari smartphone hingga desktop.",
      delay: "delay-200"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Struktur kode yang ramah mesin pencari Google agar website Anda mudah ditemukan calon pelanggan.",
      delay: "delay-300"
    },
    {
      icon: Palette,
      title: "Premium Desain",
      description: "Layout modern dan estetis yang disesuaikan dengan identitas brand bisnis Anda.",
      delay: "delay-0"
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimasi performa maksimal untuk waktu muat yang cepat dan pengalaman pengguna terbaik.",
      delay: "delay-100"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
             <span className="w-8 h-[2px] bg-blue-600"></span> Keunggulan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Kenapa Memilih Kami?</h2>
          <p className="text-lg text-slate-600">Kombinasi teknologi terbaik dan pelayanan prima untuk kesuksesan digital Anda.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  features, 
  isPopular = false,
  description
}: { 
  title: string, 
  price: string, 
  features: string[], 
  isPopular?: boolean,
  description: string
}) {
  return (
    <div className={`relative flex flex-col p-8 bg-white rounded-3xl border transition-all duration-300 h-full ${
      isPopular 
        ? 'border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10 ring-4 ring-blue-500/10' 
        : 'border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
    }`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-semibold text-slate-500">Start IDR</span>
          <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{price}</span>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="h-px bg-slate-100 w-full mb-6"></div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-slate-600">
              <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${isPopular ? 'text-blue-500' : 'text-slate-400'}`} />
              <span className="text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        href="https://wa.me/6288293334443"
        className={`w-full inline-flex h-12 items-center justify-center rounded-xl text-sm font-bold transition-all duration-200 ${
          isPopular 
            ? 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-900/20' 
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        Pilih Paket
      </Link>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Investasi Terbaik</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Transparan tanpa biaya tersembunyi.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <PricingCard 
            title="Landing Page"
            price="550K"
            description="Cocok untuk promosi produk atau personal branding sederhana."
            features={[
              "Free Domain .com (1 Tahun)",
              "Hosting VPS High Speed",
              "Basic SEO Setup",
              "Free Maintenance (1 Bulan)",
              "Modern Tech Stack",
              "Responsive Design"
            ]}
          />
          <PricingCard 
            title="Custom Web"
            price="5.500K"
            isPopular={true}
            description="Solusi lengkap untuk Company Profile atau Bisnis Profesional."
            features={[
              "Domain .com/.id/.co.id",
              "Premium VPS Hosting",
              "Advanced SEO Optimization",
              "Free Maintenance (3 Bulan)",
              "Modern Tech & Animations",
              "Custom Design Premium",
              "Analytics Integration"
            ]}
          />
          <PricingCard 
            title="Web + Apps Hybrid"
            price="15.000K"
            description="Sistem terintegrasi Web & Mobile App untuk skala besar."
            features={[
              "All Custom Web Features",
              "Hybrid Mobile App (Android)",
              "API Integration",
              "Priority Support 24/7",
              "Database Design Complex",
              "Play Store Submission Assist"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
