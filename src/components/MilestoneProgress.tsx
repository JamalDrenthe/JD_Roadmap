import React, { useState } from 'react';
import { CheckCircle2, Circle, Sparkles, Filter, Award, RotateCcw, CheckSquare, Layers } from 'lucide-react';
import { Phase, MilestoneItem } from '../types';
import confetti from 'canvas-confetti';

interface MilestoneProgressProps {
  phases: Phase[];
  onToggleMilestone: (phaseId: number, milestoneId: string) => void;
  onResetMilestones: () => void;
}

export const MilestoneProgress: React.FC<MilestoneProgressProps> = ({
  phases,
  onToggleMilestone,
  onResetMilestones
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const allMilestones: { phase: Phase; milestone: MilestoneItem }[] = [];
  phases.forEach(p => {
    p.milestones.forEach(m => {
      allMilestones.push({ phase: p, milestone: m });
    });
  });

  const completedCount = allMilestones.filter(x => x.milestone.completed).length;
  const totalCount = allMilestones.length;
  const percentage = Math.round((completedCount / Math.max(totalCount, 1)) * 100);

  const filteredItems = allMilestones.filter(item => {
    if (filter === 'pending') return !item.milestone.completed;
    if (filter === 'completed') return item.milestone.completed;
    return true;
  });

  const handleToggle = (phaseId: number, m: MilestoneItem) => {
    onToggleMilestone(phaseId, m.id);
    if (!m.completed) {
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.7 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  return (
    <div className="space-y-6" id="milestones-checklist-section">
      
      {/* Header & Stats */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Executie & Mijlpalen Tracker
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">
              Jouw Persoonlijke Voortgangskaart
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Vink bereikte doelen af van Fase 0 (Vinted start) tot Fase 5 (6 woningen gerealiseerd).
            </p>
          </div>

          {/* Quick stats badge */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Totale Voortgang</span>
              <span className="text-xl font-bold text-emerald-400 font-mono">{percentage}%</span>
            </div>
            <button
              onClick={onResetMilestones}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 border border-slate-700 transition"
              title="Reset alle vinkjes"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-teal-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
            <span>{completedCount} van de {totalCount} mijlpalen voltooid</span>
            <span>{totalCount - completedCount} openstaand</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              filter === 'all' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Alle Mijlpalen ({totalCount})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              filter === 'pending' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Te Doen ({totalCount - completedCount})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1.5 rounded-lg font-medium transition ${
              filter === 'completed' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Voltooid ({completedCount})
          </button>
        </div>
      </div>

      {/* Checklist by Phase */}
      <div className="space-y-4">
        {phases.map((phase) => {
          const phaseItems = phase.milestones.filter(m => {
            if (filter === 'pending') return !m.completed;
            if (filter === 'completed') return m.completed;
            return true;
          });

          if (phaseItems.length === 0) return null;

          return (
            <div 
              key={phase.id} 
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300 font-mono">
                    {phase.number}
                  </span>
                  <h3 className="font-bold text-slate-200 text-sm">
                    {phase.title} <span className="text-xs font-normal text-slate-400">({phase.badge})</span>
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {phase.milestones.filter(m => m.completed).length}/{phase.milestones.length}
                </span>
              </div>

              <div className="space-y-2">
                {phaseItems.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleToggle(phase.id, m)}
                    className={`w-full text-left p-3 rounded-xl transition flex items-center gap-3 border ${
                      m.completed
                        ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    {m.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-600 shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className={`text-xs font-medium ${m.completed ? 'line-through opacity-70' : ''}`}>
                        {m.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
