// app/tradition/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Tradition() {
  const [lang, setLang] = useState<Lang>('zh-TW');

  const t = {
    'zh-TW': {
      title: "傳統禮俗",
      subtitle: "華夏千年傳承的生命儀式與家族規範",
      desc: "婚喪嫁娶、祭祖、成年禮、壽誕等傳統禮儀\n與地方志、宗親會、大學合作整理的研究成果",
      intro: "我們正與各地宗親會及高校合作，系統整理並數字化傳統禮俗。以下為部分已整理內容，更多將陸續上線。",
      categories: [
        { icon: "💒", title: "婚禮禮俗", desc: "納采、問名、納吉、納徵、請期、親迎等六禮，以及各地特色婚俗" },
        { icon: "⚰️", title: "葬禮禮俗", desc: "入殮、守靈、吊唁、出殯、安葬等傳統喪葬儀式" },
        { icon: "🕯️", title: "祭祖禮俗", desc: "清明、冬至、忌日、祖先誕辰的祭祀方式與祭文" },
        { icon: "🎉", title: "成年禮與壽誕", desc: "冠禮、笄禮、及各年齡壽誕的傳統慶賀儀式" }
      ],
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "传统礼俗",
      subtitle: "华夏千年传承的生命仪式与家族规范",
      desc: "婚丧嫁娶、祭祖、成年礼、寿诞等传统礼仪\n与地方志、宗亲会、大学合作整理的研究成果",
      intro: "我们正与各地宗亲会及高校合作，系统整理并数字化传统礼俗。以下为部分已整理内容，更多将陆续上线。",
      categories: [
        { icon: "💒", title: "婚礼礼俗", desc: "纳采、问名、纳吉、纳征、请期、亲迎等六礼，以及各地特色婚俗" },
        { icon: "⚰️", title: "葬礼礼俗", desc: "入殓、守灵、吊唁、出殡、安葬等传统丧葬仪式" },
        { icon: "🕯️", title: "祭祖礼俗", desc: "清明、冬至、忌日、祖先诞辰的祭祀方式与祭文" },
        { icon: "🎉", title: "成年礼与寿诞", desc: "冠礼、笄礼、及各年龄寿诞的传统庆贺仪式" }
      ],
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Traditional Rituals",
      subtitle: "Millennia-old Life Ceremonies and Family Norms",
      desc: "Wedding, Funeral, Ancestor Worship, Coming-of-age and Birthday rituals\nCooperation achievements with local gazetteers, clan associations and universities",
      intro: "We are cooperating with clan associations and universities to systematically organize and digitize traditional rituals. Some contents are shown below, more will be launched soon.",
      categories: [
        { icon: "💒", title: "Wedding Rituals", desc: "Six traditional rites and regional customs" },
        { icon: "⚰️", title: "Funeral Rituals", desc: "Encoffining, vigil, mourning, burial ceremonies" },
        { icon: "🕯️", title: "Ancestor Worship", desc: "Qingming, Winter Solstice, memorial services" },
        { icon: "🎉", title: "Coming-of-age & Birthday", desc: "Guan Li, Ji Li and longevity celebrations" }
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
            <Link href="/tradition" className="text-[#C9A84C] font-medium">傳統禮俗</Link>
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
        <h1 className="text-7xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-8">{current.subtitle}</p>
        <p className="text-xl max-w-3xl mx-auto whitespace-pre-line text-[#EDE0BA]/70">{current.desc}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="bg-[#2A1A12] p-12 rounded-3xl mb-16 text-center">
          <p className="text-2xl leading-relaxed text-[#EDE0BA]/90">{current.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {current.categories.map((cat, index) => (
            <div key={index} className="bg-[#1A0F0A] p-10 rounded-3xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all">
              <div className="text-7xl mb-8">{cat.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{cat.title}</h3>
              <p className="text-[#EDE0BA]/80 leading-relaxed">{cat.desc}</p>
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