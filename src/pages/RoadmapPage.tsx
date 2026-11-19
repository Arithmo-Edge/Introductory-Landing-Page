import React from 'react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

export const RoadmapPage: React.FC = () => {
  return (
    <>
      {/* Section 1: Interactive Evolution Timeline (V3.2–V11.0+) */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#00F0FF" secondaryHex="#F59E0B" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">01 · Version Evolution &amp; Multi-Decade Strategy</div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  Evolution Roadmap &amp; 8 Spin-Off Companies
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Trace Arithmo-Edge&apos;s engineering journey from{' '}
                  <span className="font-mono-tabular text-cyan-300">V3.2</span> early browser prototypes through the{' '}
                  <span className="font-mono-tabular text-cyan-300">V10.0–V10.3</span> federated breakthroughs, the{' '}
                  <span className="text-white font-semibold">December 31, 2026 Midnight</span> Global Launch,{' '}
                  <span className="font-mono-tabular text-cyan-300">V11.0+ Arithmo Database</span>, and Olympiad
                  Edge&apos;s 20-year corporate horizon across 8 specialized spin-off companies.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.18} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame">
                  <ResilientImage
                    src={MEDIA.academyArchive}
                    alt="Mathematical archives and Olympiad Edge horizon"
                    loading="eager"
                    accentColor="#F59E0B"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-cyan-300 mb-1">
                      V3.2 → V11.0+ → 20-Year Holding Horizon
                    </div>
                    <div className="font-display text-lg font-bold text-white">
                      Olympiad Edge Alphabet-Style Holding Structure
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>

          <HeroReveal delay={0.24}>
            <div className="ae-bento-grid grid md:grid-cols-4 gap-4">
              <SpotlightCard className="rounded-2xl p-5 space-y-2 border-slate-700/70">
                <div className="text-xs font-mono-tabular text-slate-400">V3.2 – V6.0 · Foundation</div>
                <h3 className="font-display font-bold text-white">Single-Repo Prototype</h3>
                <p className="text-xs text-slate-300">
                  Initial KaTeX contest client, Firebase Auth proof of concept, and earliest Number Theory ELO curves.
                </p>
              </SpotlightCard>

              <SpotlightCard className="rounded-2xl p-5 space-y-2 border-violet-400/35">
                <div className="text-xs font-mono-tabular text-violet-300">V7.0 – V9.5 · Split &amp; AI</div>
                <h3 className="font-display font-bold text-white">14-Portal Federation</h3>
                <p className="text-xs text-slate-300">
                  Migrated arenas into 14 isolated GitHub Pages sites linked via Arithmo-Core-SDK and 42 specialized AI
                  engines.
                </p>
              </SpotlightCard>

              <SpotlightCard className="rounded-2xl p-5 space-y-2 border-cyan-400/45">
                <div className="text-xs font-mono-tabular text-cyan-300">V10.0 – V10.3 · Launch Era</div>
                <h3 className="font-display font-bold text-white">QPRT-4 &amp; Global Launch</h3>
                <p className="text-xs text-slate-300">
                  ChronoVault resilience, Module 7 optional/mandatory toggles, Academy Enterprise SaaS, and Schema v1.2
                  Vaults.
                </p>
              </SpotlightCard>

              <SpotlightCard className="rounded-2xl p-5 space-y-2 border-amber-400/45">
                <div className="text-xs font-mono-tabular text-amber-300">V11.0+ · Post-Launch</div>
                <h3 className="font-display font-bold text-white">Arithmo Database &amp; API</h3>
                <p className="text-xs text-slate-300">
                  Permanent open-indexed repository of verified Olympiad lemmas, SymPy certificates, and formal proof
                  trees.
                </p>
              </SpotlightCard>
            </div>
          </HeroReveal>
        </div>
      </section>

      {/* Section 2: V10.0-V10.3 Flagship Architectural Milestones */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">02 · Release Engineering Focus</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              V10.0–V10.3 Flagship Architectural Milestones
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-cyan-400/35">
              <div className="text-xs font-mono-tabular text-cyan-300">V10.0 · Context-Injected AI &amp; Enterprise</div>
              <h3 className="font-display font-bold text-white">Standalone AI Portals &amp; Metering</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Launch of standalone <span className="text-white font-semibold">Arithmo Personal AI</span> (Subsite #8),{' '}
                <span className="text-white font-semibold">Arithmo Guild AI</span> (Subsite #9),{' '}
                <span className="text-white font-semibold">Academy Enterprise</span> tier, and Dynamic Semantic Token
                Metering with In-Chat Dual-Model Selector.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-amber-400/35">
              <div className="text-xs font-mono-tabular text-amber-300">
                V10.1 · Top 128 Annual World Cup (&#128081;)
              </div>
              <h3 className="font-display font-bold text-white">6-Round Progressive Bracket</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Invites the world&apos;s Top 128 contenders into a 6-round Progressive Half-Elimination Bracket (
                <span className="font-mono-tabular text-amber-300">128 → 64 → 32 → 16 → 8 → 4 → Champion</span>) awarding
                permanent rotating Golden Crowns (&#128081;).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-emerald-400/35">
              <div className="text-xs font-mono-tabular text-emerald-300">
                V10.2 · Offline-First Installable PWA
              </div>
              <h3 className="font-display font-bold text-white">14-Portal PWA &amp; T-15m Alerts</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transforms all 14 portals into installable Progressive Web Apps (
                <span className="font-mono-tabular text-emerald-300">Service Workers + IndexedDB</span>) with offline
                practice caching and <span className="font-mono-tabular">T-15 minute</span> contest push notifications.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-violet-400/35">
              <div className="text-xs font-mono-tabular text-violet-300">V10.3 · AI Smart Mistake Deck</div>
              <h3 className="font-display font-bold text-white">7-Day Spaced Repetition Engine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated <span className="font-mono-tabular text-violet-300">7-day</span> spaced-repetition flashcard
                engine synthesized directly from each competitor&apos;s contest misses and weak Olympiad tags.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Arithmo Database Launch Architecture */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono-tabular text-cyan-300">
                03 · Subsite #13 · arithmo-edge.github.io/arithmo-database/
              </div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Arithmo Database (14th Portal · Post Subsites #1–#12)
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                Launching as the 14th federated portal right after Subsites #1–#12,{' '}
                <span className="text-white font-semibold">Arithmo Database</span> houses{' '}
                <span className="text-white font-semibold">all past Arithmo-Edge contests</span> categorized across
                the 5 Core Arenas PLUS world-renowned international &amp; national Olympiad archives (
                <span className="font-mono-tabular text-cyan-300">IMO, Putnam, RMM, BMO, BdMO</span>), paired with{' '}
                <span className="text-white font-semibold">AI-Generated Step-by-Step Editorials</span> for every
                database and unrated problemset item.
              </p>
            </div>
            <div className="lg:col-span-6 glass-panel rounded-2xl p-6 space-y-3 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">
                Structured Corpus &amp; Editorial Deliverables
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li>• Complete past Arithmo-Edge contests categorized cleanly by the 5 Core Arenas</li>
                <li>
                  • Historical <span className="text-white font-semibold">IMO, Putnam, RMM, BMO, and BdMO</span> Olympiad
                  problem archives
                </li>
                <li>
                  • <span className="text-white font-semibold">AI-Generated Step-by-Step Editorials</span> on every
                  database &amp; unrated problemset item
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Bootstrapped Year-1 Milestones vs. 20-Year Enterprise Horizon */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">04 · Disciplined Execution Horizon</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Year-1 Bootstrapped Targets vs. 20-Year Holding Horizon
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-deep-grid grid md:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-emerald-400/35">
              <div className="text-xs font-mono-tabular text-emerald-300">Year 1 · ~$160–$680/mo Net Profit</div>
              <h3 className="font-display text-xl font-bold text-white">Bootstrapped Global Launch</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Disciplined zero-burn foundation generating{' '}
                <span className="font-mono-tabular text-emerald-300 font-semibold">~$160–$680/mo</span> net profit via
                14 GitHub Pages hosts, Firebase Spark/Blaze Read-Shield caching, client BigInt offload, sustainable
                Plus/Pro/Singularity margins, and early Academy onboarding.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-violet-400/35">
              <div className="text-xs font-mono-tabular text-violet-300">
                20-Year Holding Horizon · $1.5B–$3.0B Valuation
              </div>
              <h3 className="font-display text-xl font-bold text-white">Olympiad Edge Holding Group</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Scales cleanly to{' '}
                <span className="font-mono-tabular text-violet-300 font-semibold">$140M–$300M/yr</span> revenue and{' '}
                <span className="font-mono-tabular text-emerald-300 font-semibold">$100M–$225M/yr</span> net profit at{' '}
                <span className="font-mono-tabular text-white font-semibold">~75% margin</span> (
                <span className="font-mono-tabular text-amber-300 font-semibold">$1.5B–$3.0B</span> holding valuation)
                across 8 autonomous spin-off verticals.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: The 8 Multi-Million Dollar Spin-Off Companies */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              05 · Olympiad Edge 8 Canonical Spin-Off Verticals
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              The 8 Multi-Million Dollar Spin-Off Companies
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Spin-Off 01</div>
              <h3 className="font-display font-bold text-white">AI Reasoning Data &amp; Foundation Model Lab</h3>
              <p className="text-xs text-slate-300">
                Zero-PII Chain-of-Thought &amp; negative RLHF theorem-proving dataset licensing for frontier models.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">Spin-Off 02</div>
              <h3 className="font-display font-bold text-white">Zero-Cheat Exam Proctoring SaaS</h3>
              <p className="text-xs text-slate-300">
                Module 7 standalone B2B browser proctoring API with Adaptive Gaze Guard &amp; 3-Axis Audio Trap.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-emerald-400/30">
              <div className="text-xs font-mono-tabular text-emerald-300">Spin-Off 03</div>
              <h3 className="font-display font-bold text-white">Global Quant &amp; Tech Talent Recruitment Network</h3>
              <p className="text-xs text-slate-300">
                Direct meritocratic hiring bridge earning $20k–$50k per verified high-ELO engineering or quant placement.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-amber-400/30">
              <div className="text-xs font-mono-tabular text-amber-300">Spin-Off 04</div>
              <h3 className="font-display font-bold text-white">
                Automated Formal Math &amp; Code Verification Engine
              </h3>
              <p className="text-xs text-slate-300">
                AxiomCheck + SymPy deterministic theorem and algorithm verification auditor for R&amp;D labs.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-rose-400/30">
              <div className="text-xs font-mono-tabular text-rose-300">Spin-Off 05</div>
              <h3 className="font-display font-bold text-white">
                Global Institutional LMS &amp; Accredited Digital University
              </h3>
              <p className="text-xs text-slate-300">
                Academy Arena infrastructure paired with QR-verified ELO transcripts &amp; institutional Batch Radar.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Spin-Off 06</div>
              <h3 className="font-display font-bold text-white">Competitive Math E-Sports &amp; Live Broadcasting</h3>
              <p className="text-xs text-slate-300">
                High-stakes 1v1 Bullet Blitz duels &amp; Top 128 Annual World Cup live broadcasts and sponsorships.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">Spin-Off 07</div>
              <h3 className="font-display font-bold text-white">
                Decentralized Research &amp; Academic Publishing Network
              </h3>
              <p className="text-xs text-slate-300">
                Arithmo Socials + Blog-to-Lab peer-reviewed mathematical pre-prints &amp; Guidebook monographs.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-emerald-400/30">
              <div className="text-xs font-mono-tabular text-emerald-300">Spin-Off 08</div>
              <h3 className="font-display font-bold text-white">Cognitive Analytics &amp; Neuro-Learning Health-Tech API</h3>
              <p className="text-xs text-slate-300">
                V10.3 Smart Mistake Deck spaced-repetition engine &amp; cognitive endurance telemetry API.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Global Contributor & Institutional Onboarding CTA */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-10 flex flex-wrap items-center justify-between gap-6 border-cyan-400/35">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono-tabular text-cyan-300">
                06 · Join the Federation Before Midnight Dec 31, 2026
              </div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Partner With Olympiad Edge &amp; Pioneer Contributors
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Schools, open-source contributors, mathematical problemsetters, and patrons can connect directly via{' '}
                <span className="font-mono-tabular text-cyan-300">github.com/Arithmo-Edge</span> or{' '}
                <span className="font-mono-tabular text-cyan-300">rayaantasnim@gmail.com</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="pioneers.html" className="btn-cyber px-5 py-3 text-sm whitespace-nowrap">
                Meet the Pioneers
              </a>
              <a href="mailto:rayaantasnim@gmail.com" className="btn-glass px-5 py-3 text-sm whitespace-nowrap">
                Contact Founder
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
