import React from 'react';
import { Sparkles, TrendingUp, Wallet, CheckCircle2, Calculator, Layers, Printer } from 'lucide-react';

interface HeaderProps {
  activeTab: 'roadmap' | 'model' | 'streams' | 'milestones';
  setActiveTab: (tab: 'roadmap' | 'model' | 'streams' | 'milestones') => void;
  completedMilestonesCount: number;
  totalMilestonesCount: number;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  completedMilestonesCount,
  totalMilestonesCount,
  onPrint
}) => {
  const progressPercentage = Math.round((completedMilestonesCount / Math.max(totalMilestonesCount, 1)) * 100);

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      {/* Top Banner with Stats & Exact Fixed Branding */}
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Financieel Groeipad & Herinvestering
          </h1>
          <p className="text-xs text-slate-400">
            Van Vinted startkapitaal tot cyclische opschaling naar 6 woningen
          </p>
        </div>

        {/* Fixed Badges from Original Template */}
        <div className="flex items-center gap-3">
          <div 
            id="badge-cash-reserve"
            className="flex items-center gap-2 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-500/30 text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-300">
              Kasreserve: <strong className="text-white">€ 18.000</strong>
            </span>
          </div>

          <div 
            id="badge-total-invest"
            className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs"
          >
            <span>
              Totaal Investering: <strong id="total-invest" className="text-emerald-400">€ 27.400 + Herinvestering</strong>
            </span>
          </div>

          <button
            id="btn-print"
            onClick={onPrint}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition border border-slate-700 text-xs flex items-center gap-1"
            title="Afdrukken / Opslaan als PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Print</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-bar with Fixed Tabs */}
      <div className="bg-slate-950/70 border-t border-slate-800/80 px-4 py-2">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              id="nav-tab-roadmap"
              onClick={() => setActiveTab('roadmap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'roadmap'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Tijdlijn & Roadmap
            </button>

            <button
              id="nav-tab-model"
              onClick={() => setActiveTab('model')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'model'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Financieel Model (6 Woningen)
            </button>

            <button
              id="nav-tab-streams"
              onClick={() => setActiveTab('streams')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'streams'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Inkomstenstromen (3 Pijlers)
            </button>

            <button
              id="nav-tab-milestones"
              onClick={() => setActiveTab('milestones')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'milestones'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mijlpalen</span>
              <span className="ml-1 px-1.5 py-0.2 bg-slate-800 text-[10px] rounded-full text-emerald-400 font-mono">
                {completedMilestonesCount}/{totalMilestonesCount}
              </span>
            </button>
          </nav>

          {/* Quick Progress indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">Voortgang:</span>
            <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden border border-slate-700/60">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-emerald-400 font-mono text-[11px] font-bold">{progressPercentage}%</span>
          </div>
        </div>
      </div>
    </header>
  );
};
