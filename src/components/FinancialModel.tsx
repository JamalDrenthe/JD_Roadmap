import React from 'react';
import { Calculator, CheckCircle2, TrendingUp, Sparkles, Building, Landmark, ShieldCheck, Zap, Layers } from 'lucide-react';

export const FinancialModel: React.FC = () => {
  return (
    <div className="space-y-6" id="fixed-financial-model">
      
      {/* Header Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Calculator className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">
                Vast Financieel Model & Portefeuille Berekening (6 Woningen)
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Exacte vaste cijfers en cyclische herinvesteringsstructuur conform het goedgekeurde groeiplan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
              Vaste Vloot: 6 Woningen
            </span>
          </div>
        </div>
      </div>

      {/* Main Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Pijler 1: Boostplug */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-indigo-500/40 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              1. Boostplug Integratie
            </span>
            <span className="text-[10px] font-mono text-slate-400">€ 1.500 × 6</span>
          </div>
          <p className="text-2xl font-black text-slate-100 mt-1">
            € 9.000 <span className="text-sm font-normal text-indigo-300">p/m</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            € 108.000 per jaar (57,1% van totale omzet)
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            Tech & B2B add-ons over alle 6 locaties
          </div>
        </div>

        {/* Pijler 2: Kamerverhuur */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-emerald-500/40 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" />
              2. Kamerverhuur
            </span>
            <span className="text-[10px] font-mono text-slate-400">€ 750 × 6</span>
          </div>
          <p className="text-2xl font-black text-slate-100 mt-1">
            € 4.500 <span className="text-sm font-normal text-emerald-300">p/m</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            € 54.000 per jaar (28,6% van totale omzet)
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            Stabiele maandelijkse onderhuur & dekking vaste lasten
          </div>
        </div>

        {/* Pijler 3: BnB Short-Stay */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm hover:border-cyan-500/40 transition">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              3. BnB Short-Stay
            </span>
            <span className="text-[10px] font-mono text-slate-400">Vloot Totaal</span>
          </div>
          <p className="text-2xl font-black text-slate-100 mt-1">
            € 2.250 <span className="text-sm font-normal text-cyan-300">p/m</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            € 27.000 per jaar (14,3% van totale omzet)
          </p>
          <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            Flexibele toeristische & weekend upside
          </div>
        </div>

      </div>

      {/* Totalen en Balans Overzicht */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
              Totale Maandomzet (Vast)
            </span>
            <span className="text-2xl font-extrabold text-cyan-400 mt-1 block font-mono">
              € 15.750
            </span>
            <span className="text-[10px] text-slate-500 mt-1 block">€ 2.250 + € 4.500 + € 9.000</span>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
              Totale Jaaromzet (Vast)
            </span>
            <span className="text-2xl font-extrabold text-indigo-400 mt-1 block font-mono">
              € 189.000
            </span>
            <span className="text-[10px] text-slate-500 mt-1 block">12 × € 15.750 per jaar</span>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
              Kasreserve / Retour
            </span>
            <span className="text-2xl font-extrabold text-emerald-400 mt-1 block font-mono">
              € 18.000
            </span>
            <span className="text-[10px] text-slate-500 mt-1 block">Directe kamerteruggave in kas</span>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
              Totale Investering
            </span>
            <span className="text-2xl font-extrabold text-slate-100 mt-1 block font-mono">
              € 27.400
            </span>
            <span className="text-[10px] text-slate-500 mt-1 block">+ cyclische herinvestering</span>
          </div>

        </div>

        {/* Cyclische Herinvestering Samenvatting */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Hoe het vliegwiel van € 0 naar 6 woningen werkt:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-emerald-400 block mb-1">1. Startkapitaal</strong>
              Start met € 800+ via Vinted, doorbouwend naar Cybersecurity (€ 420) en Immigratie (€ 900).
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-cyan-400 block mb-1">2. WoningVrij Opstart</strong>
              € 3.400 allocatie activeert € 24k werkkapitaal voor de eerste 3 woningen (€ 21k investering + € 3k buffer).
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <strong className="text-purple-400 block mb-1">3. Cyclische Herinvestering</strong>
              De € 18k kamerteruggave wordt 1-op-1 herbelegd voor woningen 4, 5 en 6 voor de vaste eindsituatie van € 189.000 p/j.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
