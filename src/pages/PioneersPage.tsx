import React from 'react';
import {MEDIA} from '../assets/media';
import {GoldenVaultInspector} from '../components/GoldenVaultInspector';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

export const PioneersPage: React.FC = () => {
  return (
    <>
      {/* Section 1: Pioneer Manifesto & Founding Philosophy */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#00F0FF" secondaryHex="#8B5CF6" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">
                  01 · Founding Manifesto &amp; Olympiad Edge Governance
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">Pioneer Contributors</h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Arithmo-Edge was architected from scratch by two young Olympiad builders determined to democratize
                  real-time ELO mathematics globally without Venture Capital corruption, pay-to-win shortcuts, or
                  fragmented silos—hosted permanently on Free Forever GitHub Pages under{' '}
                  <span className="font-mono-tabular text-cyan-300">github.com/Arithmo-Edge</span>.
                </p>
              </HeroReveal>
              <HeroReveal delay={0.2}>
                <div className="flex flex-wrap gap-3 text-xs font-mono-tabular text-slate-300 pt-1">
                  <span>60% / 40% Founders Equity</span>
                  <span aria-hidden="true">·</span>
                  <span>24-Month Vesting Cliff</span>
                  <span aria-hidden="true">·</span>
                  <span>Guardian Custodianship Shield</span>
                </div>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.18} className="h-full">
                <div className="h-full min-h-[280px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame">
                  <ResilientImage
                    src={MEDIA.heroSanctuary}
                    alt="Arithmo-Edge Pioneer Contributors founding architecture"
                    loading="eager"
                    accentColor="#00F0FF"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-cyan-300 mb-1">Powered by Olympiad Edge</div>
                    <div className="font-display text-lg font-bold text-white">
                      Built by Young Architects for the World
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Founder Profile — Rayaan Tasnim */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-10 border-cyan-400/35">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono-tabular text-cyan-300">
                  02 · Founder &amp; Chief System Architect (13 Years Old)
                </div>
                <h2 className="section-title-fluid font-display font-bold text-white">Rayaan Tasnim</h2>
                <div className="space-y-1 text-xs font-mono-tabular">
                  <div className="text-slate-300">
                    Reserved Constitutional Title:{' '}
                    <span className="text-cyan-300 font-semibold">Core System Architect</span>
                  </div>
                  <div className="text-slate-300">
                    Equity Allocation:{' '}
                    <span className="text-emerald-400 font-semibold">60% Voting &amp; Economic Split</span>
                  </div>
                  <div className="text-slate-300">
                    Direct Contact:{' '}
                    <a href="mailto:rayaantasnim@gmail.com" className="text-cyan-400 hover:underline">
                      rayaantasnim@gmail.com
                    </a>
                  </div>
                  <div className="text-slate-300">
                    Organization Hub:{' '}
                    <a
                      href="https://github.com/Arithmo-Edge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      github.com/Arithmo-Edge
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                  Rayaan Tasnim conceived Olympiad Edge and single-handedly designed the entire{' '}
                  <span className="text-white font-semibold">
                    14-Website Federated Micro-Frontend Architecture
                  </span>
                  , <span className="font-mono-tabular text-cyan-300">Arithmo-Core-SDK (engine.js)</span>, the{' '}
                  <span className="text-white font-semibold">42-Engine AI Orchestration Layer</span>,{' '}
                  <span className="text-white font-semibold">QPRT-4 Security Resilience</span>, the Dual-Storage Hot
                  Firebase + Cold 24-hour Zero-PII Lake, and the{' '}
                  <span className="text-white font-semibold">
                    14-Point Global &amp; Bangladesh Legal Compliance Shield
                  </span>
                  .
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="text-cyan-300 font-semibold">Infrastructure</div>
                    <p className="text-slate-400 mt-1">
                      14 isolated GitHub Pages sites + Cloudflare Worker Edge Proxies.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="text-cyan-300 font-semibold">Security &amp; Law</div>
                    <p className="text-slate-400 mt-1">
                      QPRT-4 ChronoVault, 11-Flag Ladder, COPPA/GDPR-K &amp; DSA compliance.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="text-cyan-300 font-semibold">Client Compute</div>
                    <p className="text-slate-400 mt-1">
                      Zero-call BigInt Miller-Rabin &amp; Brent-Pollard&apos;s Rho factorization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Co-Founder Profile — Jalees Habib */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-10 border-violet-400/35">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-mono-tabular text-violet-300">
                  03 · Co-Founder &amp; Chief Mathematical Engineer
                </div>
                <h2 className="section-title-fluid font-display font-bold text-white">Jalees Habib</h2>
                <div className="space-y-1 text-xs font-mono-tabular">
                  <div className="text-slate-300">
                    Reserved Constitutional Title:{' '}
                    <span className="text-violet-300 font-semibold">Chief Mathematical Architect</span>
                  </div>
                  <div className="text-slate-300">
                    Equity Allocation:{' '}
                    <span className="text-emerald-400 font-semibold">40% Co-Founder Split (24-mo Vesting)</span>
                  </div>
                  <div className="text-slate-300">
                    Domain Authority:{' '}
                    <span className="text-white">5 Core Arenas · 60 Titles · Golden Vault</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                  Jalees Habib co-engineered the mathematical backbone of Arithmo-Edge: calibrating the{' '}
                  <span className="text-white font-semibold">5 Core Arenas</span> and{' '}
                  <span className="text-white font-semibold">60 progressive ELO titles</span>, eliminating topic
                  fragmentation by nesting sub-branches inside non-rating tags, validating Python/SymPy proof-grading
                  rubrics, and co-authoring the uncontaminated{' '}
                  <span className="font-mono-tabular text-violet-300">5×4 Private Golden Vault</span> problem sets.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="text-violet-300 font-semibold">ELO Calibrations</div>
                    <p className="text-slate-400 mt-1">
                      General/Expert split rating + Overall All-Rounder weighted aggregate.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="text-violet-300 font-semibold">Proof Standards</div>
                    <p className="text-slate-400 mt-1">0–7 Olympiad proof rubric &amp; Find-the-Flaw adversarial rules.</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5">
                    <div className="text-violet-300 font-semibold">Golden Vault IP</div>
                    <p className="text-slate-400 mt-1">
                      Original curated Schema v1.2 problem sets hidden during live rounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: 60% / 40% Equity, 24-Month Vesting & Fiduciary Legal Charter */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              04 · Founders&apos; Alignment &amp; Youth Protection
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              60% / 40% Equity, 24-Month Vesting &amp; Fiduciary Charter
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid-3 grid md:grid-cols-3 gap-6">
            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Split &amp; 24-Month Vesting</div>
              <h3 className="font-display text-lg font-bold text-white">60% Tasnim / 40% Habib</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Structured on a clear 24-month equal-cadence vesting schedule so both Founders remain aligned through V10
                global launch, V11 Database, and spin-off incorporation.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">Guardian Financial Custodianship</div>
              <h3 className="font-display text-lg font-bold text-white">Verified Legal Fiduciary Shield</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All subscription revenue, Academy settlements, and Wall of Patrons contributions sit inside transparent
                Parent/Guardian fiduciary custody until statutory adulthood.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-emerald-400/30">
              <div className="text-xs font-mono-tabular text-emerald-300">Dual IP Boundary</div>
              <h3 className="font-display text-lg font-bold text-white">Public Showcase vs. Secret Vaults</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                14 frontend portals showcase open UI/UX architecture publicly, while Private Golden Vaults, anti-cheat
                tuning, and Worker keys remain proprietary Olympiad Edge IP.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Interactive Private 5x4 Golden Vault (Schema v1.2) Inspector */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-amber-300 mb-2">
              05 · Arithmo-Edge-Golden-Vault · Read-Only PAT + Cloudflare Worker Proxy · JSON-Converter
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Private 5×4 Golden Vault (Schema v1.2) Inspector
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Co-authored by Rayaan Tasnim &amp; Jalees Habib using{' '}
              <a
                href="https://github.com/Arithmo-Edge/JSON-Converter"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tabular text-cyan-300 hover:underline"
              >
                github.com/Arithmo-Edge/JSON-Converter
              </a>
              : 5 Arenas × 4 Segments × 10 Problems per set, ingested solely by{' '}
              <span className="text-white font-semibold">Arithmo GoldenVault Miner AI</span> and suppressed
              automatically during active rated contests.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GoldenVaultInspector pathPrefix="Vault Object Path:" />
        </ScrollReveal>
      </section>

      {/* Section 6: Honorary Prime Sovereign Council & Hall of Architects */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-amber-300 mb-2">06 · Meritocratic Hall of Distinction</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              &#128081; Honorary Prime Sovereign Council
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="glass-panel rounded-2xl overflow-x-auto">
            <div className="min-w-[480px]">
              <div className="grid grid-cols-3 bg-slate-950/90 border-b border-slate-800 px-5 py-3 text-xs font-mono-tabular text-slate-400">
                <div>@handle</div>
                <div>HQ ELO</div>
                <div>Reserved / Honorary Title</div>
              </div>
              <div className="divide-y divide-slate-800/70 text-xs sm:text-sm">
                <div className="grid grid-cols-3 px-5 py-3.5 items-center gap-2">
                  <span className="font-mono-tabular text-cyan-300">@rayaantasnim</span>
                  <span className="font-mono-tabular text-amber-300 font-semibold">1000+ HQ ELO</span>
                  <span className="text-white font-semibold">Core System Architect</span>
                </div>
                <div className="grid grid-cols-3 px-5 py-3.5 items-center gap-2">
                  <span className="font-mono-tabular text-violet-300">@jaleeshabib</span>
                  <span className="font-mono-tabular text-amber-300 font-semibold">1000+ HQ ELO</span>
                  <span className="text-white font-semibold">Chief Mathematical Architect</span>
                </div>
                <div className="grid grid-cols-3 px-5 py-3.5 items-center gap-2">
                  <span className="font-mono-tabular text-slate-300">@olympiad-fellows</span>
                  <span className="font-mono-tabular text-emerald-300 font-semibold">Open 2026 Cohort</span>
                  <span className="text-slate-300">Honorary Prime Sovereign · Merit Nomination</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: Wall of Patrons & Open-Source / Olympiad CTA */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-10 border-amber-400/40">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="text-xs font-mono-tabular text-amber-300">
                  07 · &#9749; Wall of Patrons · Support the 13-Year-Old System Architect
                </div>
                <h2 className="section-title-fluid font-display font-bold text-white">
                  &#9749; Buy Me a Coffee · Transparent Patronage
                </h2>
                <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                  Every Patron contribution helps keep all 5 Arenas, daily Mon–Sat contests, Sunday Mega rounds, and Top
                  128 World Cup 100% Free Forever for students worldwide—funding domain infrastructure, Cloudflare Worker
                  sandboxes, and Olympiad problem archival without ever selling ELO points or contest privileges.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="mailto:rayaantasnim@gmail.com?subject=Arithmo-Edge%20Wall%20of%20Patrons%20Support"
                  className="btn-cyber px-5 py-3 text-sm text-center"
                >
                  Support via Direct Patronage
                </a>
                <a
                  href="https://github.com/Arithmo-Edge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass px-5 py-3 text-sm text-center"
                >
                  Contribute at github.com/Arithmo-Edge
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
