import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Code2, Database, LayoutTemplate, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Plugin WordPress Custom - Merangintech",
  description: "Layanan pembuatan plugin WordPress custom profesional. Cocok untuk WooCommerce, Elementor, SMM Panel, PPOB, dan sistem integrasi lainnya. Harga mulai Rp 850rb.",
  keywords: ["Jasa Plugin WordPress", "Custom Plugin WordPress", "Plugin WooCommerce", "Plugin Elementor", "Plugin SMM Panel", "Plugin PPOB"],
};

export default function CustomPlugin() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm mb-8">
              <Code2 className="w-4 h-4" />
              <span>WordPress Development Expert</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
              Jasa Pembuatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Plugin WordPress</span> & Custom System
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Solusi tepat untuk kebutuhan fitur website WordPress Anda yang tidak tersedia di plugin pasaran. Kami bangun plugin custom yang ringan, aman, dan sesuai kebutuhan bisnis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://wa.me/6288293334443?text=Halo%20Merangintech,%20saya%20tertarik%20jasa%20pembuatan%20plugin%20WordPress" 
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-blue-600 hover:scale-105"
              >
                Konsultasi Sekarang
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Kompatibilitas & Fitur Luas
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Kami berpengalaman mengembangkan plugin yang terintegrasi sempurna dengan ekosistem WordPress populer dan kebutuhan bisnis spesifik.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Page Builder Support</h3>
                    <p className="text-slate-600">Kompatibel penuh dengan Elementor, Divi, Beaver Builder, dan Gutenberg Block.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Complex Integrations</h3>
                    <p className="text-slate-600">Integrasi API pihak ketiga seperti SMM Panel, PPOB, Payment Gateway, dan sistem ERP.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">High Performance</h3>
                    <p className="text-slate-600">Kode yang efisien dan tidak memberatkan loading website Anda.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contoh Project Plugin:</h3>
              <ul className="space-y-4">
                {[
                  "Sistem Integrasi SMM Panel Otomatis",
                  "Plugin Transaksi PPOB & Top Up Game",
                  "Custom Payment Gateway Indonesia",
                  "Sistem Booking & Reservasi Online",
                  "Addon Elementor Custom Widget",
                  "WooCommerce Custom Checkout Field",
                  "Membership & Affiliate System",
                  "API Data Sync Real-time"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Harga Terjangkau</h2>
            <p className="text-lg text-slate-600">Mulai proyek custom plugin Anda dengan biaya yang masuk akal.</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-all duration-300">
              <div className="bg-slate-900 p-6 text-center">
                <h3 className="text-white text-xl font-bold mb-2">Starter Custom Plugin</h3>
                <div className="flex justify-center items-baseline gap-1 text-white">
                  <span className="text-sm opacity-80">Mulai dari</span>
                  <span className="text-4xl font-extrabold">Rp 850.000</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Hingga 3 Fitur Utama</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Settings Admin Panel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Dokumentasi Penggunaan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Support Bug Fix (1 Bulan)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Source Code Full Hak Milik</span>
                  </li>
                </ul>
                <Link 
                  href="https://wa.me/6288293334443?text=Halo,%20saya%20mau%20order%20pembuatan%20plugin%20WordPress%20paket%20Starter"
                  className="block w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Pesan Sekarang
                </Link>
                <p className="text-xs text-center text-slate-400 mt-4">
                  *Harga dapat berubah tergantung kompleksitas fitur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
