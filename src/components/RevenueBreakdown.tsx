import React from 'react';
import { Sparkles, DollarSign, TrendingUp, Building2, ShieldCheck, Zap, PieChart, ArrowUpRight } from 'lucide-react';

export const RevenueBreakdown: React.FC = () => {
  const formatEuro = (val: number) => {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  };

  const streams = [
    {
      id: 'boostplug',
      name: 'Boostplug Tech & B2B Integratie',
      monthlyPerUnit: 1500,
      units: 6,
      monthlyTotal: 9000,
      annualTotal: 108000,
      percentage: '57.1%',
      badge: 'Grootste Cashflow Generator',
      color: 'indigo',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      icon: Zap,
      description: 'Hoogwaardige technologische, smart-living en zakelijke add-on diensten per locatie. Levert € 1.500 per pand op per maand.',
      benefits: [
        '€ 1.500 vaste maandomzet per aangesloten woning',
        'Direct schaalbaar bij elke nieuwe woning in de vloot',
        'Hoge operationele marges met minimale fysieke slijtage'
      ],
      role: 'Hoofdinkomstenbron voor snelle kasopbouw en cyclische herinvestering'
    },
    {
      id: 'rooms',
      name: 'Kamerverhuur & Residentieel',
      monthlyPerUnit: 750,
      units: 6,
      monthlyTotal: 4500,
      annualTotal: 54000,
      percentage: '28.6%',
      badge: 'Stabiele Basis & Rust',
      color: 'emerald',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: Building2,
      description: 'Betrouwbare, continue kamerverhuur aan studenten, expats en young professionals voor € 750 per maand per woning.',
      benefits: [
        'Vaste maandelijkse gegarandeerde basisinkomsten (€ 4.500 p/m)',
        'Dekt vaste lasten en operationele kosten van alle 6 panden',
        'Lange verblijfsduur zorgt voor lage leegstand'
      ],
      role: 'Risicoverlagend fundament dat zorgt dat vaste lasten altijd 100% gedekt zijn'
    },
    {
      id: 'bnb',
      name: 'BnB & Short-Stay Toerisme',
      monthlyPerUnit: 375,
      units: 6,
      monthlyTotal: 2250,
      annualTotal: 27000,
      percentage: '14.3%',
      badge: 'Flexibele Upside & Toerisme',
      color: 'cyan',
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      icon: Sparkles,
      description: 'Korte verblijven, vakantiegasten en weekendboekingen verspreid over de vloot. Levert gemiddeld € 2.250 per maand op.',
      benefits: [
        'Extra liquiditeit tijdens hoogseizoenen en piekdagen',
        'Flexibele tariefstelling (dynamic pricing)',
        'Versterkt het rendement van de al aanwezige kamers'
      ],
      role: 'Flexibele bonus cashflow die direct naar de operationele buffer vloeit'
    }
  ];

  return (
    <div className="space-y-8" id="revenue-streams-deepdive">
      {/* Header */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <PieChart className="w-4 h-4" />
              Gedetailleerde Analyse
            </span>
            <h2 className="text-2xl font-black text-slate-100 mt-1">
              De 3 Inkomstenpijlers van de Vloot (6 Woningen)
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Totale gezamenlijke portefeuille opbrengst: <strong className="text-white">€ 15.750 p/m</strong> (€ 189.000 p/j).
            </p>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Maandtotaal</span>
              <span className="text-lg font-bold text-cyan-400 font-mono">€ 15.750</span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Jaartotaal</span>
              <span className="text-lg font-bold text-indigo-400 font-mono">€ 189.000</span>
            </div>
          </div>
        </div>

        {/* Visual Bar Breakdown */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Portfolio Verdeling:</span>
            <span>Boostplug (57%) + Kamerverhuur (29%) + BnB (14%) = 100%</span>
          </div>
          <div className="w-full h-4 bg-slate-950 rounded-full overflow-hidden flex border border-slate-800 p-0.5 gap-0.5">
            <div 
              className="bg-indigo-500 rounded-l-full transition-all duration-700 hover:opacity-90" 
              style={{ width: '57.1%' }} 
              title="Boostplug: € 9.000 p/m (57.1%)"
            />
            <div 
              className="bg-emerald-500 transition-all duration-700 hover:opacity-90" 
              style={{ width: '28.6%' }} 
              title="Kamerverhuur: € 4.500 p/m (28.6%)"
            />
            <div 
              className="bg-cyan-500 rounded-r-full transition-all duration-700 hover:opacity-90" 
              style={{ width: '14.3%' }} 
              title="BnB: € 2.250 p/m (14.3%)"
            />
          </div>
        </div>
      </div>

      {/* 3 Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {streams.map((stream) => {
          const Icon = stream.icon;
          return (
            <div 
              key={stream.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${stream.badgeBg}`}>
                    {stream.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{stream.percentage}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-slate-300 shrink-0" />
                  {stream.name}
                </h3>

                <div className="my-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 flex justify-between">
                    <span>Per woning:</span>
                    <strong className="text-slate-200">{formatEuro(stream.monthlyPerUnit)} p/m</strong>
                  </div>
                  <div className="text-sm text-slate-200 flex justify-between mt-1 pt-1 border-t border-slate-800">
                    <span>Voor 6 woningen:</span>
                    <strong className="text-cyan-400 font-bold">{formatEuro(stream.monthlyTotal)} p/m</strong>
                  </div>
                  <div className="text-xs text-slate-500 flex justify-between mt-0.5">
                    <span>Jaaromzet:</span>
                    <span className="font-mono text-slate-300">{formatEuro(stream.annualTotal)} p/j</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {stream.description}
                </p>

                <div className="space-y-2 text-xs">
                  <h4 className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                    Kernvoordelen & Kenmerken:
                  </h4>
                  <ul className="space-y-1.5">
                    {stream.benefits.map((b, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-1.5 leading-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 italic">
                <strong>Rol in vloot:</strong> {stream.role}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cashflow Loop Explained */}
      <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6">
        <h3 className="text-base font-bold text-slate-100 mb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          Waarom Deze Drievoudige Combinatie Werkt
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          Door <strong>Kamerverhuur</strong> (€ 4.500/mnd) in te zetten als risicoloze bodem voor vaste lasten, en <strong>BnB</strong> (€ 2.250/mnd) voor flexibele upside, kan de krachtige <strong>Boostplug</strong> (€ 9.000/mnd) bijna integraal worden aangewend voor vermogensgroei, winstuitkering en de versnelde aankoop/aanhuur van de volgende vastgoedunits.
        </p>
      </div>
    </div>
  );
};
