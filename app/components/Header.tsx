"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-10 transition-transform group-hover:scale-105">
               <Image 
                 src="/img/logo.png" 
                 alt="Merangintech" 
                 width={0}
                 height={0}
                 sizes="100vw"
                 className="h-full w-auto object-contain"
               />
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Keunggulan</Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Harga</Link>
            <Link href="/custom-plugin" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Custom Plugin</Link>
            <Link href="/jasa-aplikasi" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Jasa Aplikasi</Link>
            <Link 
              href="https://wa.me/6288293334443" 
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Kontak Kami <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-t border-slate-100 bg-white/95 backdrop-blur-xl p-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            <Link href="#about" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#features" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Keunggulan</Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Harga</Link>
            <Link href="/custom-plugin" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Custom Plugin</Link>
            <Link href="/jasa-aplikasi" className="text-sm font-medium text-slate-600 p-2 hover:bg-slate-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Jasa Aplikasi</Link>
            <Link href="https://wa.me/6288293334443" className="text-sm font-medium text-blue-600 p-2 hover:bg-blue-50 rounded-lg" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
