"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
               <Image 
                 src="/img/logo.png" 
                 alt="Merangintech Logo" 
                 width={32} 
                 height={32}
                 className="object-cover"
               />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Merangintech</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Keunggulan</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Harga</Link>
            <Link href="https://wa.me/6288293334443" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">Kontak</Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4">
          <nav className="flex flex-col gap-4">
            <Link href="#about" className="text-sm font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#features" className="text-sm font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Keunggulan</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Harga</Link>
            <Link href="https://wa.me/6288293334443" className="text-sm font-medium text-blue-600" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
