// app/culture/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Culture() {
  const [lang, setLang] = useState<Lang>('zh-TW');

  const t = {
    'zh-TW': {
      title: "家族文化",
      subtitle: "家風、家訓、家族精神與文化傳承",
      desc: "記錄與傳承各家族獨特的文化基因\n與地方志、宗親會、大學合作整理的家族文化成果",
      intro: "家族文化是華夏文明的重要組成部分。我們正收集整理各地家訓、家風故事，並與機構合作進行數字化保存。",
      sections: [
        { icon: "📜", title: "著名家訓", desc: "顏氏家訓、朱子家訓、曾國藩家書等經典家訓選段" },
        { icon: "🏠", title: "家風故事", desc: "各地家族流傳的忠孝仁義、耕讀傳家等家風故事" },
        { icon: "🧬", title: "家族精神", desc: "不同姓氏與地域的獨特家族精神與核心價值" }
      ],
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "家族文化",
      subtitle: "家风、家训、家族精神与文化传承",
      desc: "记录与传承各家族独特的文化基因\n与地方志、宗亲会、大学合作整理的家族文化成果",
      intro: "家族文化是华夏文明的重要组成部分。我们正收集整理各地家训、家风故事，并与机构合作进行数字化保存。",
      sections: [
        { icon: "📜", title: "著名家训", desc: "颜氏家训、朱子家训、曾国藩家书等经典家训选段" },
        { icon: "🏠", title: "家风故事", desc: "各地家族流传的忠孝仁义、耕读传家等家风故事" },
        { icon: "🧬", title: "家族精神", desc: "不同姓氏与地域的独特家族精神与核心价值" }
      ],
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Family Culture",
      subtitle: "Family Tradition, Family Instructions and Cultural Inheritance",
      desc: "Record and pass on the unique cultural genes of each family\nCooperation achievements in family culture with local gazetteers, clan associations and universities",
      intro: "Family culture is an important part of Huaxia civilization. We are collecting and organizing family instructions and stories from various regions.",
      sections: [
        { icon: "📜", title: "Famous Family Instructions", desc: "Yan Family Instructions, Zhu Xi Family Instructions, Zeng Guofan letters, etc." },
        { icon: "🏠", title: "Family Tradition Stories", desc: "Stories of loyalty, filial piety, and farming-reading traditions" },
        { icon: "🧬", title: "Family Spirit", desc: "Unique family values from different surnames and regions" }
      ],
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif">
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
            <Link href="/culture" className="text-[#C9A84C] font-medium">家族文化</Link>
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
        <h1 className="text-7xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-8">{current.subtitle}</p>
        <p className="text-xl max-w-3xl mx-auto whitespace-pre-line text-[#EDE0BA]/70">{current.desc}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="bg-[#2A1A12] p-12 rounded-3xl mb-16 text-center">
          <p className="text-2xl leading-relaxed text-[#EDE0BA]/90">{current.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {current.sections.map((section, index) => (
            <div key={index} className="bg-[#1A0F0A] p-10 rounded-3xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all text-center">
              <div className="text-7xl mb-8">{section.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{section.title}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}