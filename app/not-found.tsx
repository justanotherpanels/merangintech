import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-lg">
        <h1 className="text-9xl font-bold text-slate-900 tracking-tighter mb-4 relative">
          404
          <span className="absolute top-0 left-0 -ml-2 text-blue-600 opacity-20 animate-pulse">404</span>
        </h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin telah dipindahkan, dihapus, atau alamat yang Anda masukkan salah.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
