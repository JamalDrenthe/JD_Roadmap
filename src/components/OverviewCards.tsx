import React from 'react';
import { ShoppingBag, Building2, Landmark, ShieldCheck } from 'lucide-react';

interface OverviewCardsProps {
  onOpenModel?: () => void;
  onOpenStreams?: () => void;
}

export const OverviewCards: React.FC<OverviewCardsProps> = ({
  onOpenModel,
  onOpenStreams
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10" id="overview-cards">
      {/* Kaart 1: Startkapitaal */}
      <div 
        id="card-startkapitaal"
        className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 shadow-sm hover:border-emerald-500/40 transition"
      >
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center justify-between">
          <span>Startkapitaal</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
            0% Schuld
          </span>
        </p>
        <p className="text-2xl font-bold text-emerald-400 mt-1">€ 800+</p>
        <p className="text-[11px] text-slate-500 mt-1">Via Vinted verkoop</p>
      </div>

      {/* Kaart 2: Maandelijkse Inkomsten */}
      <div 
        id="card-maandinkomsten"
        onClick={onOpenStreams}
        className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 shadow-sm hover:border-cyan-500/40 transition cursor-pointer"
        title="Klik voor gedetailleerde uitsplitsing"
      >
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center justify-between">
          <span>Totaal Maandelijkse Inkomsten (6 Woningen)</span>
        </p>
        <p className="text-2xl font-bold text-cyan-400 mt-1">€ 15.750 p/m</p>
        <p className="text-[11px] text-slate-500 mt-1">
          BnB (€2.250) + Kamers (€4.500) + Boostplug (€9.000)
        </p>
      </div>

      {/* Kaart 3: Jaarlijkse Omzet */}
      <div 
        id="card-jaaromzet"
        onClick={onOpenModel}
        className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 shadow-sm hover:border-indigo-500/40 transition cursor-pointer"
        title="Klik voor financieel model"
      >
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center justify-between">
          <span>Totaal Jaarlijkse Omzet</span>
        </p>
        <p className="text-2xl font-bold text-indigo-400 mt-1">€ 189.000 p/j</p>
        <p className="text-[11px] text-slate-500 mt-1">Inclusief alle stromen voor 6 woningen</p>
      </div>
    </div>
  );
};
