// app/memorial/ancient/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

interface Sage {
  name: string;
  desc: string;
  icon: string;
}

export default function AncientMemorial() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [searchTerm, setSearchTerm] = useState('');

  const t = {
    'zh-TW': {
      title: "古代先賢堂",
      subtitle: "中華文明的根與魂",
      desc: "緬懷人文始祖與歷代聖賢，傳承華夏精神",
      searchPlaceholder: "搜尋先賢姓名（如 神農、女媧、孔子）",
      sages: [
        { name: "神農氏", desc: "炎帝，神農氏，教民耕種、嘗百草、發明農業與醫藥", icon: "🌾" },
        { name: "女媧", desc: "女媧娘娘，補天造人，人類始祖", icon: "🌈" },
        { name: "炎帝", desc: "神農氏，教民耕種、嘗百草", icon: "🔥" },
        { name: "黃帝", desc: "中華人文始祖，發明舟車、醫藥、文字", icon: "👑" },
        { name: "孔子", desc: "儒家創始人，萬世師表", icon: "📖" },
        { name: "老子", desc: "道家創始人，《道德經》作者", icon: "🌀" }
      ],
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "古代先贤堂",
      subtitle: "中华文明的根与魂",
      desc: "缅怀人文始祖与历代圣贤，传承华夏精神",
      searchPlaceholder: "搜索先贤姓名（如 神农、女娲、孔子）",
      sages: [
        { name: "神农氏", desc: "炎帝，神农氏，教民耕种、尝百草、发明农业与医药", icon: "🌾" },
        { name: "女娲", desc: "女娲娘娘，补天造人，人类始祖", icon: "🌈" },
        { name: "炎帝", desc: "神农氏，教民耕种、尝百草", icon: "🔥" },
        { name: "黄帝", desc: "中华人文始祖，发明舟车、医药、文字", icon: "👑" },
        { name: "孔子", desc: "儒家创始人，万世师表", icon: "📖" },
        { name: "老子", desc: "道家创始人，《道德经》作者", icon: "🌀" }
      ],
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Ancient Sages Hall",
      subtitle: "Roots and Soul of Chinese Civilization",
      desc: "Honor the great sages and pass on Huaxia spirit",
      searchPlaceholder: "Search sages (e.g. Shennong, Nuwa, Confucius)",
      sages: [
        { name: "Shennong", desc: "Yan Emperor, taught farming, tasted herbs, invented agriculture and medicine", icon: "🌾" },
        { name: "Nuwa", desc: "Goddess Nuwa, patched the sky and created humans", icon: "🌈" },
        { name: "Yan Emperor", desc: "Shennong, taught farming and tasted herbs", icon: "🔥" },
        { name: "Yellow Emperor", desc: "Human ancestor, inventor of boats, medicine, writing", icon: "👑" },
        { name: "Confucius", desc: "Founder of Confucianism, teacher of ten thousand generations", icon: "📖" },
        { name: "Laozi", desc: "Founder of Taoism, author of Tao Te Ching", icon: "🌀" }
      ],
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  const filteredSages = current.sages.filter(sage =>
    sage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sage.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif">
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
            <Link href="/memorial" className="hover:text-[#C9A84C]">紀念堂</Link>
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
        <h1 className="text-6xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-4">{current.subtitle}</p>
        <p className="text-xl text-[#EDE0BA]/70 max-w-3xl mx-auto">{current.desc}</p>
      </div>

      {/* 搜索框 */}
      <div className="max-w-2xl mx-auto px-8 pb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={current.searchPlaceholder}
          className="w-full px-8 py-5 bg-[#2A1A12] border border-[#C9A84C]/50 rounded-2xl text-lg focus:border-[#C9A84C] outline-none"
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSages.map((sage, index) => (
            <div key={index} className="bg-[#2A1A12] p-10 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all text-center group">
              <div className="text-8xl mb-8 group-hover:scale-110 transition-transform">{sage.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{sage.name}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{sage.desc}</p>
            </div>
          ))}
        </div>

        {filteredSages.length === 0 && searchTerm && (
          <div className="text-center py-20 text-[#EDE0BA]/60 text-xl">
            沒有找到匹配的先賢，請嘗試其他關鍵字
          </div>
        )}
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}