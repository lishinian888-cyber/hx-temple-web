// app/trace/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

interface Surname {
  id: number;
  name: string;
  origin: string;
  famous: string;
  migration: string;
  icon: string;
}

export default function Trace() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  // 從 URL 讀取語言參數並設定
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang') as Lang;
    if (urlLang && ['zh-TW', 'zh-CN', 'en'].includes(urlLang)) {
      setLang(urlLang);
    }
  }, []);

  const t = {
    'zh-TW': {
      title: "姓氏溯源",
      subtitle: "尋根問祖　脈承華夏",
      desc: "輸入或點擊您的姓氏，探索起源、歷史名人與家族遷徙故事",
      searchPlaceholder: "輸入姓氏（如 李、王、張、周）",
      originLabel: "起源",
      famousLabel: "著名人物",
      migrationLabel: "遷徙簡史",
      shareButton: "分享我的溯源結果",
      shareSuccess: "已複製分享連結！可發送給親友",
      footer: "源起華夏　脈承萬家"
    },
    'zh-CN': {
      title: "姓氏溯源",
      subtitle: "寻根问祖　脉承华夏",
      desc: "输入或点击您的姓氏，探索起源、历史名人与家族迁徙故事",
      searchPlaceholder: "输入姓氏（如 李、王、张、周）",
      originLabel: "起源",
      famousLabel: "著名人物",
      migrationLabel: "迁徙简史",
      shareButton: "分享我的溯源结果",
      shareSuccess: "已复制分享链接！可发送给亲友",
      footer: "源起华夏　脉承万家"
    },
    en: {
      title: "Surname Tracing",
      subtitle: "Seek Roots • Inherit Huaxia",
      desc: "Enter or click your surname to explore origins, historical figures, and family migration stories",
      searchPlaceholder: "Enter surname (e.g. Li, Wang, Zhang, Zhou)",
      originLabel: "Origin",
      famousLabel: "Famous Figures",
      migrationLabel: "Migration History",
      shareButton: "Share My Tracing Result",
      shareSuccess: "Link copied! Share with family and friends",
      footer: "Originating in China • Passed Down Through Countless Families"
    }
  } as const;

  const current = t[lang];

  const surnamesData: Record<Lang, Surname[]> = {
    'zh-TW': [
      { id: 1, name: "李", origin: "源出嬴姓，理氏改李氏（因理、李古字相通），或食李子而改姓", famous: "李白（詩仙）、李世民（唐太宗）、李清照", migration: "主要分佈於北方，後南遷至江南、嶺南", icon: "🍃" },
      { id: 2, name: "王", origin: "源出姬姓，為周文王之後，或王族改姓", famous: "王羲之（書聖）、王安石、王陽明", migration: "遍佈全國，以山東、山西、河南為主", icon: "👑" },
      { id: 3, name: "張", origin: "源出黃帝第五子揮，因職官『弓正』改張氏", famous: "張良（漢初三傑）、張仲景（醫聖）、張騫", migration: "全國分佈廣泛，以河南、河北、山東為主", icon: "🏹" },
      { id: 4, name: "劉", origin: "源出祁姓，堯之後，或劉累之後", famous: "劉邦（漢高祖）、劉備（蜀漢昭烈帝）、劉禹錫", migration: "主要在北方，後廣泛分佈", icon: "🐉" },
      { id: 5, name: "陳", origin: "源出嬀姓，虞舜之後，陳國後裔", famous: "陳勝（陳勝吳廣起義）、陳獨秀、陳景潤", migration: "南方為主，福建、廣東特別多", icon: "🌳" },
      { id: 6, name: "楊", origin: "源出姬姓，周宣王之子尚父封楊國", famous: "楊堅（隋文帝）、楊貴妃、楊萬里", migration: "北方起源，後南遷", icon: "🌿" },
      { id: 7, name: "趙", origin: "源出嬴姓，趙氏為秦始皇同宗", famous: "趙匡胤（宋太祖）、趙雲（常山趙子龍）、趙孟頫", migration: "北方為主", icon: "🐎" },
      { id: 8, name: "黃", origin: "源出贏姓，黃帝之後，或陸終之後", famous: "黃帝（人文始祖）、黃庭堅、黃遵憲", migration: "南方分佈密集，尤以福建、廣東為主", icon: "🌾" },
      { id: 9, name: "周", origin: "源出姬姓，周文王、周武王之後", famous: "周恩來、周敦頤、周杰倫", migration: "全國分佈，以河南、湖南為主", icon: "⚔️" },
      { id: 10, name: "吳", origin: "源出姬姓，周太王之子太伯建立吳國", famous: "吳道子、吳承恩、吳敬梓", migration: "江南為主，江浙一帶", icon: "🌊" },
      { id: 11, name: "徐", origin: "源出嬴姓，徐國之後", famous: "徐霞客、徐悲鴻、徐光啟", migration: "東南沿海為主", icon: "🗺️" },
      { id: 12, name: "孫", origin: "源出姬姓，衛康叔之後，或孫武之後", famous: "孫中山、孫悟空（文學形象）、孫思邈", migration: "全國分佈，北方與江浙較多", icon: "☀️" }
    ],
    'zh-CN': [
      { id: 1, name: "李", origin: "源出嬴姓，理氏改李氏（因理、李古字相通），或食李子而改姓", famous: "李白（诗仙）、李世民（唐太宗）、李清照", migration: "主要分布于北方，后南迁至江南、岭南", icon: "🍃" },
      { id: 2, name: "王", origin: "源出姬姓，为周文王之后，或王族改姓", famous: "王羲之（书圣）、王安石、王阳明", migration: "遍布全国，以山东、山西、河南为主", icon: "👑" },
      { id: 3, name: "张", origin: "源出黄帝第五子挥，因职官『弓正』改张氏", famous: "张良（汉初三杰）、张仲景（医圣）、张骞", migration: "全国分布广泛，以河南、河北、山东为主", icon: "🏹" },
      { id: 4, name: "刘", origin: "源出祁姓，尧之后，或刘累之后", famous: "刘邦（汉高祖）、刘备（蜀汉昭烈帝）、刘禹锡", migration: "主要在北方，后广泛分布", icon: "🐉" },
      { id: 5, name: "陈", origin: "源出妫姓，虞舜之后，陈国后裔", famous: "陈胜（陈胜吴广起义）、陈独秀、陈景润", migration: "南方为主，福建、广东特别多", icon: "🌳" },
      { id: 6, name: "杨", origin: "源出姬姓，周宣王之子尚父封杨国", famous: "杨坚（隋文帝）、杨贵妃、杨万里", migration: "北方起源，后南迁", icon: "🌿" },
      { id: 7, name: "赵", origin: "源出嬴姓，赵氏为秦始皇同宗", famous: "赵匡胤（宋太祖）、赵云（常山赵子龙）、赵孟頫", migration: "北方为主", icon: "🐎" },
      { id: 8, name: "黄", origin: "源出嬴姓，黄帝之后，或陆终之后", famous: "黄帝（人文始祖）、黄庭坚、黄遵宪", migration: "南方分布密集，尤以福建、广东为主", icon: "🌾" },
      { id: 9, name: "周", origin: "源出姬姓，周文王、周武王之后", famous: "周恩来、周敦颐、周杰伦", migration: "全国分布，以河南、湖南为主", icon: "⚔️" },
      { id: 10, name: "吴", origin: "源出姬姓，周太王之子太伯建立吴国", famous: "吴道子、吴承恩、吴敬梓", migration: "江南为主，江浙一带", icon: "🌊" },
      { id: 11, name: "徐", origin: "源出嬴姓，徐国之后", famous: "徐霞客、徐悲鸿、徐光启", migration: "东南沿海为主", icon: "🗺️" },
      { id: 12, name: "孙", origin: "源出姬姓，卫康叔之后，或孙武之后", famous: "孙中山、孙悟空（文学形象）、孙思邈", migration: "全国分布，北方与江浙较多", icon: "☀️" }
    ],
    en: [
      { id: 1, name: "Li", origin: "Originated from the Ying clan; changed due to eating plums or ancient character interchange", famous: "Li Bai (Poet Immortal), Li Shimin (Tang Taizong), Li Qingzhao", migration: "Mainly in the north, later migrated south to Jiangnan and Lingnan", icon: "🍃" },
      { id: 2, name: "Wang", origin: "Originated from the Ji clan, descendants of King Wen of Zhou", famous: "Wang Xizhi (Sage of Calligraphy), Wang Anshi, Wang Yangming", migration: "Widely distributed nationwide, mainly in Shandong, Shanxi, Henan", icon: "👑" },
      { id: 3, name: "Zhang", origin: "Originated from the fifth son of the Yellow Emperor", famous: "Zhang Liang, Zhang Zhongjing (Medical Sage), Zhang Qian", migration: "Widely distributed nationwide, mainly in Henan, Hebei, Shandong", icon: "🏹" },
      { id: 4, name: "Liu", origin: "Descendants of Yao", famous: "Liu Bang (Han Gaozu), Liu Bei, Liu Yuxi", migration: "Mainly in the north, later widely distributed", icon: "🐉" },
      { id: 5, name: "Chen", origin: "Descendants of Shun", famous: "Chen Sheng, Chen Duxiu, Chen Jingrun", migration: "Mainly in the south, especially Fujian and Guangdong", icon: "🌳" },
      { id: 6, name: "Yang", origin: "Enfeoffed in Yang State by King Xuan of Zhou", famous: "Yang Jian (Sui Wen Di), Yang Guifei, Yang Wanli", migration: "Originated in the north, later migrated south", icon: "🌿" },
      { id: 7, name: "Zhao", origin: "Same lineage as Qin Shi Huang", famous: "Zhao Kuangyin (Song Taizu), Zhao Yun, Zhao Mengfu", migration: "Mainly in the north", icon: "🐎" },
      { id: 8, name: "Huang", origin: "Descendants of the Yellow Emperor", famous: "Yellow Emperor, Huang Tingjian, Huang Zunxian", migration: "Dense in the south, especially Fujian and Guangdong", icon: "🌾" },
      { id: 9, name: "Zhou", origin: "Descendants of King Wen and King Wu of Zhou", famous: "Zhou Enlai, Zhou Dunyi, Jay Chou", migration: "Nationwide, mainly Henan and Hunan", icon: "⚔️" },
      { id: 10, name: "Wu", origin: "State of Wu founded by Taibo", famous: "Wu Daozi, Wu Cheng'en, Wu Jingzi", migration: "Mainly Jiangnan, Jiangsu-Zhejiang", icon: "🌊" },
      { id: 11, name: "Xu", origin: "Descendants of the State of Xu", famous: "Xu Xiake, Xu Beihong, Xu Guangqi", migration: "Southeast coast", icon: "🗺️" },
      { id: 12, name: "Sun", origin: "Descendants of Sun Wu", famous: "Sun Yat-sen, Sun Wukong, Sun Simiao", migration: "Nationwide, more in north and Jiangsu-Zhejiang", icon: "☀️" }
    ]
  };

  const surnames = surnamesData[lang];

  const filteredSurnames = surnames.filter(s => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return true;
    const lowerName = s.name.toLowerCase();
    if (lowerName === term || lowerName.startsWith(term)) return true;
    if (term.length >= 2) {
      return s.origin.toLowerCase().includes(term) || 
             s.famous.toLowerCase().includes(term) || 
             s.migration.toLowerCase().includes(term);
    }
    return false;
  });

  const toggleExpand = (id: number) => setExpandedId(expandedId === id ? null : id);

  const handleShare = (surname: Surname) => {
    const text = lang === 'en' 
      ? `${surname.name} Surname Tracing:\nOrigin: ${surname.origin}\nFamous: ${surname.famous}\nMigration: ${surname.migration}`
      : `${surname.name}氏溯源：\n起源：${surname.origin}\n著名人物：${surname.famous}\n遷徙：${surname.migration}`;
    navigator.clipboard.writeText(text).then(() => {
      setSuccessMessage(current.shareSuccess);
      setTimeout(() => setSuccessMessage(''), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif">
      {/* 最終修正版導航欄 */}
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
            <Link href={`/trace?lang=${lang}`} className="text-[#C9A84C] font-medium">姓氏溯源</Link>
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

          {/* 語言切換按鍵 */}
          <div className="flex border border-[#C9A84C]/50 rounded-xl overflow-hidden text-sm">
            <button 
              onClick={() => setLang('zh-TW')}
              className={`px-5 py-2 ${lang === 'zh-TW' ? 'bg-[#C9A84C] text-black font-medium' : 'hover:bg-[#C9A84C]/10'}`}
            >
              繁體
            </button>
            <button 
              onClick={() => setLang('zh-CN')}
              className={`px-5 py-2 ${lang === 'zh-CN' ? 'bg-[#C9A84C] text-black font-medium' : 'hover:bg-[#C9A84C]/10'}`}
            >
              简体
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-5 py-2 ${lang === 'en' ? 'bg-[#C9A84C] text-black font-medium' : 'hover:bg-[#C9A84C]/10'}`}
            >
              English
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-16 text-center">
        <h1 className="text-6xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80 mb-4">{current.subtitle}</p>
        <p className="text-xl text-[#EDE0BA]/70 max-w-3xl mx-auto">{current.desc}</p>
      </div>

      <div className="max-w-3xl mx-auto px-8 pb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={current.searchPlaceholder}
          className="w-full px-8 py-5 bg-[#2A1A12] border border-[#C9A84C]/50 rounded-2xl text-lg focus:border-[#E8C860] outline-none"
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        {filteredSurnames.length === 0 ? (
          <div className="text-center py-20 text-[#EDE0BA]/60 text-xl">
            沒有找到匹配的姓氏，請嘗試其他關鍵字
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSurnames.map((surname) => (
              <div 
                key={surname.id} 
                className="bg-[#2A1A12] rounded-3xl border border-[#C9A84C]/30 hover:border-[#E8C860] 
                  transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
              >
                <div 
                  onClick={() => toggleExpand(surname.id)}
                  className="p-10 cursor-pointer flex items-center justify-between group-hover:bg-[#3A2418]/60 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-6xl transition-transform group-hover:scale-110 duration-300">{surname.icon}</div>
                    <div>
                      <h3 className="text-5xl font-bold text-white tracking-wider">{surname.name}氏</h3>
                      <p className="text-[#C9A84C]/80 text-sm mt-1.5">點擊查看詳情</p>
                    </div>
                  </div>
                  <span className={`text-3xl text-[#E8C860]/70 transition-transform duration-300 ${expandedId === surname.id ? 'rotate-180' : ''}`}>↓</span>
                </div>

                {expandedId === surname.id && (
                  <div className="px-10 pb-10 border-t border-[#C9A84C]/20 pt-8 space-y-8 bg-[#1F150F]">
                    <div>
                      <div className="text-[#E8C860] text-sm mb-2 font-medium">{current.originLabel}</div>
                      <p className="leading-relaxed text-[#EDE0BA]/90">{surname.origin}</p>
                    </div>
                    <div>
                      <div className="text-[#E8C860] text-sm mb-2 font-medium">{current.famousLabel}</div>
                      <p className="leading-relaxed text-[#EDE0BA]/90">{surname.famous}</p>
                    </div>
                    <div>
                      <div className="text-[#E8C860] text-sm mb-2 font-medium">{current.migrationLabel}</div>
                      <p className="leading-relaxed text-[#EDE0BA]/90">{surname.migration}</p>
                    </div>

                    <button 
                      onClick={() => handleShare(surname)}
                      className="w-full py-4 border border-[#C9A84C]/70 hover:bg-[#C9A84C]/10 rounded-2xl transition-all flex items-center justify-center gap-3"
                    >
                      🔗 {current.shareButton}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

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