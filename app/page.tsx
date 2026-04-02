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

  const sages = [
    { name: '黄帝', title: '人文始祖', desc: '中华文明奠基者', emoji: '🐉' },
    { name: '炎帝', title: '神农氏', desc: '尝百草、教民耕种', emoji: '🌾' },
    { name: '孙中山', title: '民主革命先行者', desc: '推翻帝制，建立中华民国', emoji: '🌏' },
    { name: '邓小平', title: '改革开放总设计师', desc: '开创中国特色社会主义道路', emoji: '📈' },
    { name: '邓丽君', title: '歌坛天后', desc: '华语流行音乐象征', emoji: '🎤' },
    { name: '张国荣', title: '歌影传奇', desc: '“哥哥”，永恒经典', emoji: '🎸' },
    { name: '李小龙', title: '武术宗师', desc: '推广中国功夫', emoji: '🥋' },
  ];

  const filteredSages = sages.filter(sage =>
    sage.name.includes(searchTerm) || sage.title.includes(searchTerm)
  );

  const handleConnectWallet = () => {
    setWalletConnected(true);
    alert('钱包连接成功！\n当前 HXC 余额：158.88 HXC');
  };

  const handleCooperationSubmit = () => {
    if (!cooperationData.name || !cooperationData.contact) {
      alert('请填写姓名和联系方式');
      return;
    }
    alert('宗亲会合作申请已成功提交！\n我们会尽快与您联系。');
    setShowCooperationForm(false);
    setCooperationData({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#2A1A12] text-[#F0E6D0] font-serif overflow-hidden">
      {/* Hero 和先贤堂保持不变（此处省略，实际替换时保留前面代码） */}

      {/* HuaxiaCoin 优化版 */}
      <div className="py-24 bg-[#1F130B]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold tracking-widest mb-6 text-[#E8C860]">HuaxiaCoin (HXC)</h2>
          <p className="text-[#F0E6D0]/80 text-xl mb-12 max-w-2xl mx-auto">
            纯工具型代币，用于平台文化服务与家族纪念堂区块链存证
          </p>

          <div className="inline-flex items-center gap-4 bg-[#2A1F18] px-10 py-5 rounded-3xl border border-[#E8C860]/40 mb-12">
            <div className="text-4xl">💎</div>
            <div>
              <div className="text-2xl font-bold">158.88 HXC</div>
              <div className="text-sm text-[#E8C860]">当前可用余额</div>
            </div>
          </div>

          <button 
            onClick={handleConnectWallet}
            className="px-12 py-5 bg-gradient-to-r from-[#C42018] to-[#A31A12] hover:brightness-110 text-white text-lg font-medium rounded-2xl transition-all"
          >
            {walletConnected ? '已连接钱包' : '连接钱包'}
          </button>
        </div>
      </div>

      {/* 宗亲会合作优化版 */}
      <div className="py-24 bg-[#2A1A12]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold tracking-widest mb-6 text-[#E8C860]">宗亲会合作</h2>
          <p className="text-[#F0E6D0]/80 text-xl mb-12 max-w-2xl mx-auto">
            欢迎全球宗亲会、家族组织与我们合作共建数字宗祠平台
          </p>

          <button 
            onClick={() => setShowCooperationForm(true)}
            className="px-16 py-6 bg-gradient-to-r from-[#C42018] to-[#A31A12] hover:brightness-110 text-white text-xl font-medium rounded-2xl transition-all"
          >
            申请合作
          </button>
        </div>
      </div>

      {/* 宗亲会合作表单 */}
      {showCooperationForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]">
          <div className="bg-[#2A1A12] p-10 rounded-3xl max-w-lg w-full border border-[#E8C860]/40">
            <h3 className="text-3xl font-bold mb-8 text-center">宗亲会合作申请</h3>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="宗亲会 / 家族名称" 
                value={cooperationData.name} 
                onChange={(e) => setCooperationData({...cooperationData, name: e.target.value})} 
                className="w-full px-6 py-4 bg-[#3A2418] border border-[#E8C860]/60 rounded-2xl" 
              />
              <input 
                type="text" 
                placeholder="联系方式 (微信/邮箱/电话)" 
                value={cooperationData.contact} 
                onChange={(e) => setCooperationData({...cooperationData, contact: e.target.value})} 
                className="w-full px-6 py-4 bg-[#3A2418] border border-[#E8C860]/60 rounded-2xl" 
              />
              <textarea 
                placeholder="合作意向或留言" 
                value={cooperationData.message} 
                onChange={(e) => setCooperationData({...cooperationData, message: e.target.value})} 
                rows={5} 
                className="w-full px-6 py-4 bg-[#3A2418] border border-[#E8C860]/60 rounded-2xl resize-y" 
              />
            </div>
            <div className="flex gap-4 mt-10">
              <button onClick={() => setShowCooperationForm(false)} className="flex-1 py-4 border border-[#E8C860]/50 hover:bg-[#E8C860]/10 rounded-2xl">取消</button>
              <button onClick={handleCooperationSubmit} className="flex-1 py-4 bg-[#C42018] hover:bg-[#A31A12] rounded-2xl font-medium">提交申请</button>
            </div>
          </div>
        </div>
      )}

      {/* 祭祀模态框 */}
      {showWorshipModal && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[90]">
          <div className="bg-[#2A1F18] max-w-md w-full mx-4 rounded-3xl p-10 text-center border border-[#E8C860]/50">
            <div className="text-8xl mb-8">🪔</div>
            <h3 className="text-3xl font-bold mb-4">敬献香火</h3>
            <p className="text-[#F0E6D0]/80 mb-10">您已为先贤献上心香一瓣</p>
            <div className="text-6xl mb-8">🌸 🌺 🌸</div>
            <button onClick={() => setShowWorshipModal(false)} className="w-full py-5 bg-[#C42018] hover:bg-[#A31A12] text-white text-xl font-medium rounded-2xl">完成祭祀</button>
          </div>
        </div>
      )}

      {/* 页脚 */}
      <footer className="bg-[#0F0A07] py-16 text-center text-sm text-[#F0E6D0]/60 border-t border-[#C9A84C]/20">
        源起華夏　脈承萬家
      </footer>
    </div>
  );
}