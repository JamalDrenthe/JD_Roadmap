import React from 'react';
import { X, CheckCircle2, Circle, Lightbulb, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import { Phase } from '../types';

interface PhaseModalProps {
  phase: Phase | null;
  onClose: () => void;
  onToggleMilestone: (phaseId: number, milestoneId: string) => void;
}

export const PhaseModal: React.FC<PhaseModalProps> = ({
  phase,
  onClose,
  onToggleMilestone
}) => {
  if (!phase) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-800 text-slate-300">
                {phase.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">Investering: {phase.investmentAmount}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-100 mt-1">{phase.title}</h3>
            <p className="text-xs text-slate-400">{phase.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description & Key Strategy */}
        <div className="space-y-3">
          <p className="text-sm text-slate-300 leading-relaxed">
            {phase.description}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-100 block mb-0.5">Strategische Kernboodschap:</strong>
              {phase.keyTakeaway}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Stap-voor-stap Uitvoering
          </h4>
          <div className="space-y-2">
            {phase.detailedSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 shrink-0">
                  {idx + 1}
                </span>
                <span className="mt-0.5">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Checkable in Modal */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Mijlpalen voor deze fase
          </h4>
          <div className="space-y-1.5">
            {phase.milestones.map((m) => (
              <button
                key={m.id}
                onClick={() => onToggleMilestone(phase.id, m.id)}
                className={`w-full text-left p-2.5 rounded-lg transition flex items-center gap-2.5 border text-xs ${
                  m.completed
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {m.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                )}
                <span className={m.completed ? 'line-through opacity-80' : ''}>{m.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Target result footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">{phase.targetOrReturnLabel}</span>
          <span className="text-sm font-bold text-emerald-400 font-mono">{phase.targetOrReturnAmount}</span>
        </div>
      </div>
    </div>
  );
};
