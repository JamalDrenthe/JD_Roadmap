export interface MilestoneItem {
  id: string;
  title: string;
  completed: boolean;
  notes?: string;
}

export interface RevenueStreamDetail {
  title: string;
  perUnitMonthly: number;
  totalMonthly: number;
  totalAnnual: number;
  description: string;
  tagColor: string;
}

export interface Phase {
  id: number;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  investmentAmount: string;
  investmentRaw: number;
  targetOrReturnLabel: string;
  targetOrReturnAmount: string;
  description: string;
  detailedSteps: string[];
  keyTakeaway: string;
  colorTheme: 'emerald' | 'cyan' | 'blue' | 'teal' | 'indigo' | 'purple';
  streams?: RevenueStreamDetail[];
  milestones: MilestoneItem[];
  riskNote?: string;
  operationalTip?: string;
}

export interface SimulationParams {
  propertiesCount: number;
  bnbPerProperty: number;
  roomRentPerProperty: number;
  boostplugPerProperty: number;
  monthlyExpensePerProperty: number;
  reinvestmentRate: number; // percentage
}
