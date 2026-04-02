// app/page.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showWorshipModal, setShowWorshipModal] = useState(false);
  const [showCooperationForm, setShowCooperationForm] = useState(false);
  const [cooperationData, setCooperationData] = useState({ name: '', contact: '', message: '' });
  const [walletConnected, setWalletConnected] = useState(false);
  const [hxcBalance, setHxcBalance] = useState(158.88);

  // 我的纪念堂列表
  const [myMemorials, setMyMemorials] = useState<any[]>([]);

  // 创建表单状态
  const [showMemorialForm, setShowMemorialForm] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [familyDesc, setFamilyDesc] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newPhotos: string[] = [];
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) newPhotos.push(event.target.result as string);
      };
      reader.readAsDataURL(file);
    });
    setSelectedPhotos(prev => [...prev, ...newPhotos]);
  };

  const handleSubmitMemorial = () => {
    if (!familyName.trim()) {
      alert('请输入家族名称');
      return;
    }

    const newMemorial = {
      id: Date.now(),
      familyName,
      desc: familyDesc || '暂无简介',
      photos: [...selectedPhotos],
      createdAt: new Date().toLocaleDateString('zh-CN')
    };

    setMyMemorials(prev => [newMemorial, ...prev]);
    setShowMemorialForm(false);
    setFamilyName('');
    setFamilyDesc('');
    setSelectedPhotos([]);

    alert('家族纪念堂创建成功！\n已进行区块链存证');
  };

  const handleConnectWallet = () => {
    setWalletConnected(true);
    setHxcBalance(158.88);
    alert('钱包连接成功！\n当前 HXC 余额：158.88 HXC');
  };

  const handleCooperationSubmit = () => {
    if (!cooperationData.name || !cooperationData.contact) {
      alert('请填写姓名和联系方式');
      return;
    }
    alert('宗亲会合作申请已提交！我们会尽快联系您。');
    setShowCooperationForm(false);
    setCooperationData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#2A1A12] text-[#F0E6D0] font-serif overflow-hidden">
      {/* Hero、导航、先贤堂等保持不变 */}

      {/* 我的纪念堂列表 */}
      <div className="py-20 bg-[#1F130B]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold tracking-widest">我的纪念堂</h2>
            <button 
              onClick={() => setShowMemorialForm(true)}
              className="px-8 py-4 bg-[#C42018] hover:bg-[#A31A12] rounded-2xl font-medium flex items-center gap-2"
            >
              + 创建新纪念堂
            </button>
          </div>

          {myMemorials.length === 0 ? (
            <div className="text-center py-20 text-[#F0E6D0]/60">
              您还没有创建任何家族纪念堂
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {myMemorials.map(memorial => (
                <div key={memorial.id} className="bg-[#3A2418] p-8 rounded-3xl border border-[#E8C860]/40">
                  <h3 className="text-2xl font-bold mb-4">{memorial.familyName}</h3>
                  <p className="text-[#F0E6D0]/80 mb-6">{memorial.desc}</p>
                  
                  {memorial.photos.length > 0 && (
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {memorial.photos.slice(0, 4).map((photo: string, i: number) => (
                        <Image key={i} src={photo} alt="家族照片" width={80} height={80} className="rounded-xl object-cover" />
                      ))}
                    </div>
                  )}

                  <div className="text-xs text-[#E8C860]/70 flex justify-between">
                    <span>创建于 {memorial.createdAt}</span>
                    <span className="text-green-400">✅ 已区块链存证</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 其他部分（HuaxiaCoin、宗亲会合作等）保持你喜欢的样式 */}

      {/* 家族纪念堂创建表单 */}
      {showMemorialForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]">
          <div className="bg-[#2A1A12] p-10 rounded-3xl max-w-lg w-full border border-[#E8C860]/40">
            <h3 className="text-3xl font-bold mb-8 text-center">创建家族纪念堂</h3>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="家族名称" 
                value={familyName} 
                onChange={(e) => setFamilyName(e.target.value)} 
                className="w-full px-6 py-4 bg-[#3A2418] border border-[#E8C860]/60 rounded-2xl" 
              />
              <textarea 
                placeholder="家族简介 / 祖先事迹" 
                value={familyDesc} 
                onChange={(e) => setFamilyDesc(e.target.value)} 
                rows={4} 
                className="w-full px-6 py-4 bg-[#3A2418] border border-[#E8C860]/60 rounded-2xl resize-y" 
              />
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                onChange={handlePhotoUpload} 
                className="w-full text-sm" 
              />
            </div>
            <div className="flex gap-4 mt-10">
              <button onClick={() => setShowMemorialForm(false)} className="flex-1 py-4 border border-[#E8C860]/50 hover:bg-[#E8C860]/10 rounded-2xl">取消</button>
              <button onClick={handleSubmitMemorial} className="flex-1 py-4 bg-[#C42018] hover:bg-[#A31A12] rounded-2xl font-medium">提交并上链</button>
            </div>
          </div>
        </div>
      )}

      {/* 祭祀模态框和页脚保持不变 */}

      <footer className="bg-[#0F0A07] py-16 text-center text-sm text-[#F0E6D0]/60 border-t border-[#C9A84C]/20">
        源起華夏　脈承萬家
      </footer>
    </div>
  );
}