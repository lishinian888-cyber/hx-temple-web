// app/trace/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

interface SurnameData {
  name: string;
  pinyin: string;
  origin: string;
  ancestor: string;
  junwang: string;
  tanghao: string;
  population: string;
  story: string;
  famousPeople: Array<{ name: string; desc: string; icon: string }>;
  migration: string;
}

export default function Trace() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSurname, setSelectedSurname] = useState<SurnameData | null>(null);
  const [surnames, setSurnames] = useState<SurnameData[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const t = {
    'zh-TW': {
      title: "姓氏溯源",
      subtitle: "探尋華夏血脈・傳承千年根源",
      placeholder: "輸入姓氏（如 李、王、張）",
      button: "立即溯源",
      commonSurnames: "常用姓氏",
      noResult: "目前僅支持李、王、張三個姓氏，更多姓氏正在整理中...",
      origin: "起源",
      ancestor: "始祖",
      junwang: "郡望",
      tanghao: "堂號",
      population: "人口",
      story: "歷史故事",
      famousPeople: "著名人物",
      migration: "遷徙分布"
    },
    'zh-CN': {
      title: "姓氏溯源",
      subtitle: "探寻华夏血脉・传承千年根源",
      placeholder: "输入姓氏（如 李、王、张）",
      button: "立即溯源",
      commonSurnames: "常用姓氏",
      noResult: "目前仅支持李、王、张三个姓氏，更多姓氏正在整理中...",
      origin: "起源",
      ancestor: "始祖",
      junwang: "郡望",
      tanghao: "堂号",
      population: "人口",
      story: "历史故事",
      famousPeople: "著名人物",
      migration: "迁徙分布"
    },
    en: {
      title: "Surname Tracing",
      subtitle: "Explore Huaxia Bloodline • Inherit Millennia Roots",
      placeholder: "Enter surname (e.g. Li, Wang, Zhang)",
      button: "Trace Now",
      commonSurnames: "Common Surnames",
      noResult: "Currently only supports Li, Wang, Zhang. More surnames are being prepared...",
      origin: "Origin",
      ancestor: "Ancestor",
      junwang: "Junwang",
      tanghao: "Tanghao",
      population: "Population",
      story: "Historical Story",
      famousPeople: "Famous People",
      migration: "Migration"
    }
  } as const;

  const current = t[lang];

  useEffect(() => {
    fetch('/data/surnames.json')
      .then(res => res.json())
      .then(data => setSurnames(data.surnames || []))
      .catch(err => console.error('加載姓氏數據失敗:', err));
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      const result = surnames.find(s => s.name === searchTerm.trim());
      if (result) {
        setSelectedSurname(result);
      } else {
        alert(current.noResult);
      }
      setIsSearching(false);
    }, 600);
  };

  const quickSearch = (surname: string) => {
    const result = surnames.find(s => s.name === surname);
    if (result) setSelectedSurname(result);
    else alert(current.noResult);
  };

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
            <Link href="/trace" className="text-[#C9A84C] font-medium">姓氏溯源</Link>
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
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-7xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-2xl text-[#EDE0BA]/80 mb-12">{current.subtitle}</p>

        <div className="max-w-2xl mx-auto px-8 flex gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder={current.placeholder}
            className="flex-1 px-8 py-5 bg-[#2A1A12] border border-[#C9A84C]/50 rounded-2xl text-lg focus:border-[#C9A84C] outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="px-12 py-5 bg-[#C42018] hover:bg-[#A31A12] rounded-2xl text-lg font-medium transition-all disabled:opacity-70"
          >
            {isSearching ? "溯源中..." : current.button}
          </button>
        </div>

        <div className="mt-12">
          <p className="text-[#C9A84C]/70 mb-4">{current.commonSurnames}</p>
          <div className="flex justify-center gap-4">
            {['李', '王', '張'].map(s => (
              <button
                key={s}
                onClick={() => quickSearch(s)}
                className="px-10 py-3 border border-[#C9A84C]/50 hover:bg-[#C9A84C]/10 rounded-2xl transition-all"
              >
                {s}氏
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 結果區域 */}
      {selectedSurname && (
        <div className="max-w-5xl mx-auto px-8 pb-20">
          <div className="bg-[#2A1A12] rounded-3xl p-12">
            <div className="flex justify-center mb-12">
              <div className="w-64 h-64 bg-[#1A0F0A] rounded-full border-8 border-[#E8C860] flex items-center justify-center shadow-2xl">
                <span className="text-9xl">🏛️</span>
              </div>
            </div>

            <h2 className="text-6xl font-bold text-center mb-8 text-white">{selectedSurname.name}氏</h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg">
              <div>
                <p><strong>{current.origin}：</strong>{selectedSurname.origin}</p>
                <p className="mt-6"><strong>{current.ancestor}：</strong>{selectedSurname.ancestor}</p>
                <p className="mt-6"><strong>{current.junwang}：</strong>{selectedSurname.junwang}</p>
                <p className="mt-6"><strong>{current.tanghao}：</strong>{selectedSurname.tanghao}</p>
              </div>
              <div>
                <p><strong>{current.population}：</strong>{selectedSurname.population}</p>
                <p className="mt-6"><strong>{current.migration}：</strong>{selectedSurname.migration}</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">{current.story}</h3>
              <p className="text-[#EDE0BA]/90 leading-relaxed">{selectedSurname.story}</p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">{current.famousPeople}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {selectedSurname.famousPeople.map((person, i) => (
                  <div key={i} className="bg-[#1A0F0A] p-8 rounded-2xl border border-[#C9A84C]/30">
                    <div className="text-5xl mb-4">{person.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{person.name}</h4>
                    <p className="text-[#EDE0BA]/80">{person.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        慎終追遠　民德歸厚
      </footer>
    </div>
  );
}