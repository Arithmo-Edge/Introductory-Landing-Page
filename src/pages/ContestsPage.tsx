import React, {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

type ContestTab = 'general' | 'expert' | 'contract';
type FlawOption = 'valid-gap' | 'problem-flaw' | 'invalid-hack';

export const ContestsPage: React.FC = () => {
  const [contestTab, setContestTab] = useState<ContestTab>('general');
  const [numpadVal, setNumpadVal] = useState<string>('0');
  const [numpadStatus, setNumpadStatus] = useState<{text: string; cls: string}>({
    text: 'Ready for integer input',
    cls: 'text-xs text-slate-400 text-center',
  });
  const [selectedFlaw, setSelectedFlaw] = useState<FlawOption | null>(null);

  const handleNumpadKey = (key: string) => {
    if (key === 'CLR') {
      setNumpadVal('0');
      setNumpadStatus({text: 'Input cleared', cls: 'text-xs text-slate-400 text-center'});
    } else if (key === 'DEL') {
      setNumpadVal((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (key === 'SUBMIT') {
      if (numpadVal === '2026') {
        setNumpadStatus({
          text: 'Verified AC · Instant deterministic answer match!',
          cls: 'text-xs text-emerald-400 font-semibold text-center',
        });
      } else {
        setNumpadStatus({
          text: 'Incorrect integer · Routed to Second-Chance Overtime Loop',
          cls: 'text-xs text-amber-300 text-center',
        });
      }
    } else {
      setNumpadVal((prev) => (prev === '0' ? key : prev.length < 10 ? prev + key : prev));
    }
  };

  const flawFeedback =
    selectedFlaw === 'valid-gap'
      ? {
          cls: 'p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-sm text-emerald-200',
          content: (
            <>
              <strong>Opponent Proof Flaw Verified (+5 to +50 pts):</strong> Division by (<em>a &minus; b</em>) fails
              when <em>p</em> | (<em>a &minus; b</em>). Opponent submission loses credit for unhandled boundary case;
              auditor earns bonus ELO points.
            </>
          ),
        }
      : selectedFlaw === 'problem-flaw'
        ? {
            cls: 'p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/40 text-sm text-cyan-200',
            content: (
              <>
                <strong>Official Problem Flaw Confirmed (+25 to +100 pts):</strong> Counterexample <em>p</em> = 2,{' '}
                <em>a</em> = 3, <em>b</em> = 1 satisfies 2 | (9 &minus; 1). Triggers automatic <strong>2-minute</strong>{' '}
                SymPy Global Rejudge across all standings.
              </>
            ),
          }
        : selectedFlaw === 'invalid-hack'
          ? {
              cls: 'p-4 rounded-xl bg-rose-500/10 border border-rose-400/40 text-sm text-rose-200',
              content: (
                <>
                  <strong>False Hack Penalty (-10 pts):</strong> Prime factorization <em>p</em> | (<em>a</em> &minus;{' '}
                  <em>b</em>)(<em>a</em> + <em>b</em>) implies <em>p</em> | (<em>a</em> &minus; <em>b</em>) or{' '}
                  <em>p</em> | (<em>a</em> + <em>b</em>) holds by Euclid&apos;s Lemma. Deducts -10 points to prevent
                  spam challenges.
                </>
              ),
            }
          : null;

  return (
    <>
      {/* Hero + Section 1: 7-Day Zero-Rest Rotational Calendar */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#F59E0B" secondaryHex="#00F0FF" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-amber-300 font-medium">
                  01 · Subsite #6 · https://arithmo-edge.github.io/contests/
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  Contest Engine, Proof Grading &amp; Find the Flaw
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Powered by a <span className="text-white font-semibold">7-Day Zero-Rest Rotational Calendar</span>{' '}
                  culminating in the Sunday Mega Arena Contest—combining General Velocity Flow, 3-Column Expert Proof
                  Workspaces, 2000+ ELO Peer Review, and post-contest proof auditing.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.16} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame group">
                  <ResilientImage
                    src={MEDIA.olympiadArenas}
                    alt="Competitive mathematical Olympiad contest hall"
                    loading="eager"
                    accentColor="#F59E0B"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs text-amber-300 font-mono-tabular">Sunday Mega Arena · NO Rest Day</div>
                    <p className="ae-prose text-sm text-slate-200 mt-1">
                      Core HQ authored · Default Expert Mode only · 100 min · 10 Qs · max 2 subs/Q · 2h Find the Flaw +
                      1h MBTS = T+3h finalization.
                    </p>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="ae-bento-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <SpotlightCard className="rounded-xl p-5 space-y-1.5">
                <div className="font-mono-tabular text-xs text-[#00F0FF]">Monday</div>
                <h2 className="font-display text-base font-bold text-white">Number Theory</h2>
                <p className="text-xs text-slate-300">17:00 UTC Expert (0+ ELO) · 20:00 UTC General</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-1.5">
                <div className="font-mono-tabular text-xs text-[#8B5CF6]">Tuesday</div>
                <h2 className="font-display text-base font-bold text-white">Algebra</h2>
                <p className="text-xs text-slate-300">17:00 UTC Expert (0+ ELO) · 20:00 UTC General</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-1.5">
                <div className="font-mono-tabular text-xs text-[#F59E0B]">Wednesday</div>
                <h2 className="font-display text-base font-bold text-white">Geometry</h2>
                <p className="text-xs text-slate-300">17:00 UTC Expert (0+ ELO) · 20:00 UTC General</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-1.5">
                <div className="font-mono-tabular text-xs text-[#10B981]">Thursday</div>
                <h2 className="font-display text-base font-bold text-white">Combinatorics &amp; Permutation</h2>
                <p className="text-xs text-slate-300">17:00 UTC Expert (0+ ELO) · 20:00 UTC General</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-1.5">
                <div className="font-mono-tabular text-xs text-[#F43F5E]">Friday</div>
                <h2 className="font-display text-base font-bold text-white">Mixed Mathematical Olympiad</h2>
                <p className="text-xs text-slate-300">17:00 UTC Expert (0+ ELO) · 20:00 UTC General</p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-1.5 sm:col-span-2">
                <div className="font-mono-tabular text-xs text-cyan-300">Saturday · Special Theme Episodes</div>
                <h2 className="font-display text-base font-bold text-white">Rotating Olympiad Editions</h2>
                <p className="text-xs text-slate-300">
                  IMO Simulation · Number Theory Contest · Arithmo Special · Olympiad Challenge · Math Query
                </p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-1.5 border-rose-500/40 bg-rose-500/5">
                <div className="font-mono-tabular text-xs text-rose-400">Sunday · NO Rest Day</div>
                <h2 className="font-display text-base font-bold text-white">Sunday Mega Arena Contest</h2>
                <p className="text-xs text-slate-300">
                  Core HQ Authored · Expert Only · Mandatory Module 7 · T+3h Finalization
                </p>
              </SpotlightCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Multi-Stage Registration & T-30s Pre-Match Contract Page */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-cyan-300 font-medium">
              02 · Multi-Stage Registration &amp; T-30s Pre-Match Contract
            </p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Deterministic Round Admission &amp; Authorship Transparency
            </h2>
          </div>
          <div className="ae-bento-grid ae-bento-grid-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="font-mono-tabular text-xs text-cyan-300">Stage 1 · Pre-Registration &amp; Mode Select</div>
              <h3 className="font-display text-lg font-bold text-white">4-Segment Contract Binding</h3>
              <p className="ae-prose text-sm text-slate-300">
                Competitors register with a <code className="font-mono-tabular text-cyan-300">@handle</code> (Rated) or
                enter as Unrated Guests (0 ELO), selecting General Velocity Flow or Expert 4-Segment Proof tracks.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="font-mono-tabular text-xs text-amber-300">Stage 2 · T-30s Contract Lock</div>
              <h3 className="font-display text-lg font-bold text-white">Names &amp; @handles Attribution</h3>
              <p className="ae-prose text-sm text-slate-300">
                Opens 30 seconds before launch displaying round rules + ONLY Names &amp;{' '}
                <code className="font-mono-tabular text-amber-300">@handles</code> of Problemsetters, Auditors, and
                Testers.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="font-mono-tabular text-xs text-emerald-300">Stage 3 · T-0 Live Launch</div>
              <h3 className="font-display text-lg font-bold text-white">Personal AI Hard-Lock Engaged</h3>
              <p className="ae-prose text-sm text-slate-300">
                Subsite #8 hard-locks automatically; IndexedDB offline vault and QPRT-4 ChronoVault checkpoints activate
                across all tabs.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: General Mode Velocity Flow vs Expert 3-Column Dashboard Switcher */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-cyan-300 font-medium">03 · Interactive Dual-Mode Interface Switcher</p>
                <h2 className="section-title-fluid font-display font-bold text-white">
                  General Velocity Flow vs. Expert 3-Column Dashboard
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800">
                {(
                  [
                    {id: 'general', label: 'General Velocity Flow'},
                    {id: 'expert', label: 'Expert 3-Column Dashboard'},
                    {id: 'contract', label: 'T-30s Pre-Match Contract'},
                  ] as const
                ).map((tab) => {
                  const active = contestTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setContestTab(tab.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs whitespace-nowrap transition-colors ${
                        active
                          ? 'bg-cyan-400 text-slate-950 font-semibold'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {contestTab === 'general' && (
                <motion.div
                  key="general"
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -8}}
                  transition={{duration: 0.18}}
                  className="grid lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      General Velocity Flow + Overtime Loop + Zen Focus Mode
                    </h3>
                    <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                      Single-problem sequential interface engineered for rapid arithmetic and Olympiad computation.
                      Missed items enter the <span className="text-white font-medium">Second-Chance Overtime Loop</span>
                      , paired with a native <span className="text-white font-medium">Mobile Touch Numpad</span> and
                      distraction-free <span className="text-white font-medium">Zen Focus Mode</span>.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-950/75 border border-slate-800 text-xs text-slate-300 space-y-2">
                      <div className="text-cyan-300 font-semibold">
                        Sample Problem (Enter 2026 on the Touch Numpad):
                      </div>
                      <p>
                        Find the smallest positive integer <span className="font-mono-tabular text-white">n &gt; 2025</span>{' '}
                        such that <span className="font-mono-tabular text-white">gcd(n, 2026) = 2026</span>.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 max-w-sm mx-auto space-y-4">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Mobile Touch Numpad</span>
                        <span>Zen Focus Ready</span>
                      </div>
                      <div className="font-mono-tabular text-2xl font-bold text-right px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300">
                        {numpadVal}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', 'DEL'].map((k) => (
                          <button
                            key={k}
                            type="button"
                            onClick={() => handleNumpadKey(k)}
                            className={`btn-glass py-3 ${
                              k === 'CLR'
                                ? 'text-xs text-rose-300'
                                : k === 'DEL'
                                  ? 'text-xs text-amber-300'
                                  : 'font-mono-tabular text-base'
                            }`}
                          >
                            {k}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNumpadKey('SUBMIT')}
                        className="btn-cyber w-full py-2.5 text-sm"
                      >
                        Submit General Answer
                      </button>
                      <div className={numpadStatus.cls}>{numpadStatus.text}</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {contestTab === 'expert' && (
                <motion.div
                  key="expert"
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -8}}
                  transition={{duration: 0.18}}
                  className="space-y-6"
                >
                  <div className="grid lg:grid-cols-3 gap-4">
                    <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="text-xs font-mono-tabular text-cyan-400">
                        Column 1 · Problem List &amp; Live Clarifications
                      </div>
                      <h4 className="font-display font-bold text-white">4-Segment Contract Navigation</h4>
                      <ul className="text-xs text-slate-300 space-y-2">
                        <li className="flex justify-between">
                          <span>Segment 1 · Foundational</span>
                          <span className="font-mono-tabular text-emerald-400">Max 2 Subs</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Segment 2 · Intermediate</span>
                          <span className="font-mono-tabular text-emerald-400">Max 2 Subs</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Segment 3 · Advanced Proof</span>
                          <span className="font-mono-tabular text-amber-300">Peer Review</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Segment 4 · Grandmaster</span>
                          <span className="font-mono-tabular text-rose-300">Proof-Based</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="text-xs font-mono-tabular text-violet-400">
                        Column 2 · Statement &amp; GeoGebra Tool
                      </div>
                      <h4 className="font-display font-bold text-white">Zero-Fragmentation Statement View</h4>
                      <p className="ae-prose text-xs text-slate-300 leading-relaxed">
                        Topic tags remain hidden. Geometry problems embed an interactive GeoGebra-style Geometry
                        canvas.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                      <div className="text-xs font-mono-tabular text-amber-400">
                        Column 3 · Drag-and-Drop LaTeX Editor
                      </div>
                      <h4 className="font-display font-bold text-white">Proof-Based Grading + Peer Review</h4>
                      <p className="ae-prose text-xs text-slate-300 leading-relaxed">
                        Compose structured proofs using Drag-and-Drop LaTeX blocks with max 2 submissions per problem.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {contestTab === 'contract' && (
                <motion.div
                  key="contract"
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -8}}
                  transition={{duration: 0.18}}
                >
                  <div className="p-6 rounded-xl bg-slate-950/85 border border-cyan-400/30 space-y-4 max-w-3xl">
                    <div className="flex items-center justify-between text-xs text-cyan-300">
                      <span>T-30s Pre-Match Contract Page</span>
                      <span className="font-mono-tabular">Opens 30s Before Lock</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">Verified Authorship Attribution</h3>
                    <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                      Displays ONLY Names &amp; <code className="font-mono-tabular text-cyan-300">@handles</code> of
                      Problemsetters, Auditors, and Testers alongside round segment rules.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Proof-Based Grading with 2000+ ELO Peer Review */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs text-emerald-300 font-medium">
                04 · Proof-Based Grading + 2000+ ELO Peer Review
              </p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Hybrid ProofGrader AI &amp; Sentinel Peer Adjudication
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                In Expert Segments 1 and 2, proof submissions are verified jointly by{' '}
                <span className="text-white font-semibold">ProofGrader AI</span> (symbolic step verification) and{' '}
                <span className="text-white font-semibold">2000+ ELO Grandmaster Peer Review</span>—ensuring partial
                credit, subtle induction bases, and edge-case rigor are graded to authentic IMO standards.
              </p>
            </div>
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              <SpotlightCard className="rounded-xl p-5 space-y-2">
                <div className="text-xs font-mono-tabular text-cyan-300">Max 2 Submissions/Q</div>
                <h3 className="font-display text-base font-bold text-white">Anti-Guessing Discipline</h3>
                <p className="ae-prose text-xs text-slate-400">
                  Capping submissions at 2 per Expert problem forces rigorous local verification before committing a
                  proof.
                </p>
              </SpotlightCard>
              <SpotlightCard className="rounded-xl p-5 space-y-2">
                <div className="text-xs font-mono-tabular text-emerald-300">2000+ ELO Sentinels</div>
                <h3 className="font-display text-base font-bold text-white">Blind Peer Calibration</h3>
                <p className="ae-prose text-xs text-slate-400">
                  Qualified 2000+ ELO reviewers audit anonymized Segment 1–2 proofs and earn Contribution ELO for
                  calibrated rubrics.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Interactive Find the Flaw Proof-Audit Demo */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs text-rose-300 font-medium mb-1">
                  05 · Post-Contest Hacking (6h Daily / 2h Sunday Mega)
                </p>
                <h2 className="section-title-fluid font-display font-bold text-white">
                  Interactive <span className="text-cyan-300">Find the Flaw</span> Proof-Audit Demo
                </h2>
              </div>
              <span className="font-mono-tabular text-xs text-slate-400">
                Guests without @handle can participate too
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/85 border border-slate-800 space-y-2">
              <div className="text-xs text-slate-400">
                Target Proof Snippet Under Audit (Expert Segment 3 · Number Theory)
              </div>
              <p className="font-mono-tabular text-sm text-slate-200 leading-relaxed">
                &ldquo;Let <em>p</em> be a prime dividing <em>a</em>² &minus; <em>b</em>². Assuming <em>a</em> &minus;{' '}
                <em>b</em> &ne; 0, we divide both sides by (<em>a</em> &minus; <em>b</em>) in &Zopf;
                <sub>
                  <em>p</em>
                </sub>{' '}
                to deduce <em>p</em> | (<em>a</em> + <em>b</em>), and claim <em>p</em> must be odd for all primes{' '}
                <em>p</em>.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setSelectedFlaw('valid-gap')}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedFlaw === 'valid-gap'
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-800 bg-slate-900/60 hover:border-cyan-400/50'
                }`}
              >
                <div className="text-xs font-mono-tabular text-emerald-400">Opponent Hack (+5 to +50 pts)</div>
                <div className="font-semibold text-white text-sm mt-1">
                  Expose Division by Zero Case (a = b mod p)
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Audit opponent submission for unhandled <em>a</em> &equiv; <em>b</em> (mod <em>p</em>) branch.
                </div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedFlaw('problem-flaw')}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedFlaw === 'problem-flaw'
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-800 bg-slate-900/60 hover:border-cyan-400/50'
                }`}
              >
                <div className="text-xs font-mono-tabular text-cyan-400">Official Problem Flaw (+25 to +100 pts)</div>
                <div className="font-semibold text-white text-sm mt-1">Submit Counterexample p = 2</div>
                <div className="text-xs text-slate-400 mt-1">
                  Triggers 2-min SymPy Global Rejudge across the entire contest standing.
                </div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedFlaw('invalid-hack')}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedFlaw === 'invalid-hack'
                    ? 'border-rose-400 bg-rose-500/10'
                    : 'border-slate-800 bg-slate-900/60 hover:border-rose-400/50'
                }`}
              >
                <div className="text-xs font-mono-tabular text-rose-400">False Claim (-10 pts Penalty)</div>
                <div className="font-semibold text-white text-sm mt-1">Challenge Valid Prime Factorization</div>
                <div className="text-xs text-slate-400 mt-1">Test unsuccessful hack penalty enforcement.</div>
              </button>
            </div>

            {flawFeedback ? (
              <div className={flawFeedback.cls}>{flawFeedback.content}</div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 text-sm text-slate-300">
                Select an audit action above to simulate the{' '}
                <span className="text-white font-medium">Find the Flaw</span> resolution engine.
              </div>
            )}
          </SpotlightCard>
        </ScrollReveal>
      </section>

      {/* Section 6: In-Browser Drag-and-Drop LaTeX & GeoGebra-Style Geometry Tools */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-amber-300 font-medium">06 · Native Browser Proof Authoring Tools</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Drag-and-Drop LaTeX Editor &amp; GeoGebra-Style Geometry Studio
            </h2>
          </div>
          <div className="ae-deep-grid grid lg:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono-tabular text-cyan-300">Drag-and-Drop LaTeX Builder</div>
              <h3 className="font-display text-xl font-bold text-white">Zero-Syntax-Friction Proof Composition</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Allows beginners and Grandmasters alike to drag mathematical templates—modular congruences, induction
                frames, Cauchy-Schwarz bounds, and summation blocks—directly into live KaTeX proof buffers backed by
                IndexedDB auto-save.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono-tabular text-amber-300">GeoGebra-Style Geometry Tool</div>
              <h3 className="font-display text-xl font-bold text-white">Synthetic Diagram &amp; Inversion Sandbox</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Built directly into Expert Column 2 for Wednesday Geometry and Sunday Mega rounds: construct nine-point
                circles, radical axes, homothety centers, and inversions with coordinate snap and exportable proof
                figures.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: Virtual Gym Ghost Leaderboards & Top 128 Annual World Cup */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-cyan-300 font-medium">07 · Virtual Gym &amp; Global Championship</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Virtual Gym Ghost Leaderboards &amp; Top 128 Annual World Cup (👑)
            </h2>
          </div>
          <div className="ae-deep-grid grid lg:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono-tabular text-violet-300">Virtual Gym (#/Virtual)</div>
              <h3 className="font-display text-xl font-bold text-white">Ghost Leaderboard Simulation</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Replay any historical contest under identical 100-minute constraints. Your run interleaves live onto
                the historical scoreboard with a <span className="font-mono-tabular text-violet-300">#/Virtual</span>{' '}
                ghost badge and projects your simulated ELO delta without altering official historical standings.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-amber-400/35">
              <div className="text-xs font-mono-tabular text-amber-300">Top 128 Annual World Cup (👑)</div>
              <h3 className="font-display text-xl font-bold text-white">6-Round Progressive Half-Elimination</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                The top 128 All-Rounder &amp; Mixed Olympiad contenders compete across 6 Progressive Half-Elimination
                brackets (
                <code className="font-mono-tabular text-amber-200">
                  128 &rarr; 64 &rarr; 32 &rarr; 16 &rarr; 8 &rarr; 4 &rarr; Champion
                </code>
                ) under mandatory Module 7 proctoring, awarding permanent{' '}
                <span className="text-amber-300 font-semibold">👑 Golden Crowns</span>.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
