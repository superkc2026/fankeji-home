import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  EyeOff, 
  Smartphone, 
  Ghost, 
  ArrowRight, 
  Menu, 
  X, 
  Database,
  Lock,
  Heart
} from 'lucide-react';

export default function FanKeJiPortal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 核心理念数据
  const philosophy = [
    {
      icon: <EyeOff size={24} className="text-emerald-400" />,
      title: "隐私护盾",
      desc: "在这个裸奔的大数据时代，我们致力于构建个体的数字护城河，防止信息被无度索取。"
    },
    {
      icon: <Ghost size={24} className="text-emerald-400" />,
      title: "隐形助手",
      desc: "让真实的你“隐身”。在必要的连接中，阻断不必要的骚扰。"
    },
    {
      icon: <Database size={24} className="text-emerald-400" />,
      title: "信息降噪",
      desc: "算法想让你看它想让你看的，我们帮你筛选你想看的。屏蔽垃圾，回归价值。"
    }
  ];

  // 工具箱数据
  const tools = [
    {
      id: 1,
      name: "讨债小助手",
      slogan: "让还钱变得体面",
      desc: "基于高情商AI的催收工具，生成具有法律效力的电子承诺书。解决熟人借钱开口难、留证难的问题。",
      link: "https://debt.fankeji.com", // 指向子域名
      icon: <Shield size={28} />,
      status: "已上线",
      bg: "bg-slate-800"
    },
    {
      id: 2,
      name: "寿比南山",
      slogan: "关注生命质量",
      desc: "一款关注个体健康与生命周期的工具，通过数据量化，辅助你做出更利于长寿的决策。",
      link: "#", 
      icon: <Heart size={28} />,
      status: "开发中",
      bg: "bg-slate-800"
    },
    {
      id: 3,
      name: "隐私黑盒",
      slogan: "您的数字替身",
      desc: "（概念产品）用于生成临时身份信息、临时号码，用于注册非必要实名的网络服务，防止信息泄露。",
      link: "#",
      icon: <Lock size={28} />,
      status: "规划中",
      bg: "bg-slate-900/50 border-dashed border border-slate-700"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-emerald-500/30">
      
      {/* 顶部导航栏 - 响应式 */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black font-black text-lg">F</span>
            <span>FanKeJi<span className="text-emerald-500">.</span></span>
          </div>
          
          {/* PC端菜单 */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#philosophy" className="hover:text-emerald-400 transition-colors">反科技理念</a>
            <a href="#tools" className="hover:text-emerald-400 transition-colors">工具箱</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">关于</a>
          </div>

          {/* 手机端菜单按钮 */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 手机端下拉菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111] border-b border-white/10 p-4 flex flex-col gap-4 text-center">
            <a href="#philosophy" className="py-2 hover:text-emerald-400" onClick={() => setIsMobileMenuOpen(false)}>理念</a>
            <a href="#tools" className="py-2 hover:text-emerald-400" onClick={() => setIsMobileMenuOpen(false)}>工具箱</a>
          </div>
        )}
      </nav>

      {/* Hero 区域：核心价值观 */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        {/* 背景装饰：象征科技的线条，但比较暗淡，被控制住的感觉 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-8">
            FANKEJI.COM · 反科技
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            非否定，<br className="md:hidden" />而<span className="text-emerald-400">善用</span>。
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            我们不拒绝科技，但拒绝被科技奴役。
            <br />
            在这里，我们开发工具来对抗算法的围猎，保护个体的隐私，
            <br className="hidden md:block"/>
            让技术回归它最原始的初衷——服务于人，而非控制人。
          </p>
        </div>
      </section>

      {/* 理念三支柱 - 手机端单列，PC端三列 */}
      <section id="philosophy" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#161616] border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
                <div className="mb-4 bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工具箱展示区域 */}
      <section id="tools" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">反科技 · 实验室</h2>
            <p className="text-slate-400">正在孵化的反科技小工具，每一个都为了解决具体问题而生。</p>
          </div>
          <a href="#" className="text-emerald-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            查看开发日志 <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <a 
              key={tool.id} 
              href={tool.link}
              target={tool.link !== '#' ? "_blank" : "_self"}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 p-1 transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-1`}
            >
              <div className={`h-full ${tool.bg} rounded-[20px] p-6 flex flex-col`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-black/40 text-white group-hover:text-emerald-400 transition-colors`}>
                    {tool.icon}
                  </div>
                  <span className={`px-2 py-1 text-[10px] rounded border ${tool.status === '已上线' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-slate-700/30 border-slate-600/30 text-slate-400'}`}>
                    {tool.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-xs text-emerald-500/80 font-mono mb-3">{tool.slogan}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                  {tool.desc}
                </p>

                <div className="flex items-center text-sm font-bold text-white group-hover:text-emerald-400 transition-colors mt-auto">
                  {tool.status === '已上线' ? '立即使用' : '了解更多'} 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 底部 Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} FanKeJi.com</p>
            <p className="text-xs mt-1 text-slate-600">非否定而善用 · 技术服务于人</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">隐私协议</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">联系我们</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}