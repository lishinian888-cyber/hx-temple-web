// app/memorial/family/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

interface MemorialItem {
  id: number;
  name: string;
  desc: string;
  photo?: string;
  createdAt: string;
  offerings: number;
}

export default function FamilyMemorial() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [showForm, setShowForm] = useState(false);
  const [showOffering, setShowOffering] = useState(false);
  const [selectedMemorial, setSelectedMemorial] = useState<MemorialItem | null>(null);

  const [familyName, setFamilyName] = useState('');
  const [familyDesc, setFamilyDesc] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const [myMemorials, setMyMemorials] = useState<MemorialItem[]>([]);
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
      title: "家族紀念堂",
      subtitle: "為您的家族建立永久的數字空間",
      createButton: "創建家族紀念堂",
      noMemorial: "尚未創建任何家族紀念堂",
      offeringButton: "線上祭祀",
      offeringTitle: "線上祭祀",
      offeringDesc: "焚香獻花　敬告先祖",
      incense: "焚香", flowers: "獻花", wine: "敬酒", prayer: "讀祭文",
      success: "祭祀完成，先祖已收到您的心意",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "家族纪念堂",
      subtitle: "为您的家族建立永久的数字空间",
      createButton: "创建家族纪念堂",
      noMemorial: "尚未创建任何家族纪念堂",
      offeringButton: "线上祭祀",
      offeringTitle: "线上祭祀",
      offeringDesc: "焚香献花　敬告先祖",
      incense: "焚香", flowers: "献花", wine: "敬酒", prayer: "读祭文",
      success: "祭祀完成，先祖已收到您的心意",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Family Memorial Hall",
      subtitle: "Create a permanent digital space for your family",
      createButton: "Create Family Memorial",
      noMemorial: "No family memorial created yet",
      offeringButton: "Online Offering",
      offeringTitle: "Online Ancestor Worship",
      offeringDesc: "Burn incense and offer flowers to honor ancestors",
      incense: "Incense", flowers: "Flowers", wine: "Wine", prayer: "Prayer",
      success: "Offering completed. Ancestors have received your sincere respect.",
      footer: "Honor the Ancestors • Cultivate Virtue"
    }
  } as const;

  const current = t[lang];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setSelectedPhoto(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCreateMemorial = () => {
    if (!familyName.trim()) return;

    const newMemorial: MemorialItem = {
      id: Date.now(),
      name: familyName,
      desc: familyDesc || "尚未填寫簡介",
      photo: selectedPhoto || undefined,
      createdAt: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'zh-TW'),
      offerings: 0
    };

    setMyMemorials(prev => [newMemorial, ...prev]);
    setSuccessMessage('紀念堂創建成功，已上鏈存證！');
    setShowForm(false);
    setFamilyName('');
    setFamilyDesc('');
    setSelectedPhoto(null);

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleOffering = (memorial: MemorialItem) => {
    setSelectedMemorial(memorial);
    setShowOffering(true);
  };

  const completeOffering = () => {
    if (!selectedMemorial) return;
    setMyMemorials(prev =>
      prev.map(m =>
        m.id === selectedMemorial.id ? { ...m, offerings: (m.offerings || 0) + 1 } : m
      )
    );
    setSuccessMessage(current.success);
    setShowOffering(false);
    setSelectedMemorial(null);
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#EDE0BA] font-serif">
      {/* 統一導航欄 */}
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
                  <Link href={`/memorial/ancient?lang=${lang}`} className="block py-3 px-4 hover:bg-[#C9A84C]/10 rounded-xl">古代先賢堂</Link>
                  <Link href={`/memorial/family?lang=${lang}`} className="block py-3 px-4 hover:bg-[#C9A84C]/10 rounded-xl">家族紀念堂</Link>
                  <Link href={`/memorial/modern?lang=${lang}`} className="block py-3 px-4 hover:bg-[#C9A84C]/10 rounded-xl">近現代名人紀念堂</Link>
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
        <p className="text-3xl text-[#EDE0BA]/80">{current.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-end mb-8">
          <button 
            onClick={() => setShowForm(true)}
            className="px-10 py-4 bg-[#C42018] hover:bg-[#A31A12] text-lg rounded-2xl transition-all"
          >
            {current.createButton}
          </button>
        </div>

        {successMessage && (
          <div className="mb-8 p-4 bg-green-900/50 border border-green-500/50 rounded-2xl text-center">
            {successMessage}
          </div>
        )}

        {myMemorials.length === 0 ? (
          <div className="text-center py-20 text-[#EDE0BA]/60 text-xl">
            {current.noMemorial}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myMemorials.map((mem) => (
              <div key={mem.id} className="bg-[#2A1A12] p-8 rounded-3xl border border-[#C9A84C]/40 hover:border-[#C9A84C] transition-all">
                {mem.photo && (
                  <div className="mb-6 rounded-2xl overflow-hidden">
                    <Image src={mem.photo} alt={mem.name} width={400} height={300} className="w-full h-48 object-cover" />
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-3">{mem.name}</h3>
                <p className="text-[#EDE0BA]/80 mb-6 min-h-[3.5rem]">{mem.desc}</p>
                
                <button 
                  onClick={() => handleOffering(mem)}
                  className="w-full py-4 border border-[#C9A84C]/70 hover:bg-[#C9A84C]/10 rounded-2xl transition-all"
                >
                  {current.offeringButton} ({mem.offerings})
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 創建彈窗 */}
      {showForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-[#2A1A12] p-10 rounded-3xl max-w-lg w-full border border-[#C9A84C]/50">
            <h3 className="text-3xl font-bold mb-8 text-center">創建家族紀念堂</h3>
            <input 
              type="text" 
              placeholder="家族名稱" 
              value={familyName} 
              onChange={e => setFamilyName(e.target.value)}
              className="w-full px-6 py-4 bg-[#1A0F0A] border border-[#C9A84C]/60 rounded-2xl mb-6 text-lg"
            />
            <textarea 
              placeholder="家族簡介 / 祖先事跡" 
              value={familyDesc} 
              onChange={e => setFamilyDesc(e.target.value)} 
              rows={5}
              className="w-full px-6 py-4 bg-[#1A0F0A] border border-[#C9A84C]/60 rounded-2xl mb-8 text-lg"
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoUpload} 
              className="w-full mb-10 text-sm"
            />
            <div className="flex gap-4">
              <button onClick={() => setShowForm(false)} className="flex-1 py-5 border border-[#C9A84C]/50 rounded-2xl hover:bg-[#C9A84C]/10">取消</button>
              <button onClick={handleCreateMemorial} className="flex-1 py-5 bg-[#C42018] hover:bg-[#A31A12] rounded-2xl font-medium">提交並上鏈</button>
            </div>
          </div>
        </div>
      )}

      {/* 祭祀彈窗 */}
      {showOffering && selectedMemorial && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="bg-[#2A1A12] p-12 rounded-3xl max-w-md w-full border border-[#C9A84C]/60 text-center">
            <div className="text-8xl mb-6">🪔</div>
            <h3 className="text-4xl font-bold mb-3">{current.offeringTitle}</h3>
            <p className="text-xl mb-10 text-[#EDE0BA]/80">{current.offeringDesc}</p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">🌿 {current.incense}</button>
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">🌸 {current.flowers}</button>
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">🍷 {current.wine}</button>
              <button onClick={completeOffering} className="py-8 bg-[#3A2418] hover:bg-[#C9A84C]/20 rounded-2xl text-2xl">📜 {current.prayer}</button>
            </div>
            <button onClick={() => setShowOffering(false)} className="px-12 py-4 border border-[#C9A84C]/50 rounded-2xl hover:bg-[#C9A84C]/10">結束祭祀</button>
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