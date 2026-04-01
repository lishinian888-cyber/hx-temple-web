// app/page.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

export default function Home() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [surname, setSurname] = useState('');
  const [traceResult, setTraceResult] = useState<any>(null);
  const [isTracing, setIsTracing] = useState(false);

  const t = {
    'zh-TW': {
      title: "華夏宗祠",
      subtitle: "HUAXIA TEMPLE • DIGITAL HERITAGE",
      hero1: "源起華夏",
      hero2: "脈承萬家",
      desc: "全球华人数字宗祠平台\n以区块链技术永久保存家族记忆与文化传承",
      btn1: "探寻姓氏起源",
      btn2: "建立家族纪念堂",
      btn3: "獲得 HuaxiaCoin",
      nav1: "姓氏溯源",
      nav2: "家族纪念堂",
      nav3: "HuaxiaCoin",
      nav4: "宗亲会合作",
      footer: "慎終追遠　民德歸厚",
      inputPlaceholder: "輸入您的姓氏",
      inputButton: "立即溯源",
      tracing: "正在溯源...",
      memorialTitle: "建立您的家族纪念堂",
      memorialDesc: "为您的家族创建一个永久的数字纪念空间\n上传照片、记录族谱、举办线上祭祀",
      memorialButton: "立即创建纪念堂",
      aboutTitle: "關於華夏宗祠",
      aboutDesc: "華夏宗祠是全球華人數字文化傳承平台，致力於以區塊鏈技術永久保存家族記憶、姓氏起源與宗親文化。\n新加坡註冊公司 · BVI 基金會發行 HuaxiaCoin",
      coinTitle: "HuaxiaCoin (HXC)",
      coinDesc: "纯工具型代币 · 只用于平台文化服务",
      coin1: "区块链家谱存证",
      coin2: "姓氏溯源奖励",
      coin3: "全球宗亲连接",
      copyright: "© 2026 HUAXIA ZONGCI PTE. LTD. 新加坡公司 版權所有",
      contact: "聯繫我們",
      privacy: "隱私政策"
    },
    'zh-CN': {
      title: "华夏宗祠",
      subtitle: "HUAXIA TEMPLE • DIGITAL HERITAGE",
      hero1: "源起华夏",
      hero2: "脉承万家",
      desc: "全球华人数字宗祠平台\n以区块链技术永久保存家族记忆与文化传承",
      btn1: "探寻姓氏起源",
      btn2: "建立家族纪念堂",
      btn3: "获得 HuaxiaCoin",
      nav1: "姓氏溯源",
      nav2: "家族纪念堂",
      nav3: "HuaxiaCoin",
      nav4: "宗亲会合作",
      footer: "慎终追远　民德归厚",
      inputPlaceholder: "输入您的姓氏",
      inputButton: "立即溯源",
      tracing: "正在溯源...",
      memorialTitle: "建立您的家族纪念堂",
      memorialDesc: "为您的家族创建一个永久的数字纪念空间\n上传照片、记录族谱、举办线上祭祀",
      memorialButton: "立即创建纪念堂",
      aboutTitle: "关于华夏宗祠",
      aboutDesc: "华夏宗祠是全球华人数字文化传承平台，致力于以区块链技术永久保存家族记忆、姓氏起源与宗亲文化。\n新加坡注册公司 · BVI 基金会发行 HuaxiaCoin",
      coinTitle: "HuaxiaCoin (HXC)",
      coinDesc: "纯工具型代币 · 只用于平台文化服务",
      coin1: "区块链家谱存证",
      coin2: "姓氏溯源奖励",
      coin3: "全球宗亲连接",
      copyright: "© 2026 HUAXIA ZONGCI PTE. LTD. 新加坡公司 版权所有",
      contact: "联系我们",
      privacy: "隐私政策"
    },
    en: {
      title: "HUAXIA TEMPLE",
      subtitle: "DIGITAL HERITAGE",
      hero1: "Origin of Huaxia",
      hero2: "Inheritance of Ten Thousand Families",
      desc: "Global Chinese Digital Ancestral Temple Platform\nPermanently preserve family memories and cultural heritage with blockchain",
      btn1: "Explore My Surname",
      btn2: "Create Family Memorial",
      btn3: "Get HuaxiaCoin",
      nav1: "Surname Origin",
      nav2: "Family Memorial",
      nav3: "HuaxiaCoin",
      nav4: "Clan Cooperation",
      footer: "Revere the Ancestors • Cultivate Virtuous Conduct",
      inputPlaceholder: "Enter your surname",
      inputButton: "Trace Now",
      tracing: "Tracing...",
      memorialTitle: "Create Your Family Memorial",
      memorialDesc: "Build a permanent digital memorial space for your family\nUpload photos, record genealogy, hold online ceremonies",
      memorialButton: "Create Memorial Now",
      aboutTitle: "About Huaxia Temple",
      aboutDesc: "Huaxia Temple is a global digital cultural heritage platform for Chinese descendants, dedicated to permanently preserving family memories, surname origins and clan culture using blockchain technology.\nSingapore Registered Company · BVI Foundation issues HuaxiaCoin",
      coinTitle: "HuaxiaCoin (HXC)",
      coinDesc: "Utility Token for Cultural Services",
      coin1: "Blockchain Family Record",
      coin2: "Surname Trace Rewards",
      coin3: "Global Clan Connection",
      copyright: "© 2026 HUAXIA ZONGCI PTE. LTD. All Rights Reserved",
      contact: "Contact Us",
      privacy: "Privacy Policy"
    }
  } as const;

  const current = t[lang];

  const handleTrace = async () => {
    if (!surname.trim()) {
      alert('请输入姓氏');
      return;
    }

    setIsTracing(true);
    setTraceResult(null);

    setTimeout(() => {
      const results: any = {
        '李': { origin: '陇西郡', migration: '唐代大量迁往江南及海外', famous: '李白、李世民、李小龙' },
        '王': { origin: '太原郡', migration: '主要分布于华北、华东', famous: '王羲之、王阳明、王健林' },
        '张': { origin: '清河郡', migration: '遍布全国', famous: '张仲景、张衡、张艺谋' },
        '刘': { origin: '彭城郡', migration: '汉朝皇室后裔', famous: '刘邦、刘备、刘德华' },
        '陈': { origin: '颍川郡', migration: '闽粤地区为主', famous: '陈独秀、陈景润' },
        '林': { origin: '西河郡', migration: '福建、台湾、东南亚', famous: '林则徐、林徽因' },
      };

      const defaultResult = { 
        origin: '华夏大地', 
        migration: '历史悠久，分布广泛', 
        famous: '众多历史文化名人' 
      };

      setTraceResult(results[surname as keyof typeof results] || defaultResult);
      setIsTracing(false);
    }, 1400);
  };

  const handleCreateMemorial = () => {
    alert('正在打开家族纪念堂创建页面...\n（后续将支持上传照片、填写族谱、线上祭祀等功能）');
  };

  const handleConnectWallet = () => {
    alert('钱包连接成功！\n（实际项目中会调用 MetaMask / WalletConnect）');
  };

  return (
    <div className="min-h-screen bg-[#2A1A12] text-[#F0E6D0] font-serif overflow-hidden">
      {/* 顶部导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2A1A12]/95 backdrop-blur-md border-b border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/huaxia-seal.png" 
              alt="华夏宗祠主标识" 
              width={58} 
              height={58}
              className="drop-shadow-lg"
              priority
            />
            <div>
              <div className="text-2xl font-bold tracking-widest text-white">華夏宗祠</div>
              <div className="text-xs text-[#E8C860]/80 -mt-1">HUAXIA TEMPLE • DIGITAL HERITAGE</div>
            </div>
          </div>

          <div className="flex items-center gap-10 text-sm">
            <a href="#" className="hover:text-[#E8C860] transition-colors">{current.nav1}</a>
            <a href="#" className="hover:text-[#E8C860] transition-colors">{current.nav2}</a>
            <a href="#" className="hover:text-[#E8C860] transition-colors">{current.nav3}</a>
            <a href="#" className="hover:text-[#E8C860] transition-colors">{current.nav4}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex border border-[#E8C860]/50 rounded-md overflow-hidden text-xs">
              <button onClick={() => setLang('zh-TW')} className={`px-4 py-2 transition-colors ${lang === 'zh-TW' ? 'bg-[#E8C860] text-black font-medium' : 'hover:bg-[#E8C860]/10'}`}>繁體</button>
              <button onClick={() => setLang('zh-CN')} className={`px-4 py-2 transition-colors ${lang === 'zh-CN' ? 'bg-[#E8C860] text-black font-medium' : 'hover:bg-[#E8C860]/10'}`}>简体</button>
              <button onClick={() => setLang('en')} className={`px-4 py-2 transition-colors ${lang === 'en' ? 'bg-[#E8C860] text-black font-medium' : 'hover:bg-[#E8C860]/10'}`}>English</button>
            </div>

            <button 
              onClick={handleConnectWallet}
              className="px-6 py-2.5 text-sm border border-[#E8C860]/50 hover:border-[#E8C860] rounded transition-colors"
            >
              连接钱包
            </button>
            <button className="px-8 py-2.5 bg-[#C42018] hover:bg-[#A31A12] text-white text-sm font-medium rounded transition-colors">
              開始探索
            </button>
          </div>
        </div>
      </nav>

      {/* Hero 主视觉区 */}
      <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#3A2418] via-[#2A1A12] to-[#1F130B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5C2F1F_0%,transparent_75%)] opacity-60"></div>

        <div className="text-center z-10 px-6 max-w-4xl">
          <div className="mb-14 flex justify-center">
            <div className="relative p-10 border-[6px] border-[#E8C860] bg-[#9C2A1F] rounded-[28px] shadow-2xl">
              <Image 
                src="/huaxia-seal.png" 
                alt="华夏宗祠主标识" 
                width={380} 
                height={380}
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-wider leading-none mb-6 text-white">
            {current.hero1}<br />{current.hero2}
          </h1>

          <p className="text-2xl text-[#F0E6D0]/85 mb-14 max-w-2xl mx-auto whitespace-pre-line">
            {current.desc}
          </p>
        </div>
      </div>

      {/* 姓氏溯源区 */}
      <div className="py-20 bg-[#1F130B] border-t border-[#C9A84C]/30">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-widest">立即探索您的姓氏</h2>
          <p className="text-[#F0E6D0]/75 mb-10 text-lg">输入姓氏，了解起源、迁徙与历史名人</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12">
            <input 
              type="text" 
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder={current.inputPlaceholder}
              className="flex-1 px-8 py-5 bg-[#3A2418] border border-[#E8C860]/60 rounded-2xl text-lg focus:outline-none focus:border-[#E8C860] placeholder:text-[#F0E6D0]/50"
            />
            <button 
              onClick={handleTrace}
              disabled={isTracing}
              className="px-12 py-5 bg-[#C42018] hover:bg-[#A31A12] disabled:bg-gray-600 font-medium text-lg rounded-2xl transition-all whitespace-nowrap"
            >
              {isTracing ? current.tracing : current.inputButton}
            </button>
          </div>

          {traceResult && (
            <div className="bg-[#3A2418] p-10 rounded-3xl border border-[#E8C860]/40 text-left max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-[#E8C860]">「{surname}」姓溯源结果</h3>
              <div className="space-y-6 text-[#F0E6D0]/90">
                <div>
                  <div className="text-[#E8C860] text-sm mb-1">起源地</div>
                  <div className="text-xl">{traceResult.origin}</div>
                </div>
                <div>
                  <div className="text-[#E8C860] text-sm mb-1">主要迁徙</div>
                  <div className="text-xl">{traceResult.migration}</div>
                </div>
                <div>
                  <div className="text-[#E8C860] text-sm mb-1">历史名人</div>
                  <div className="text-xl">{traceResult.famous}</div>
                </div>
              </div>
              <div className="mt-8 text-xs text-[#E8C860]/70 border-t border-[#E8C860]/20 pt-6">
                ※ 此结果为演示版本，正式版将接入 DeepSeek AI 提供更详细的族谱分析与区块链存证
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 建立家族纪念堂入口 */}
      <div className="py-20 bg-[#1F130B] border-t border-[#C9A84C]/30">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-block mb-8 p-6 border border-[#E8C860]/40 rounded-full">
            <span className="text-6xl">🏛️</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-widest">{current.memorialTitle}</h2>
          <p className="text-[#F0E6D0]/75 mb-10 text-lg whitespace-pre-line max-w-2xl mx-auto">
            {current.memorialDesc}
          </p>
          
          <button 
            onClick={handleCreateMemorial}
            className="px-16 py-6 bg-gradient-to-r from-[#C42018] to-[#A31A12] hover:from-[#A31A12] hover:to-[#C42018] text-white text-xl font-medium rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto"
          >
            🏛️ {current.memorialButton}
          </button>
        </div>
      </div>

      {/* 平台介绍区块 */}
      <div className="py-24 bg-[#2A1A12]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-widest">{current.aboutTitle}</h2>
          <p className="text-[#F0E6D0]/80 text-lg leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {current.aboutDesc}
          </p>
        </div>
      </div>

      {/* HuaxiaCoin 专区 */}
      <div className="py-24 bg-[#1F130B]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-4 tracking-widest">{current.coinTitle}</h2>
          <p className="text-[#E8C860] text-xl mb-16">{current.coinDesc}</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-[#3A2418] p-12 rounded-3xl border border-[#E8C860]/40 hover:border-[#E8C860] transition-all duration-300 hover:-translate-y-2">
              <div className="text-7xl mb-8 transition-transform group-hover:scale-110">🪶</div>
              <h3 className="text-2xl font-medium mb-4">{current.coin1}</h3>
              <p className="text-[#F0E6D0]/80 leading-relaxed">用 HXC 将家族纪念堂永久上链，不可篡改</p>
            </div>
            <div className="group bg-[#3A2418] p-12 rounded-3xl border border-[#E8C860]/40 hover:border-[#E8C860] transition-all duration-300 hover:-translate-y-2">
              <div className="text-7xl mb-8 transition-transform group-hover:scale-110">📜</div>
              <h3 className="text-2xl font-medium mb-4">{current.coin2}</h3>
              <p className="text-[#F0E6D0]/80 leading-relaxed">完成溯源、分享等任务即可获得 HXC 奖励</p>
            </div>
            <div className="group bg-[#3A2418] p-12 rounded-3xl border border-[#E8C860]/40 hover:border-[#E8C860] transition-all duration-300 hover:-translate-y-2">
              <div className="text-7xl mb-8 transition-transform group-hover:scale-110">🌏</div>
              <h3 className="text-2xl font-medium mb-4">{current.coin3}</h3>
              <p className="text-[#F0E6D0]/80 leading-relaxed">连接台湾、新马、北美、欧洲华人家族</p>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-[#1A0F0A] py-16 border-t border-[#C9A84C]/30">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/huaxia-seal.png" 
              alt="华夏宗祠" 
              width={48} 
              height={48}
              className="opacity-70"
            />
          </div>
          
          <div className="text-[#F0E6D0]/70 text-sm mb-6 leading-relaxed">
            {current.copyright}<br />
            HUAXIA ZONGCI PTE. LTD. • SINGAPORE • EST. 2026
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#E8C860]/70">
            <a href="#" className="hover:text-[#E8C860] transition-colors">{current.contact}</a>
            <a href="#" className="hover:text-[#E8C860] transition-colors">{current.privacy}</a>
            <a href="#" className="hover:text-[#E8C860] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#E8C860] transition-colors">Blockchain Audit</a>
          </div>

          <div className="mt-12 text-xs text-[#F0E6D0]/40">
            源起華夏　脈承萬家
          </div>
        </div>
      </footer>
    </div>
  );
}