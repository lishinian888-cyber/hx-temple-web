// app/huaxiacoin/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function HuaxiaCoin() {
  const [lang, setLang] = useState<Lang>('zh-TW');

  const t = {
    'zh-TW': {
      title: "HuaxiaCoin (HXC)",
      subtitle: "純工具型文化服務代幣",
      desc: "專為華夏宗祠平台設計，不以投機為目的\n僅用於平台內文化服務與激勵",
      features: [
        { icon: "🔗", title: "區塊鏈家譜存證", desc: "永久保存家族樹譜與重要記錄" },
        { icon: "🏆", title: "姓氏溯源獎勵", desc: "參與溯源、分享可獲得 HXC 獎勵" },
        { icon: "🌏", title: "全球宗親連接", desc: "用於宗親會活動、線上祭祀等服務" },
        { icon: "📜", title: "傳統禮俗服務", desc: "支付線上祭祀、數字家訓等文化服務" }
      ],
      cooperationTitle: "機構合作",
      cooperationDesc: "歡迎地方志、宗親會、大學等機構共同參與 HuaxiaCoin 的文化生態建設",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "HuaxiaCoin (HXC)",
      subtitle: "纯工具型文化服务代币",
      desc: "专为华夏宗祠平台设计，不以投机为目的\n仅用于平台内文化服务与激励",
      features: [
        { icon: "🔗", title: "区块链家谱存证", desc: "永久保存家族树谱与重要记录" },
        { icon: "🏆", title: "姓氏溯源奖励", desc: "参与溯源、分享可获得 HXC 奖励" },
        { icon: "🌏", title: "全球宗亲连接", desc: "用于宗亲会活动、线上祭祀等服务" },
        { icon: "📜", title: "传统礼俗服务", desc: "支付线上祭祀、数字家训等文化服务" }
      ],
      cooperationTitle: "机构合作",
      cooperationDesc: "欢迎地方志、宗亲会、大学等机构共同参与 HuaxiaCoin 的文化生态建设",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "HuaxiaCoin (HXC)",
      subtitle: "Pure Utility Cultural Service Token",
      desc: "Designed exclusively for Huaxia Temple platform\nNot for speculation — only for cultural services and incentives",
      features: [
        { icon: "🔗", title: "Blockchain Genealogy Certification", desc: "Permanently preserve family trees and records" },
        { icon: "🏆", title: "Surname Tracing Rewards", desc: "Earn HXC by participating in tracing and sharing" },
        { icon: "🌏", title: "Global Clan Connection", desc: "Used for clan activities and online ceremonies" },
        { icon: "📜", title: "Traditional Ritual Services", desc: "Pay for online ceremonies and digital family instructions" }
      ],
      cooperationTitle: "Institutional Cooperation",
      cooperationDesc: "Welcome local gazetteers, clan associations, and universities to jointly build the HuaxiaCoin cultural ecosystem",
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif">
      {/* === 統一美化版導航欄（所有頁面共用） === */}
      {/* 統一導航欄 - 語言保持版 */}
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

      <div className="pt-32 pb-20 text-center">
        <div className="mx-auto mb-12 w-32 h-32 bg-gradient-to-br from-[#C9A84C] to-[#E8C860] rounded-2xl flex items-center justify-center shadow-2xl">
          <span className="text-6xl">🪙</span>
        </div>
        <h1 className="text-7xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-8">{current.subtitle}</p>
        <p className="text-xl max-w-3xl mx-auto whitespace-pre-line text-[#EDE0BA]/70">{current.desc}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-20 bg-[#2A1A12]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {current.features.map((feature, index) => (
            <div key={index} className="bg-[#1A0F0A] p-10 rounded-3xl border border-[#C9A84C]/30 hover:border-[#C9A84C] transition-all text-center">
              <div className="text-6xl mb-8">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-[#EDE0BA]/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 text-center bg-[#1A0F0A]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-8 text-[#E8C860]">{current.cooperationTitle}</h2>
          <p className="text-xl text-[#EDE0BA]/80 mb-12">{current.cooperationDesc}</p>
          <button className="px-16 py-6 bg-[#C42018] hover:bg-[#A31A12] text-xl font-medium rounded-2xl transition-all">
            了解合作詳情
          </button>
        </div>
      </div>

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}