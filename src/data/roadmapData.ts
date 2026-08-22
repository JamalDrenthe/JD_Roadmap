import { Phase, SimulationParams } from '../types';

export const DEFAULT_SIMULATION: SimulationParams = {
  propertiesCount: 6,
  bnbPerProperty: 375, // €2.250 / 6 = €375/woning gemiddeld
  roomRentPerProperty: 750, // €750/woning
  boostplugPerProperty: 1500, // €1.500/woning
  monthlyExpensePerProperty: 650, // exploitatie/huur/nutsvoorzieningen per pand
  reinvestmentRate: 40,
};

export const INITIAL_PHASES: Phase[] = [
  {
    id: 0,
    number: '0',
    badge: 'Startfase',
    title: 'Vinted Verkoop',
    subtitle: 'Nul-risico startkapitaal generatie via overtollige bezittingen',
    investmentAmount: '€ 0',
    investmentRaw: 0,
    targetOrReturnLabel: 'Doel Kapitaal:',
    targetOrReturnAmount: 'Minimaal € 800',
    description: 'Verkoop kleding, elektronica en ongebruikte artikelen om het allereerste startkapitaal risicoloos bij elkaar te krijgen.',
    keyTakeaway: 'Volledig gefinancierd uit eigen middelen zonder externe schulden of leningen.',
    colorTheme: 'emerald',
    detailedSteps: [
      'Inventarisatie van overtollige kleding, sneakers en huishoudelijke artikelen.',
      'Scherpe productfoto’s maken bij daglicht en pakkende SEO-zoektermen gebruiken in Vinted/Marktplaats.',
      'Dagelijkse verzendingen optimaliseren met gebundelde pakketkorting.',
      'Directe uitbetaling doorsluizen naar een dedicated zakelijke spaarpot (doel: € 800 - € 1.200).'
    ],
    milestones: [
      { id: 'm0-1', title: 'Minimaal 30 artikelen fotograferen en uploaden', completed: false },
      { id: 'm0-2', title: 'Eerste € 250 netto winst gerealiseerd', completed: false },
      { id: 'm0-3', title: 'Doel van € 800+ bereikt en vastgezet voor Fase 1', completed: false },
    ],
    operationalTip: 'Bundel advertenties en reageer binnen 10 minuten op biedingen om de Vinted-algoritmescore te maximaliseren.'
  },
  {
    id: 1,
    number: '1',
    badge: 'Fase 1',
    title: 'Cybersecurity + RJP',
    subtitle: 'Digitale dienstverlening & affiliate/leadgeneratie model',
    investmentAmount: '€ 420',
    investmentRaw: 420,
    targetOrReturnLabel: 'Verwachte Maandomzet:',
    targetOrReturnAmount: '€ 250 – € 7.000 p/m',
    description: 'Eerste officiële investering vanuit het opgebouwde Vinted startkapitaal voor specialistische tooling, domeinen en outreach.',
    keyTakeaway: 'Snelle ROI met hoge marges en lage lopende overheadkosten.',
    colorTheme: 'cyan',
    detailedSteps: [
      'Licenties en tools activeren voor cybersecurity screening & RJP (Realistic Job Preview) audits.',
      'Gerichte B2B outreach naar MKB-bedrijven met concrete kwetsbaarheden en compliance noden.',
      'Aanbieden van snelle quick-scans met upsell naar maandelijkse monitoring retainers.',
      'Winsten herinvesteren in marketing automation en outreach tools.'
    ],
    milestones: [
      { id: 'm1-1', title: 'Tooling & outreach accounts ingericht (€ 420 investering)', completed: false },
      { id: 'm1-2', title: 'Eerste 3 betalende klanten binnengehaald', completed: false },
      { id: 'm1-3', title: 'Stabiele maandelijkse cashflow van minimaal € 1.500 bereikt', completed: false },
    ],
    operationalTip: 'Focus op high-ticket audits voor snelle liquiditeitsopbouw richting Fase 2.'
  },
  {
    id: 2,
    number: '2',
    badge: 'Fase 2',
    title: 'Immigratie Platformen',
    subtitle: 'Internationale relocatie-, visum- en huisvestingsportals',
    investmentAmount: '€ 900',
    investmentRaw: 900,
    targetOrReturnLabel: 'Verwachte Maandomzet:',
    targetOrReturnAmount: '€ 5.000 – € 20.000 p/m',
    description: 'Opschaling van activiteiten richting gespecialiseerde immigratiediensten, relocatie-assistentie en platformen voor expats en kennismigranten.',
    keyTakeaway: 'Schaalbare platformmodellen met hoge transactiewaarden per cliënt.',
    colorTheme: 'blue',
    detailedSteps: [
      'Lancering van gespecialiseerde landingspagina’s voor relocatie, huisvesting en documentatie.',
      'Partnerschappen opzetten met lokale verhuurders, taalscholen en juridische adviseurs.',
      'Geautomatiseerde lead intake en betaalde intake-consultaties aanbieden.',
      'Systematisch kapitaal reserveren voor de WoningVrij transitie.'
    ],
    milestones: [
      { id: 'm2-1', title: 'Relocatie portaal & betaalkoppelingen live (€ 900)', completed: false },
      { id: 'm2-2', title: 'Eerste 10 expat-pakketten succesvol afgehandeld', completed: false },
      { id: 'm2-3', title: 'Maandelijks € 5.000+ winst gerealiseerd', completed: false },
    ],
    operationalTip: 'Sluit affiliate contracten met corporate relocatie managers voor continue lead-instroom.'
  },
  {
    id: 3,
    number: '3',
    badge: 'Fase 3',
    title: 'WoningVrij Investering',
    subtitle: 'Kapitaalallocatie & hefboomconstructie richting € 24.000',
    investmentAmount: '€ 3.400',
    investmentRaw: 3400,
    targetOrReturnLabel: 'Totale Investering Fase:',
    targetOrReturnAmount: '€ 3.400 (creëert € 24.000)',
    description: 'Gerichte investering binnen WoningVrij ter waarde van € 900 + € 500 + € 2.000, waarmee de benodigde hefboom van € 24.000 wordt gecreëerd.',
    keyTakeaway: 'Slimme allocatie van € 3.400 ontgrendelt een operationeel werkkapitaal van € 24.000.',
    colorTheme: 'teal',
    detailedSteps: [
      'Tranche 1: € 900 juridische & contractuele inrichting WoningVrij.',
      'Tranche 2: € 500 acquisitie- en scoutingtools voor geschikte huur- en verhuurpanden.',
      'Tranche 3: € 2.000 waarborgreserves, intentieovereenkomsten en platformintegratie.',
      'Sluiten van de financieringslus om met € 24.000 operationeel vermogen de markt op te gaan.'
    ],
    milestones: [
      { id: 'm3-1', title: 'Allocatie Tranche 1 (€ 900) & Tranche 2 (€ 500) afgerond', completed: false },
      { id: 'm3-2', title: 'Tranche 3 (€ 2.000) toegekend aan contractreserves', completed: false },
      { id: 'm3-3', title: 'Totale werkkapitaalpot van € 24.000 gereed voor Fase 4', completed: false },
    ],
    operationalTip: 'Zorg dat alle huur- en exploitatiecontracten waterdicht zijn afgestemd op zowel BnB als kamerverhuur.'
  },
  {
    id: 4,
    number: '4',
    badge: 'Fase 4',
    title: 'WoningVry Opstart',
    subtitle: 'Eerste 3 woningen vloot & directe € 18.000 kasretour',
    investmentAmount: 'Startkapitaal: € 24.000',
    investmentRaw: 21000,
    targetOrReturnLabel: 'Directe kamerteruggave in de kas:',
    targetOrReturnAmount: '€ 18.000 (Buffer over: € 3.000)',
    description: 'Start met € 24k werkkapitaal, investeer € 21k voor de inrichting en aanbetaling van de eerste 3 woningen (€ 7.000 per woning) en behoud direct € 3k buffer. Ontvang vervolgens € 18.000 directe kamerteruggave in de kas.',
    keyTakeaway: 'De directe kamerteruggave van € 18.000 vormt het vliegwiel voor Fase 5.',
    colorTheme: 'indigo',
    detailedSteps: [
      'Panden 1, 2 en 3 contracteren (€ 7.000 investering per pand = € 21.000 totaal).',
      'Directe inrichting en exploitatieklaar maken voor short-stay & kamerverhuur.',
      'Directe kamerteruggave & voorschotten innen ter waarde van € 18.000.',
      'Kasbuffer van € 3.000 veiligstellen voor onvoorziene uitgaven.'
    ],
    milestones: [
      { id: 'm4-1', title: 'Contracten getekend voor eerste 3 woningen (€ 21k geïnvesteerd)', completed: false },
      { id: 'm4-2', title: 'Panden volledig ingericht en operationeel', completed: false },
      { id: 'm4-3', title: '€ 18.000 kamerteruggave teruggestort in centrale kas', completed: false },
    ],
    operationalTip: 'Optimaliseer de kamerindeling voor maximale verhuurcapaciteit per vierkante meter conform lokale regelgeving.'
  },
  {
    id: 5,
    number: '5',
    badge: 'Fase 5',
    title: 'Herinvestering & Volledige Vloot',
    subtitle: 'Cyclische opschaling naar 6 woningen & € 189.000 jaaromzet',
    investmentAmount: 'Herinvestering: € 18.000 + € 3.000 buffer',
    investmentRaw: 18000,
    targetOrReturnLabel: 'Totale Jaaromzet Vloot:',
    targetOrReturnAmount: '€ 189.000 p/j (€ 15.750 p/m)',
    description: 'Investeer de vrijgekomen € 18k uit de kas opnieuw (+ € 3k buffer) om nog eens 3 woningen te realiseren. Totaal bereik je hiermee een stabiele portefeuille van 6 woningen met 3 krachtige inkomstenstromen.',
    keyTakeaway: 'Dankzij herinvestering schaalt de portefeuille autonoom door zonder nieuw privégeld.',
    colorTheme: 'purple',
    detailedSteps: [
      'Wederinzet van € 18.000 kasreserve voor aankoop/aanhuur van woningen 4, 5 en 6.',
      'Opschaling van Boostplug partnerkoppelingen over alle 6 locaties (€ 1.500 per pand = € 9.000 p/m).',
      'Kamerverhuur op volle capaciteit (€ 750 per pand = € 4.500 p/m).',
      'BnB weekend- en vakantieverhuur (€ 2.250 p/m totaal).',
      'Maandelijkse totale omzet: € 15.750 p/m (€ 189.000 p/j).'
    ],
    streams: [
      {
        title: 'BnB (6 woningen)',
        perUnitMonthly: 375,
        totalMonthly: 2250,
        totalAnnual: 27000,
        description: 'Toeristische & flexibele short-stay boekingen over de vloot',
        tagColor: 'emerald'
      },
      {
        title: 'Kamerverhuur (6 woningen)',
        perUnitMonthly: 750,
        totalMonthly: 4500,
        totalAnnual: 54000,
        description: 'Vaste stabiele maandelijkse kamerverhuur (€ 750 × 6)',
        tagColor: 'cyan'
      },
      {
        title: 'Boostplug (6 woningen)',
        perUnitMonthly: 1500,
        totalMonthly: 9000,
        totalAnnual: 108000,
        description: 'Hoog-rendement zakelijke & tech add-on services (€ 1.500 × 6)',
        tagColor: 'indigo'
      }
    ],
    milestones: [
      { id: 'm5-1', title: 'Woningen 4, 5 en 6 gecontracteerd met € 18k herinvestering', completed: false },
      { id: 'm5-2', title: 'Alle 6 locaties aangesloten op Boostplug netwerk', completed: false },
      { id: 'm5-3', title: 'Doelomzet van € 15.750 p/m (€ 189.000 p/j) bereikt', completed: false },
    ],
    operationalTip: 'Automatiseer sleuteloverdrachten en schoonmaak via vaste partners voor 100% passieve cashflow.'
  }
];
