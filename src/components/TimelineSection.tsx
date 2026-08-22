import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Circle, AlertCircle, Lightbulb, TrendingUp, Sparkles, Shield, DollarSign } from 'lucide-react';
import { Phase, MilestoneItem } from '../types';
import confetti from 'canvas-confetti';

interface TimelineSectionProps {
  phases: Phase[];
  onToggleMilestone: (phaseId: number, milestoneId: string) => void;
  onOpenPhaseDetail: (phase: Phase) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  phases,
  onToggleMilestone,
  onOpenPhaseDetail
}) => {
  // Track which phases have expanded detailed operational steps
  const [expandedPhases, setExpandedPhases] = useState<{ [key: number]: boolean }>({
    0: true,
    4: true,
    5: true
  });

  const toggleExpand = (phaseId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  const handleMilestoneClick = (phaseId: number, milestone: MilestoneItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleMilestone(phaseId, milestone.id);
    if (!milestone.completed) {
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#10B981', '#06B6D4', '#6366F1', '#8B5CF6']
        });
      } catch {
        // Safe fallback
      }
    }
  };

  // Color mapper helper for styling
  const getColorStyles = (colorTheme: Phase['colorTheme']) => {
    switch (colorTheme) {
      case 'emerald':
        return {
          dotBg: 'bg-emerald-500',
          badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          borderHover: 'hover:border-emerald-500/50',
          amountColor: 'text-emerald-400',
          accentGlow: 'from-emerald-500/10 to-transparent'
        };
      case 'cyan':
        return {
          dotBg: 'bg-cyan-500',
          badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
          borderHover: 'hover:border-cyan-500/50',
          amountColor: 'text-cyan-400',
          accentGlow: 'from-cyan-500/10 to-transparent'
        };
      case 'blue':
        return {
          dotBg: 'bg-blue-500',
          badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          borderHover: 'hover:border-blue-500/50',
          amountColor: 'text-blue-400',
          accentGlow: 'from-blue-500/10 to-transparent'
        };
      case 'teal':
        return {
          dotBg: 'bg-teal-500',
          badgeBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
          borderHover: 'hover:border-teal-500/50',
          amountColor: 'text-teal-400',
          accentGlow: 'from-teal-500/10 to-transparent'
        };
      case 'indigo':
        return {
          dotBg: 'bg-indigo-500',
          badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
          borderHover: 'hover:border-indigo-500/50',
          amountColor: 'text-indigo-400',
          accentGlow: 'from-indigo-500/10 to-transparent'
        };
      case 'purple':
        return {
          dotBg: 'bg-purple-500',
          badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          borderHover: 'hover:border-purple-500/50',
          amountColor: 'text-purple-400',
          accentGlow: 'from-purple-500/10 to-transparent'
        };
      default:
        return {
          dotBg: 'bg-emerald-500',
          badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          borderHover: 'hover:border-emerald-500/50',
          amountColor: 'text-emerald-400',
          accentGlow: 'from-emerald-500/10 to-transparent'
        };
    }
  };

  return (
    <section className="relative" aria-label="Financiële Tijdlijn">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
            <span>Stap-voor-stap Groeitijdlijn & Executie</span>
            <span className="text-xs font-normal text-slate-400 px-2 py-0.5 bg-slate-800 rounded-md border border-slate-700">
              6 Fasen
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Van risicoloze opstart tot continue herinvestering en stabiele cashflow
          </p>
        </div>

        {/* Expand / Collapse all helper */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const allExpanded = Object.keys(expandedPhases).length === phases.length;
              if (allExpanded) {
                setExpandedPhases({});
              } else {
                const next: { [k: number]: boolean } = {};
                phases.forEach(p => (next[p.id] = true));
                setExpandedPhases(next);
              }
            }}
            className="text-xs text-slate-400 hover:text-cyan-400 bg-slate-900 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-lg transition flex items-center gap-1"
          >
            {Object.keys(expandedPhases).length === phases.length ? 'Alles inklappen' : 'Alle details tonen'}
          </button>
        </div>
      </div>

      {/* Tijdlijn sectie container */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 via-cyan-500 via-teal-500 via-indigo-500 to-purple-500">
        
        {phases.map((phase) => {
          const colors = getColorStyles(phase.colorTheme);
          const isExpanded = !!expandedPhases[phase.id];
          const completedCount = phase.milestones.filter(m => m.completed).length;
          const isAllMilestonesDone = phase.milestones.length > 0 && completedCount === phase.milestones.length;

          return (
            <div 
              key={phase.id} 
              id={`timeline-phase-${phase.id}`}
              className="relative group"
            >
              {/* Tijdlijn ronde indicator */}
              <div 
                className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full ${colors.dotBg} border-4 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-950 shadow-md transition-transform duration-300 group-hover:scale-110`}
              >
                {isAllMilestonesDone ? '✓' : phase.number}
              </div>

              {/* Fase kaart */}
              <div 
                className={`bg-slate-900/80 border border-slate-800 rounded-2xl p-5 ${colors.borderHover} transition duration-300 shadow-sm relative overflow-hidden`}
              >
                {/* Header van de fasekaart */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${colors.badgeBg}`}>
                      {phase.badge}
                    </span>
                    {isAllMilestonesDone && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Voltooid
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {phase.investmentAmount}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {phase.subtitle}
                    </p>
                  </div>
                  
                  {/* Expand button */}
                  <button
                    onClick={(e) => toggleExpand(phase.id, e)}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition"
                    title={isExpanded ? "Minder tonen" : "Gedetailleerde stappen tonen"}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {phase.description}
                </p>

                {/* Fase 5 Specifieke Grid (BnB, Kamerverhuur, Boostplug) */}
                {phase.id === 5 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3" id="phase-5-revenue-grid">
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 hover:border-emerald-500/40 transition">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide block font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        BnB (6 woningen)
                      </span>
                      <span className="text-sm font-semibold text-slate-200 mt-1 block">
                        € 2.250 p/m <span className="text-xs text-slate-400 block font-normal">(€ 27.000 p/j)</span>
                      </span>
                    </div>

                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide block font-semibold flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-cyan-400" />
                        Kamerverhuur (6 woningen)
                      </span>
                      <span className="text-sm font-semibold text-slate-200 mt-1 block">
                        € 750 × 6 = <span className="text-emerald-400 font-bold">€ 4.500 p/m</span>{' '}
                        <span className="text-xs text-slate-400 block font-normal">(€ 54.000 p/j)</span>
                      </span>
                    </div>

                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wide block font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-indigo-400" />
                        Boostplug (6 woningen)
                      </span>
                      <span className="text-sm font-semibold text-slate-200 mt-1 block">
                        € 1.500 × 6 = <span className="text-cyan-400 font-bold">€ 9.000 p/m</span>{' '}
                        <span className="text-xs text-slate-400 block font-normal">(€ 108.000 p/j)</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Uitklapbare gedetailleerde stappen en checklist */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-800/70 space-y-4 text-xs">
                    {/* Actiestappen */}
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        Operationele Uitvoeringsstappen:
                      </h4>
                      <ul className="space-y-1.5 pl-1">
                        {phase.detailedSteps.map((step, idx) => (
                          <li key={idx} className="text-slate-400 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mijlpalen checkbox tracker */}
                    <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Fase Mijlpalen:
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {completedCount}/{phase.milestones.length} voltooid
                        </span>
                      </div>
                      
                      <div className="space-y-1.5">
                        {phase.milestones.map((m) => (
                          <button
                            key={m.id}
                            onClick={(e) => handleMilestoneClick(phase.id, m, e)}
                            className={`w-full text-left p-2 rounded-lg transition flex items-center gap-2.5 border ${
                              m.completed
                                ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                                : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                            }`}
                          >
                            {m.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                            )}
                            <span className={`text-xs ${m.completed ? 'line-through opacity-80' : ''}`}>
                              {m.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Operationele Pro-Tip */}
                    {phase.operationalTip && (
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2 text-slate-400">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong className="text-slate-300">Groeitip:</strong> {phase.operationalTip}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Footer samenvatting balk van de fase */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                  <span className="text-slate-400">{phase.targetOrReturnLabel}</span>
                  <strong className={`${colors.amountColor} text-sm font-bold tracking-tight`}>
                    {phase.targetOrReturnAmount}
                  </strong>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};
