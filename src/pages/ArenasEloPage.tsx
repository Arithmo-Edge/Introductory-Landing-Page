import React, {useState} from 'react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';
import {ARENA_CATALOG, ArenaKey} from '../data/ecosystem';

const ARENA_KEYS: ArenaKey[] = ['nt', 'alg', 'geo', 'comb', 'mixed'];

export const ArenasEloPage: React.FC = () => {
  const [selectedArenaKey, setSelectedArenaKey] = useState<ArenaKey>('nt');
  const [genElo, setGenElo] = useState<number>(1500);
  const [expElo, setExpElo] = useState<number>(1700);

  const arena = ARENA_CATALOG[selectedArenaKey];
  const avg = Math.round((genElo + expElo) / 2);
  const matchedTier =
    arena.titles.find((t) => avg >= t.min && avg <= t.max) ?? arena.titles[arena.titles.length - 1];

  const unlockNotice =
    avg >= 2000
      ? 'Unlocked: Grandmaster Peer Review (Expert Segments 1 & 2) + 2000+ Expert Q&A + Arithmo Forge Problemsetting +HQ Consideration'
      : avg >= 1500
        ? 'Unlocked: Arithmo Forge Problemsetting Eligible (requires 6 clean matches at this rating)'
        : 'Training Band: Earn 1500+ ELO & 6 clean matches to unlock Arithmo Forge problemsetting';

  return (
    <>
      {/* Section 1: Strict No-Mixed ELO Policy (10 Core Arena ELOs) */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#8B5CF6" secondaryHex="#00F0FF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-violet-300 font-medium">
                  01 · Strict No-Mixed ELO Policy · 10 Core Arena ELOs
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  5 Core Arenas &amp; 60 Canonical ELO Titles
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Arithmo-Edge prohibits single-bucket rating inflation through its{' '}
                  <span className="text-white font-semibold">Strict No-Mixed ELO Policy</span>: every competitor
                  maintains <span className="text-white font-semibold">10 isolated Core Arena ELOs</span> (an
                  independent General ELO and Expert ELO inside each of the 5 arenas), ensuring fast arithmetic solvers
                  cannot coast to proof-level Grandmaster titles without proven theorem mastery.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.16} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame group">
                  <ResilientImage
                    src={MEDIA.olympiadArenas}
                    alt="Mathematical data visualization across 5 Core Arenas"
                    loading="eager"
                    accentColor="#8B5CF6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs text-rose-300 font-medium">10 Core Arena ELOs + 2 Specialized Tracks</div>
                    <p className="ae-prose text-sm text-slate-200 mt-1">
                      10 Arena ELOs track competitive skill; Contribution ELO and HQ ELO track editorial and governance
                      stewardship separately.
                    </p>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Average-Based 12-Tier Rank Formula */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs text-cyan-300 font-medium">02 · Average-Based 12-Tier Rank Formula</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Balancing Speed Computation &amp; Olympiad Proof Rigor
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                While <code className="font-mono-tabular text-cyan-300">General ELO</code> and{' '}
                <code className="font-mono-tabular text-violet-300">Expert ELO</code> update independently on separate
                leaderboards on Subsite #7, your visible <span className="text-white font-semibold">12-Tier Rank Badge</span>{' '}
                in any arena is dynamically resolved from their exact arithmetic midpoint.
              </p>
            </div>
            <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-cyan-400/35 text-center space-y-2">
              <div className="text-xs text-slate-400">Canonical Rank Formula</div>
              <div className="font-mono-tabular text-lg sm:text-xl font-bold text-cyan-300">
                Arena Rank ELO = (General ELO + Expert ELO) / 2
              </div>
              <div className="text-xs text-slate-400">Evaluated identically across all 5 arenas (0–3200 scale)</div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Interactive Dual-Slider 60-Tier ELO Simulator */}
      <section id="elo-simulator" className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-cyan-300 font-medium">03 · Interactive Dual-Slider Simulator</p>
                <h2 className="section-title-fluid font-display font-bold text-white">
                  60-Title Arena Rank Badge Explorer
                </h2>
              </div>
              <div className="font-mono-tabular text-xs text-slate-400">Range: 0–3200 General &amp; Expert ELO</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {ARENA_KEYS.map((key) => {
                const info = ARENA_CATALOG[key];
                const isSelected = key === selectedArenaKey;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedArenaKey(key)}
                    className={`px-4 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      isSelected
                        ? 'border-cyan-400 bg-slate-800 ring-2 ring-cyan-400 text-white'
                        : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white'
                    }`}
                  >
                    {info.key === 'comb' ? 'Combinatorics' : info.key === 'mixed' ? 'Mixed Olympiad' : info.name} (
                    {info.color})
                  </button>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <label htmlFor="sim-gen-elo" className="text-slate-200 font-medium">
                        General ELO
                      </label>
                      <span className="font-mono-tabular font-bold text-cyan-300">{genElo}</span>
                    </div>
                    <input
                      id="sim-gen-elo"
                      type="range"
                      min={0}
                      max={3200}
                      step={10}
                      value={genElo}
                      onChange={(e) => setGenElo(Number(e.target.value))}
                      className="w-full cyber-range"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <label htmlFor="sim-exp-elo" className="text-slate-200 font-medium">
                        Expert ELO
                      </label>
                      <span className="font-mono-tabular font-bold text-violet-300">{expElo}</span>
                    </div>
                    <input
                      id="sim-exp-elo"
                      type="range"
                      min={0}
                      max={3200}
                      step={10}
                      value={expElo}
                      onChange={(e) => setExpElo(Number(e.target.value))}
                      className="w-full cyber-range"
                    />
                  </div>
                </div>

                <div
                  className="p-6 rounded-2xl bg-slate-950/90 border space-y-3 transition-all"
                  style={{
                    borderColor: arena.color,
                    boxShadow: `0 0 36px ${arena.color}22`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                    <span>{arena.name}</span>
                    <span className="font-mono-tabular truncate">{arena.subsite}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Computed 12-Tier Rank Title</div>
                      <div
                        className="font-display text-2xl sm:text-3xl font-bold tracking-tight"
                        style={{color: arena.color}}
                      >
                        {matchedTier.title}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-slate-400">Average ELO</div>
                      <div className="font-mono-tabular text-3xl font-bold text-white">{avg}</div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300">{unlockNotice}</div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <div className="text-xs text-slate-400 mb-2">Active Arena 12-Tier Progression Ladder (Live Highlighted)</div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {arena.titles.map((t) => {
                    const isCurrent = t.title === matchedTier.title;
                    return (
                      <div
                        key={t.title}
                        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-xs transition-all ${
                          isCurrent
                            ? 'bg-slate-900 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.18)]'
                            : 'bg-slate-950/60 border-slate-800/80 text-slate-400'
                        }`}
                      >
                        <span className="font-medium truncate" style={isCurrent ? {color: arena.color} : undefined}>
                          {t.title}
                        </span>
                        <span className="font-mono-tabular shrink-0 text-[11px]">
                          {t.max >= 9999 ? `${t.min}+` : `${t.min}–${t.max}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Zero-Fragmentation Olympiad Tag Policy */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs text-amber-300 font-medium">04 · Zero-Fragmentation Olympiad Tag Policy</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Tags Locked in Rated Rounds · Unlocked in Practice
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                In authentic Olympiads like the IMO or Putnam, problems never arrive pre-labeled with the theorem
                required to solve them. Sub-topics such as{' '}
                <span className="font-mono-tabular text-cyan-300">#Modular-Arithmetic</span>,{' '}
                <span className="font-mono-tabular text-violet-300">#Vieta-Jumping</span>,{' '}
                <span className="font-mono-tabular text-amber-300">#Inversion</span>, and{' '}
                <span className="font-mono-tabular text-emerald-300">#Pigeonhole</span> are{' '}
                <span className="text-white font-semibold">strictly hidden during live rated contests</span> and unlocked
                exclusively during unrated practice and{' '}
                <code className="font-mono-tabular text-cyan-300">Arithmo Database</code> review.
              </p>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              <SpotlightCard className="rounded-xl p-5 border-rose-500/35 space-y-1.5">
                <div className="text-xs font-mono-tabular text-rose-400">Live Rated Mode</div>
                <div className="font-semibold text-white text-sm">Topic Hints Stripped</div>
                <p className="ae-prose text-xs text-slate-400">
                  Only Arena domain and Segment difficulty appear; TagArchitect suppresses sub-topic strings client
                  &amp; edge side.
                </p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 border-emerald-500/35 space-y-1.5">
                <div className="text-xs font-mono-tabular text-emerald-400">Unrated Practice &amp; Database</div>
                <div className="font-semibold text-white text-sm">Granular Theorem Search</div>
                <p className="ae-prose text-xs text-slate-400">
                  Full tag filtering unlocks post-contest so WeaknessTargetedGen AI can target specific lemma gaps.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Complete 60-Title Rank Matrix Breakdown */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-cyan-300 font-medium mb-1">05 · Complete 60-Title Rank Matrix</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              All 5 Specialized Mathematical Arenas
            </h2>
          </div>

          <div className="ae-bento-grid ae-bento-grid-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ARENA_KEYS.slice(0, 4).map((key, idx) => {
              const info = ARENA_CATALOG[key];
              return (
                <SpotlightCard key={key} className="rounded-2xl p-6 space-y-3">
                  <h3 className="font-display text-lg font-bold" style={{color: info.color}}>
                    {idx + 1}. {info.name} ({info.color})
                  </h3>
                  <div className="text-xs font-mono-tabular text-slate-300 space-y-1.5">
                    {info.titles.map((t, tIdx) => {
                      const isPeak = tIdx === info.titles.length - 1;
                      return (
                        <div
                          key={t.title}
                          className={`flex justify-between ${isPeak ? 'font-semibold' : ''}`}
                          style={isPeak ? {color: info.color} : undefined}
                        >
                          <span>{t.title}</span>
                          <span className={isPeak ? '' : 'text-slate-400'}>
                            {t.max >= 9999 ? `${t.min}+` : `${t.min}–${t.max}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </SpotlightCard>
              );
            })}

            <SpotlightCard className="rounded-2xl p-6 space-y-3 md:col-span-2 xl:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-[#F43F5E]">
                  5. Mixed Mathematical Olympiad (#F43F5E)
                </h3>
                <span className="text-xs text-slate-400">Primary Anchor for Overall All-Rounder Rating</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-xs font-mono-tabular text-slate-300">
                {ARENA_CATALOG.mixed.titles.map((t, tIdx) => {
                  const isPeak = tIdx === ARENA_CATALOG.mixed.titles.length - 1;
                  return (
                    <div
                      key={t.title}
                      className={`flex justify-between ${isPeak ? 'text-[#F43F5E] font-semibold' : ''}`}
                    >
                      <span>{t.title}</span>
                      <span className={isPeak ? '' : 'text-slate-400'}>
                        {t.max >= 9999 ? `${t.min}+` : `${t.min}–${t.max}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Overall All-Rounder Composite Rating */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-4 border-rose-400/30">
            <div className="text-xs font-mono-tabular text-rose-300">06 · Overall All-Rounder Composite Rating</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Cross-Disciplinary Mastery Anchored on Mixed Olympiad
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed prose-measure">
              Displayed prominently on the Core Portal and Subsite #7 Standings Portal (
              <code className="font-mono-tabular text-rose-300">All Rounders</code> leaderboard), the{' '}
              <span className="text-white font-semibold">Overall All-Rounder Rating</span> aggregates performance across
              all 5 Core Arenas while anchoring primarily on{' '}
              <span className="text-rose-300 font-semibold">Subsite #5 (Mixed Mathematical Olympiad)</span> and Sunday
              Mega Arena outcomes—identifying true polymathic Olympiad contenders eligible for the Top 128 Annual World
              Cup.
            </p>
          </SpotlightCard>
        </ScrollReveal>
      </section>

      {/* Section 7: 1v1 Bullet Blitz & Underdog Protection Rules */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-cyan-300 font-medium">07 · 1v1 Bullet Blitz &amp; Underdog Protection</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Anti-Farming &amp; System Expectation Override Rules
            </h2>
          </div>
          <div className="ae-bento-grid ae-bento-grid-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="font-mono-tabular text-xs text-cyan-300">Matchmaking Window</div>
              <h3 className="font-display text-lg font-bold text-white">&plusmn;100 ELO Pool + Direct @handle</h3>
              <p className="ae-prose text-sm text-slate-300">
                Random queues pair competitors within &plusmn;100 ELO. Direct friend challenges via{' '}
                <code className="font-mono-tabular text-cyan-300">@handle</code> include a 30-minute acceptance fallback.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="font-mono-tabular text-xs text-amber-300">Anti-Collusion Limit</div>
              <h3 className="font-display text-lg font-bold text-white">24h 2-Match Pairwise Cap</h3>
              <p className="ae-prose text-sm text-slate-300">
                Any two <code className="font-mono-tabular text-amber-300">@handles</code> can play at most 2 rated 1v1
                matches in a rolling 24-hour window, neutralizing ELO win-trading rings.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="font-mono-tabular text-xs text-emerald-300">System Expectation Override</div>
              <h3 className="font-display text-lg font-bold text-white">+ΔR Underdog Protection</h3>
              <p className="ae-prose text-sm text-slate-300">
                When a lower-rated solver faces a 2000+ Sentinel and outperforms expected score margin, System
                Expectation Override protects against harsh rating drops.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
