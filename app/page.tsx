import Image from "next/image";
import Link from "next/link";
import { 
  Smartphone, 
  Search, 
  Palette, 
  Headset, 
  ShieldCheck, 
  Code2, 
  CheckCircle2
} from "lucide-react";
import { Header } from "./components/Header";

// --- Components ---

function CodeDecoration() {
  return (
    <div className="absolute -z-10 opacity-10 md:opacity-20 pointer-events-none select-none overflow-hidden inset-0 flex items-center justify-center">
      <div className="font-mono text-xs md:text-sm text-blue-500 space-y-2 transform -rotate-12 scale-150 md:scale-100">
        <p className="ml-12">{"<div className='hero'>"}</p>
        <p className="ml-16">{"<h1>Website Profesional</h1>"}</p>
        <p className="ml-16">{"<p>Boost your business</p>"}</p>
        <p className="ml-12">{"</div>"}</p>
        <br/>
        <p className="ml-4">{"function optimizeSEO() {"}</p>
        <p className="ml-8">{"return 'Rank #1';"}</p>
        <p className="ml-4">{"}"}</p>
        <br/>
        <p className="ml-20">{"const tech = ['Next.js', 'Tailwind'];"}</p>
        <p className="ml-20">{"const speed = 100;"}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      <CodeDecoration />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Jasa Pembuatan Website Semarang
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 max-w-4xl">
            Jasa Pembuatan Website <span className="text-blue-600">Profesional</span> untuk Bisnis Anda
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Website adalah cerminan bisnis Anda dalam dunia digital. Ayo kita bangun citra terbaik bisnis bersama dengan teknologi modern dan performa tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="https://wa.me/6288293334443" 
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Konsultasi Sekarang
            </Link>
            <Link 
              href="#pricing" 
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Lihat Paket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-xl border border-gray-200">
             {/* Placeholder for an image or graphic */}
             <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <Code2 className="w-24 h-24 text-blue-200" />
             </div>
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                      <p className="font-semibold text-gray-900">Terpercaya</p>
                      <p className="text-xs text-gray-500">Membantu bisnis go digital</p>
                   </div>
                </div>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Solusi Digital Terpercaya</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kami memberikan layanan jasa pembuatan website Semarang untuk Anda yang tinggal di Semarang dan sekitarnya. 
              Kami mengerjakan pembuatan website secara profesional dengan waktu pengerjaan relatif cepat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Layanan kami dapat digunakan oleh pribadi yang memiliki usaha/bisnis sendiri, perusahaan kecil maupun besar, 
              organisasi, sekolah, maupun toko online pribadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Profesional",
      description: "Kami sangat profesional dan dipercaya dalam membuat berbagai jenis website oleh klien."
    },
    {
      icon: Headset,
      title: "Support",
      description: "Tim kami siap mendampingi anda dalam penggunaan website, kami siap membantu jika terjadi masalah."
    },
    {
      icon: Smartphone,
      title: "Mobile Website",
      description: "Website yang kami buat sudah mobile friendly dan responsif terhadap beragam gadget."
    },
    {
      icon: Search,
      title: "Google Index",
      description: "Website yang kami buat sudah terindeks dengan cepat di mesin pencari Google."
    },
    {
      icon: Palette,
      title: "Premium Desain",
      description: "Kami peduli akan seni, kami buat layout website anda semenarik mungkin."
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Keunggulan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Kenapa memilih jasa pembuatan website kami?</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  isPopular = false 
}: { 
  title: string, 
  price: string, 
  features: string[], 
  isPopular?: boolean 
}) {
  return (
    <div className={`relative flex flex-col p-8 bg-white rounded-2xl border ${isPopular ? 'border-blue-600 shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'} transition-all`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          POPULAR
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-sm text-gray-500">Start IDR</span>
        <div className="text-4xl font-bold text-gray-900">{price}</div>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href="https://wa.me/6288293334443"
        className={`w-full inline-flex h-12 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
          isPopular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Pilih Paket
      </Link>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Pricelist</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Pilih paket yang sesuai dengan kebutuhan Anda.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <PricingCard 
            title="Landing Page"
            price="550K"
            features={[
              "domain.com",
              "vps",
              "SEO",
              "free maintenance",
              "New Tech"
            ]}
          />
          <PricingCard 
            title="Custom Web"
            price="5.500K"
            isPopular={true}
            features={[
              "domain .com, .id, .co.id",
              "VPS",
              "SEO",
              "Free Maintenance",
              "New Tech"
            ]}
          />
          <PricingCard 
            title="Custom WEB + Apps Hybrid"
            price="15.000K"
            features={[
              "domain .com, .id, .co.id",
              "VPS",
              "SEO",
              "Free Maintenance",
              "New Tech",
              "Hybrid App Integration"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                 src="/img/logo.png" 
                 alt="Merangintech Logo" 
                 width={32} 
                 height={32}
                 className="object-cover"
               />
              </div>
              <span className="text-xl font-bold">Merangintech</span>
            </div>
            <p className="text-gray-400 text-sm">
              Jasa pembuatan website profesional, terpercaya, dan cepat.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Landing Page</Link></li>
              <li><Link href="#" className="hover:text-white">Company Profile</Link></li>
              <li><Link href="#" className="hover:text-white">Toko Online</Link></li>
              <li><Link href="#" className="hover:text-white">Custom Web App</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="https://wa.me/6288293334443" className="hover:text-white">WhatsApp: 0882-9333-4443</Link></li>
              <li><Link href="https://www.merangintech.net" className="hover:text-white">www.merangintech.net</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Merangintech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* "Code" background animation container */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
         <div className="absolute top-20 left-10 text-gray-100/50 text-9xl font-bold opacity-10 select-none">{"</>"}</div>
         <div className="absolute bottom-40 right-10 text-gray-100/50 text-9xl font-bold opacity-10 select-none">{"{}"}</div>
      </div>
      
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
