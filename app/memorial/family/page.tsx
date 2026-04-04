// app/memorial/family/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Lang = 'zh-TW' | 'zh-CN' | 'en';

interface MemorialItem {
  id: number;
  name: string;
  desc: string;
  createdAt: string;
  photo?: string;
}

export default function FamilyMemorial() {
  const [lang, setLang] = useState<Lang>('zh-TW');
  const [showForm, setShowForm] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [familyDesc, setFamilyDesc] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [myMemorials, setMyMemorials] = useState<MemorialItem[]>([]);

  const t = {
    'zh-TW': {
      title: "家族紀念堂",
      subtitle: "為您的家族建立永久的數字空間",
      createButton: "立即創建紀念堂",
      myMemorials: "我的紀念堂",
      noMemorial: "您還沒有創建任何家族紀念堂",
      formTitle: "創建新家族紀念堂",
      familyNamePlaceholder: "家族名稱",
      familyDescPlaceholder: "家族簡介或祖先事蹟",
      photoPlaceholder: "點擊或拖拽上傳家族照片（選填）",
      submitButton: "提交並上鏈",
      cancelButton: "取消",
      footer: "慎終追遠　民德歸厚"
    },
    'zh-CN': {
      title: "家族纪念堂",
      subtitle: "为您的家族建立永久的数字空间",
      createButton: "立即创建纪念堂",
      myMemorials: "我的纪念堂",
      noMemorial: "您还没有创建任何家族纪念堂",
      formTitle: "创建新家族纪念堂",
      familyNamePlaceholder: "家族名称",
      familyDescPlaceholder: "家族简介或祖先事迹",
      photoPlaceholder: "点击或拖拽上传家族照片（选填）",
      submitButton: "提交并上链",
      cancelButton: "取消",
      footer: "慎终追远　民德归厚"
    },
    en: {
      title: "Family Memorial Hall",
      subtitle: "Create a permanent digital space for your family",
      createButton: "Create Memorial Now",
      myMemorials: "My Memorials",
      noMemorial: "You haven't created any family memorial yet",
      formTitle: "Create New Family Memorial",
      familyNamePlaceholder: "Family Name",
      familyDescPlaceholder: "Family introduction or ancestral stories",
      photoPlaceholder: "Click or drag to upload family photo (optional)",
      submitButton: "Submit & On-Chain",
      cancelButton: "Cancel",
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
    if (!familyName.trim()) {
      alert(current.title === "家族紀念堂" ? "請輸入家族名稱" : "Please enter family name");
      return;
    }

    const newMemorial: MemorialItem = {
      id: Date.now(),
      name: familyName,
      desc: familyDesc || (current.title === "家族紀念堂" ? "尚未填寫簡介" : "No description yet"),
      createdAt: new Date().toLocaleDateString('zh-TW'),
      photo: selectedPhoto || undefined
    };

    setMyMemorials(prev => [newMemorial, ...prev]);
    setSuccessMessage(`紀念堂「${familyName}」已成功創建並上鏈！`);
    setTimeout(() => setSuccessMessage(''), 4000);

    setShowForm(false);
    setFamilyName('');
    setFamilyDesc('');
    setSelectedPhoto(null);
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
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold tracking-widest text-white mb-6">{current.title}</h1>
        <p className="text-3xl text-[#EDE0BA]/80">{current.subtitle}</p>
      </div>

      {/* 行動按鈕 */}
      <div className="max-w-4xl mx-auto px-8 pb-20 text-center">
        <button 
          onClick={() => setShowForm(true)}
          className="px-16 py-7 bg-[#C42018] hover:bg-[#A31A12] text-2xl font-medium rounded-2xl transition-all shadow-lg"
        >
          {current.createButton}
        </button>
      </div>

      {/* 我的紀念堂列表 */}
      <div className="bg-[#2A1A12] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#E8C860]">{current.myMemorials}</h2>

          {myMemorials.length === 0 ? (
            <div className="text-center py-20 text-[#EDE0BA]/60 text-xl">
              {current.noMemorial}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {myMemorials.map((mem) => (
                <div key={mem.id} className="bg-[#1A0F0A] rounded-3xl border border-[#C9A84C]/40 overflow-hidden hover:border-[#C9A84C] transition-all group">
                  <div className="h-56 bg-[#3A2418] relative flex items-center justify-center overflow-hidden">
                    {mem.photo ? (
                      <Image src={mem.photo} alt={mem.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="text-8xl opacity-40">🏛️</div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-white">{mem.name}</h3>
                    <p className="text-[#EDE0BA]/80 text-sm mb-4 line-clamp-3">{mem.desc}</p>
                    <p className="text-xs text-[#C9A84C]/70">創建於 {mem.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 創建彈窗 */}
      {showForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-[#2A1A12] p-12 rounded-3xl max-w-lg w-full border border-[#E8C860]/60 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">{current.formTitle}</h3>
            
            <input 
              type="text" 
              placeholder={current.familyNamePlaceholder}
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              className="w-full px-8 py-5 bg-[#3A2418] border border-[#E8C860]/70 rounded-2xl mb-6 text-lg focus:border-[#E8C860] outline-none"
            />
            
            <textarea 
              placeholder={current.familyDescPlaceholder}
              value={familyDesc}
              onChange={(e) => setFamilyDesc(e.target.value)}
              rows={4}
              className="w-full px-8 py-5 bg-[#3A2418] border border-[#E8C860]/70 rounded-2xl mb-8 text-lg focus:border-[#E8C860] outline-none resize-y"
            />

            <div className="mb-10">
              <label className="block text-sm text-[#C9A84C]/80 mb-3">上傳家族照片（選填）</label>
              <div className="border-2 border-dashed border-[#E8C860]/50 rounded-2xl p-8 text-center hover:border-[#E8C860] transition-all">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handlePhotoUpload}
                  className="hidden" 
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer block">
                  {selectedPhoto ? (
                    <div className="relative w-40 h-40 mx-auto rounded-xl overflow-hidden border border-[#E8C860]/40">
                      <Image src={selectedPhoto} alt="預覽" fill className="object-cover" />
                    </div>
                  ) : (
                    <div>
                      <div className="text-5xl mb-4">📸</div>
                      <p className="text-[#EDE0BA]/70">{current.photoPlaceholder}</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="flex gap-6">
              <button 
                onClick={() => {
                  setShowForm(false);
                  setSelectedPhoto(null);
                }}
                className="flex-1 py-5 border border-[#E8C860]/50 hover:bg-[#E8C860]/10 rounded-2xl text-lg transition-all"
              >
                {current.cancelButton}
              </button>
              <button 
                onClick={handleCreateMemorial}
                className="flex-1 py-5 bg-[#C42018] hover:bg-[#A31A12] rounded-2xl text-lg font-medium transition-all"
              >
                {current.submitButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#2A1A12] border border-[#E8C860] text-[#E8C860] px-10 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-4">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage('')} className="ml-4 text-[#E8C860]/70 hover:text-[#E8C860]">✕</button>
        </div>
      )}

      <footer className="py-16 text-center text-sm text-[#EDE0BA]/60 border-t border-[#C9A84C]/20">
        {current.footer}
      </footer>
    </div>
  );
}