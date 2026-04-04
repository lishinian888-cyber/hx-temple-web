// app/memorial/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Memorial() {
  const [lang, setLang] = useState<Lang>('zh-TW');

  const t = {
    'zh-TW': {
      title: "紀念堂",
      subtitle: "緬懷先賢　傳承家風　永誌不忘",
      ancientTitle: "古代先賢堂",
      ancientDesc: "黃帝、炎帝、孔子、老子等中華人文始祖與歷代聖賢",
      familyTitle: "家族紀念堂",
      familyDesc: "為您的家族建立永久數字空間，上傳照片、記錄族譜",
      modernTitle: "近現代名人紀念堂",
      modernDesc: "孫中山、李小龍、張國榮等近現代傑出人物紀念",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "纪念堂",
      subtitle: "缅怀先贤　传承家风　永志不忘",
      ancientTitle: "古代先贤堂",
      ancientDesc: "黄帝、炎帝、孔子、老子等中华人文始祖与历代圣贤",
      familyTitle: "家族纪念堂",
      familyDesc: "为您的家族建立永久数字空间，上传照片、记录族谱",
      modernTitle: "近现代名人纪念堂",
      modernDesc: "孙中山、李小龙、张国荣等近现代杰出人物纪念",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Memorial Halls",
      subtitle: "Honor the Wise • Inherit Family Tradition • Never Forget",
      ancientTitle: "Ancient Sages Hall",
      ancientDesc: "Yellow Emperor, Yan Emperor, Confucius, Laozi and other great sages",
      familyTitle: "Family Memorial Hall",
      familyDesc: "Create permanent digital space for your family, upload photos and genealogy",
      modernTitle: "Modern Notable Figures Hall",
      modernDesc: "Sun Yat-sen, Bruce Lee, Leslie Cheung and other modern outstanding figures",
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif overflow-hidden">
      {/* 統一導航欄 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0F0A]/95 backdrop-blur-md border-b border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/huaxia-seal-new.png" alt="华夏宗祠" width={52} height={52} className="rounded" priority />
            <div>
              <div className="text-2xl font-bold tracking-widest text-white">華夏宗祠</div>
              <div className="text-xs text-[#C9A84C]/80 -mt-1">HUAXIA TEMPLE • DIGITAL HERITAGE</div>
            </div>
          </div>

          <div className="flex items-center gap-10 text-sm tracking-widest">
            <Link href="/" className="hover:text-[#C9A84C]">首页</Link>
            <Link href="/trace" className="hover:text-[#C9A84C]">姓氏溯源</Link>
            <Link href="/tradition" className="hover:text-[#C9A84C]">傳統禮俗</Link>
            <Link href="/culture" className="hover:text-[#C9A84C]">家族文化</Link>
            <Link href="/memorial" className="text-[#C9A84C] font-medium">紀念堂</Link>
            <Link href="/huaxiacoin" className="hover:text-[#C9A84C]">HuaxiaCoin</Link>
          </div>

          <div className="flex border border-[#C9A84C]/50 rounded-xl overflow-hidden text-sm">
            <button onClick={() => setLang('zh-TW')} className={`px-5 py-2 ${lang === 'zh-TW' ? 'bg-[#C9A84C] text-black' : 'hover:bg-[#C9A84C]/10'}`}>繁體</button>
            <button onClick={() => setLang('zh-CN')} className={`px-5 py-2 ${lang === 'zh-CN' ? 'bg-[#C9A84C] text-black' : 'hover:bg-[#C9A84C]/10'}`}>简体</button>
            <button onClick={() => setLang('en')} className={`px-5 py-2 ${lang === 'en' ? 'bg-[#C9A84C] text-black' : 'hover:bg-[#C9A84C]/10'}`}>English</button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 text-center">
        <h1 className="text-7xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-12">{current.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 古代先賢堂 */}
          <Link href="/memorial/ancient" className="block">
            <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all h-full group">
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🪔</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{current.ancientTitle}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{current.ancientDesc}</p>
            </div>
          </Link>

          {/* 家族紀念堂（保留原有功能） */}
          <Link href="/memorial/family" className="block">
            <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all h-full group">
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🏠</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{current.familyTitle}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{current.familyDesc}</p>
            </div>
          </Link>

          {/* 近現代名人紀念堂 */}
          <Link href="/memorial/modern" className="block">
            <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all h-full group">
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🏆</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{current.modernTitle}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{current.modernDesc}</p>
            </div>
          </Link>
        </div>
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}