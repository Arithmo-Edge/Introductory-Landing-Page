import React from 'react';
import {MEDIA} from '../assets/media';
import {GoldenVaultInspector} from '../components/GoldenVaultInspector';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

export const SocialsForgePage: React.FC = () => {
  return (
    <>
      {/* Section 1: Decentralized Topic-Segmented KaTeX Blogs & DMs */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#8B5CF6" secondaryHex="#F59E0B" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">
                  01 · arithmo-edge.github.io/socials/ &amp; /arithmo-forge/
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  Socials, Arithmo Forge &amp; Dual Guidebooks
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Instead of noisy unmoderated feeds, <span className="text-white font-semibold">Arithmo Socials</span>{' '}
                  separates KaTeX exposition blogs, <span className="font-mono-tabular text-cyan-300">@handle</span>{' '}
                  peer DMs, gated <span className="text-white font-semibold">2000+ Expert Q&amp;A</span>, and{' '}
                  <span className="text-white font-semibold">Arithmo Forge</span> problemsetting into clean
                  meritocratic channels.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.18} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame">
                  <ResilientImage
                    src={MEDIA.academyArchive}
                    alt="Mathematical community publishing and problem authoring"
                    loading="eager"
                    accentColor="#8B5CF6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-cyan-300 mb-1">Topic-Segmented KaTeX Stream</div>
                    <div className="font-display text-lg font-bold text-white">
                      +5 Contribution ELO (Blog) · +2 Contribution ELO (Guidebook)
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI-Curated Blog-to-Lab Promotion (+5 Contribution ELO) */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono-tabular text-cyan-300">02 · Arithmo BlogScout AI Pipeline</div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                AI-Curated Blog-to-Lab Promotion (+5 Contribution ELO)
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                Every theorem derivation, generalization note, or geometric inversion walkthrough published inside
                Arithmo Socials is indexed by topic tag across Number Theory, Algebra, Geometry, and Combinatorics. When{' '}
                <span className="text-white font-semibold">Arithmo BlogScout AI</span> and Problem Architects promote an
                insightful blog directly into an interactive training Lab, the author earns{' '}
                <span className="text-emerald-400 font-semibold">+5 Contribution ELO</span> and Arithmo Wallet credits.
              </p>
            </div>
            <div className="lg:col-span-5 glass-panel rounded-2xl p-6 space-y-3 border-emerald-400/35">
              <div className="text-xs font-mono-tabular text-emerald-300">Contribution Ledger Rule</div>
              <div className="font-display text-xl font-bold text-white">Quality Over Engagement Bait</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Likes alone never grant ELO. Only peer-verified mathematical exposition promoted to Arithmo Labs unlocks
                permanent Contribution ELO.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Strictly Gated 2000+ ELO Verified Expert Q&A Forum */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">03 · High-Signal Mathematical Discourse</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Strictly Gated 2000+ ELO Verified Expert Q&amp;A Forum
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid-3 grid md:grid-cols-3 gap-6">
            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Universal Read Access</div>
              <h3 className="font-display text-lg font-bold text-white">Open to Every Student</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every Initiate and Scout can browse canonical proof explanations, subtle counterexamples, and Olympiad
                techniques without spam.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-violet-400/35">
              <div className="text-xs font-mono-tabular text-violet-300">Write-Access Gate</div>
              <h3 className="font-display text-lg font-bold text-white">2000+ ELO Verified Sentinels+</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Only contenders holding 2000+ Sentinel tier or above may post authoritative answers inside Expert Q&amp;A
                threads.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-amber-400/30">
              <div className="text-xs font-mono-tabular text-amber-300">Arithmo ForumModerator AI &amp; ProofGrader AI</div>
              <h3 className="font-display text-lg font-bold text-white">Zero Noise Moderation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="text-white font-semibold">Arithmo ForumModerator AI</span> enforces clean discourse
                while <span className="text-white font-semibold">Arithmo ProofGrader AI</span> runs automatic lemma
                citation and LaTeX checks across every solved question.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Arithmo Forge Studio & 5-Pillar Legal Problem Engine */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">04 · arithmo-edge.github.io/arithmo-forge/</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Arithmo Forge &amp; 5-Pillar Legal Problem Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Unlocked strictly at <span className="text-white font-semibold">1500+ Arena ELO with 6 consecutive clean matches</span>:
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <SpotlightCard className="rounded-2xl p-4 space-y-1.5 border-cyan-400/30">
              <div className="text-cyan-300 font-semibold">Pillar 01 · Similarity Block</div>
              <p className="text-slate-400">
                PlagioGuard enforces strict &gt;75% AoPS &amp; historical archive similarity rejection.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-4 space-y-1.5 border-violet-400/30">
              <div className="text-violet-300 font-semibold">Pillar 02 · Red-Team Attack</div>
              <p className="text-slate-400">
                AdversarialRedTeam AI hammers drafts for boundary counterexamples (n=0, p=2).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-4 space-y-1.5 border-emerald-400/30">
              <div className="text-emerald-300 font-semibold">Pillar 03 · SymPy Veritas</div>
              <p className="text-slate-400">
                Deterministic symbolic execution confirms official solutions and alternate paths.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-4 space-y-1.5 border-amber-400/30">
              <div className="text-amber-300 font-semibold">Pillar 04 · ELO Calibration</div>
              <p className="text-slate-400">
                DifficultyCalibrator aligns point curves across General &amp; Expert divisions.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-4 space-y-1.5 border-rose-400/30">
              <div className="text-rose-300 font-semibold">Pillar 05 · Authorship Transfer</div>
              <p className="text-slate-400">
                Legal originality attestation + Problem Architect audit before contest deployment.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Interactive Co-Founders' Private 5x4 Golden Vault (Schema v1.2) */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-amber-300 mb-2">
              05 · Arithmo-Edge-Golden-Vault · Schema v1.2 · JSON-Converter Studio
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Interactive Co-Founders&apos; 5×4 Golden Vault Preview
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Click any of the 5 arenas below to inspect the Private{' '}
              <span className="font-mono-tabular text-amber-300">Arithmo-Edge-Golden-Vault</span> Schema v1.2 JSON
              authored via the dedicated{' '}
              <a
                href="https://github.com/Arithmo-Edge/JSON-Converter"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tabular text-cyan-300 hover:underline"
              >
                JSON-Converter
              </a>{' '}
              authoring studio co-built by <span className="text-white font-semibold">Rayaan Tasnim</span> &amp;{' '}
              <span className="text-white font-semibold">Jalees Habib</span> across 4 progressive difficulty segments (10
              problems/set, hidden during live rated rounds).
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <GoldenVaultInspector pathPrefix="Repository Object Path:" />
        </ScrollReveal>
      </section>

      {/* Section 6: Dual Guidebooks Architecture */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              06 · Living Knowledge Compendiums · Verified by Arithmo GuideCurator AI
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">Dual Guidebooks Architecture</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-deep-grid grid md:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-cyan-400/35">
              <div className="text-xs font-mono-tabular text-cyan-300">Community Guidebook · Free</div>
              <h3 className="font-display text-xl font-bold text-white">+2 Contribution ELO per Approved Note</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                A collaborative theorem reference spanning modular lifting, functional equations, projective geometry,
                and bijective counting. Verified student tips audited by{' '}
                <span className="text-white font-semibold">Arithmo GuideCurator AI</span> earn{' '}
                <span className="text-emerald-400 font-semibold">+2 Contribution ELO</span>.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-violet-400/35">
              <div className="text-xs font-mono-tabular text-violet-300">
                Exclusive Academy Guidebook · $14.99/mo (3-Day Grace Period · 100% Free on Academy Supreme &amp;
                Enterprise)
              </div>
              <h3 className="font-display text-xl font-bold text-white">HQ-Authored Deep Olympiad Masterwork</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                An HQ-authored deep Olympiad masterwork curated for Academy cohorts. Any Academy Member or Mentor whose
                contributed theorem is verified by{' '}
                <span className="text-white font-semibold">Arithmo GuideCurator AI</span> + HQ publishes{' '}
                <span className="text-white font-semibold">globally across all academies</span> and personally earns{' '}
                <span className="text-emerald-400 font-semibold">+2 Contribution ELO</span> on their personal{' '}
                <span className="font-mono-tabular text-cyan-300">@handle</span>{' '}
                <span className="text-slate-400 italic">(academies hold no Contribution ELO)</span>.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
