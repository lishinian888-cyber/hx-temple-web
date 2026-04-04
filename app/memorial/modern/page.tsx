// app/memorial/modern/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

interface Figure {
  id: number;
  name: string;
  desc: string;
  icon: string;
  offerings: number;
}

export default function ModernMemorial() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOffering, setShowOffering] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState<Figure | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

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
      title: "近現代名人紀念堂",
      subtitle: "緬懷近代傑出人物",
      searchPlaceholder: "搜尋名人（如 孫中山、李小龍）",
      offeringButton: "線上祭祀",
      offeringTitle: "線上祭祀",
      offeringDesc: "焚香獻花　敬告先賢",
      incense: "焚香", flowers: "獻花", wine: "敬酒", prayer: "讀祭文",
      success: "祭祀完成，先賢已感受到您的敬意",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "近现代名人纪念堂",
      subtitle: "缅怀近代杰出人物",
      searchPlaceholder: "搜索名人（如 孙中山、李小龙）",
      offeringButton: "线上祭祀",
      offeringTitle: "线上祭祀",
      offeringDesc: "焚香献花　敬告先贤",
      incense: "焚香", flowers: "献花", wine: "敬酒", prayer: "读祭文",
      success: "祭祀完成，先贤已感受到您的敬意",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Modern Notable Figures Hall",
      subtitle: "Honoring Modern Outstanding Figures",
      searchPlaceholder: "Search figures (e.g. Sun Yat-sen, Bruce Lee)",
      offeringButton: "Online Offering",
      offeringTitle: "Online Ancestor Worship",
      offeringDesc: "Burn incense and offer flowers",
      incense: "Incense", flowers: "Flowers", wine: "Wine", prayer: "Prayer",
      success: "Offering completed. The figure has received your respect.",
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  const [figures, setFigures] = useState<Figure[]>([
    { id: 1, name: "孫中山", desc: "中華民國國父，民主革命先行者", icon: "🌟", offerings: 0 },
    { id: 2, name: "蔣介石", desc: "中華民國總統，領導抗戰", icon: "⚔️", offerings: 0 },
    { id: 3, name: "鄧小平", desc: "改革開放總設計師", icon: "📈", offerings: 0 },
    { id: 4, name: "蔣經國", desc: "臺灣經濟奇蹟推動者", icon: "🏙️", offerings: 0 },
    { id: 5, name: "李小龍", desc: "功夫巨星，武術文化推廣者", icon: "🥋", offerings: 0 },
    { id: 6, name: "張國榮", desc: "一代歌神，華語流行文化 icon", icon: "🎤", offerings: 0 }
  ]);

  const filteredFigures = figures.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOffering = (figure: Figure) => {
    setSelectedFigure(figure);
    setShowOffering(true);
  };

  const completeOffering = () => {
    if (!selectedFigure) return;

    setFigures(prev => prev.map(f =>
      f.id === selectedFigure.id ? { ...f, offerings: f.offerings + 1 } : f
    ));

    setSuccessMessage(current.success);
    setShowOffering(false);
    setSelectedFigure(null);

    setTimeout(() => setSuccessMessage(''), 4000);
  };

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
            <Link href={`/culture?lang=${lang}`} className="hover:text-[#C9A84C]">家族文化</Link>

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

      <div className="pt-32 pb-16 text-center">
        <h1 className="text-6xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-4">{current.subtitle}</p>
      </div>

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
          {filteredFigures.map((figure) => (
            <div key={figure.id} className="bg-[#2A1A12] p-10 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all text-center group">
              <div className="text-8xl mb-8 group-hover:scale-110 transition-transform">{figure.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{figure.name}</h3>
              <p className="text-[#EDE0BA]/80 mb-8 leading-relaxed">{figure.desc}</p>

              <button 
                onClick={() => handleOffering(figure)}
                className="w-full py-4 border border-[#C9A84C]/70 hover:bg-[#C9A84C]/10 rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                🪔 {current.offeringButton} ({figure.offerings})
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 線上祭祀彈窗 */}
      {showOffering && selectedFigure && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="bg-[#2A1A12] p-12 rounded-3xl max-w-md w-full border border-[#C9A84C]/60 text-center">
            <div className="text-8xl mb-6">{selectedFigure.icon}</div>
            <h3 className="text-4xl font-bold mb-3">{current.offeringTitle}</h3>
            <p className="text-xl mb-10 text-[#EDE0BA]/80">{current.offeringDesc}</p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">🌿 {current.incense}</button>
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">🌸 {current.flowers}</button>
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">🍷 {current.wine}</button>
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">📜 {current.prayer}</button>
            </div>

            <button onClick={() => setShowOffering(false)} className="px-12 py-4 border border-[#C9A84C]/50 rounded-2xl hover:bg-[#C9A84C]/10">
              結束祭祀
            </button>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-900/80 border border-green-500/50 px-10 py-4 rounded-2xl text-center z-50">
          {successMessage}
        </div>
      )}

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}