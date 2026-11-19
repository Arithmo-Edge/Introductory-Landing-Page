import React, {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';
import {AI_ENGINES_42, AiEngineEntry} from '../data/ecosystem';

type FilterGroup = 'all' | AiEngineEntry['group'];
type PinchSignal = 'gaze' | 'paste' | 'audio';
type TokenScenario = 'greeting' | 'duplicate' | 'multi' | 'premium';

const SOFT_PINCH_PAYLOADS: Record<
  PinchSignal,
  {
    tag: string;
    title: string;
    desc: string;
    json: string;
    message: string;
    tagClass: string;
  }
> = {
  gaze: {
    tag: 'SP-409 · Module 7 Gaze Drift',
    title: '4.8s Off-Canvas Gaze Shift',
    desc: 'Triggers advisory workspace alignment prompt without deducting ELO or issuing a hard flag.',
    json: '{"signal_id":"SP-409","cipher":"AES-256-GCM","source":"Module7_GazeGuard","duration_s":4.8,"flag_level":"ADVISORY_SOFT_PINCH"}',
    message:
      'Arithmo Personal AI Advisory: "Notice: Focus drifted off-canvas for 4.8s during your last practice trial. Keep scratchpad work centered to ensure smooth Sunday Mega verification."',
    tagClass: 'text-cyan-300',
  },
  paste: {
    tag: 'SP-412 · LaTeX Entropy Spike',
    title: 'Large External Paste Burst',
    desc: 'Advises composing steps organically inside Drag-and-Drop LaTeX for full ProofGrader clarity.',
    json: '{"signal_id":"SP-412","cipher":"AES-256-GCM","source":"MBTS_EntropyCheck","burst_chars":640,"flag_level":"ADVISORY_SOFT_PINCH"}',
    message:
      'Arithmo Personal AI Advisory: "Tip: Large external blocks were pasted quickly. Composing intermediate modular steps inside the Drag-and-Drop LaTeX Editor improves ProofGrader clarity and protects MBTS signature alignment."',
    tagClass: 'text-violet-300',
  },
  audio: {
    tag: 'SP-418 · 3-Axis Audio Trap',
    title: 'Multi-Voice Acoustic Detection',
    desc: 'Prompts quiet workspace verification ahead of Sunday Mega mandatory Module 7 enforcement.',
    json: '{"signal_id":"SP-418","cipher":"AES-256-GCM","source":"Module7_AudioTrap","voices_detected":2,"flag_level":"ADVISORY_SOFT_PINCH"}',
    message:
      'Arithmo Personal AI Advisory: "Room Notice: Ambient secondary speech was detected by the 3-Axis Audio Trap. Remember Sunday Mega Arena requires a silent solo environment."',
    tagClass: 'text-emerald-300',
  },
};

export const AiCorePage: React.FC = () => {
  const [aiFilter, setAiFilter] = useState<FilterGroup>('all');
  const [pinchSignal, setPinchSignal] = useState<PinchSignal>('gaze');
  const [tokenScenario, setTokenScenario] = useState<TokenScenario>('duplicate');
  const [multiN, setMultiN] = useState<number>(3);

  const visibleEngines =
    aiFilter === 'all' ? AI_ENGINES_42 : AI_ENGINES_42.filter((engine) => engine.group === aiFilter);

  const tokenCostDisplay =
    tokenScenario === 'greeting'
      ? {
          cost: '0 Tokens',
          explain: 'Zero-rated social politeness ("hello", "thank you", "got it") consumes zero student tokens.',
        }
      : tokenScenario === 'multi'
        ? {
            cost: `-${multiN} Tokens`,
            explain: `Bundled multi-problem request across ${multiN} sub-problems deducts ${multiN} token(s) linearly.`,
          }
        : tokenScenario === 'premium'
          ? {
              cost: '-2 Tokens (2x Hybrid)',
              explain: 'Deep Gemini Pro + Qwen-Math + SymPy verification pipeline deducts a transparent 2x token weight.',
            }
          : {
              cost: '-1 Token',
              explain: 'Duplicate or repeated clarification of the same problem deducts a fixed -1 token.',
            };

  return (
    <>
      {/* Section 1: 42 Specialized Neural & Symbolic Engines Overview */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#10B981" secondaryHex="#00F0FF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">
                  01 · arithmo-edge.github.io/arithmo-ai/ · 42 Orchestrated Engines
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  42-Engine Hybrid Neural &amp; Symbolic AI Core
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Arithmo-Edge replaces monolithic chat wrappers with{' '}
                  <span className="text-white font-semibold">42 canonical, single-responsibility engines</span> (
                  <span className="font-mono-tabular text-cyan-300">2 + 2 + 24 + 12 + 1 + 1</span>)—fusing Google Gemini
                  (Pro &amp; Flash), Qwen-Math, and deterministic Python/SymPy sandboxes behind strict role-gated
                  Cloudflare Worker proxies.
                </p>
              </HeroReveal>
              <HeroReveal delay={0.2}>
                <div className="ae-kpi-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  <div className="rounded-xl border border-violet-400/30 bg-slate-950/75 p-3 text-center">
                    <div className="font-mono-tabular text-xl font-bold text-violet-300">2</div>
                    <div className="text-[11px] text-slate-400">Public Mentors</div>
                  </div>
                  <div className="rounded-xl border border-sky-400/30 bg-slate-950/75 p-3 text-center">
                    <div className="font-mono-tabular text-xl font-bold text-sky-300">2</div>
                    <div className="text-[11px] text-slate-400">Foundation</div>
                  </div>
                  <div className="rounded-xl border border-cyan-400/30 bg-slate-950/75 p-3 text-center">
                    <div className="font-mono-tabular text-xl font-bold text-cyan-300">24</div>
                    <div className="text-[11px] text-slate-400">QPRT-4 Guardians</div>
                  </div>
                  <div className="rounded-xl border border-emerald-400/30 bg-slate-950/75 p-3 text-center">
                    <div className="font-mono-tabular text-xl font-bold text-emerald-300">12</div>
                    <div className="text-[11px] text-slate-400">Forge &amp; Anti-LLM</div>
                  </div>
                  <div className="rounded-xl border border-amber-400/30 bg-slate-950/75 p-3 text-center">
                    <div className="font-mono-tabular text-xl font-bold text-amber-300">1</div>
                    <div className="text-[11px] text-slate-400">Deterrence AI</div>
                  </div>
                  <div className="rounded-xl border border-rose-400/30 bg-slate-950/75 p-3 text-center">
                    <div className="font-mono-tabular text-xl font-bold text-rose-300">1</div>
                    <div className="text-[11px] text-slate-400">Supreme Overlord</div>
                  </div>
                </div>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.16} className="h-full">
                <div className="h-full min-h-[320px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame group">
                  <ResilientImage
                    src={MEDIA.neuralSympy}
                    alt="Arithmo AI neural orchestration core"
                    loading="eager"
                    accentColor="#10B981"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-cyan-300 mb-1">2 + 2 + 24 + 12 + 1 + 1 = 42 Engines</div>
                    <div className="font-display text-lg font-bold text-white">
                      Zero Raw Keys · Deterministic Python/SymPy Proofs
                    </div>
                    <p className="ae-prose text-xs text-slate-300 mt-1">
                      All contest validation runs inside isolated sandboxes; Arithmo Personal AI and Arithmo Guild AI drop
                      hard context locks the instant a live round begins.
                    </p>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive 42-Engine Catalog Filter */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
                02 · Complete 42-Engine Canonical Directory
              </div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Interactive 6-Group AI Filter
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 bg-slate-950/80 border border-slate-800 p-1.5 rounded-xl">
              {(
                [
                  {id: 'all', label: 'All 42'},
                  {id: 'public', label: 'Public Mentors (2)'},
                  {id: 'foundation', label: 'Foundation (2)'},
                  {id: 'guardians', label: 'QPRT-4 Guardians (24)'},
                  {id: 'forge', label: 'Forge & Anti-LLM (12)'},
                  {id: 'deterrence', label: 'Deterrence (1)'},
                  {id: 'supreme', label: 'Supreme HQ (1)'},
                ] as const
              ).map((btn) => {
                const active = aiFilter === btn.id;
                return (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setAiFilter(btn.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs whitespace-nowrap transition-colors ${
                      active ? 'bg-cyan-400 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <motion.div layout className="ae-bento-grid-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleEngines.map((engine) => (
              <motion.div
                key={engine.name}
                layout
                initial={{opacity: 0, scale: 0.97}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.97}}
                transition={{duration: 0.16}}
              >
                <SpotlightCard className={`rounded-2xl p-5 space-y-2 h-full ${engine.borderClass}`}>
                  <div className={`text-xs font-mono-tabular ${engine.badgeClass}`}>{engine.badge}</div>
                  <h3 className="font-display font-bold text-white">{engine.name}</h3>
                  <p className="ae-prose text-xs text-slate-300">{engine.desc}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Section 3: Hybrid Neural + Deterministic Pipeline */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 media-frame h-80 relative group">
              <ResilientImage
                src={MEDIA.olympiadArenas}
                alt="Dual Gemini Pro and Flash, Qwen-Math, and SymPy verification sandbox"
                accentColor="#00F0FF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono-tabular text-cyan-300">
                Stage 1: Gemini Pro &amp; Flash Synthesis &rarr; Stage 2: Qwen-Math Audit &rarr; Stage 3: Python / SymPy
                Execution
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono-tabular text-cyan-300">03 · Zero-Hallucination Math Pipeline</div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Gemini Pro &amp; Flash + Qwen-Math + Python/SymPy Sandbox
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                Language models alone hallucinate subtle algebraic identities and modular exceptions. In Arithmo-Edge,
                neural reasoning never settles a mathematical verdict solo:{' '}
                <span className="text-white font-semibold">Gemini Pro &amp; Flash</span> orchestrate deep proof parsing
                and low-latency Socratic hints, <span className="text-white font-semibold">Qwen-Math</span>{' '}
                cross-verifies competition theorems, and deterministic{' '}
                <span className="font-mono-tabular text-cyan-300">Python / SymPy</span> executes exact symbolic &amp;
                integer verification before returning a verdict.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-xs font-mono-tabular text-cyan-300">Client Zero-Call Offload</div>
                  <div className="text-sm font-semibold text-white mt-1">Miller-Rabin &amp; Brent-Pollard&apos;s Rho</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Basic modular primes &amp; factorizations execute at zero server token cost via client BigInt.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-xs font-mono-tabular text-violet-300">Server-Side Proxy Security</div>
                  <div className="text-sm font-semibold text-white mt-1">Cloudflare Worker Secret Vault</div>
                  <p className="text-xs text-slate-400 mt-1">
                    All AI credentials live outside static GitHub Pages repositories behind edge Workers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Interactive Zero-Leak "Soft-Pinch" Warning Simulator */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              04 · Arithmo Alert AI · Zero-Leak Deterrence
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Interactive &ldquo;Soft-Pinch&rdquo; Warning Simulator
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              How does <span className="text-white font-semibold">Arithmo Alert AI</span> (working alongside{' '}
              <span className="text-white font-semibold">Arithmo Personal AI</span>) coach integrity habits without
              shaming students or exposing internal anti-cheat logic? Encrypted AES-256-GCM telemetry signals emit
              non-punitive, gentle Socratic nudges (&ldquo;Soft-Pinch&rdquo;). Select a signal below to inspect the live
              payload and advisory copy.
            </p>
          </div>

          <div className="ae-deep-grid grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-3">
              {(['gaze', 'paste', 'audio'] as PinchSignal[]).map((sigKey) => {
                const payload = SOFT_PINCH_PAYLOADS[sigKey];
                const active = pinchSignal === sigKey;
                return (
                  <button
                    key={sigKey}
                    type="button"
                    onClick={() => setPinchSignal(sigKey)}
                    className={`w-full text-left spotlight-card rounded-2xl p-5 transition-all ${
                      active ? 'border-cyan-400 bg-cyan-400/10' : ''
                    }`}
                  >
                    <div className={`text-xs font-mono-tabular ${payload.tagClass}`}>{payload.tag}</div>
                    <div className="font-display font-bold text-white mt-1">{payload.title}</div>
                    <p className="text-xs text-slate-400 mt-1">{payload.desc}</p>
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-5">
              <div>
                <div className="text-xs font-mono-tabular text-slate-400 uppercase mb-2">
                  Encrypted Wire Envelope (Zero Anti-Cheat Leak)
                </div>
                <pre className="rounded-xl bg-slate-950/90 border border-slate-800 p-4 text-xs font-mono-tabular text-cyan-300 overflow-x-auto whitespace-pre-wrap">
                  {SOFT_PINCH_PAYLOADS[pinchSignal].json}
                </pre>
              </div>
              <div className="rounded-xl border border-violet-400/35 bg-violet-400/10 p-5">
                <div className="text-xs font-mono-tabular text-violet-300 mb-1.5">Personal AI Soft-Pinch Output</div>
                <p className="ae-prose text-sm text-white leading-relaxed">{SOFT_PINCH_PAYLOADS[pinchSignal].message}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Interactive Semantic Token Economy Meter */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">05 · Fair Semantic Token Economics</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Interactive Semantic Token Meter
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Arithmo-Edge never charges students arbitrary character fees for saying &ldquo;hello&rdquo; or clarifying
              a proof step. Test how Semantic Token deduction works across 4 prompt modes:
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {(
                [
                  {
                    id: 'greeting',
                    tag: 'Zero-Rated',
                    tagCls: 'text-emerald-400',
                    label: 'Greeting / Thanks',
                  },
                  {
                    id: 'duplicate',
                    tag: 'Standard Clarification',
                    tagCls: 'text-cyan-300',
                    label: 'Duplicate / Follow-Up',
                  },
                  {
                    id: 'multi',
                    tag: 'Bundled Request',
                    tagCls: 'text-violet-300',
                    label: 'Multi-Query (-N)',
                  },
                  {
                    id: 'premium',
                    tag: 'Deep Verification',
                    tagCls: 'text-amber-300',
                    label: 'Premium 2x Hybrid',
                  },
                ] as const
              ).map((item) => {
                const active = tokenScenario === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTokenScenario(item.id)}
                    className={`text-left rounded-xl border p-4 transition-colors ${
                      active
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-slate-700 bg-slate-950/70 hover:border-cyan-400/60'
                    }`}
                  >
                    <div className={`text-xs font-mono-tabular ${item.tagCls}`}>{item.tag}</div>
                    <div className="font-display font-bold text-white mt-1">{item.label}</div>
                  </button>
                );
              })}
            </div>
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 rounded-xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
                <label htmlFor="token-multi-n" className="block text-xs font-mono-tabular text-slate-400">
                  Multi-Query Sub-Problems (N = {multiN})
                </label>
                <input
                  id="token-multi-n"
                  type="range"
                  min={2}
                  max={8}
                  value={multiN}
                  onChange={(e) => setMultiN(Number(e.target.value))}
                  className="w-full cyber-range"
                />
                <div className="text-xs text-slate-400">
                  Adjusts <span className="text-white font-semibold">-N</span> scaling dynamically when Multi-Query
                  mode is active.
                </div>
              </div>
              <div className="md:col-span-8 rounded-xl border border-cyan-400/30 bg-slate-950/75 p-5 space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Computed Deduction</div>
                <div className="font-mono-tabular text-2xl sm:text-3xl font-bold text-cyan-300">
                  {tokenCostDisplay.cost}
                </div>
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">{tokenCostDisplay.explain}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Strict Contest Lockout & No Raw Keys In Static Repos */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="ae-bento-grid grid md:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-rose-400/30">
              <div className="text-xs font-mono-tabular text-rose-300">
                06 · Contest Lockout &amp; Find the Flaw Integrity
              </div>
              <h3 className="font-display text-xl font-bold text-white">Real-Time Session Isolation</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                The millisecond a participant clicks <span className="text-white font-semibold">Lock-In</span> at
                T-30s on any Daily or Sunday Mega contest, QPRT-4 Guardians sever access to{' '}
                <span className="text-white font-semibold">Arithmo Personal AI</span> and{' '}
                <span className="text-white font-semibold">Arithmo Guild AI</span> on the edge. Post-contest{' '}
                <span className="text-white font-semibold">Find the Flaw</span> audits award{' '}
                <span className="text-cyan-300">+25 to +100 pts</span> for verified problem/edge-case flaws (triggering
                a <span className="text-white font-semibold">2-min</span> SymPy Global Rejudge) and{' '}
                <span className="text-emerald-300">+5 to +50 pts</span> for opponent proof flaws (
                <span className="text-rose-300">-10 pts</span> false-claim penalty).
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-emerald-400/30">
              <div className="text-xs font-mono-tabular text-emerald-300">06 · Zero-Secret Client Architecture</div>
              <h3 className="font-display text-xl font-bold text-white">No API Keys in GitHub Pages</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Because all 14 public portals are hosted on GitHub Pages, zero Gemini (Pro &amp; Flash) or Qwen-Math
                keys ever touch frontend bundles. Requests sign a Firebase JWT verified by Cloudflare Workers prior to
                model dispatch.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: GoldenVault Miner & Supreme Headquarters AI Access */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl overflow-hidden grid lg:grid-cols-12">
            <div className="lg:col-span-5 media-frame min-h-[260px] relative">
              <ResilientImage
                src={MEDIA.federatedNodes}
                alt="Headquarters AI and Private GoldenVault Miner pipeline"
                accentColor="#F59E0B"
              />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="text-xs font-mono-tabular text-amber-300">
                07 · Supreme Command &amp; Golden Vault Ingestion
              </div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                GoldenVault Miner &amp; Supreme Headquarters AI
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                Among our 12 Question-Forge &amp; Anti-LLM Agents,{' '}
                <span className="text-white font-semibold">GoldenVault Miner</span> ingests the Co-Founders&apos;
                private 5&times;4 JSON vaults via Read-Only GitHub PAT + Cloudflare Worker Proxy under{' '}
                <span className="font-mono-tabular text-amber-300">Schema v1.2</span>. Sitting above all operational
                tiers, the 1 Supreme Command Overlord AI—<span className="text-white font-semibold">Headquarters AI</span>{' '}
                on <span className="text-white font-semibold">Subsite #12</span>—acts as root diagnostic authority
                exclusively for <span className="text-cyan-300">750+ Chief Arbiters</span> and{' '}
                <span className="text-amber-300">1000+ Prime Sovereigns</span>.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="governance.html" className="btn-cyber px-5 py-3 text-sm">
                  Inspect Headquarters Hierarchy
                </a>
                <a href="pioneers.html" className="btn-glass px-5 py-3 text-sm">
                  Inspect Schema v1.2 Vault
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
