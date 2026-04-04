// app/tradition/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Tradition() {
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
      title: "傳統禮俗",
      subtitle: "婚喪嫁娶　祭祖儀式　華夏千年傳承",
      desc: "記錄與傳承中華傳統禮儀，未來將與宗親會、地方志、大學合作，共同整理研究成果。",
      weddingTitle: "婚禮禮俗",
      weddingDesc: "納采、問名、納吉、納徵、請期、親迎（六禮）\n敬茶、拜堂、鬧洞房等傳統儀式",
      funeralTitle: "葬禮禮俗",
      funeralDesc: "買水、沐浴、小殮、大殮、守靈、出殯、安葬\n守孝、祭祖、掃墓等後續儀式",
      ancestorTitle: "祭祖禮俗",
      ancestorDesc: "清明掃墓、中元普渡、冬至、除夕家祭\n慎終追遠，民德歸厚",
      adultTitle: "成年禮與壽誕",
      adultDesc: "冠禮、笄禮、壽宴等人生重要階段儀式",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "传统礼俗",
      subtitle: "婚丧嫁娶　祭祖仪式　华夏千年传承",
      desc: "记录与传承中华传统礼仪，未来将与宗亲会、地方志、大学合作，共同整理研究成果。",
      weddingTitle: "婚礼礼俗",
      weddingDesc: "纳采、问名、纳吉、纳征、请期、亲迎（六礼）\n敬茶、拜堂、闹洞房等传统仪式",
      funeralTitle: "葬礼礼俗",
      funeralDesc: "买水、沐浴、小殓、大殓、守灵、出殡、安葬\n守孝、祭祖、扫墓等后续仪式",
      ancestorTitle: "祭祖礼俗",
      ancestorDesc: "清明扫墓、中元普渡、冬至、除夕家祭\n慎终追远，民德归厚",
      adultTitle: "成年礼与寿诞",
      adultDesc: "冠礼、笄礼、寿宴等人生重要阶段仪式",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Traditional Rituals",
      subtitle: "Weddings, Funerals, Ancestor Worship • Millennia of Huaxia Heritage",
      desc: "Documenting and inheriting Chinese traditional rituals. Future cooperation with clan associations, local gazetteers, and universities.",
      weddingTitle: "Wedding Rituals",
      weddingDesc: "Six Rites: Proposal, Name Inquiry, Auspicious Date, Betrothal Gifts, Setting Date, Welcoming Bride\nTea Ceremony, Bowing, Bridal Chamber",
      funeralTitle: "Funeral Rituals",
      funeralDesc: "Buying Water, Bathing, Encoffining, Vigil, Procession, Burial\nMourning, Ancestor Worship, Tomb Sweeping",
      ancestorTitle: "Ancestor Worship",
      ancestorDesc: "Qingming Tomb Sweeping, Zhongyuan, Winter Solstice, New Year Family Sacrifices",
      adultTitle: "Coming-of-Age & Birthday Ceremonies",
      adultDesc: "Guan Li (male), Ji Li (female), Longevity Banquets",
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
            <Link href={`/tradition?lang=${lang}`} className="text-[#C9A84C] font-medium">傳統禮俗</Link>
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

      <div className="pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-4">{current.subtitle}</p>
        <p className="text-xl text-[#EDE0BA]/70 max-w-3xl mx-auto">{current.desc}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">💒</div>
            <h3 className="text-3xl font-bold mb-6">{current.weddingTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.weddingDesc}</p>
          </div>

          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">⚰️</div>
            <h3 className="text-3xl font-bold mb-6">{current.funeralTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.funeralDesc}</p>
          </div>

          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🪔</div>
            <h3 className="text-3xl font-bold mb-6">{current.ancestorTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.ancestorDesc}</p>
          </div>

          <div className="bg-[#2A1A12] p-12 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all group">
            <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🎉</div>
            <h3 className="text-3xl font-bold mb-6">{current.adultTitle}</h3>
            <p className="text-[#EDE0BA]/80 leading-relaxed whitespace-pre-line">{current.adultDesc}</p>
          </div>
        </div>
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}