import Image from "next/image";
import Link from "next/link";
import { Globe, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="inline-block mb-6">
              <Image 
                 src="/img/logo.png" 
                 alt="Merangintech" 
                 width={0} 
                 height={0}
                 sizes="100vw"
                 className="h-14 w-auto object-contain"
               />
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mb-8">
              Partner digital terpercaya untuk transformasi bisnis Anda. Kami membangun website yang tidak hanya bagus dilihat, tapi juga menghasilkan.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                 <Smartphone className="w-5 h-5 text-blue-500 mt-1" />
                 <Link href="https://wa.me/6288293334443" className="hover:text-blue-400 transition-colors">
                    WhatsApp: <br/>0882-9333-4443
                 </Link>
              </li>
              <li className="flex items-start gap-3">
                 <Globe className="w-5 h-5 text-blue-500 mt-1" />
                 <Link href="https://www.merangintech.net" className="hover:text-blue-400 transition-colors">
                    www.merangintech.net
                 </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Merangintech. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
