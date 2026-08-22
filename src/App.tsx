/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { OverviewCards } from './components/OverviewCards';
import { TimelineSection } from './components/TimelineSection';
import { FinancialModel } from './components/FinancialModel';
import { RevenueBreakdown } from './components/RevenueBreakdown';
import { MilestoneProgress } from './components/MilestoneProgress';
import { PhaseModal } from './components/PhaseModal';
import { INITIAL_PHASES } from './data/roadmapData';
import { Phase } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'model' | 'streams' | 'milestones'>('roadmap');
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  // Phases with milestones persistence
  const [phases, setPhases] = useState<Phase[]>(() => {
    const saved = localStorage.getItem('financial_roadmap_phases');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return INITIAL_PHASES.map((initial) => {
          const found = parsed.find((p: Phase) => p.id === initial.id);
          if (found && found.milestones) {
            return {
              ...initial,
              milestones: initial.milestones.map((m) => {
                const savedM = found.milestones.find((sm: any) => sm.id === m.id);
                return savedM ? { ...m, completed: savedM.completed } : m;
              })
            };
          }
          return initial;
        });
      } catch {
        return INITIAL_PHASES;
      }
    }
    return INITIAL_PHASES;
  });

  // Persist phases milestones
  useEffect(() => {
    localStorage.setItem('financial_roadmap_phases', JSON.stringify(phases));
  }, [phases]);

  // Toggle milestone completion
  const handleToggleMilestone = (phaseId: number, milestoneId: string) => {
    setPhases((prev) =>
      prev.map((phase) => {
        if (phase.id === phaseId) {
          return {
            ...phase,
            milestones: phase.milestones.map((m) =>
              m.id === milestoneId ? { ...m, completed: !m.completed } : m
            )
          };
        }
        return phase;
      })
    );
  };

  // Reset milestones
  const handleResetMilestones = () => {
    if (window.confirm('Weet je zeker dat je alle afgevinkte mijlpalen wilt resetten?')) {
      setPhases(INITIAL_PHASES);
    }
  };

  // Print/Export
  const handlePrint = () => {
    window.print();
  };

  // Compute milestone counts
  let completedMilestonesCount = 0;
  let totalMilestonesCount = 0;
  phases.forEach((p) => {
    p.milestones.forEach((m) => {
      totalMilestonesCount++;
      if (m.completed) completedMilestonesCount++;
    });
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedMilestonesCount={completedMilestonesCount}
        totalMilestonesCount={totalMilestonesCount}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        
        {/* Fixed Overview Cards */}
        <OverviewCards
          onOpenModel={() => setActiveTab('model')}
          onOpenStreams={() => setActiveTab('streams')}
        />

        {/* Tab Views */}
        {activeTab === 'roadmap' && (
          <TimelineSection
            phases={phases}
            onToggleMilestone={handleToggleMilestone}
            onOpenPhaseDetail={(phase) => setSelectedPhase(phase)}
          />
        )}

        {activeTab === 'model' && (
          <FinancialModel />
        )}

        {activeTab === 'streams' && (
          <RevenueBreakdown />
        )}

        {activeTab === 'milestones' && (
          <MilestoneProgress
            phases={phases}
            onToggleMilestone={handleToggleMilestone}
            onResetMilestones={handleResetMilestones}
          />
        )}

      </main>

      {/* Phase Modal (if selected) */}
      <PhaseModal
        phase={selectedPhase}
        onClose={() => setSelectedPhase(null)}
        onToggleMilestone={handleToggleMilestone}
      />

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-12 py-4 text-center text-xs text-slate-500">
        <p>Jouw Persoonlijke Groei & Investeringsplan • Gemaakt in Canvas</p>
      </footer>
    </div>
  );
}
