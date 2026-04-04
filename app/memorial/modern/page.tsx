// app/memorial/modern/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function ModernMemorial() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [searchTerm, setSearchTerm] = useState('');

  const t = {
    'zh-TW': {
      title: "近現代名人紀念堂",
      subtitle: "緬懷近代以來影響深遠的傑出人物",
      desc: "孫中山、蔣介石、鄧小平、蔣經國、李小龍、張國榮等近現代傑出人物",
      searchPlaceholder: "搜尋名人姓名（如 孫中山、李小龍）",
      figures: [
        { name: "孫中山", desc: "中華民國國父，民主革命先行者", icon: "🌟" },
        { name: "蔣介石", desc: "中華民國總統，領導抗日戰爭", icon: "⚔️" },
        { name: "鄧小平", desc: "改革開放總設計師，中國現代化奠基人", icon: "📈" },
        { name: "蔣經國", desc: "台灣經濟奇蹟推動者，解除戒嚴", icon: "🏛️" },
        { name: "李小龍", desc: "武術家、功夫電影開創者", icon: "🥋" },
        { name: "張國榮", desc: "一代巨星，華語樂壇傳奇", icon: "🎤" }
      ],
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "近现代名人纪念堂",
      subtitle: "缅怀近代以来影响深远的杰出人物",
      desc: "孙中山、蒋介石、邓小平、蒋经国、李小龙、张国荣等近现代杰出人物",
      searchPlaceholder: "搜索名人姓名（如 孙中山、李小龙）",
      figures: [
        { name: "孙中山", desc: "中华民国国父，民主革命先行者", icon: "🌟" },
        { name: "蒋介石", desc: "中华民国总统，领导抗日战争", icon: "⚔️" },
        { name: "邓小平", desc: "改革开放总设计师，中国现代化奠基人", icon: "📈" },
        { name: "蒋经国", desc: "台湾经济奇迹推动者，解除戒严", icon: "🏛️" },
        { name: "李小龙", desc: "武术家、功夫电影开创者", icon: "🥋" },
        { name: "张国荣", desc: "一代巨星，华语乐坛传奇", icon: "🎤" }
      ],
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Modern Notable Figures Hall",
      subtitle: "Honoring influential modern figures",
      desc: "Sun Yat-sen, Chiang Kai-shek, Deng Xiaoping, Chiang Ching-kuo, Bruce Lee, Leslie Cheung",
      searchPlaceholder: "Search names (e.g. Sun Yat-sen, Bruce Lee)",
      figures: [
        { name: "Sun Yat-sen", desc: "Father of the Republic of China, pioneer of democratic revolution", icon: "🌟" },
        { name: "Chiang Kai-shek", desc: "President of the Republic of China, led the War of Resistance", icon: "⚔️" },
        { name: "Deng Xiaoping", desc: "Chief architect of reform and opening-up", icon: "📈" },
        { name: "Chiang Ching-kuo", desc: "Promoter of Taiwan's economic miracle", icon: "🏛️" },
        { name: "Bruce Lee", desc: "Martial artist, pioneer of kung fu films", icon: "🥋" },
        { name: "Leslie Cheung", desc: "Legendary superstar of Chinese music and film", icon: "🎤" }
      ],
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  const filteredFigures = current.figures.filter(figure =>
    figure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    figure.desc.toLowerCase().includes(searchTerm.toLowerCase())
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
          {filteredFigures.map((figure, index) => (
            <div key={index} className="bg-[#2A1A12] p-10 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all text-center group">
              <div className="text-8xl mb-8 group-hover:scale-110 transition-transform">{figure.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{figure.name}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{figure.desc}</p>
            </div>
          ))}
        </div>

        {filteredFigures.length === 0 && searchTerm && (
          <div className="text-center py-20 text-[#EDE0BA]/60 text-xl">
            沒有找到匹配的名人，請嘗試其他關鍵字
          </div>
        )}
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}