// app/culture/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Culture() {
  const [lang, setLang] = useState<Lang>('zh-TW');

  // 從 URL 讀取語言
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Lang;
    if (urlLang && ['zh-TW', 'zh-CN', 'en'].includes(urlLang)) {
      setLang(urlLang);
    }
  }, []);

  const t = {
    'zh-TW': {
      title: "家族文化",
      subtitle: "家訓家風　族譜故事　世代傳承",
      desc: "記錄每個家族獨特的文化基因，未來將與宗親會、大學、地方志合作，整理並展示研究成果。",
      mottoTitle: "家訓家風",
      mottoDesc: "「耕讀傳家」「忠孝傳家」「詩書繼世」等經典家訓\n以及各家族獨有的家風故事",
      genealogyTitle: "族譜與故事",
      genealogyDesc: "數字族譜上鏈存證\n家族名人、遷徙故事、重要事件永久保存",
      valuesTitle: "家族價值觀",
      valuesDesc: "孝悌忠信、仁義禮智信\n以及現代家族核心價值",
      heritageTitle: "非遺與技藝",
      heritageDesc: "家族傳統手藝、祭祀器物、地方美食文化等",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "家族文化",
      subtitle: "家训家风　族谱故事　世代传承",
      desc: "记录每个家族独特的文化基因，未来将与宗亲会、大学、地方志合作，整理并展示研究成果。",
      mottoTitle: "家训家风",
      mottoDesc: "「耕读传家」「忠孝传家」「诗书继世」等经典家训\n以及各家族独有的家风故事",
      genealogyTitle: "族谱与故事",
      genealogyDesc: "数字族谱上链存证\n家族名人、迁徙故事、重要事件永久保存",
      valuesTitle: "家族价值观",
      valuesDesc: "孝悌忠信、仁义礼智信\n以及现代家族核心价值",
      heritageTitle: "非遗与技艺",
      heritageDesc: "家族传统手艺、祭祀器物、地方美食文化等",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Family Culture",
      subtitle: "Family Mottos • Genealogy • Generational Heritage",
      desc: "Recording each family's unique cultural DNA. Future collaboration with clan associations, universities, and local gazetteers.",
      mottoTitle: "Family Mottos & Traditions",
      mottoDesc: "“Farming and Reading for Generations”, “Loyalty and Filial Piety”, “Poetry and Books Continue the Legacy”",
      genealogyTitle: "Genealogy & Stories",
      genealogyDesc: "Digital genealogy on-chain certification\nFamily heroes, migration stories, important events",
      valuesTitle: "Family Values",
      valuesDesc: "Filial piety, loyalty, benevolence, righteousness, propriety, wisdom, trust",
      heritageTitle: "Intangible Heritage & Crafts",
      heritageDesc: "Traditional family crafts, ritual artifacts, local cuisine culture",
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif">
      {/* 統一導航欄 - 語言保持 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0F0A]/95 backdrop-blur-md border-b border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/huaxia-seal-new.png" alt="华夏宗祠" width={52} height={52} className="rounded" priority />
            <div>
              <div className="text-2xl font-bold tracking-widest text-white">
                {lang === 'en' ? "Huaxia Temple" : "華夏宗祠"}
              </div>
              <div className="text-xs text-[#C9A84C]/80 -mt-1">HUAXIA TEMPLE • DIGITAL HERITAGE</div>
            </div>
          </div>

          <div className="flex items-center gap-10 text-sm tracking-widest">
            <Link href={`/?lang=${lang}`} className="hover:text-[#C9A84C]">首页</Link>
            <Link href={`/trace?lang=${lang}`} className="hover:text-[#C9A84C]">姓氏溯源</Link>
            <Link href={`/tradition?lang=${lang}`} className="hover:text-[#C9A84C]">傳統禮俗</Link>
            <Link href={`/culture?lang=${lang}`} className="text-[#C9A84C] font-medium">家族文化</Link>

            <div className="group relative">
              <Link href={`/memorial?lang=${lang}`} className="hover:text-[#C9A84C] flex items-center gap-1">
                紀念堂 <span className="text-xs">▼</span>
              </Link>
              <div className="absolute hidden group-hover:block pt-4 left-0">
                <div className="bg-[#2A1A12] border border-[#C9A84C]/50 rounded-2xl py-4 px-6 w-64 shadow-2xl">
                  <Link href={`/memorial/ancient?lang=${lang}`} className="block py-3 px-4 hover:bg-[#C9A84C]/10 rounded-xl transition-all">古代先賢堂</Link>
                  <Link href={`/memorial/family?lang=${lang}`} className="block py-3 px-4 hover:bg-[#C9A84C]/10 rounded-xl transition-all">家族紀念堂</Link>
                  <Link href={`/memorial/modern?lang=${lang}`} className="block py-3 px-4 hover:bg-[#C9A84C]/10 rounded-xl transition-all">近現代名人紀念堂</Link>
                </div>
              </div>
            </div>

            <Link href={`/huaxiacoin?lang=${lang}`} className="hover:text-[#C9A84C]">HuaxiaCoin</Link>
          </div>

          <div className="flex border border-[#C9A84C]/50 rounded-xl overflow-hidden text-sm">
            <button onClick={() => setLang('zh-TW')} className={`px-5 py-2 ${lang === 'zh-TW' ? 'bg-[#C9A84C] text-black font-medium' : 'hover:bg-[#C9A84C]/10'}`}>繁體</button>
            <button onClick={() => setLang('zh-CN')} className={`px-5 py-2 ${lang === 'zh-CN' ? 'bg-[#C9A84C] text-black font-medium' : 'hover:bg-[#C9A84C]/10'}`}>简体</button>
            <button onClick={() => setLang('en')} className={`px-5 py-2 ${lang === 'en' ? 'bg-[#C9A84C] text-black font-medium' : 'hover:bg-[#C9A84C]/10'}`}>English</button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-4">{current.subtitle}</p>
        <p className="text-xl text-[#EDE0BA]/70 max-w-3xl mx-auto">{current.desc}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">📜</div>
            <h3 className="text-3xl font-bold mb-6">{current.mottoTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.mottoDesc}</p>
          </div>

          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">📖</div>
            <h3 className="text-3xl font-bold mb-6">{current.genealogyTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.genealogyDesc}</p>
          </div>

          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🧭</div>
            <h3 className="text-3xl font-bold mb-6">{current.valuesTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.valuesDesc}</p>
          </div>

          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🏺</div>
            <h3 className="text-3xl font-bold mb-6">{current.heritageTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.heritageDesc}</p>
          </div>
        </div>
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}