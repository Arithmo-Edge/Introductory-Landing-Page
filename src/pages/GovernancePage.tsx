import React, {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

type HqTierKey = 'sentinel' | 'architect' | 'coordinator' | 'arbiter' | 'sovereign';

interface HqTierSpec {
  key: HqTierKey;
  buttonLabel: string;
  buttonSub: string;
  subColor: string;
  title: string;
  elo: string;
  perks: string;
  duties: string;
}

const HQ_TIERS: HqTierSpec[] = [
  {
    key: 'sentinel',
    buttonLabel: '1. Core Sentinel',
    buttonSub: '100+ HQ ELO · Free Plus',
    subColor: 'text-cyan-300',
    title: 'Core Sentinel',
    elo: '100+ HQ ELO',
    perks: 'Free Plus Subscription Perks ($2.99/mo value) + Full Rated Public Competing (Conflict-Free Rounds Only)',
    duties: 'Entry Headquarters stewardship, problem testing verification, and live round queue triage.',
  },
  {
    key: 'architect',
    buttonLabel: '2. Problem Architect',
    buttonSub: '300+ HQ ELO · Free Pro',
    subColor: 'text-violet-300',
    title: 'Problem Architect',
    elo: '300+ HQ ELO',
    perks: 'Free Pro Subscription Perks ($5.99/mo value) + Full Rated Public Competing (Conflict-Free Rounds Only)',
    duties: 'Audits Forge submissions, enforces >75% AoPS similarity blocks, and validates SymPyVeritas checks.',
  },
  {
    key: 'coordinator',
    buttonLabel: '3. Round Coordinator',
    buttonSub: '500+ HQ ELO · Free Pro+',
    subColor: 'text-emerald-300',
    title: 'Round Coordinator',
    elo: '500+ HQ ELO',
    perks: 'Free Pro+ Perks + Priority Coordination Tools + Rated Public Competing (Conflict-Free Rounds Only)',
    duties: 'Operates T-30s Pre-Match Contract Page, handles live clarifications, and authorizes 30s reserve hot-swaps.',
  },
  {
    key: 'arbiter',
    buttonLabel: '4. Chief Arbiter',
    buttonSub: '750+ HQ ELO · Singularity + HQ AI',
    subColor: 'text-amber-300',
    title: 'Chief Arbiter',
    elo: '750+ HQ ELO',
    perks: 'Free Singularity Subscription Perks ($12.99/mo value) + Headquarters AI Access + Rated Public Competing',
    duties: 'Chairs 4-Step Forensic Appeals, conducts 5-min Live Skill Audits, and queries Supreme Headquarters AI.',
  },
  {
    key: 'sovereign',
    buttonLabel: '5. Prime Sovereign (Top 3)',
    buttonSub: '1000+ HQ ELO · All Unlimited',
    subColor: 'text-rose-300',
    title: 'Prime Sovereign',
    elo: '1000+ HQ ELO (Top 3 · Flag-Immune)',
    perks: '100% UNLIMITED Free Access to ALL Paid & Pay-As-You-Go Features + Headquarters AI',
    duties: 'Final constitutional governance, Prime Sovereign Certificate endorsements, and Strict Positional Chronology oversight.',
  },
];

export const GovernancePage: React.FC = () => {
  const [activeTierKey, setActiveTierKey] = useState<HqTierKey>('sentinel');
  const activeTier = HQ_TIERS.find((t) => t.key === activeTierKey) || HQ_TIERS[0];

  return (
    <>
      {/* Section 1: Headquarters Core War-Room & Supreme Headquarters AI */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#F59E0B" secondaryHex="#00F0FF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">
                  01 · arithmo-edge.github.io/hq-core/ · Meritocratic Governance
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  Headquarters Governance &amp; Wall of Patrons
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Power at Arithmo-Edge cannot be bought with subscriptions or Patron donations. Authority inside the{' '}
                  <span className="text-white font-semibold">Headquarters Core War-Room</span> is strictly earned along
                  the monotonic <span className="font-mono-tabular text-cyan-300">HQ ELO Ladder</span>—unlocking Plus,
                  Pro, Singularity, and Supreme <span className="text-white font-semibold">Headquarters AI</span>{' '}
                  organically through trusted platform stewardship.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.18} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame">
                  <ResilientImage
                    src={MEDIA.heroSanctuary}
                    alt="Headquarters Core War-Room and constitutional governance"
                    loading="eager"
                    accentColor="#F59E0B"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-amber-300 mb-1">Supreme Headquarters AI</div>
                    <div className="font-display text-lg font-bold text-white">
                      Restricted to 750+ Chief Arbiters &amp; Prime Sovereigns
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pioneer Contributors & Founding Leadership */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono-tabular text-cyan-300 mb-2">02 · Founding Constitutional Stewardship</div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Pioneer Contributors &amp; Reserved Titles
              </h2>
            </div>
            <a href="pioneers.html" className="btn-cyber px-4 py-2.5 text-xs sm:text-sm whitespace-nowrap">
              View Full Pioneer Contributors Dossier →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-deep-grid grid md:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 border-cyan-400/35 space-y-2">
              <div className="text-xs font-mono-tabular text-cyan-300">
                Founder &amp; Chief System Architect · Reserved: Core System Architect
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Rayaan Tasnim</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                13-year-old systems architect behind the 14-website GitHub Pages federation, 42-AI engine routing, QPRT-4
                security charter, 14-Point Legal Compliance Shield, and{' '}
                <span className="font-mono-tabular text-cyan-300">Arithmo-Core-SDK</span> (60% Equity Allocation).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 sm:p-8 border-violet-400/35 space-y-2">
              <div className="text-xs font-mono-tabular text-violet-300">
                Co-Founder &amp; Chief Mathematical Engineer · Reserved: Chief Mathematical Architect
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Jalees Habib</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Co-architect of the 5 Core Arenas, zero-fragmentation taxonomy, SymPy verification rubrics, and the
                Co-Founders&apos; Private 5×4 Golden Vault problem standard (40% Equity Allocation · 24-month vesting).
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Interactive 5-Tier Monotonic HQ Ladder */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">03 · Never Sold · Strictly Earned</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Interactive 5-Tier Monotonic HQ Ladder
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              <span className="text-white font-semibold">HQ Competitor Privilege:</span> HQ members can compete as
              regular rated contestants in public matches (except in specific rounds they authored, audited, or
              test-solved), while unlocking progressive free tiers from{' '}
              <span className="text-cyan-300 font-semibold">Plus</span> (
              <span className="font-mono-tabular">Core Sentinel</span>) through{' '}
              <span className="text-amber-300 font-semibold">
                100% UNLIMITED free access to ALL paid &amp; Pay-As-You-Go features + Headquarters AI
              </span>{' '}
              (<span className="font-mono-tabular">Prime Sovereign</span>).
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-2.5">
              {HQ_TIERS.map((tier) => {
                const isActive = activeTierKey === tier.key;
                return (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setActiveTierKey(tier.key)}
                    className={`w-full text-left spotlight-card rounded-xl p-4 flex items-center justify-between gap-3 transition-colors ${
                      isActive ? 'border-cyan-400 bg-cyan-400/10' : 'hover:border-slate-600'
                    }`}
                  >
                    <span className="font-display font-bold text-white text-sm">{tier.buttonLabel}</span>
                    <span className={`font-mono-tabular text-xs ${tier.subColor} text-right`}>{tier.buttonSub}</span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTier.key}
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -8}}
                  transition={{duration: 0.2}}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <div className="text-xs font-mono-tabular text-cyan-300">{activeTier.elo}</div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{activeTier.title}</h3>
                  </div>
                  <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4">
                    <div className="text-xs text-emerald-300 font-semibold mb-1">
                      Earned Platform &amp; Competitor Perks
                    </div>
                    <div className="text-sm text-white">{activeTier.perks}</div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/75 p-4">
                    <div className="text-xs text-cyan-300 font-semibold mb-1">Governance &amp; War-Room Duties</div>
                    <p className="text-sm text-slate-300 leading-relaxed">{activeTier.duties}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: HQ Induction Protocol & Dual Promotion Certification */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">04 · Anti-Cronyism Promotion Safeguards</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              HQ Induction Protocol &amp; Dual Promotion Certification
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid-3 grid md:grid-cols-3 gap-6">
            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Standard 3-Gate Induction</div>
              <h3 className="font-display font-bold text-white">Core Sentinel Entry (100 HQ ELO)</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Requires <span className="text-white font-semibold">(1) +200 Contribution ELO</span>,{' '}
                <span className="text-white font-semibold">
                  (2) 6 latest consecutive clean rated matches (100% trust score)
                </span>
                , and{' '}
                <span className="text-white font-semibold">
                  (3) an official Prime Sovereign Certificate + affirmative user consent
                </span>{' '}
                to enter as a Core Sentinel (with rare{' '}
                <span className="text-cyan-300 font-semibold">Direct Sovereign Induction</span> for extraordinary
                prodigies).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">Dual Promotion &amp; Chronology</div>
              <h3 className="font-display font-bold text-white">Strict Positional Chronology</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Advancing to any higher HQ tier requires <span className="text-white font-semibold">BOTH</span> reaching
                the target <span className="text-white font-semibold">HQ ELO bracket AND</span> manual endorsement via a{' '}
                <span className="text-white font-semibold">Prime Sovereign Certificate</span>. Under Strict Positional
                Chronology, a lower-ranked HQ member never overtakes a higher-ranked member on the HQ board even if
                their raw HQ ELO surpasses the senior member&apos;s score.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-amber-400/30">
              <div className="text-xs font-mono-tabular text-amber-300">Flag-Immune Sovereign Audit</div>
              <h3 className="font-display font-bold text-white">Transparent Action Logs</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prime Sovereigns operate inside cryptographic immutable ledgers audited by Founder Rayaan Tasnim and
                Co-Founder Jalees Habib. Regular HQ competitors retain full public contest rights in every round they did
                not author, audit, or test-solve.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Honorary Prime Sovereign Council */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-amber-300 mb-2">05 · Lifetime Distinctions</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              &#128081; Honorary Prime Sovereign Council
            </h2>
            <p className="text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Recognizing extraordinary mathematical problemsetters and architectural stewards using the immutable
              format: <span className="font-mono-tabular text-amber-300">@handle | HQ ELO | Honorary Title</span>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="glass-panel rounded-2xl overflow-x-auto">
            <div className="min-w-[480px]">
              <div className="grid grid-cols-3 bg-slate-950/90 border-b border-slate-800 px-5 py-3 text-xs font-mono-tabular text-slate-400">
                <div>@handle</div>
                <div>HQ ELO</div>
                <div>Honorary Title</div>
              </div>
              <div className="divide-y divide-slate-800/70 text-xs sm:text-sm">
                <div className="grid grid-cols-3 px-5 py-3.5 items-center gap-2">
                  <span className="font-mono-tabular text-cyan-300">@rayaantasnim</span>
                  <span className="font-mono-tabular text-amber-300 font-semibold">1000+ (Founder)</span>
                  <span className="text-white font-semibold">Core System Architect</span>
                </div>
                <div className="grid grid-cols-3 px-5 py-3.5 items-center gap-2">
                  <span className="font-mono-tabular text-violet-300">@jaleeshabib</span>
                  <span className="font-mono-tabular text-amber-300 font-semibold">1000+ (Co-Founder)</span>
                  <span className="text-white font-semibold">Chief Mathematical Architect</span>
                </div>
                <div className="grid grid-cols-3 px-5 py-3.5 items-center gap-2">
                  <span className="font-mono-tabular text-slate-300">@sovereign-seat-01</span>
                  <span className="font-mono-tabular text-amber-300 font-semibold">1000+ (Launch Cohort)</span>
                  <span className="text-slate-300">Honorary Prime Sovereign</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Wall of Patrons Accountability Ledger */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-10 flex flex-wrap items-center justify-between gap-6 border-amber-400/35">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono-tabular text-amber-300">
                06 · &#9749; Buy Me a Coffee · Zero ELO Advantage Guarantee
              </div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                &#9749; Wall of Patrons Accountability Ledger
              </h2>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Philanthropic supporters and Olympiad alumni funding domain renewal, AI inference compute, and educational
                fellowships are permanently honored on the Wall of Patrons. By constitutional rule, Patronage grants{' '}
                <span className="text-emerald-400 font-semibold">
                  0 ELO points, 0 contest advantage, and 0 moderation authority
                </span>
                .
              </p>
            </div>
            <a href="pioneers.html" className="btn-cyber px-5 py-3 text-sm whitespace-nowrap">
              Visit Wall of Patrons &amp; Support
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
