import React from 'react';
import {ArrowRight} from 'lucide-react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {useCountdown} from '../components/SiteShell';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

export const HomePage: React.FC = () => {
  const countdown = useCountdown();

  return (
    <>
      {/* Section 1: Flagship Layered Hero with Native WebGL Shader & Live Countdown */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#00F0FF" secondaryHex="#8B5CF6" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />

        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-22 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between gap-7">
              <div className="space-y-5">
                <HeroReveal delay={0.02}>
                  <div className="text-xs sm:text-sm text-cyan-300 font-medium tracking-wide">
                    Olympiad Edge Federation · 14 Free-Forever GitHub Pages Portals · 42 AI Engines
                  </div>
                </HeroReveal>

                <HeroReveal delay={0.08}>
                  <h1 className="hero-title-fluid font-display font-bold tracking-tight text-white">
                    Real-Time ELO-Rated Competitive Mathematics at Global Olympiad Scale.
                  </h1>
                </HeroReveal>

                <HeroReveal delay={0.14}>
                  <p className="ae-prose text-base sm:text-lg text-slate-300 prose-measure leading-relaxed">
                    Arithmo-Edge unifies five specialized Olympiad arenas, 60 progression titles, proof-based grading,
                    post-contest <span className="text-white font-medium">Find the Flaw</span> hacking, and{' '}
                    <span className="text-white font-medium">QPRT-4</span> cryptographic resilience—synchronizing
                    every portal via{' '}
                    <code className="font-mono-tabular text-cyan-300">Arithmo-Core-SDK (engine.js)</code>.
                  </p>
                </HeroReveal>

                <HeroReveal delay={0.2}>
                  <div className="ae-hero-cta flex flex-wrap items-center gap-3.5 pt-1">
                    <a href="arenas-elo.html" className="btn-cyber px-5 py-3 text-sm whitespace-nowrap">
                      <span>Explore 5 Arenas &amp; ELO Simulator</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="architecture.html" className="btn-glass px-5 py-3 text-sm whitespace-nowrap">
                      Inspect 14-Site Federation
                    </a>
                  </div>
                </HeroReveal>
              </div>

              {/* Live Countdown Command Deck to December 31, 2026 Midnight */}
              <HeroReveal delay={0.26}>
                <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-cyan-400/30 shadow-[0_0_50px_rgba(0,240,255,0.08)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div>
                      <h2 className="font-display text-base sm:text-lg font-semibold text-white">
                        Global Launch Countdown
                      </h2>
                      <p className="text-xs text-slate-400">
                        Targeting December 31, 2026 at 12:00 Midnight (2027-01-01 00:00:00)
                      </p>
                    </div>
                    <span className="font-mono-tabular text-xs text-cyan-300">T-Minus Live Telemetry</span>
                  </div>
                  <div className="ae-countdown-grid grid grid-cols-4 gap-3">
                    <div className="rounded-xl bg-slate-950/85 border border-slate-800 px-3 py-3.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-bold text-white">
                        {countdown.days}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Days</div>
                    </div>
                    <div className="rounded-xl bg-slate-950/85 border border-slate-800 px-3 py-3.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-bold text-white">
                        {countdown.hours}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Hours</div>
                    </div>
                    <div className="rounded-xl bg-slate-950/85 border border-slate-800 px-3 py-3.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-bold text-white">
                        {countdown.minutes}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Minutes</div>
                    </div>
                    <div className="rounded-xl bg-slate-950/85 border border-cyan-400/35 px-3 py-3.5 text-center">
                      <div className="font-mono-tabular text-2xl sm:text-4xl font-bold text-cyan-400">
                        {countdown.seconds}
                      </div>
                      <div className="text-xs text-cyan-300/80 mt-1">Seconds</div>
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <HeroReveal delay={0.18} className="h-full flex flex-col">
                <div className="h-full min-h-[380px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame group shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
                  <ResilientImage
                    src={MEDIA.heroSanctuary}
                    alt="Arithmo-Edge architectural mathematics sanctuary visualization"
                    loading="eager"
                    accentColor="#00F0FF"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/55 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 text-[11px] font-mono-tabular text-cyan-200/90">
                    <span>Olympiad Edge · Telemetry Active</span>
                    <span>10 Core Arena ELOs</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 space-y-2.5">
                    <div className="text-xs text-cyan-300 font-mono-tabular">
                      Core Portal · arithmo-edge.github.io/Arithmo-Edge/
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">Zero-Cost Edge Federation</h3>
                    <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                      14 specialized GitHub Pages domains synchronized through a single Firebase Auth + Cloud Firestore
                      backbone, Cloudflare Worker proxies, and a 24-hour Zero-PII JSONL Data Lake.
                    </p>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Philosophy */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs text-cyan-300 font-medium">02 · Core Architectural Philosophy</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Replacing Static Gatekept Forums with Live ELO Proof Warfare
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed prose-measure">
                Traditional Olympiad mathematics platforms leave learners in fragmented static PDFs, unrated forum
                threads, or opaque manual grading queues. Arithmo-Edge transforms Olympiad mathematics into a live,
                sport-grade discipline with deterministic client-side verification, strict topic-tag hiding during
                rated hours, and real-time ELO telemetry.
              </p>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed prose-measure">
                Every architectural decision enforces <span className="text-white font-semibold">Zero Pay-to-Win</span>:
                subscriptions and Arithmo Wallet credits expand AI mentoring throughput and Forge capacity, while every
                single ELO point is earned purely through verified mathematical solutions and post-contest proof auditing.
              </p>
            </div>
            <div className="lg:col-span-6 ae-bento-grid grid sm:grid-cols-2 gap-4">
              <SpotlightCard className="rounded-2xl p-5 space-y-2">
                <div className="text-xs font-mono-tabular text-cyan-300">Zero-Fragmentation</div>
                <h3 className="font-display text-base font-bold text-white">No Mixed Shortcuts</h3>
                <p className="ae-prose text-xs text-slate-400 leading-relaxed">
                  Sub-topic tags (#Inversion, #LTE, #Vieta-Jumping) stay hidden in rated contests so solvers recognize
                  mathematical structure organically.
                </p>
              </SpotlightCard>
              <SpotlightCard className="rounded-2xl p-5 space-y-2">
                <div className="text-xs font-mono-tabular text-violet-300">Anti-LLM Synthesis</div>
                <h3 className="font-display text-base font-bold text-white">Human Intuition First</h3>
                <p className="ae-prose text-xs text-slate-400 leading-relaxed">
                  AdversarialRedTeam AI blocks LLM-solvable items before publication; SymPyVeritas checks exact algebraic
                  invariants.
                </p>
              </SpotlightCard>
              <SpotlightCard className="rounded-2xl p-5 space-y-2">
                <div className="text-xs font-mono-tabular text-amber-300">Proof Auditing</div>
                <h3 className="font-display text-base font-bold text-white">Find the Flaw</h3>
                <p className="ae-prose text-xs text-slate-400 leading-relaxed">
                  Post-contest peer auditing turns every solver into a referee—rewarding valid counterexamples and
                  logical gap exposures.
                </p>
              </SpotlightCard>
              <SpotlightCard className="rounded-2xl p-5 space-y-2">
                <div className="text-xs font-mono-tabular text-emerald-300">Zero-Cost Scale</div>
                <h3 className="font-display text-base font-bold text-white">Free Forever Infrastructure</h3>
                <p className="ae-prose text-xs text-slate-400 leading-relaxed">
                  Static micro-frontends on GitHub Pages eliminate server bottlenecks while IndexedDB + client-side
                  algorithms handle offline resilience.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: Ecosystem KPI Telemetry Strip */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-6">
            <p className="text-xs text-cyan-300 font-medium">03 · Ecosystem KPI Telemetry</p>
            <h2 className="section-title-fluid font-display font-bold text-white">Canonical System Scale Metrics</h2>
          </div>
          <div className="ae-kpi-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-xl p-5">
              <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-cyan-400">14</div>
              <div className="text-sm font-semibold text-white mt-1">Federated Websites</div>
              <div className="text-xs text-slate-400 mt-1">1 Core Portal + 13 Subsites on arithmo-edge.github.io</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-xl p-5">
              <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-violet-400">60</div>
              <div className="text-sm font-semibold text-white mt-1">ELO Rank Titles</div>
              <div className="text-xs text-slate-400 mt-1">5 Core Arenas · 12 Tiers Each · (General + Expert) / 2</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-xl p-5">
              <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-amber-400">42</div>
              <div className="text-sm font-semibold text-white mt-1">Specialized AI Engines</div>
              <div className="text-xs text-slate-400 mt-1">
                Gemini + Qwen-Math + SymPy · 24 QPRT-4 + 12 Forge Agents
              </div>
            </SpotlightCard>
            <SpotlightCard className="rounded-xl p-5">
              <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-emerald-400">14</div>
              <div className="text-sm font-semibold text-white mt-1">Real-Time Leaderboards</div>
              <div className="text-xs text-slate-400 mt-1">
                1 HQ + 10 Arena + 1 Academy + 1 Contributors + 1 All Rounders
              </div>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Guest Access vs Custom @handle Workflow */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-cyan-300 font-medium">04 · Identity &amp; Access Workflow</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Frictionless Guest Access vs. Custom @handle Registration
            </h2>
          </div>
          <div className="ae-deep-grid grid lg:grid-cols-2 gap-8 items-stretch">
            <SpotlightCard className="rounded-2xl overflow-hidden flex flex-col group">
              <div className="h-56 media-frame">
                <ResilientImage
                  src={MEDIA.academyArchive}
                  alt="Mathematical Olympiad proofs and open guest participation"
                  accentColor="#00F0FF"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 space-y-3">
                <div className="text-xs font-mono-tabular text-cyan-300">Unrated Guest Workflow · Zero Friction</div>
                <h3 className="font-display text-xl font-bold text-white">Instant Contest Entry Without an Account</h3>
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                  Competitors without a registered <span className="font-mono-tabular text-cyan-300">@handle</span> can
                  freely browse all 14 public leaderboards on Subsite #7, practice past archives, and submit answers
                  inside live contests as <span className="text-white font-semibold">Unrated (0 ELO change)</span>.
                </p>
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                  Guests can also participate in post-contest <span className="text-white font-semibold">Find the Flaw</span>{' '}
                  hacking windows and contribute anonymized problem-solving telemetry to the 24-hour Zero-PII Data Lake.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl overflow-hidden flex flex-col group">
              <div className="h-56 media-frame">
                <ResilientImage
                  src={MEDIA.federatedNodes}
                  alt="Gmail SSO and custom @handle identity graph"
                  accentColor="#8B5CF6"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 space-y-3">
                <div className="text-xs font-mono-tabular text-violet-300">Registered @handle · Gmail SSO</div>
                <h3 className="font-display text-xl font-bold text-white">
                  Full Rated ELO, Wallet &amp; Institutional Identity
                </h3>
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                  Claiming a unique <span className="font-mono-tabular text-cyan-300">@handle</span> via Gmail SSO
                  unlocks rated ELO tracking across all 10 Core Arena ELOs,{' '}
                  <span className="text-white font-medium">1v1 Bullet Blitz</span>, closed-loop{' '}
                  <span className="text-white font-medium">Arithmo Wallet</span> gifting, Academy Dual-Handle routing,
                  Arithmo Forge, Socials, and Headquarters Core.
                </p>
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                  Handle governance includes a <span className="text-white font-medium">7-day 1-time free change</span>{' '}
                  ($2.99 once/year thereafter) and a permanent <span className="font-mono-tabular">@handle</span>{' '}
                  tombstone upon account deletion while anonymized Zero-PII traces remain for AI alignment.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: 5-Arena Preview Matrix */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs text-cyan-300 font-medium">05 · Five Core Mathematical Arenas</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Color-Coded Subsites with Dual General &amp; Expert Tracks
              </h2>
            </div>
            <a href="arenas-elo.html" className="btn-glass px-4 py-2 text-xs whitespace-nowrap">
              Open Interactive ELO Simulator &rarr;
            </a>
          </div>

          <div className="ae-bento-grid ae-bento-grid-3 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-t-2 border-t-[#00F0FF]">
              <div className="font-mono-tabular text-xs text-[#00F0FF]">Subsite #1 · #00F0FF</div>
              <h3 className="font-display text-base font-bold text-white">Number Theory</h3>
              <p className="text-xs text-slate-400">Foundry Initiate (0–499) to Arithmetic Singularity (3000+).</p>
              <div className="text-[11px] font-mono-tabular text-slate-500 pt-1">Monday Rated Rounds</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-t-2 border-t-[#8B5CF6]">
              <div className="font-mono-tabular text-xs text-[#8B5CF6]">Subsite #2 · #8B5CF6</div>
              <h3 className="font-display text-base font-bold text-white">Algebra</h3>
              <p className="text-xs text-slate-400">Variable Initiate (0–499) to Algebraic Singularity (3000+).</p>
              <div className="text-[11px] font-mono-tabular text-slate-500 pt-1">Tuesday Rated Rounds</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-t-2 border-t-[#F59E0B]">
              <div className="font-mono-tabular text-xs text-[#F59E0B]">Subsite #3 · #F59E0B</div>
              <h3 className="font-display text-base font-bold text-white">Geometry</h3>
              <p className="text-xs text-slate-400">Euclidean Initiate (0–499) to Geometric Singularity (3000+).</p>
              <div className="text-[11px] font-mono-tabular text-slate-500 pt-1">Wednesday Rated Rounds</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-t-2 border-t-[#10B981]">
              <div className="font-mono-tabular text-xs text-[#10B981]">Subsite #4 · #10B981</div>
              <h3 className="font-display text-base font-bold text-white">Combinatorics</h3>
              <p className="text-xs text-slate-400">Counting Initiate (0–499) to Combinatorial Singularity (3000+).</p>
              <div className="text-[11px] font-mono-tabular text-slate-500 pt-1">Thursday Rated Rounds</div>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-t-2 border-t-[#F43F5E]">
              <div className="font-mono-tabular text-xs text-[#F43F5E]">Subsite #5 · #F43F5E</div>
              <h3 className="font-display text-base font-bold text-white">Mixed Olympiad</h3>
              <p className="text-xs text-slate-400">Olympiad Initiate (0–499) to Omni-Olympiad Singularity (3000+).</p>
              <div className="text-[11px] font-mono-tabular text-slate-500 pt-1">Friday + Sunday Mega Anchor</div>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Pioneer Contributors Spotlight */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs text-amber-300 font-medium">06 · Founding Leadership &amp; Custodianship</p>
              <h2 className="section-title-fluid font-display font-bold text-white">Pioneer Contributors Spotlight</h2>
            </div>
            <a href="pioneers.html" className="btn-cyber px-4 py-2 text-xs whitespace-nowrap">
              Read Full Pioneer Dossier &rarr;
            </a>
          </div>

          <div className="ae-deep-grid grid lg:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-4 border-cyan-400/30">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-tabular text-xs text-cyan-300">
                  Co-Founder #1 · Reserved Title: Core System Architect
                </span>
                <span className="font-mono-tabular text-xs text-slate-400">60% Equity · 24-Mo Vesting</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Rayaan Tasnim</h3>
              <p className="text-xs font-medium text-cyan-200">Founder &amp; Chief System Architect</p>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Architect of the 14-portal federated network (
                <code className="font-mono-tabular text-cyan-300">1 Core + 13 Subsites</code>),{' '}
                <code className="font-mono-tabular text-cyan-300">Arithmo-Core-SDK (engine.js)</code>,{' '}
                <code className="font-mono-tabular text-cyan-300">QPRT-4</code> Quad-Phase Resilience Theory,
                browser-native <code className="font-mono-tabular text-cyan-300">Module 7</code> proctoring, the
                42-engine AI orchestration pipeline, and zero-cost GitHub Pages + Firebase + Cloudflare Worker + 24h
                Zero-PII JSONL Data Lake infrastructure.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-4 border-violet-400/30">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono-tabular text-xs text-violet-300">
                  Co-Founder #2 · Reserved Title: Chief Mathematical Architect
                </span>
                <span className="font-mono-tabular text-xs text-slate-400">40% Equity · 24-Mo Vesting</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Jalees Habib</h3>
              <p className="text-xs font-medium text-violet-200">Co-Founder &amp; Chief Mathematical Engineer</p>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Lead architect of Olympiad problem synthesis across all 5 core arenas, the Zero-Fragmentation Olympiad Tag
                policy, Proof-Based Grading + Grandmaster Peer Review (
                <code className="font-mono-tabular text-violet-300">Expert Segments 1 &amp; 2</code>), post-contest{' '}
                <code className="font-mono-tabular text-violet-300">Find the Flaw</code> logical audit standards, and
                the <code className="font-mono-tabular text-violet-300">5&times;4</code> Private Golden Vault
                co-authored with Rayaan Tasnim.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: 10-Portal Exploration Grid (+ Page 12 Pioneers) */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs text-cyan-300 font-medium">07 · Complete Ecosystem Exploration Grid</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Navigate All Specialized Modules
              </h2>
            </div>
            <span className="text-xs text-slate-400">Pages 02–12 · Click any module to explore full specifications</span>
          </div>
        </ScrollReveal>

        <div className="ae-bento-grid ae-bento-grid-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ScrollReveal delay={0.02}>
            <SpotlightCard asAnchorHref="architecture.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage
                  src={MEDIA.federatedNodes}
                  alt="Federated multi-portal architecture"
                  accentColor="#00F0FF"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-cyan-400 font-mono-tabular mb-1">02 · Architecture</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300">
                    14-Website Federated Map
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    1 Core Portal + 13 Subsites, engine.js SDK, Miller-Rabin/Rho math engine, and Read-Shield caching.
                  </p>
                </div>
                <span className="text-xs text-cyan-300 font-medium">Inspect 14 Portals &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <SpotlightCard asAnchorHref="arenas-elo.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage
                  src={MEDIA.olympiadArenas}
                  alt="5 Core Arenas and 60 ELO tiers"
                  accentColor="#8B5CF6"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-violet-400 font-mono-tabular mb-1">03 · Arenas &amp; ELO</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-violet-300">
                    5 Core Arenas &amp; 60 Tiers
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    10 Core Arena ELOs, (General+Expert)/2 simulator, Zero-Fragmentation tags, and 1v1 Bullet Blitz.
                  </p>
                </div>
                <span className="text-xs text-violet-300 font-medium">Launch ELO Simulator &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <SpotlightCard asAnchorHref="contests.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage
                  src={MEDIA.heroSanctuary}
                  alt="Contest engine and Find the Flaw"
                  accentColor="#F59E0B"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-amber-400 font-mono-tabular mb-1">04 · Contests</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300">
                    Contest Engine &amp; Find the Flaw
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    7-Day Calendar, Sunday Mega, T-30s contract, LaTeX + GeoGebra tools, and Top 128 World Cup.
                  </p>
                </div>
                <span className="text-xs text-amber-300 font-medium">Simulate Contest Modes &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.11}>
            <SpotlightCard asAnchorHref="ai-core.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage src={MEDIA.neuralSympy} alt="42-Engine AI Core" accentColor="#10B981" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-emerald-400 font-mono-tabular mb-1">05 · AI Core</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300">
                    42-Engine AI Core
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    Gemini + Qwen-Math + SymPy, 24 Guardians, 12 Forge Agents, Soft-Pinch simulator, and Token Meter.
                  </p>
                </div>
                <span className="text-xs text-emerald-300 font-medium">Explore 42 AI Engines &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <SpotlightCard asAnchorHref="security-qprt4.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage
                  src={MEDIA.neuralSympy}
                  alt="QPRT-4 Resilience and Legal Shield"
                  accentColor="#F43F5E"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-rose-400 font-mono-tabular mb-1">06 · Security</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-rose-300">
                    QPRT-4 &amp; Legal Shield
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    Module 7 proctoring, MBTS, 11-Flag Blackhole, 4-Signal Alt Neutralization, and 14-Point Legal
                    Shield.
                  </p>
                </div>
                <span className="text-xs text-rose-300 font-medium">Audit QPRT-4 Phases &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.17}>
            <SpotlightCard asAnchorHref="academies.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage src={MEDIA.academyArchive} alt="Arithmo Academy Arena" accentColor="#00F0FF" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-cyan-400 font-mono-tabular mb-1">07 · Academies</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300">
                    Arithmo Academy Arena
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    4 institutional tiers, Dual-Handle routing, KYB 5-Layer Anti-Reselling Shield, and Guild AI
                    calculator.
                  </p>
                </div>
                <span className="text-xs text-cyan-300 font-medium">Calculate Roster &amp; Tokens &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <SpotlightCard asAnchorHref="pricing.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage
                  src={MEDIA.federatedNodes}
                  alt="Subscriptions and Arithmo Wallet"
                  accentColor="#8B5CF6"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-violet-400 font-mono-tabular mb-1">08 · Subscriptions</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-violet-300">
                    Plans, Store &amp; Wallet
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    Free to Singularity ($12.99), 8 Pay-As-You-Go packs, +10% Arithmo Wallet, and Zero Pay-to-Win.
                  </p>
                </div>
                <span className="text-xs text-violet-300 font-medium">Open Wallet Simulator &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.23}>
            <SpotlightCard asAnchorHref="socials-forge.html" className="rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-44 media-frame">
                <ResilientImage
                  src={MEDIA.academyArchive}
                  alt="Socials, Forge and Guidebooks"
                  accentColor="#10B981"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <div className="text-xs text-emerald-400 font-mono-tabular mb-1">09 · Community &amp; Forge</div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300">
                    Socials, Forge &amp; Guidebooks
                  </h3>
                  <p className="ae-prose text-sm text-slate-400 mt-1.5">
                    KaTeX blogs, Blog-to-Lab (+5 ELO), 2000+ Q&amp;A, 5-Pillar Forge, and 5&times;4 Golden Vault.
                  </p>
                </div>
                <span className="text-xs text-emerald-300 font-medium">Inspect Golden Vault &rarr;</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          <ScrollReveal delay={0.26}>
            <SpotlightCard className="rounded-2xl p-6 flex flex-col justify-between gap-4 h-full border-cyan-400/25">
              <div className="space-y-2">
                <div className="text-xs text-amber-400 font-mono-tabular">10, 11 &amp; 12 · Leadership &amp; Vision</div>
                <h3 className="font-display text-xl font-bold text-white">Governance, Roadmap &amp; Pioneers</h3>
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                  Explore the 5-Tier Monotonic HQ Ladder, 20-Year Holding Spin-Offs, and Co-Founders Rayaan Tasnim
                  &amp; Jalees Habib.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/80">
                <a href="governance.html" className="btn-glass px-4 py-2 text-xs justify-between">
                  <span>10. Headquarters &amp; Patrons</span>
                  <span>&rarr;</span>
                </a>
                <a href="roadmap.html" className="btn-glass px-4 py-2 text-xs justify-between">
                  <span>11. Roadmap &amp; 8 Spin-Offs</span>
                  <span>&rarr;</span>
                </a>
                <a href="pioneers.html" className="btn-cyber px-4 py-2 text-xs justify-between">
                  <span>12. Pioneer Contributors</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};
