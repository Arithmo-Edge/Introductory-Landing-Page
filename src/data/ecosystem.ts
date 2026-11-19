export type PageId =
  | 'index.html'
  | 'architecture.html'
  | 'arenas-elo.html'
  | 'contests.html'
  | 'ai-core.html'
  | 'security-qprt4.html'
  | 'academies.html'
  | 'pricing.html'
  | 'socials-forge.html'
  | 'governance.html'
  | 'roadmap.html'
  | 'pioneers.html';

export const TARGET_MIDNIGHT_MS = new Date('2027-01-01T00:00:00+06:00').getTime();

export const NAV_ROUTES: Array<{
  num: string;
  href: PageId;
  label: string;
  shortLabel: string;
}> = [
  {num: '01', href: 'index.html', label: 'Home Command Deck', shortLabel: '01. Home Command Deck'},
  {
    num: '02',
    href: 'architecture.html',
    label: '14-Website Federated Architecture',
    shortLabel: '02. 14-Site Ecosystem',
  },
  {
    num: '03',
    href: 'arenas-elo.html',
    label: '5 Core Arenas & 60 ELO Tiers',
    shortLabel: '03. 5 Arenas & 60 ELO',
  },
  {
    num: '04',
    href: 'contests.html',
    label: 'Contest Engine & Find the Flaw',
    shortLabel: '04. Contests & Flaw Audit',
  },
  {
    num: '05',
    href: 'ai-core.html',
    label: '42-Engine AI Core',
    shortLabel: '05. 42-Engine AI Core',
  },
  {
    num: '06',
    href: 'security-qprt4.html',
    label: 'QPRT-4 Resilience & Legal Shield',
    shortLabel: '06. QPRT-4 & Legal Shield',
  },
  {
    num: '07',
    href: 'academies.html',
    label: 'Arithmo Academy Arena',
    shortLabel: '07. Academy Arena',
  },
  {
    num: '08',
    href: 'pricing.html',
    label: 'Subscriptions, Store & Wallet',
    shortLabel: '08. Plans & Wallet',
  },
  {
    num: '09',
    href: 'socials-forge.html',
    label: 'Socials, Forge & Guidebooks',
    shortLabel: '09. Socials & Forge',
  },
  {
    num: '10',
    href: 'governance.html',
    label: 'Headquarters & Wall of Patrons',
    shortLabel: '10. Headquarters & Patrons',
  },
  {
    num: '11',
    href: 'roadmap.html',
    label: 'Roadmap & 8 Spin-Off Companies',
    shortLabel: '11. Roadmap & Spin-Offs',
  },
  {
    num: '12',
    href: 'pioneers.html',
    label: 'Pioneer Contributors',
    shortLabel: '12. Pioneer Contributors',
  },
];

export type ArenaKey = 'nt' | 'alg' | 'geo' | 'comb' | 'mixed';

export interface ArenaInfo {
  key: ArenaKey;
  code: string;
  name: string;
  color: string;
  subsite: string;
  day: string;
  titles: Array<{min: number; max: number; title: string}>;
}

export const ARENA_CATALOG: Record<ArenaKey, ArenaInfo> = {
  nt: {
    key: 'nt',
    code: 'Subsite #1',
    name: 'Number Theory',
    color: '#00F0FF',
    subsite: 'arithmo-edge.github.io/number-theory/',
    day: 'Monday Rated Rounds',
    titles: [
      {min: 0, max: 499, title: 'FOUNDRY INITIATE'},
      {min: 500, max: 899, title: 'COMPOSITE APPRENTICE'},
      {min: 900, max: 1199, title: 'SIEVE SCOUT'},
      {min: 1200, max: 1399, title: 'DIVISOR VANGUARD'},
      {min: 1400, max: 1599, title: 'MODULAR OPERATOR'},
      {min: 1600, max: 1799, title: 'CONGRUENCE STRATEGIST'},
      {min: 1800, max: 1999, title: 'DIOPHANTINE VECTOR'},
      {min: 2000, max: 2199, title: 'EULERIAN SENTINEL'},
      {min: 2200, max: 2399, title: 'GAUSSIAN OVERLORD'},
      {min: 2400, max: 2699, title: 'DIRICHLET ARCHON'},
      {min: 2700, max: 2999, title: 'RIEMANN TRANSCENDENTALIST'},
      {min: 3000, max: 9999, title: 'ARITHMETIC SINGULARITY'},
    ],
  },
  alg: {
    key: 'alg',
    code: 'Subsite #2',
    name: 'Algebra',
    color: '#8B5CF6',
    subsite: 'arithmo-edge.github.io/algebra/',
    day: 'Tuesday Rated Rounds',
    titles: [
      {min: 0, max: 499, title: 'VARIABLE INITIATE'},
      {min: 500, max: 899, title: 'LINEAR APPRENTICE'},
      {min: 900, max: 1199, title: 'QUADRATIC SCOUT'},
      {min: 1200, max: 1399, title: 'POLYNOMIAL VANGUARD'},
      {min: 1400, max: 1599, title: 'INEQUALITY OPERATOR'},
      {min: 1600, max: 1799, title: 'RECURRENCE STRATEGIST'},
      {min: 1800, max: 1999, title: 'FUNCTIONAL VECTOR'},
      {min: 2000, max: 2199, title: 'CAUCHY-SCHWARZ SENTINEL'},
      {min: 2200, max: 2399, title: 'VIETA OVERLORD'},
      {min: 2400, max: 2699, title: 'GALOIS ARCHON'},
      {min: 2700, max: 2999, title: 'ABELIAN TRANSCENDENT'},
      {min: 3000, max: 9999, title: 'ALGEBRAIC SINGULARITY'},
    ],
  },
  geo: {
    key: 'geo',
    code: 'Subsite #3',
    name: 'Geometry',
    color: '#F59E0B',
    subsite: 'arithmo-edge.github.io/geometry/',
    day: 'Wednesday Rated Rounds',
    titles: [
      {min: 0, max: 499, title: 'EUCLIDEAN INITIATE'},
      {min: 500, max: 899, title: 'ANGLE APPRENTICE'},
      {min: 900, max: 1199, title: 'CHORD SCOUT'},
      {min: 1200, max: 1399, title: 'CEVIAN VANGUARD'},
      {min: 1400, max: 1599, title: 'CYCLIC OPERATOR'},
      {min: 1600, max: 1799, title: 'RADICAL AXIS STRATEGIST'},
      {min: 1800, max: 1999, title: 'HOMOTHETY VECTOR'},
      {min: 2000, max: 2199, title: 'INVERSION SENTINEL'},
      {min: 2200, max: 2399, title: 'BARYCENTRIC OVERLORD'},
      {min: 2400, max: 2699, title: 'PROJECTIVE ARCHON'},
      {min: 2700, max: 2999, title: 'RIEMANNIAN TRANSCENDENT'},
      {min: 3000, max: 9999, title: 'GEOMETRIC SINGULARITY'},
    ],
  },
  comb: {
    key: 'comb',
    code: 'Subsite #4',
    name: 'Combinatorics & Permutation',
    color: '#10B981',
    subsite: 'arithmo-edge.github.io/combinatorics/',
    day: 'Thursday Rated Rounds',
    titles: [
      {min: 0, max: 499, title: 'COUNTING INITIATE'},
      {min: 500, max: 899, title: 'FACTORIAL APPRENTICE'},
      {min: 900, max: 1199, title: 'BINOMIAL SCOUT'},
      {min: 1200, max: 1399, title: 'PIGEONHOLE VANGUARD'},
      {min: 1400, max: 1599, title: 'INVARIANT OPERATOR'},
      {min: 1600, max: 1799, title: 'EXTREMAL STRATEGIST'},
      {min: 1800, max: 1999, title: 'GRAPH VECTOR'},
      {min: 2000, max: 2199, title: 'GENERATING SENTINEL'},
      {min: 2200, max: 2399, title: 'RAMSEY OVERLORD'},
      {min: 2400, max: 2699, title: 'ERGODIC ARCHON'},
      {min: 2700, max: 2999, title: 'TURÁN TRANSCENDENT'},
      {min: 3000, max: 9999, title: 'COMBINATORIAL SINGULARITY'},
    ],
  },
  mixed: {
    key: 'mixed',
    code: 'Subsite #5',
    name: 'Mixed Mathematical Olympiad',
    color: '#F43F5E',
    subsite: 'arithmo-edge.github.io/mixed-olympiad/',
    day: 'Friday + Sunday Mega Anchor',
    titles: [
      {min: 0, max: 499, title: 'OLYMPIAD INITIATE'},
      {min: 500, max: 899, title: 'AXIOM APPRENTICE'},
      {min: 900, max: 1199, title: 'DEDUCTION SCOUT'},
      {min: 1200, max: 1399, title: 'THEOREM VANGUARD'},
      {min: 1400, max: 1599, title: 'SYNTHESIS OPERATOR'},
      {min: 1600, max: 1799, title: 'HYBRID STRATEGIST'},
      {min: 1800, max: 1999, title: 'HEURISTIC VECTOR'},
      {min: 2000, max: 2199, title: 'PARADOX SENTINEL'},
      {min: 2200, max: 2399, title: 'POLYMATHEMATICAL OVERLORD'},
      {min: 2400, max: 2699, title: 'ARCHIMEDEAN ARCHON'},
      {min: 2700, max: 2999, title: 'HILBERTIAN TRANSCENDENT'},
      {min: 3000, max: 9999, title: 'OMNI-OLYMPIAD SINGULARITY'},
    ],
  },
};

export type PortalCategoryKey = 'core' | 'arena' | 'competition' | 'platform';

export interface PortalSubsystem {
  name: string;
  scope: string;
  detail: string;
}

export interface PortalNode {
  id: string;
  indexNum: string;
  category: PortalCategoryKey;
  categoryLabel: string;
  tag: string;
  title: string;
  shortTitle: string;
  roleSummary: string;
  displayUrl: string;
  fullUrl: string;
  titleHeader: string;
  desc: string;
  architectureIntro: string;
  access: string;
  accentColor: string;
  themeLabel: string;
  schedule: string;
  eloTracks: string;
  aiSecurityStack: string;
  sdkSyncHooks: string[];
  keyCapabilities: string[];
  subsystems: PortalSubsystem[];
  arenaKey?: ArenaKey;
  syllabusTopics?: string[];
  relatedDocPage: {
    href: PageId;
    label: string;
  };
}

export const PORTALS_14: PortalNode[] = [
  {
    id: 'core',
    indexNum: '00',
    category: 'core',
    categoryLabel: 'Core Infrastructure & Identity',
    tag: '00 · Core Portal',
    shortTitle: 'Arithmo-Edge Core Portal',
    roleSummary: 'Central Auth, @handle Governance, Closed-Loop Wallet & All-Rounder Telemetry',
    displayUrl: 'arithmo-edge.github.io/Arithmo-Edge/',
    fullUrl: 'https://arithmo-edge.github.io/Arithmo-Edge/',
    title: 'Core Portal: Arithmo-Edge Core Portal',
    titleHeader: 'Core Portal: Arithmo-Edge Core Portal',
    desc: 'Primary hub for Gmail SSO, custom @handle registration (7-day 1-time free change; $2.99 once/year thereafter; permanent @handle tombstone upon deletion while anonymized Zero-PII data remains for AI training), Subscriptions & 7-day 1-time free trial, Closed-loop Personal Arithmo Wallet, Free Printable Guidebook, Overall All-Rounder Rating, and ☕ Support the 13-Year-Old System Architect / Buy Me a Coffee.',
    architectureIntro:
      'Serving as the root entry point of the 14-portal federation, the Core Portal orchestrates Firebase Authentication via Gmail SSO, mints unique @handle identities across all 13 downstream subsites, and hosts the centralized Personal Arithmo Wallet and subscription entitlement console. Every identity mutation or credit pack purchase synchronizes through Arithmo-Core-SDK (engine.js) in real time without exposing payment or PII keys to public arena repositories.',
    access: 'Guest Browsing Permitted · @handle Required for Rated, Wallet & Subscriptions',
    accentColor: '#00F0FF',
    themeLabel: '#00F0FF Electric Cyan (Obsidian Core)',
    schedule: '24/7 Global Hub · Live Countdown & Round Dispatch',
    eloTracks: 'Overall All-Rounder Composite + 10 Core Arena Telemetry Summary',
    aiSecurityStack: 'WalletLedger, TokenMeter, ComplianceGuard AI, Read-Shield Edge Cache',
    sdkSyncHooks: [
      'Firebase Gmail SSO session hydration & permanent @handle tombstone registry',
      'Subscription entitlement sync (Free, Plus, Pro, Singularity + 7-day 1-time trial)',
      'Atomic Closed-Loop Arithmo Wallet balance & +10% top-up bonus reconciliation',
      'Live cross-domain dispatch into Subsites #1–#13 with preserved auth tokens',
    ],
    keyCapabilities: [
      'Custom @handle onboarding with 7-day free rename window ($2.99 once/year thereafter)',
      'Zero Pay-to-Win subscription matrix & 8 permanent Pay-As-You-Go Token Packs',
      'Personal Arithmo Wallet supporting instant USD top-ups (+10% bonus) and @handle gifts',
      'Free Printable Community Guidebook download & ☕ Patronage portal for founders',
    ],
    subsystems: [
      {
        name: 'Identity & Tombstone Engine',
        scope: 'Gmail SSO · @handle Registry',
        detail:
          'Claims globally unique handles across all 14 domains; account deletion permanently locks the @handle against impersonation while scrubbing PII before Cold JSONL archival.',
      },
      {
        name: 'Closed-Loop Arithmo Wallet',
        scope: '+10% Top-Up · Non-Withdrawable',
        detail:
          'Stores closed-loop educational credits usable strictly for AI Token Packs, Subscriptions, Academy seats, and handle gifting with atomic Firestore ledger locks.',
      },
      {
        name: 'Overall All-Rounder Deck',
        scope: '5-Arena Cross Telemetry',
        detail:
          'Aggregates a competitor’s General & Expert ratings across all 5 Core Arenas (anchored on Mixed Olympiad) and highlights Top 128 Annual World Cup qualification status.',
      },
      {
        name: 'Ecosystem Launcher & Support',
        scope: 'Zero-Friction Routing',
        detail:
          'Routes guests directly into unrated arenas or Standings without login while providing transparent sponsorship pathways via the Wall of Patrons.',
      },
    ],
    relatedDocPage: {
      href: 'pricing.html',
      label: 'Explore Plans, Store & Arithmo Wallet',
    },
  },
  {
    id: 'nt',
    indexNum: '01',
    category: 'arena',
    categoryLabel: 'Core Mathematical Arena',
    tag: '01 · Subsite #1',
    shortTitle: 'Number Theory Arena',
    roleSummary: 'Monday Rated Rounds · #00F0FF Electric Cyan · 12 Ranks & Modular Rigor',
    displayUrl: 'arithmo-edge.github.io/number-theory/',
    fullUrl: 'https://arithmo-edge.github.io/number-theory/',
    title: 'Subsite #1: Number Theory Arena',
    titleHeader: 'Subsite #1: Number Theory Arena',
    desc: 'Dedicated Number Theory arena operating on a fixed #00F0FF Electric Cyan dark theme. Houses isolated General ELO and Expert ELO tracks, 12 canonical titles from Foundry Initiate to Arithmetic Singularity, and hidden topic tags during rated rounds.',
    architectureIntro:
      'Number Theory Arena isolates all divisibility, modular arithmetic, Diophantine equations, and analytic prime competition inside its own Electric Cyan micro-frontend. Under the Strict No-Mixed ELO Policy, fast numerical computation updates General ELO while formal LaTeX proof rounds update Expert ELO—combining via (General + Expert) / 2 strictly for visual badge progression across 12 canonical titles.',
    access: 'Fixed #00F0FF Electric Cyan · Guest Unrated (0 ELO) / @handle Rated',
    accentColor: '#00F0FF',
    themeLabel: '#00F0FF Electric Cyan (Locked Arena Theme)',
    schedule: 'Monday Rated Rounds · 17:00 UTC Expert (0+ ELO) / 20:00 UTC General',
    eloTracks: '2 Isolated Tracks: NT General ELO + NT Expert ELO (12 Canonical Titles)',
    aiSecurityStack: 'SymPyVeritas, ProofGrader, TagArchitect, Browser BigInt Miller-Rabin',
    sdkSyncHooks: [
      'Deterministic BigInt Miller-Rabin primality & Brent-Pollard Rho integer checks locally',
      'TagArchitect strips #LTE, #Orders, and #Quadratic-Reciprocity during live windows',
      'Dual General & Expert leaderboard state dispatched to Subsite #7 Standings',
      'Golden Vault Segment 1–4 problem ingestion gated behind Cloudflare Worker proxy',
    ],
    keyCapabilities: [
      '12 exclusive Number Theory badges from Foundry Initiate (0–499) to Arithmetic Singularity (3000+)',
      'General Mode Touch Numpad & Second-Chance Overtime Loop for rapid integer evaluation',
      'Expert 4-Segment Contracts with Drag-and-Drop LaTeX congruence & induction proof blocks',
      'Zero-Fragmentation hidden sub-topics during live contests; unlocked post-round in Database',
    ],
    subsystems: [
      {
        name: 'General Arithmetic Velocity Track',
        scope: '20:00 UTC Mondays · Speed & Precision',
        detail:
          'Single-problem sequential sprint focused on modular remainders, totient evaluations, and prime bounds with deterministic local validation.',
      },
      {
        name: 'Expert 4-Segment Proof Track',
        scope: '17:00 UTC Mondays · Max 2 Subs/Q',
        detail:
          'Multi-segment Olympiad proof contest graded via ProofGrader AI + 2000+ ELO Grandmaster Peer Review and audited in 6-hour Find the Flaw.',
      },
      {
        name: 'Strict No-Hint Tag Shield',
        scope: 'Zero-Fragmentation Policy',
        detail:
          'Suppresses all lemma hints (e.g., Zsigmondy, Hensel’s Lemma) until the final submission bell rings, cultivating authentic IMO problem recognition.',
      },
    ],
    arenaKey: 'nt',
    syllabusTopics: [
      'Modular Arithmetic & Chinese Remainder Theorem',
      'Fermat, Euler, Wilson & Orders Mod n',
      'Lifting the Exponent Lemma (LTE) & p-adic Valuations',
      'Diophantine Equations & Infinite Descent',
      'Quadratic Reciprocity & Legendre/Jacobi Symbols',
      'Primitive Roots & Multiplicative Functions',
    ],
    relatedDocPage: {
      href: 'arenas-elo.html',
      label: 'Simulate Number Theory ELO & 60 Titles',
    },
  },
  {
    id: 'alg',
    indexNum: '02',
    category: 'arena',
    categoryLabel: 'Core Mathematical Arena',
    tag: '02 · Subsite #2',
    shortTitle: 'Algebra Arena',
    roleSummary: 'Tuesday Rated Rounds · #8B5CF6 Vibrant Violet · Functional Equations & Inequalities',
    displayUrl: 'arithmo-edge.github.io/algebra/',
    fullUrl: 'https://arithmo-edge.github.io/algebra/',
    title: 'Subsite #2: Algebra Arena',
    titleHeader: 'Subsite #2: Algebra Arena',
    desc: 'Dedicated Algebra arena operating on a fixed #8B5CF6 Vibrant Violet dark theme. Tracks isolated General & Expert ELOs across 12 tiers from Variable Initiate to Algebraic Singularity.',
    architectureIntro:
      'Algebra Arena provides a dedicated Vibrant Violet environment for polynomials, inequalities, functional equations, recurrences, and abstract algebraic structures. By keeping Algebra ratings strictly independent from Number Theory or Geometry, specialists in Cauchy-Schwarz optimization or Galois theory cannot inflate unrelated arena ranks—while Python SymPy sandboxes deterministically verify symbolic identities and counterexample boundary checks.',
    access: 'Fixed #8B5CF6 Vibrant Violet · Guest Unrated / @handle Rated',
    accentColor: '#8B5CF6',
    themeLabel: '#8B5CF6 Vibrant Violet (Locked Arena Theme)',
    schedule: 'Tuesday Rated Rounds · 17:00 UTC Expert (0+ ELO) / 20:00 UTC General',
    eloTracks: '2 Isolated Tracks: Algebra General ELO + Algebra Expert ELO (12 Tiers)',
    aiSecurityStack: 'SymPyVeritas, TrapWeaver, ProofGrader, AdversarialRedTeam AI',
    sdkSyncHooks: [
      'Symbolic equivalence normalization via Cloudflare-proxied Python SymPy verification',
      'TrapWeaver blocks brute-force Lagrange interpolation leaks on multi-variable prompts',
      'Real-time General + Expert rank recomputation for Algebraic Singularity tiers',
      'Direct upsolve export into Subsite #8 (Arithmo Personal AI) after match lock release',
    ],
    keyCapabilities: [
      '12 Algebra titles spanning Variable Initiate (0–499) up to Algebraic Singularity (3000+)',
      'Dedicated LaTeX inequality, summation, and quantifier block composer in Expert Mode',
      'Boundary-case rigor checks catching missing injectivity/surjectivity or zero-domain branches',
      'Paired with Tuesday Double-Header schedule + 6-hour Find the Flaw counterexample window',
    ],
    subsystems: [
      {
        name: 'Functional Equation Auditor',
        scope: 'Domain & Branch Checking',
        detail:
          'Trains solvers to verify pointwise solutions like f(x) = x vs pathological piecewise families under ProofGrader + Find the Flaw scrutiny.',
      },
      {
        name: 'Inequality & Optimization Bench',
        scope: 'Tightness & Equality Cases',
        detail:
          'Enforces explicit verification of equality conditions across AM-GM, Cauchy-Schwarz, Hölder, and Jensen proofs.',
      },
      {
        name: 'Polynomial & Galois Track',
        scope: 'Irreducibility & Roots of Unity',
        detail:
          'Covers Eisenstein, complex root filters, Vieta relations, and symmetric polynomial decompositions up to Segment 4 Apex.',
      },
    ],
    arenaKey: 'alg',
    syllabusTopics: [
      'Functional Equations (Injectivity, Surjectivity, Cauchy)',
      'Olympiad Inequalities (AM-GM, Cauchy-Schwarz, Hölder, Schur)',
      'Polynomials, Irreducibility & Roots of Unity Filters',
      'Sequences, Linear & Non-Linear Recurrences',
      'Vieta Relations & Symmetric Polynomials',
      'Complex Numbers in Algebraic & Trigonometric Identities',
    ],
    relatedDocPage: {
      href: 'arenas-elo.html',
      label: 'Simulate Algebra ELO & 12 Progression Ranks',
    },
  },
  {
    id: 'geo',
    indexNum: '03',
    category: 'arena',
    categoryLabel: 'Core Mathematical Arena',
    tag: '03 · Subsite #3',
    shortTitle: 'Geometry Arena',
    roleSummary: 'Wednesday Rated Rounds · #F59E0B Laser Amber · Built-In GeoGebra Construction Studio',
    displayUrl: 'arithmo-edge.github.io/geometry/',
    fullUrl: 'https://arithmo-edge.github.io/geometry/',
    title: 'Subsite #3: Geometry Arena',
    titleHeader: 'Subsite #3: Geometry Arena',
    desc: 'Dedicated Geometry arena operating on a fixed #F59E0B Laser Amber dark theme. Supports GeoGebra-style Geometry construction tools in Expert Mode from Euclidean Initiate to Geometric Singularity.',
    architectureIntro:
      'Geometry Arena unifies synthetic Euclidean reasoning, projective transformations, and complex/barycentric methods inside a high-contrast Laser Amber workspace. Unlike plain text forums, Expert Column 2 embeds an interactive GeoGebra-style Geometry Construction Studio directly beside the problem statement—allowing competitors to snap circumcircles, radical axes, nine-point circles, and inversions while keeping diagram coordinates private.',
    access: 'Fixed #F59E0B Laser Amber · Guest Unrated / @handle Rated',
    accentColor: '#F59E0B',
    themeLabel: '#F59E0B Laser Amber (Locked Arena Theme)',
    schedule: 'Wednesday Rated Rounds · 17:00 UTC Expert (0+ ELO) / 20:00 UTC General',
    eloTracks: '2 Isolated Tracks: Geometry General ELO + Geometry Expert ELO (12 Tiers)',
    aiSecurityStack: 'GeoGebra Sandbox, ProofGrader, AxiomCheck, AdversarialRedTeam AI',
    sdkSyncHooks: [
      'Interactive canvas diagram snapshots saved into IndexedDB local proof checkpoints',
      'LaTeX figure referencing links synthetic constructions cleanly into Expert proof steps',
      'AxiomCheck verifies non-degeneracy assumptions (acute vs obtuse triangle configurations)',
      'Wednesday double-header telemetry synced atomically to Subsite #7 Standings',
    ],
    keyCapabilities: [
      'Embedded GeoGebra-style interactive construction tool inside Expert Column 2',
      '12 canonical ranks from Euclidean Initiate (0–499) to Geometric Singularity (3000+)',
      'Configuration-blind problem statements guarding against obtuse/collinear blind spots',
      'Supports pure synthetic, inversion, projective, barycentric, and complex-plane proofs',
    ],
    subsystems: [
      {
        name: 'Interactive Diagram Studio',
        scope: 'Expert Column 2 Canvas',
        detail:
          'Construct perpendicular bisectors, radical centers, orthocenters, symmedians, and circle inversions directly in-browser with zero external tabs.',
      },
      {
        name: 'Configuration Degeneracy Guard',
        scope: 'Find the Flaw Ready',
        detail:
          'Explicitly tests directed angles and orientation assumptions so proofs hold identically across acute, right, and obtuse configurations.',
      },
      {
        name: 'Dual Calculation & Proof Split',
        scope: 'General vs Expert Mechanics',
        detail:
          'General mode scores exact length, angle, and area computation; Expert mode evaluates complete deductive geometric lemmas.',
      },
    ],
    arenaKey: 'geo',
    syllabusTopics: [
      'Directed Angles & Cyclic Quadrilateral Chasing',
      'Radical Axes, Power of a Point & Coaxal Circles',
      'Homothety, Spiral Similarity & Nine-Point Circle',
      'Circle Inversion & Mixtilinear / Excircle Configurations',
      'Projective Harmonic Bundles & Pascal/Brianchon Theorems',
      'Barycentric & Complex Number Coordinate Methods',
    ],
    relatedDocPage: {
      href: 'contests.html',
      label: 'Inspect GeoGebra Tool & Contest Engine',
    },
  },
  {
    id: 'comb',
    indexNum: '04',
    category: 'arena',
    categoryLabel: 'Core Mathematical Arena',
    tag: '04 · Subsite #4',
    shortTitle: 'Combinatorics & Permutation',
    roleSummary: 'Thursday Rated Rounds · #10B981 Mint Emerald · Graph Theory, Games & Invariants',
    displayUrl: 'arithmo-edge.github.io/combinatorics/',
    fullUrl: 'https://arithmo-edge.github.io/combinatorics/',
    title: 'Subsite #4: Combinatorics & Permutation Arena',
    titleHeader: 'Subsite #4: Combinatorics & Permutation Arena',
    desc: 'Dedicated Combinatorics & Permutation arena operating on a fixed #10B981 Mint Emerald dark theme. Tracks General & Expert ELOs from Counting Initiate to Combinatorial Singularity.',
    architectureIntro:
      'Combinatorics & Permutation Arena centers on discrete ingenuity where brute-force CAS bashing fails—spanning extremal principles, invariants, graph theory, combinatorial games, and probabilistic existence proofs. Governed by IntuitionForge AI and TrapWeaver, problems emphasize genuine bijections and constructive counterexamples while rewarding 2000+ ELO Sentinel peer reviewers who audit subtle double-counting errors.',
    access: 'Fixed #10B981 Mint Emerald · Guest Unrated / @handle Rated',
    accentColor: '#10B981',
    themeLabel: '#10B981 Mint Emerald (Locked Arena Theme)',
    schedule: 'Thursday Rated Rounds · 17:00 UTC Expert (0+ ELO) / 20:00 UTC General',
    eloTracks: '2 Isolated Tracks: Combinatorics General ELO + Expert ELO (12 Tiers)',
    aiSecurityStack: 'IntuitionForge AI, ProofGrader, SymPyVeritas, PlagioGuard',
    sdkSyncHooks: [
      'Discrete bijection & recurrence sanity verification on finite test bounds',
      'Strict anti-LLM phrasing checks eliminating standard textbook pigeonhole clones',
      'Supports constructive game strategy & algorithmic bound proofs in Expert Mode',
      'Synchronizes Thursday General/Expert rating deltas across 14 Live Leaderboards',
    ],
    keyCapabilities: [
      '12 progression tiers from Counting Initiate (0–499) to Combinatorial Singularity (3000+)',
      'Dedicated constructive-existence & extremal-bound rubric for Segment 1–4 proofs',
      'Zero-fragmentation tag masking preventing premature hints on Generating Functions or Hall’s Theorem',
      'Seamless post-contest export into WeaknessTargetedGen AI combinatorial drill decks',
    ],
    subsystems: [
      {
        name: 'Invariant & Monovariant Track',
        scope: 'Process & Game Analysis',
        detail:
          'Evaluates coloring arguments, parity invariants, and winning-strategy constructions in combinatorial grid and token games.',
      },
      {
        name: 'Extremal & Graph Synthesis',
        scope: 'Turán, Ramsey & Matchings',
        detail:
          'Challenges advanced contenders on directed graphs, planar Euler bounds, Hall’s Marriage Theorem, and probabilistic existence.',
      },
      {
        name: 'Enumerative Velocity Mode',
        scope: '20:00 UTC General Sprint',
        detail:
          'Tests inclusion-exclusion, Burnside lemma counts, and generating function coefficients via fast numeric Touch Numpad entry.',
      },
    ],
    arenaKey: 'comb',
    syllabusTopics: [
      'Bijective Counting, Inclusion-Exclusion & Generating Functions',
      'Pigeonhole Principle & Extremal Set Systems',
      'Invariants, Monovariants & Tiling/Coloring Arguments',
      'Graph Theory (Trees, Matchings, Ramsey & Turán Bounds)',
      'Combinatorial Game Theory & Winning Strategies',
      'Probabilistic Method & Double Counting Proofs',
    ],
    relatedDocPage: {
      href: 'arenas-elo.html',
      label: 'Explore Combinatorics Tiers & ELO Calculator',
    },
  },
  {
    id: 'mixed',
    indexNum: '05',
    category: 'arena',
    categoryLabel: 'Flagship Synthesis Arena',
    tag: '05 · Subsite #5',
    shortTitle: 'Mixed Mathematical Olympiad',
    roleSummary: 'Friday + Sunday Mega Anchor · #F43F5E Nebula Rose · Primary All-Rounder & World Cup Core',
    displayUrl: 'arithmo-edge.github.io/mixed-olympiad/',
    fullUrl: 'https://arithmo-edge.github.io/mixed-olympiad/',
    title: 'Subsite #5: Mixed Mathematical Olympiad Arena',
    titleHeader: 'Subsite #5: Mixed Mathematical Olympiad Arena',
    desc: 'Dedicated Mixed Mathematical Olympiad arena operating on a fixed #F43F5E Nebula Rose dark theme. Primary anchor for the Overall All-Rounder Rating and Sunday Mega Arena.',
    architectureIntro:
      'Mixed Mathematical Olympiad is the flagship polymathic proving ground of Arithmo-Edge. Designed to replicate full IMO, Putnam, and RMM paper conditions, problems fuse multiple disciplines (such as combining polynomial divisibility with combinatorial parity or geometric invariants). Performance here serves as the primary anchor for the Overall All-Rounder Rating, hosts the Sunday Mega Arena Contest, and determines seeding for the Top 128 Annual World Cup.',
    access: 'Fixed #F43F5E Nebula Rose · Primary All-Rounder & World Cup Anchor',
    accentColor: '#F43F5E',
    themeLabel: '#F43F5E Nebula Rose (Flagship Arena Theme)',
    schedule: 'Friday Double-Header + Sunday Mega Arena (100 min · Mandatory Module 7)',
    eloTracks: '2 Isolated Tracks: Mixed General ELO + Mixed Expert ELO + All-Rounder Anchor',
    aiSecurityStack: 'TheoremFusion, Module 7 Proctoring, MBTS Clustering, QPRT-4 ChronoVault',
    sdkSyncHooks: [
      'Primary anchor weight dispatch into Overall All-Rounder Composite calculations',
      'Enforces Sunday Mega mandatory Module 7 webcam/audio integrity gates',
      'Feeds Top 128 World Cup progressive 6-round half-elimination brackets',
      'Supports multi-domain Golden Vault Segment 1–4 sets authored by Core HQ',
    ],
    keyCapabilities: [
      '12 elite titles from Olympiad Initiate (0–499) to Omni-Olympiad Singularity (3000+)',
      'Cross-domain synthesis problems uniting NT, Algebra, Geometry, and Combinatorics',
      'Home of the Sunday Mega Arena (100 min · 10 Qs · Max 2 Subs/Q · T+3h Finalization)',
      'Direct qualification pathway into the Top 128 Annual World Cup (👑 Golden Crown)',
    ],
    subsystems: [
      {
        name: 'TheoremFusion Synthesis Pool',
        scope: 'Multi-Domain Problems',
        detail:
          'Pairs two or more mathematical branches in single prompts (e.g., Vieta jumping on lattice configurations or graph spectra via linear algebra).',
      },
      {
        name: 'Sunday Mega Arena Host',
        scope: 'Core HQ Authored · NO Rest Day',
        detail:
          'Flagship weekly Expert-only championship enforced by Module 7 proctoring, 2-hour Find the Flaw auditing, and 1-hour MBTS clustering.',
      },
      {
        name: 'World Cup Qualification Feed',
        scope: 'Top 128 Global Contenders',
        detail:
          'Tracks seasonal Mixed + Overall All-Rounder consistency to seed the 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> Champion knockout cycle.',
      },
    ],
    arenaKey: 'mixed',
    syllabusTopics: [
      'Cross-Domain Synthesis (NT + Combinatorics / Algebra + Geometry)',
      'Vieta Jumping & Extremal Diophantine Descent',
      'Full 6-Problem IMO & Putnam Mock Paper Architecture',
      'Constructive Existence & Multi-Stage Lemma Chains',
      'Polynomial Method in Discrete Geometry & Graph Coloring',
      'Invariant + Modular Hybrid Proof Writing',
    ],
    relatedDocPage: {
      href: 'contests.html',
      label: 'Inspect Sunday Mega & World Cup Engine',
    },
  },
  {
    id: 'contests',
    indexNum: '06',
    category: 'competition',
    categoryLabel: 'Live Tournament & Audit Runtime',
    tag: '06 · Subsite #6',
    shortTitle: 'Contest Section Portal',
    roleSummary: '7-Day Zero-Rest Engine, T-30s Contract, 1v1 Bullet Blitz & Find the Flaw',
    displayUrl: 'arithmo-edge.github.io/contests/',
    fullUrl: 'https://arithmo-edge.github.io/contests/',
    title: 'Subsite #6: Contest Section Portal',
    titleHeader: 'Subsite #6: Contest Section Portal',
    desc: 'Hosts live contests, 4-Segment contracts, T-30s Pre-Match Contract Page, Live Clarifications, 1v1 Bullet Blitz, Direct Friend Challenges, and Find the Flaw.',
    architectureIntro:
      'While Subsites #1–#5 define each subject’s identity and curriculum, Subsite #6 operates the high-concurrency live tournament execution engine. It runs the 7-Day Zero-Rest Rotational Calendar, renders General Velocity Flow vs Expert 3-Column Workspaces, opens the T-30s Pre-Match Contract Page showing verified authorship (@handles), coordinates 1v1 Bullet Blitz matchmaking (±100 ELO with 24h 2-match anti-farming cap), and hosts post-contest Find the Flaw peer hacking.',
    access: 'Guests Unrated (0 ELO) + Find the Flaw · @handle Rated & 1v1',
    accentColor: '#22D3EE',
    themeLabel: '#22D3EE Tournament Cyan',
    schedule: '7-Day Zero-Rest Calendar · Daily 17:00 & 20:00 UTC + 24/7 1v1 Blitz',
    eloTracks: 'Updates 10 Core Arena ELOs + 1v1 Bullet Blitz + Virtual Gym #/Virtual',
    aiSecurityStack: 'ChronoVault, LogicMutator (30s Hot-Swap), PulseWatcher, MBTS',
    sdkSyncHooks: [
      'Engages immediate Hard-Lock on Subsite #8 (Arithmo Personal AI) at T-0 launch',
      'Dispatches IndexedDB local auto-save every keystroke to survive connection drops',
      'Runs 30-second Emergency Reserve Pool hot-swaps via LogicMutator if leaks occur',
      'Streams SHA-256 signed proof packets into 2-hour/6-hour Find the Flaw queues',
    ],
    keyCapabilities: [
      'Dual Contest UI: General Velocity Flow (Mobile Touch Numpad + Zen Mode) & Expert 3-Column Dashboard',
      'T-30s Pre-Match Contract displaying Problemsetter, Auditor & Tester @handles',
      'Find the Flaw post-contest hacking (+5 to +50 opponent hacks; +25 to +100 problem flaws)',
      '1v1 Bullet Blitz (±100 ELO + Direct @handle Challenge + System Expectation Override) & Virtual Gym',
    ],
    subsystems: [
      {
        name: 'T-30s Contract & Hot-Swap Guard',
        scope: 'T-30s Lock · 30s Emergency Pool',
        detail:
          'Locks round metadata 30 seconds before launch with full author attribution and holds hot-swappable reserve problems on standby.',
      },
      {
        name: 'Find the Flaw Peer Audit Arena',
        scope: '6h Daily / 2h Sunday Mega',
        detail:
          'Allows rated @handles and unrated Guests alike to expose logical gaps in opponent proofs or trigger 2-minute SymPy Global Rejudges.',
      },
      {
        name: '1v1 Bullet Blitz Matchmaker',
        scope: '±100 ELO · 2-Match/24h Pair Cap',
        detail:
          'Pairs 1v1 head-to-head sprints with direct @handle friend invites (30-min fallback) and +ΔR Underdog Protection against 2000+ Sentinels.',
      },
      {
        name: 'Virtual Gym Ghost Mode',
        scope: '#/Virtual Historical Replay',
        detail:
          'Simulates historical contest runs under identical 100-minute clocks alongside original participants without altering official standings.',
      },
    ],
    relatedDocPage: {
      href: 'contests.html',
      label: 'Open Contest Engine & Find the Flaw Demo',
    },
  },
  {
    id: 'standings',
    indexNum: '07',
    category: 'competition',
    categoryLabel: 'Public Read-Shield Telemetry',
    tag: '07 · Subsite #7',
    shortTitle: 'Standings Portal',
    roleSummary: '100% Public Without Login · 14 Live Leaderboards, Friends, Sovereign Council & Patrons',
    displayUrl: 'arithmo-edge.github.io/standings/',
    fullUrl: 'https://arithmo-edge.github.io/standings/',
    title: 'Subsite #7: Standings Portal',
    titleHeader: 'Subsite #7: Standings Portal',
    desc: 'Public without login. Renders 14 Real-Time Leaderboards (1 HQ + 10 Arena General/Expert + 1 Academy + 1 Contributors + 1 All Rounders), Country/Org/Academy filters, ★ My Friends filter, 👑 Honorary Prime Sovereign council, and Wall of Patrons.',
    architectureIntro:
      'Standings Portal is the public transparency engine of Arithmo-Edge—100% readable without creating an account. Using the Read-Shield Snapshot Pattern via Cloudflare Workers, it compiles 14 separate live leaderboards into static edge JSON snapshots that cut Firestore reads by 98%, while surfacing Country/Org/Academy breakdowns, the ★ My Friends watchlist, the 👑 Honorary Prime Sovereign council, and the immutable ☕ Wall of Patrons ledger.',
    access: '100% Public Without Login · 14 Real-Time Leaderboards',
    accentColor: '#22D3EE',
    themeLabel: '#22D3EE Telemetry Cyan',
    schedule: 'Live Contest Tick + Read-Shield Edge Snapshot Refresh',
    eloTracks: '1 HQ + 10 Core Arena + 1 Academy (Score & Prestige) + 1 Contributors + 1 All-Rounders',
    aiSecurityStack: 'Read-Shield Edge Snapshotter, MBTS Pending Lock, BanAudit Rollback Sync',
    sdkSyncHooks: [
      'Serves static Read-Shield JSON snapshots for 98% Firestore free-tier read reduction',
      'Hides shadow-sandboxed 11-Flag Blackhole accounts cleanly from public top ranks',
      'Synchronizes ★ My Friends starred @handles from Firebase user preferences',
      'Reflects real-time Dual Academy Standings (Academy Score vs Academy Prestige)',
    ],
    keyCapabilities: [
      '14 Live Leaderboards: 10 Arena (5 Gen + 5 Exp), 1 HQ, 1 Academy, 1 Contributors, 1 All-Rounders',
      'Instant Country, Organization, Academy, and ★ My Friends filter matrices',
      'Dedicated 👑 Honorary Prime Sovereign Council (@handle | HQ ELO | Honorary Title)',
      'Permanent ☕ Wall of Patrons ledger proving Zero ELO Advantage for donors',
    ],
    subsystems: [
      {
        name: '10 Arena + All-Rounder Boards',
        scope: 'General vs Expert Split',
        detail:
          'Separates computation speed rankings from Olympiad proof rankings across all 5 arenas while computing the Mixed-anchored All-Rounder board.',
      },
      {
        name: 'Dual Academy Rankings',
        scope: 'Academy Score & Prestige',
        detail:
          'Ranks verified institutions fairly via Top 50% Roster Average (Academy Score) and Top 15 Members + Clash Crowns (Academy Prestige).',
      },
      {
        name: 'HQ & Contribution Boards',
        scope: 'Strict Positional Chronology',
        detail:
          'Publishes Contribution ELO (Blogs +5, Guidebooks +2, Peer Reviews) alongside the monotonic HQ ELO Ladder governed by chronological seniority.',
      },
      {
        name: 'MBTS Finalization Gate',
        scope: 'T+1h Daily / T+3h Sunday',
        detail:
          'Displays provisional live ranks before automatically shifting to finalized ratings after Find the Flaw and MBTS behavioral clustering.',
      },
    ],
    relatedDocPage: {
      href: 'governance.html',
      label: 'View HQ Ladder, Council & Wall of Patrons',
    },
  },
  {
    id: 'ai',
    indexNum: '08',
    category: 'platform',
    categoryLabel: 'AI Tutoring & Anti-Cheat Hard-Lock',
    tag: '08 · Subsite #8',
    shortTitle: 'Arithmo Personal AI',
    roleSummary: 'Socratic Mentor (Gemini + Qwen-Math + SymPy) · Contest Hard-Locked + Soft-Pinch',
    displayUrl: 'arithmo-edge.github.io/arithmo-ai/',
    fullUrl: 'https://arithmo-edge.github.io/arithmo-ai/',
    title: 'Subsite #8: Arithmo Personal AI',
    titleHeader: 'Subsite #8: Arithmo Personal AI',
    desc: 'Personal Olympiad AI mentor powered by Gemini (Pro & Flash) + Qwen-Math + SymPy sandbox. Hard-locked during live rated matches and displays non-accusatory Soft-Pinch Warnings.',
    architectureIntro:
      'Arithmo Personal AI delivers post-contest upsolving, Socratic lemma hints, and automated Python/SymPy verification—engineered specifically never to spoil the Olympiad struggle. The moment a user enters any active contest on Subsite #6, Arithmo-Core-SDK engages a strict client + Cloudflare Worker Hard-Lock on Subsite #8, while Arithmo Alert AI delivers non-accusatory AES-256 Soft-Pinch habit nudges when atypical prompt patterns appear.',
    access: '@handle Required · Hard-Locked During Live Rated Contests',
    accentColor: '#8B5CF6',
    themeLabel: '#8B5CF6 Neural Violet',
    schedule: '24/7 Upsolving & Practice · Automatically Locked During Live Rounds',
    eloTracks: 'Zero ELO Grant · WeaknessTargetedGen Practice Feedback Loop',
    aiSecurityStack: 'Gemini Pro & Flash, Qwen-Math + SymPy, TokenMeter, Arithmo Alert AI',
    sdkSyncHooks: [
      'Listens to active match lease from engine.js to trigger immediate UI + API Hard-Lock',
      'Executes TokenMeter semantic billing (0 greetings, -1 duplicates, -N multi-query, -2x Hybrid)',
      'Receives AES-256 encrypted Soft-Pinch nudge dispatches without leaking detector rules',
      'Imports contest mistakes into Mistake Deck & WeaknessTargetedGen AI drill sets',
    ],
    keyCapabilities: [
      'Hybrid AI routing uniting Gemini Pro/Flash reasoning with Qwen-Math + Python SymPy checks',
      'Fair Semantic Token Meter: 0 tokens for greetings/typos; -2x exclusively for full Hybrid synthesis',
      'Zero-Latency Contest Hard-Lock preventing live problem solving during rated hours',
      'Non-accusatory Soft-Pinch habit nudges + Mistake Deck spaced-repetition upsolving',
    ],
    subsystems: [
      {
        name: 'Gemini + Qwen-Math + SymPy Router',
        scope: 'Hybrid Symbolic Execution',
        detail:
          'Routes quick Socratic nudges through Gemini Flash and deep multi-step Olympiad proof synthesis through Gemini Pro + Qwen-Math verified in SymPy.',
      },
      {
        name: 'Semantic TokenMeter Guard',
        scope: 'Transparent Billing Rules',
        detail:
          'Protects student token balances by charging 0 tokens on greetings or phrasing edits, billing only genuine mathematical compute.',
      },
      {
        name: 'Instant Contest Hard-Lock',
        scope: 'T-0 to Final Submission',
        detail:
          'Syncs live contest session tokens via Cloudflare Worker so active contenders cannot query Personal AI until rounds finish.',
      },
      {
        name: 'Soft-Pinch Behavioral Advisory',
        scope: 'Arithmo Alert AI',
        detail:
          'Encourages organic LaTeX practice and independent lemma formulation privately via AES-256 signed prompts.',
      },
    ],
    relatedDocPage: {
      href: 'ai-core.html',
      label: 'Inspect All 42 AI Engines & Token Meter',
    },
  },
  {
    id: 'academy',
    indexNum: '09',
    category: 'platform',
    categoryLabel: 'Institutional B2B SaaS Portal',
    tag: '09 · Subsite #9',
    shortTitle: 'Arithmo Academy Arena',
    roleSummary: 'KYB Schools & Math Guilds · Dual-Handle Context, Guild AI, Task Tab & Anti-Reselling',
    displayUrl: 'arithmo-edge.github.io/academy/',
    fullUrl: 'https://arithmo-edge.github.io/academy/',
    title: 'Subsite #9: Arithmo Academy Arena',
    titleHeader: 'Subsite #9: Arithmo Academy Arena',
    desc: 'Institutional portal with Dual-Handle Context Routing, Arithmo Guild AI navbar tab, Task homework tab, Academy Standing, dual-rank Members Standing, Virtual Edu Lab, and KYB Anti-Reselling Shield.',
    architectureIntro:
      'Arithmo Academy Arena is a full multi-tenant B2B workspace built for schools, Olympiad coaching institutes, and university math clubs scaling from 100 to 2,000+ students. It enforces strict Dual-Handle Context Routing (@student vs @student-academyname) so classroom drills never contaminate global ELOs, waives dues for 1–10 Admins, powers Batch Radar diagnostics via Arithmo Guild AI, and locks seat integrity behind the 5-Layer KYB Anti-Reselling Shield.',
    access: 'Institutional KYB Onboarding · Dual-Handle Context Routing',
    accentColor: '#22D3EE',
    themeLabel: '#22D3EE Institutional Cyan',
    schedule: 'Asynchronous Class Tasks + On-Demand Mock Contests + Inter-Academy Clashes',
    eloTracks: 'Indivisible Academy ELO (Score & Prestige) + Member Personal ELO Isolation',
    aiSecurityStack: 'Arithmo Guild AI, AcademyKYB, BatchRadar, ResellerShield (5 Layers)',
    sdkSyncHooks: [
      'Switches workspace identity atomically between @handle and @handle-academy context',
      'Meters shared institutional Guild AI pools (20 to 200+ / +15 per 50 extra Enterprise seats)',
      'Runs 5-Layer Anti-Reselling telemetry (KYB Bind, Churn Throttle, Geo-IP, Watermark, Revoke)',
      'Tracks Centralized Task Tab assignments, deadlines, and Batch Radar bottlenecks',
    ],
    keyCapabilities: [
      '4 Institutional Tiers: General ($29.99), Premium ($49.99), Supreme ($79.99), Enterprise ($149.99 1st mo)',
      'Fee-waived Admin governance (1–5 Admins; 1–10 Enterprise) + 1–15 Mentors + Enrolled Students',
      'Centralized Task Tab, Batch Radar Cohort Diagnostics & $2.99/24h Virtual Edu Lab (Free on Supreme+)',
      'Dual Academy Standings (Academy Score Top 50% Avg vs Academy Prestige Top 15 + Clashes)',
    ],
    subsystems: [
      {
        name: 'Dual-Handle Workspace Router',
        scope: '@user vs @user-academy',
        detail:
          'Separates homework tasks, internal drills, and Edu Lab collaboration from official personal ELO ratings until official Inter-Academy Clashes.',
      },
      {
        name: 'Guild AI & BatchRadar Engine',
        scope: 'Cohort Gap Diagnostics',
        detail:
          'Analyzes 100–2,000+ student submissions across syllabus tags so mentors spot weak theorems across entire graduating classes.',
      },
      {
        name: 'Pop-Up KYB & 5-Layer ResellerShield',
        scope: 'Seat Integrity Enforcement',
        detail:
          'Verifies school registration documents and blocks gray-market seat brokers via churn throttling and subnet coherence checks.',
      },
      {
        name: 'Inter-Academy Clash & Edu Lab',
        scope: 'Team Battles · Free on Supreme+',
        detail:
          'Coordinates rated school-vs-school matches ($4.99 a-la-carte) and live collaborative KaTeX proof whiteboards.',
      },
    ],
    relatedDocPage: {
      href: 'academies.html',
      label: 'Launch Interactive Academy Roster Calculator',
    },
  },
  {
    id: 'forge',
    indexNum: '10',
    category: 'platform',
    categoryLabel: 'Problemsetting Studio & Vault',
    tag: '10 · Subsite #10',
    shortTitle: 'Arithmo Forge',
    roleSummary: '1500+ ELO Problemsetting Studio · 5-Pillar Validation & Private Golden Vault',
    displayUrl: 'arithmo-edge.github.io/arithmo-forge/',
    fullUrl: 'https://arithmo-edge.github.io/arithmo-forge/',
    title: 'Subsite #10: Arithmo Forge',
    titleHeader: 'Subsite #10: Arithmo Forge',
    desc: "Isolated problemsetting studio (unlocked at 1500+ ELO + 6 clean matches) featuring the 5-Pillar engine and Co-Founders' Private Golden Vault (5 Core Arenas -> 4 Expert Segments -> .json sets of 10 problems).",
    architectureIntro:
      'Arithmo Forge isolates problem authoring inside a strict meritocratic studio unlocked only once a competitor reaches 1500+ Arena ELO with 6 consecutive clean matches. Every candidate draft must survive the 5-Pillar Legal Problem Engine—AoPS >75% similarity rejection, AdversarialRedTeam boundary attacks, Python SymPy proof verification, DifficultyCalibrator curving, and legal authorship transfer—complementing the Co-Founders’ Private 5×4 Golden Vault curated via JSON-Converter Schema v1.2.',
    access: '1500+ ELO + 6 Clean Matches · Golden Vault Isolated',
    accentColor: '#F59E0B',
    themeLabel: '#F59E0B Forge Amber',
    schedule: 'Rolling Authoring Pipeline · Contest Pool + Emergency Reserve Feeds',
    eloTracks: 'Contribution ELO Rewards (+Draft Acceptance) + Conflict-of-Interest Lock',
    aiSecurityStack: 'PlagioGuard, AdversarialRedTeam AI, SymPyVeritas, GoldenVault Miner',
    sdkSyncHooks: [
      'Verifies 1500+ ELO & 6-match clean HonestyScore before enabling draft submission',
      'Enforces Conflict-of-Interest lockout barring authors/testers from competing in their rounds',
      'Compiles Schema v1.2 validated sets compatible with JSON-Converter CLI rules',
      'Fetches read-only Co-Founders’ Golden Vault sets via Cloudflare Worker PAT proxy',
    ],
    keyCapabilities: [
      'Strict 1500+ ELO + 6 clean matches unlock preventing low-quality spam submissions',
      '5-Pillar Problem Engine: Similarity Block, Red-Team Attack, SymPy Veritas, ELO Calibrator, Legal Transfer',
      'Schema v1.2 JSON authoring aligned with github.com/Arithmo-Edge/JSON-Converter',
      'Co-Founders’ 5×4 Private Golden Vault (5 Arenas × 4 Expert Segments × 10-problem sets)',
    ],
    subsystems: [
      {
        name: 'Pillar 1–2: PlagioGuard & RedTeam',
        scope: '>75% Similarity Block',
        detail:
          'Rejects cloned AoPS/shortlist problems automatically while red-teaming drafts for small-case degeneracy (p=2, n=0) and LLM bypasses.',
      },
      {
        name: 'Pillar 3–4: SymPyVeritas & Calibrator',
        scope: 'Symbolic Proof & ELO Fit',
        detail:
          'Executes deterministic algebraic/numeric checks and calibrates difficulty placement across General and Segment 1–4 Expert tiers.',
      },
      {
        name: 'Co-Founders’ 5×4 Golden Vault',
        scope: 'Schema v1.2 · Zero Live Tags',
        detail:
          'Private repository co-authored by Rayaan Tasnim & Jalees Habib storing hidden-tag Expert sets served exclusively through Cloudflare Worker proxy.',
      },
    ],
    relatedDocPage: {
      href: 'socials-forge.html',
      label: 'Inspect 5-Pillar Forge & Golden Vault JSON',
    },
  },
  {
    id: 'socials',
    indexNum: '11',
    category: 'platform',
    categoryLabel: 'Scholarly Publishing & Appeals',
    tag: '11 · Subsite #11',
    shortTitle: 'Arithmo Socials',
    roleSummary: 'KaTeX Proof Blogs (+5 ELO), 2000+ Expert Q&A, Guidebooks & 7-Day Forensic Appeals',
    displayUrl: 'arithmo-edge.github.io/socials/',
    fullUrl: 'https://arithmo-edge.github.io/socials/',
    title: 'Subsite #11: Arithmo Socials',
    titleHeader: 'Subsite #11: Arithmo Socials',
    desc: 'KaTeX topic blogs, AI-curated Blog-to-Lab (+5 Contribution ELO), 2000+ ELO Expert Q&A, @handle DMs, and Forensic Appeal Portal (7-day post-ban access).',
    architectureIntro:
      'Arithmo Socials replaces noisy algorithmic social feeds with high-signal, KaTeX-rendered mathematical discourse. Articles are categorized strictly by arena and theorem focus so BlogScout AI can promote standout derivations into Blog-to-Lab training modules (+5 Contribution ELO), while write permissions on Expert Q&A threads remain gated at 2000+ ELO Sentinels. Socials also hosts the Dual Guidebooks and serves as the sole 7-day read/submit lifeline for penalized accounts inside the Forensic Appeal Portal.',
    access: '@handle Required · 7-Day Post-Ban Forensic Appeal Access',
    accentColor: '#22D3EE',
    themeLabel: '#22D3EE Discourse Cyan',
    schedule: 'Continuous Scholarly Stream · 7-Day Post-Ban Appeal SLA',
    eloTracks: 'Contribution ELO (+5 Blog-to-Lab · +2 Verified Guidebook Notes)',
    aiSecurityStack: 'BlogScout, ForumModerator, GuideCurator, AppealTriage',
    sdkSyncHooks: [
      'Enforces 2000+ Arena ELO write-gate on Expert Q&A answers while keeping reads open',
      'Grants +5 Contribution ELO on Blog-to-Lab promotion & +2 on Guidebook notes',
      'Maintains 7-day read-only Appeal Portal session access for suspended @handles',
      'Suppresses live round solution spoilers via ForumModerator during active contest windows',
    ],
    keyCapabilities: [
      'Topic-segmented KaTeX mathematical exposition blogs with AI-curated Blog-to-Lab promotion',
      'Strictly gated 2000+ ELO Expert Q&A forum moderated by ForumModerator & ProofGrader AI',
      'Dual Guidebooks: Free Community Guidebook & $14.99/mo Academy Guidebook (Free on Supreme+)',
      'Direct @handle peer messaging + 4-Step Forensic Appeal Portal (5-min Live Skill Audit path)',
    ],
    subsystems: [
      {
        name: 'Blog-to-Lab Promotion Pipeline',
        scope: '+5 Contribution ELO',
        detail:
          'Likes never buy rank—only original derivations audited by BlogScout AI and Problem Architects convert into interactive Labs.',
      },
      {
        name: '2000+ ELO Expert Q&A Gate',
        scope: 'Universal Read · Sentinel Write',
        detail:
          'Allows every student to study proof methodology while restricting authoritative responses to verified 2000+ ELO Sentinels.',
      },
      {
        name: 'Dual Community & Academy Guidebooks',
        scope: 'GuideCurator Verified (+2 ELO)',
        detail:
          'Verified theorem notes earn +2 personal Contribution ELO; approved Academy contributions publish across all institutions globally.',
      },
      {
        name: 'Forensic Appeal Portal',
        scope: '7-Day Post-Ban Access',
        detail:
          'Permits flagged contenders to inspect evidence packets and complete a monitored 5-minute Chief Arbiter Live Skill Audit.',
      },
    ],
    relatedDocPage: {
      href: 'socials-forge.html',
      label: 'Read Socials, Expert Q&A & Guidebook Docs',
    },
  },
  {
    id: 'hq',
    indexNum: '12',
    category: 'core',
    categoryLabel: 'Constitutional Command Portal',
    tag: '12 · Subsite #12',
    shortTitle: 'Headquarters Core',
    roleSummary: 'HQ-Only War-Room · 5-Tier Monotonic Ladder, Strict Chronology & Supreme HQ AI',
    displayUrl: 'arithmo-edge.github.io/hq-core/',
    fullUrl: 'https://arithmo-edge.github.io/hq-core/',
    title: 'Subsite #12: Arithmo Edge: Headquarters Core',
    titleHeader: 'Subsite #12: Arithmo Edge: Headquarters Core',
    desc: 'HQ-only command portal with war-room chat, 5-Tier Monotonic Headquarters escalation, and Supreme Headquarters AI accessible ONLY to Prime Sovereign & Chief Arbiter.',
    architectureIntro:
      'Headquarters Core is a completely isolated operational portal inaccessible to general traffic, subscriptions, or donors. Authority follows the 5-Tier Monotonic HQ ELO Ladder—Core Sentinel (100+), Problem Architect (300+), Round Coordinator (500+), Chief Arbiter (750+), and Prime Sovereign (1000+ Top 3)—protected by Strict Positional Chronology and dual Prime Sovereign Certificate endorsement so authority can never be purchased or bypassed.',
    access: 'HQ ELO 100+ Only · Headquarters AI Restricted to Chief Arbiter & Prime Sovereign',
    accentColor: '#F43F5E',
    themeLabel: '#F43F5E Sovereign Rose',
    schedule: '24/7 Operations War-Room · Sunday Mega Authoring & Live Audits',
    eloTracks: 'Monotonic HQ ELO (100 -> 300 -> 500 -> 750 -> 1000+ Top 3)',
    aiSecurityStack: 'Headquarters AI (Supreme Overlord), HQStrategist, BanAudit, AppealTriage',
    sdkSyncHooks: [
      'Hard rejects non-HQ tokens at edge route guard before bundle hydration',
      'Restricts Supreme Headquarters AI endpoint exclusively to 750+ Arbiter / 1000+ Sovereign',
      'Enforces Strict Positional Chronology ordering on HQ personnel hierarchy ledgers',
      'Writes immutable audit logs reviewed by Founder Rayaan Tasnim & Co-Founder Jalees Habib',
    ],
    keyCapabilities: [
      'Strict 3-Gate Induction: +200 Contribution ELO + 6 Clean Matches + Prime Sovereign Certificate',
      'HQ Competitor Privilege: Full rated public competing in all conflict-free rounds',
      'Progressive earned subscription grants from Free Plus (100+) to All Unlimited Free (1000+)',
      '5-Minute Live Skill Audit arbitration & 11-Flag Blackhole final confirmation war-room',
    ],
    subsystems: [
      {
        name: '5-Tier Monotonic HQ Ladder',
        scope: 'Core Sentinel to Prime Sovereign',
        detail:
          'Maps clear authority levels (triage -> Forge auditing -> T-30s round operations -> forensic arbitration -> constitutional stewardship).',
      },
      {
        name: 'Strict Positional Chronology Guard',
        scope: 'Anti-Cronyism Lock',
        detail:
          'Requires both target HQ ELO and Prime Sovereign endorsement; prevents junior members from leapfrogging senior officers purely on raw points.',
      },
      {
        name: 'Supreme Headquarters AI',
        scope: '750+ Arbiter & Sovereign Only',
        detail:
          'Synthesizes cross-round MBTS anomalies, reserves balance, and systemic QPRT-4 telemetry inside the command console.',
      },
    ],
    relatedDocPage: {
      href: 'governance.html',
      label: 'Explore 5-Tier HQ Ladder & Induction Charter',
    },
  },
  {
    id: 'database',
    indexNum: '13',
    category: 'competition',
    categoryLabel: 'Global Archive & Editorial Vault',
    tag: '13 · Subsite #13 (14th Site)',
    shortTitle: 'Arithmo Database',
    roleSummary: 'Launches Post #1–#12 · Historical Contests, IMO/Putnam/RMM/BMO/BdMO & AI Editorials',
    displayUrl: 'arithmo-edge.github.io/arithmo-database/',
    fullUrl: 'https://arithmo-edge.github.io/arithmo-database/',
    title: 'Subsite #13 (14th Website): Arithmo Database',
    titleHeader: 'Subsite #13 (14th Website): Arithmo Database',
    desc: 'Launches after Subsites #1–#12. Houses all past Arithmo contests (categorized by the 5 Core Arenas), world Olympiad archives (IMO, Putnam, RMM, BMO, BdMO), and AI-Generated Step-by-Step Editorials for all database and unrated problemset items.',
    architectureIntro:
      'Deployed intentionally as the 14th and final portal once Subsites #1–#12 reach full production, Arithmo Database serves as the permanent Olympiad knowledge library of the federation. It unlocks all hidden topic tags after live contests close, indexes decades of canonical IMO, Putnam, RMM, BMO, and BdMO problems alongside every past Arithmo round across the 5 Core Arenas, and pairs every archived item with AI-Generated Step-by-Step Editorials, Virtual Gym replay hooks, and Mistake Deck study filters.',
    access: 'Launches Post Subsites #1–#12 · Full Archive + AI Step-by-Step Editorials',
    accentColor: '#10B981',
    themeLabel: '#10B981 Archive Emerald',
    schedule: 'Phase II Rollout Post-#1–#12 · Continuous Post-Contest Indexing',
    eloTracks: 'Unrated Practice & Virtual Gym #/Virtual Replay (Tags Unlocked)',
    aiSecurityStack: 'ArchiveSynthesizer, WeaknessTargetedGen AI, SymPyVeritas, GuideCurator',
    sdkSyncHooks: [
      'Re-attaches stripped #topic tags cleanly once live contest windows close',
      'Serves Read-Shield precompiled static JSON indexes for instant multi-arena search',
      'Launches 1-click Virtual Gym (#/Virtual) ghost replays into Subsite #6',
      'Feeds user Mistake Deck & WeaknessTargetedGen AI spaced-repetition drills',
    ],
    keyCapabilities: [
      'Complete historical Arithmo round catalog partitioned cleanly across all 5 Core Arenas',
      'World Olympiad repositories covering IMO, Putnam, RMM, BMO, and BdMO archives',
      'AI-Generated Step-by-Step Editorials with verified lemma intuitions & alternate proofs',
      'Unlocked topic-tag search, difficulty filtering, offline PWA caching & Mistake Deck export',
    ],
    subsystems: [
      {
        name: '5-Arena Historical Contest Vault',
        scope: 'Post-Contest Tag Unlock',
        detail:
          'Indexes Monday–Sunday Arithmo rounds once finalized, unlocking sub-topic filters (#Inversion, #LTE, #Vieta-Jumping) for targeted practice.',
      },
      {
        name: 'World Olympiad Compendium',
        scope: 'IMO · Putnam · RMM · BMO · BdMO',
        detail:
          'Standardizes classic international and national Olympiad archives into searchable Schema v1.2 KaTeX records.',
      },
      {
        name: 'AI Step-by-Step Editorial Engine',
        scope: 'Intuition -> Lemma -> Proof',
        detail:
          'Walks learners through motivation, dead-end warnings, and formal SymPy-checked steps on every unrated and archived problem.',
      },
    ],
    relatedDocPage: {
      href: 'roadmap.html',
      label: 'Inspect Database Evolution & Platform Roadmap',
    },
  },
];

export const GOLDEN_VAULT_SAMPLES: Record<ArenaKey, {path: string; json: string; label: string}> = {
  nt: {
    label: 'Number Theory',
    path: 'Arithmo-Edge-Golden-Vault/Number_Theory/Segment_4_Apex/set_001.json',
    json: JSON.stringify(
      {
        schema_version: '1.2',
        ecosystem: 'Arithmo-Edge',
        mode: 'Expert',
        segment: 'Segment_4_Apex',
        set_id: '001',
        hub: 'Number Theory',
        tags_visibility: 'unrated_practice_only',
        hidden_during_live_contest: true,
        problem_count: 10,
        problems: [
          {
            q_index: 1,
            statement_plain: 'Find all primes p such that p^2 + 2^p is prime.',
            statement_latex: 'Find all primes $p$ such that $p^2 + 2^p$ is prime.',
            tags: ['Modular Arithmetic', 'Parity', 'LTE'],
            answer: 'p = 3',
          },
        ],
      },
      null,
      2
    ),
  },
  alg: {
    label: 'Algebra',
    path: 'Arithmo-Edge-Golden-Vault/Algebra/Segment_3_Master/set_002.json',
    json: JSON.stringify(
      {
        schema_version: '1.2',
        ecosystem: 'Arithmo-Edge',
        mode: 'Expert',
        segment: 'Segment_3_Master',
        set_id: '002',
        hub: 'Algebra',
        tags_visibility: 'unrated_practice_only',
        hidden_during_live_contest: true,
        problem_count: 10,
        problems: [
          {
            q_index: 1,
            statement_plain:
              'Find all functions f: R -> R satisfying f(x^2 + f(y)) = y + f(x)^2.',
            statement_latex:
              'Find all functions $f: \\mathbb{R} \\to \\mathbb{R}$ satisfying $f(x^2 + f(y)) = y + (f(x))^2$.',
            tags: ['Functional Equations', 'Injectivity', 'Fixed Points'],
            answer: 'f(x) = x',
          },
        ],
      },
      null,
      2
    ),
  },
  geo: {
    label: 'Geometry',
    path: 'Arithmo-Edge-Golden-Vault/Geometry/Segment_4_Apex/set_001.json',
    json: JSON.stringify(
      {
        schema_version: '1.2',
        ecosystem: 'Arithmo-Edge',
        mode: 'Expert',
        segment: 'Segment_4_Apex',
        set_id: '001',
        hub: 'Geometry',
        tags_visibility: 'unrated_practice_only',
        hidden_during_live_contest: true,
        problem_count: 10,
        problems: [
          {
            q_index: 1,
            statement_plain:
              'In acute triangle ABC, let H be the orthocenter and O the circumcenter. If angle AHB = 2*angle AOB, find angle ACB in degrees.',
            statement_latex:
              'In acute $\\triangle ABC$, let $H$ be the orthocenter and $O$ the circumcenter. If $\\angle AHB = 2\\angle AOB$, find $\\angle ACB$.',
            tags: ['Orthocenter', 'Circumcircle', 'Angle Chasing'],
            answer: '45 degrees',
          },
        ],
      },
      null,
      2
    ),
  },
  comb: {
    label: 'Combinatorics',
    path: 'Arithmo-Edge-Golden-Vault/Combinatorics_and_Permutation/Segment_2_Vanguard/set_003.json',
    json: JSON.stringify(
      {
        schema_version: '1.2',
        ecosystem: 'Arithmo-Edge',
        mode: 'Expert',
        segment: 'Segment_2_Vanguard',
        set_id: '003',
        hub: 'Combinatorics & Permutation',
        tags_visibility: 'unrated_practice_only',
        hidden_during_live_contest: true,
        problem_count: 10,
        problems: [
          {
            q_index: 1,
            statement_plain:
              'Determine the minimum number of subsets of size 3 needed from {1..7} so every pair appears in at least one subset.',
            statement_latex:
              'Find the minimum number of $3$-element subsets of $\\{1,2,\\dots,7\\}$ covering all pairs.',
            tags: ['Fano Plane', 'Block Designs', 'Pigeonhole'],
            answer: '7',
          },
        ],
      },
      null,
      2
    ),
  },
  mixed: {
    label: 'Mixed Olympiad',
    path: 'Arithmo-Edge-Golden-Vault/Mixed_Mathematical_Olympiad/Segment_4_Apex/set_001.json',
    json: JSON.stringify(
      {
        schema_version: '1.2',
        ecosystem: 'Arithmo-Edge',
        mode: 'Expert',
        segment: 'Segment_4_Apex',
        set_id: '001',
        hub: 'Mixed Mathematical Olympiad',
        tags_visibility: 'unrated_practice_only',
        hidden_during_live_contest: true,
        problem_count: 10,
        problems: [
          {
            q_index: 1,
            statement_plain:
              'Let a, b be positive integers with (a^2 + b^2) divisible by ab + 1. Evaluate (a^2 + b^2)/(ab + 1) when gcd(a, b) = 1 and a = 2, b = 8.',
            statement_latex:
              'Let $a,b \\in \\mathbb{Z}^+$ satisfy $(ab+1) \\mid (a^2+b^2)$. Compute $\\frac{a^2+b^2}{ab+1}$ for $(a,b) = (2,8)$.',
            tags: ['Vieta Jumping', 'Mixed Synthesis', 'Diophantine'],
            answer: '4',
          },
        ],
      },
      null,
      2
    ),
  },
};

export interface AiEngineEntry {
  group: 'public' | 'foundation' | 'guardians' | 'forge' | 'deterrence' | 'supreme';
  badge: string;
  name: string;
  desc: string;
  borderClass: string;
  badgeClass: string;
}

export const AI_ENGINES_42: AiEngineEntry[] = [
  // Group 1: 2 Public Mentor AIs
  {
    group: 'public',
    badge: 'Public Mentor AI · 01/02 · Subsite #8',
    name: 'Arithmo Personal AI',
    desc: 'Individual Socratic mathematics mentor on Subsite #8 offering guided discovery, post-contest upsolving, and AES-256 Soft-Pinch habit nudges with strict live-contest lockout.',
    borderClass: 'border-violet-400/25',
    badgeClass: 'text-violet-300',
  },
  {
    group: 'public',
    badge: 'Public Mentor AI · 02/02 · Subsite #9',
    name: 'Arithmo Guild AI',
    desc: 'Institutional cohort tutor on Subsite #9 supporting Academy Edu Labs, syllabus drills, and indivisible Academy ELO team contest preparation.',
    borderClass: 'border-violet-400/25',
    badgeClass: 'text-violet-300',
  },
  // Group 2: 2 Foundation Hybrid Models
  {
    group: 'foundation',
    badge: 'Foundation Hybrid Model · 01/02',
    name: 'Google Gemini (Pro & Flash)',
    desc: 'Dual-tier neural backbone combining Gemini Pro deep proof synthesis with low-latency Gemini Flash Socratic routing behind Cloudflare Workers.',
    borderClass: 'border-sky-400/25',
    badgeClass: 'text-sky-300',
  },
  {
    group: 'foundation',
    badge: 'Foundation Hybrid Model · 02/02',
    name: 'Qwen-Math (+ Python/SymPy Sandbox)',
    desc: 'Competition mathematics specialist model paired directly with an isolated Python / SymPy symbolic execution sandbox for deterministic math verification.',
    borderClass: 'border-sky-400/25',
    badgeClass: 'text-sky-300',
  },
  // Group 3: 24 QPRT-4 Guardians
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 01/24',
    name: 'PlagioGuard',
    desc: 'Scans Forge drafts and live proof submissions against AoPS and historical corpora, blocking >75% similarity contamination.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 02/24',
    name: 'AxiomCheck',
    desc: 'Verifies mathematical consistency, domain constraints, and boundary conditions before any problem or proof enters scoring.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 03/24',
    name: 'PulseWatcher',
    desc: 'Monitors real-time keystroke cadence, focus switches, and Module 7 telemetry streams during live rated rounds.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 04/24',
    name: 'NightWarden',
    desc: 'Runs continuous off-peak integrity sweeps, cross-round anomaly correlation, and silent overnight queue audits.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 05/24',
    name: 'GridShield',
    desc: 'Hardens Cloudflare Worker edge proxies against DDoS bursts, payload tampering, and malformed KaTeX/DOM injections.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 06/24',
    name: 'ChronoVault',
    desc: 'Locks server-signed SHA-256 submission timestamps and triggers automated 2-min SymPy Global Rejudges on verified problem flaws (+25 to +100 pts).',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 07/24',
    name: 'AppealTriage',
    desc: 'Assembles evidence packets and routes contestant anti-cheat disputes through the 4-Step Forensic Appeal pipeline.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 08/24',
    name: 'HonestyScore',
    desc: "Maintains each participant's longitudinal trust index across clean matches, Module 7 checks, and 11-Flag thresholds.",
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 09/24',
    name: 'CollusionHunter',
    desc: 'Detects coordinated solution sharing, synchronized 1v1 Bullet Blitz win-trading, and multi-account boosting rings.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 10/24',
    name: 'ResellerShield',
    desc: 'Enforces the 5-Layer Anti-Reselling Shield across Academy rosters by auditing seat transfers, device churn, and IP dispersion.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 11/24',
    name: 'BanAudit',
    desc: 'Reviews permanent disqualifications, ELO rollbacks, and 4-Signal Alt Neutralization evidence before immutable ledger commits.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 12/24',
    name: 'GuideCurator',
    desc: 'Curates verified Community & Institutional Guidebooks and awards +2 Contribution ELO for accepted mathematical tips.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 13/24',
    name: 'SuggestionMiner',
    desc: 'Clusters student feedback, feature proposals, and post-contest errata signals into prioritized Headquarters action queues.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 14/24',
    name: 'BlogScout',
    desc: 'Evaluates community KaTeX articles on Arithmo Socials for originality and promotes standout posts via Blog-to-Lab (+5 ELO).',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 15/24',
    name: 'ForumModerator',
    desc: 'Protects signal-to-noise on 2000+ Expert Q&A threads and suppresses spam, spoilers during active windows, and abuse.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 16/24',
    name: 'ProofGrader',
    desc: 'Evaluates Drag-and-Drop LaTeX proofs on an Olympiad rubric and assists Find the Flaw audits (+5 to +50 pts opponent proof hacks; -10 pts false-claim penalty).',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 17/24',
    name: 'TagArchitect',
    desc: 'Enforces the Zero-Fragmentation Olympiad Tag policy across the 5 Core Arenas and Schema v1.2 problem metadata.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 18/24',
    name: 'AcademyKYB',
    desc: 'Verifies institutional Know-Your-Business credentials and manages Dual-Handle routing and Academy ELO (a single indivisible institutional rating computed from team contest results and average member match performance).',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 19/24',
    name: 'BatchRadar',
    desc: 'Diagnoses cohort-wide conceptual gaps across 100 to 2,000+ Academy student rosters for mentor intervention.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 20/24',
    name: 'TokenMeter',
    desc: 'Governs fair Semantic Token billing: 0 tokens for greetings, -1 for duplicate clarifications, -N for multi-queries, and -2x for Hybrid mode.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 21/24',
    name: 'WalletLedger',
    desc: 'Reconciles Arithmo Wallet +10% top-up bonuses, Pay-As-You-Go packs, and Academy billing transactions atomically.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 22/24',
    name: 'ShadowBot',
    desc: 'Neutralizes suspected bot scripts and 11-Flag Blackhole accounts inside silent shadow-graded sandboxes without tipping off cheaters.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 23/24',
    name: 'HQStrategist',
    desc: 'Assists Headquarters operations with 7-Day Contest Calendar balancing, reserve pool readiness, and escalation triage.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  {
    group: 'guardians',
    badge: 'QPRT-4 Guardian · 24/24',
    name: 'ComplianceGuard AI',
    desc: 'Enforces the 14-Point Legal Shield, COPPA/GDPR-K underage data minimization, and 24-hour Zero-PII Data Lake scrubbing.',
    borderClass: 'border-cyan-400/25',
    badgeClass: 'text-cyan-300',
  },
  // Group 4: 12 Question-Forge & Anti-LLM Agents
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 01/12',
    name: 'GoldenVault Miner',
    desc: "Ingests the Co-Founders' private 5×4 Golden Vault via Read-Only GitHub PAT & Cloudflare Worker Proxy to serve Schema v1.2 sets.",
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 02/12',
    name: 'ArchiveSynthesizer',
    desc: 'Extracts structural problem motifs from public Olympiad archives to seed contamination-free original authoring templates.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 03/12',
    name: 'TheoremFusion',
    desc: 'Composes multi-domain Olympiad lemmas across Number Theory, Algebra, Geometry, and Combinatorics for Mixed rounds.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 04/12',
    name: 'AdversarialRedTeam AI',
    desc: 'Attacks draft Forge statements for edge cases (e.g., p=2, n=0, degenerate geometry) and tests resistance against frontier LLMs.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 05/12',
    name: 'IntuitionForge AI',
    desc: 'Designs problems prioritizing genuine human mathematical insight over brute-force algebraic expansion or pattern memorization.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 06/12',
    name: 'LogicMutator',
    desc: 'Produces clean parametric problem mutations and 30-second emergency reserve hot-swaps during live contest disruptions.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 07/12',
    name: 'TrapWeaver',
    desc: 'Embeds anti-LLM structural traps and eliminates accidental computational shortcuts or bashable small-modulus leaks.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 08/12',
    name: 'SymPyVeritas',
    desc: 'Runs deterministic Python/SymPy proof and answer-key verification on Forge candidates and 2-minute global rejudges.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 09/12',
    name: 'DifficultyCalibrator',
    desc: 'Calibrates 5-problem difficulty curves and expected solve latencies against the 0–3000+ segmented ELO ladder.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 10/12',
    name: 'QuantumShuffler',
    desc: 'Randomizes isomorphic variable bindings and symbolic presentation order per session to thwart copy-paste lookup.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 11/12',
    name: 'TelemetryReshaper',
    desc: 'Adapts problem phrasing and interactive GeoGebra/LaTeX scaffolding without altering mathematical equivalence.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  {
    group: 'forge',
    badge: 'Question-Forge & Anti-LLM · 12/12',
    name: 'WeaknessTargetedGen AI',
    desc: 'Synthesizes unrated practice sets targeting individual or cohort Arena tag weaknesses without contaminating rated pools.',
    borderClass: 'border-emerald-400/25',
    badgeClass: 'text-emerald-300',
  },
  // Group 5: 1 Psychological Deterrence Agent
  {
    group: 'deterrence',
    badge: 'Psychological Deterrence Agent · 01/01',
    name: 'Arithmo Alert AI',
    desc: 'Issues AES-256 encrypted soft-pinch warnings—nudging focus and organic LaTeX habits without exposing internal anti-cheat logic.',
    borderClass: 'border-amber-400/35',
    badgeClass: 'text-amber-300',
  },
  // Group 6: 1 Supreme Command Overlord AI
  {
    group: 'supreme',
    badge: 'Supreme Command Overlord AI · 01/01 · Subsite #12',
    name: 'Headquarters AI',
    desc: 'Root ecosystem command authority on Subsite #12, strictly exclusive to 750+ Chief Arbiters and 1000+ Prime Sovereigns.',
    borderClass: 'border-rose-400/35',
    badgeClass: 'text-rose-300',
  },
];

/* Deterministic Client-Side Math Engine (Miller-Rabin + Brent-Pollard's Rho) */
function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
  let result = 1n;
  let b = base % mod;
  let e = exp;
  while (e > 0n) {
    if (e & 1n) result = (result * b) % mod;
    e >>= 1n;
    b = (b * b) % mod;
  }
  return result;
}

export function isMillerRabinPrime(n: bigint): boolean {
  if (n < 2n) return false;
  const small = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n];
  for (const p of small) {
    if (n === p) return true;
    if (n % p === 0n) return false;
  }
  let d = n - 1n;
  let s = 0n;
  while ((d & 1n) === 0n) {
    d >>= 1n;
    s += 1n;
  }
  for (const a of [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n]) {
    if (a % n === 0n) continue;
    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) continue;
    let composite = true;
    for (let r = 1n; r < s; r++) {
      x = (x * x) % n;
      if (x === n - 1n) {
        composite = false;
        break;
      }
    }
    if (composite) return false;
  }
  return true;
}

function gcdBig(a: bigint, b: bigint): bigint {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y !== 0n) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x;
}

function brentPollardRho(n: bigint): bigint {
  if (n % 2n === 0n) return 2n;
  let c = 1n;
  while (true) {
    let y = 2n;
    let r = 1n;
    let q = 1n;
    let g = 1n;
    let x = 2n;
    let ys = 2n;
    const f = (v: bigint) => (v * v + c) % n;
    while (g === 1n) {
      x = y;
      for (let i = 0n; i < r; i++) y = f(y);
      let k = 0n;
      while (k < r && g === 1n) {
        ys = y;
        const lim = r - k < 64n ? r - k : 64n;
        for (let i = 0n; i < lim; i++) {
          y = f(y);
          const diff = x > y ? x - y : y - x;
          q = (q * diff) % n;
        }
        g = gcdBig(q, n);
        k += 64n;
      }
      r <<= 1n;
    }
    if (g === n) {
      do {
        ys = f(ys);
        const diff = x > ys ? x - ys : ys - x;
        g = gcdBig(diff, n);
      } while (g === 1n);
    }
    if (g !== n) return g;
    c += 1n;
  }
}

export function factorizeBigInt(n: bigint): bigint[] {
  const factors: bigint[] = [];
  function rec(v: bigint) {
    if (v <= 1n) return;
    if (isMillerRabinPrime(v)) {
      factors.push(v);
      return;
    }
    const d = brentPollardRho(v);
    rec(d);
    rec(v / d);
  }
  rec(n);
  return factors.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}
