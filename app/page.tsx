// app/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh-TW');

  const t = {
    'zh-TW': {
      title: "華夏宗祠",
      subtitle: "HUAXIA TEMPLE • DIGITAL HERITAGE",
      hero1: "源起華夏",
      hero2: "脈承萬家",
      desc: "全球華人數字宗祠平台\n以區塊鏈技術永久保存家族記憶與文化傳承",
      exploreButton: "立即探索我的姓氏",
      memorialButton: "建立紀念館",
      whyTitle: "為什麼選擇華夏宗祠",
      why1: "區塊鏈永久存證",
      why1Desc: "家族記憶永不丟失，一鍵上鏈，代代相傳",
      why2: "全球宗親連接",
      why2Desc: "連接世界各地同宗同源的華人家族",
      why3: "文化傳承平台",
      why3Desc: "姓氏溯源、傳統禮俗、線上祭祀一站式服務",
      cooperationTitle: "宗親會合作",
      cooperationDesc: "歡迎各地宗親會與我們合作，共同弘揚華夏文化",
      cooperationButton: "申請合作",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "华夏宗祠",
      subtitle: "HUAXIA TEMPLE • DIGITAL HERITAGE",
      hero1: "源起华夏",
      hero2: "脉承万家",
      desc: "全球华人数字宗祠平台\n以区块链技术永久保存家族记忆与文化传承",
      exploreButton: "立即探索我的姓氏",
      memorialButton: "建立纪念馆",
      whyTitle: "为什么选择华夏宗祠",
      why1: "区块链永久存证",
      why1Desc: "家族记忆永不丢失，一键上链，代代相传",
      why2: "全球宗亲连接",
      why2Desc: "连接世界各地同宗同源的华人家族",
      why3: "文化传承平台",
      why3Desc: "姓氏溯源、传统礼俗、线上祭祀一站式服务",
      cooperationTitle: "宗亲会合作",
      cooperationDesc: "欢迎各地宗亲会与我们合作，共同弘扬华夏文化",
      cooperationButton: "申请合作",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Huaxia Temple",
      subtitle: "HUAXIA TEMPLE • DIGITAL HERITAGE",
      hero1: "Originating in China",
      hero2: "Passed Down Through Countless Families",
      desc: "Global Chinese Digital Ancestral Temple Platform\nPermanently preserve family memory and cultural heritage with blockchain",
      exploreButton: "Explore My Surname",
      memorialButton: "Create Memorial Hall",
      whyTitle: "Why Choose Huaxia Temple",
      why1: "Blockchain Permanent Certification",
      why1Desc: "Family memories never lost, one-click on-chain, passed down generations",
      why2: "Global Clan Connection",
      why2Desc: "Connect Chinese families of the same origin worldwide",
      why3: "Cultural Heritage Platform",
      why3Desc: "One-stop service for surname tracing, traditional rituals, online ceremonies",
      cooperationTitle: "Clan Association Cooperation",
      cooperationDesc: "Welcome clan associations from all over the world to cooperate with us to promote Huaxia culture",
      cooperationButton: "Apply for Cooperation",
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
              <div className="text-2xl font-bold tracking-widest text-white">{current.title}</div>
              <div className="text-xs text-[#C9A84C]/80 -mt-1">{current.subtitle}</div>
            </div>
          </div>

          <div className="flex items-center gap-10 text-sm tracking-widest">
            <Link href="/" className="text-[#C9A84C] font-medium">首页</Link>
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

      {/* Hero */}
      <div className="pt-32 pb-28 bg-[#1A0F0A] text-center">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-8 flex justify-center">
            <div className="inline-block p-6 border border-[#C9A84C]/30 rounded-2xl">
              <Image src="/huaxia-seal-new.png" alt="华夏宗祠" width={140} height={140} className="drop-shadow-2xl" priority />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-widest leading-none mb-8 text-white">
            {current.hero1}<br />{current.hero2}
          </h1>

          <p className="text-2xl text-[#EDE0BA]/80 max-w-3xl mx-auto whitespace-pre-line mb-12">
            {current.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/trace">
              <button className="px-14 py-6 bg-[#C42018] hover:bg-[#A31A12] text-xl font-medium rounded-2xl transition-all shadow-lg">
                {current.exploreButton}
              </button>
            </Link>
            <Link href="/memorial">
              <button className="px-14 py-6 border border-[#C9A84C]/70 hover:bg-[#C9A84C]/10 text-xl font-medium rounded-2xl transition-all">
                {current.memorialButton}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 為什麼選擇我們 */}
      <div className="bg-[#2A1A12] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#E8C860]">{current.whyTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A0F0A] p-10 rounded-3xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">🔗</div>
              <h3 className="text-3xl font-bold mb-6">{current.why1}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{current.why1Desc}</p>
            </div>
            <div className="bg-[#1A0F0A] p-10 rounded-3xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">🌏</div>
              <h3 className="text-3xl font-bold mb-6">{current.why2}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{current.why2Desc}</p>
            </div>
            <div className="bg-[#1A0F0A] p-10 rounded-3xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all group">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">📜</div>
              <h3 className="text-3xl font-bold mb-6">{current.why3}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{current.why3Desc}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-20 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        <div className="mb-6">HUAXIA ZONGCI PTE. LTD. • SINGAPORE • EST. 2026</div>
        {current.footer}
      </footer>
    </div>
  );
}