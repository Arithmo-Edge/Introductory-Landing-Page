import React, {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

type QprtPhase = 'p1' | 'p2' | 'p3' | 'p4';
type Module7Round = 'daily' | 'mega';

export const SecurityQprt4Page: React.FC = () => {
  const [phase, setPhase] = useState<QprtPhase>('p1');
  const [module7Mode, setModule7Mode] = useState<Module7Round>('daily');

  return (
    <>
      {/* Section 1: Interactive QPRT-4 4-Phase Resilience Explorer */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#00F0FF" secondaryHex="#F43F5E" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-10">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">
                  01 · arithmo-edge.github.io/hq-core/ · QPRT-4 Defense-in-Depth
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  QPRT-4 Resilience &amp; 14-Point Legal Compliance Shield
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Quantitative Olympiad ratings demand fault-tolerant infrastructure and unyielding academic honesty.
                  Explore <span className="text-white font-semibold">The Arithmo-Edge Quad-Phase Resilience Theory (QPRT-4)</span>
                  , adaptive <span className="text-white font-semibold">Module 7</span> proctoring,{' '}
                  <span className="font-mono-tabular text-cyan-300">MBTS</span> behavioral clustering, the 11-Flag
                  Blackhole Ladder, and our 14-Point Legal Shield.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.16} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame group">
                  <ResilientImage
                    src={MEDIA.neuralSympy}
                    alt="QPRT-4 cryptographic cybersecurity protection"
                    loading="eager"
                    accentColor="#F43F5E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-cyan-300 mb-1">
                      The Arithmo-Edge Quad-Phase Resilience Theory (QPRT-4)
                    </div>
                    <div className="font-display text-lg font-bold text-white">
                      30s Outage Freeze · 30s Hot-Swap · 2-Min Rejudge
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 bg-slate-950/80 border border-slate-800 p-1.5 rounded-xl mb-6">
                {(
                  [
                    {id: 'p1', label: 'Phase I · Pre-Exam Preventive Shield'},
                    {id: 'p2', label: 'Phase II · In-Exam Real-Time Stabilization'},
                    {id: 'p3', label: 'Phase III · Post-Exam Forensic Rectification'},
                    {id: 'p4', label: 'Phase IV · Post-Cycle Evolutionary Archival'},
                  ] as const
                ).map((item) => {
                  const active = phase === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPhase(item.id)}
                      className={`px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap transition-colors ${
                        active ? 'bg-cyan-400 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {phase === 'p1' && (
                  <motion.div
                    key="p1"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -8}}
                    transition={{duration: 0.18}}
                    className="grid md:grid-cols-3 gap-5"
                  >
                    <div className="rounded-xl border border-cyan-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-cyan-300">PlagioGuard AI</div>
                      <div className="font-display text-xl font-bold text-white">&gt;75% Similarity Block</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">PlagioGuard AI</code> blocks any draft problem exceeding{' '}
                        <code className="text-cyan-300">&gt;75%</code> AoPS or historical corpus similarity before round
                        lock.
                      </p>
                    </div>
                    <div className="rounded-xl border border-cyan-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-cyan-300">AxiomCheck AI</div>
                      <div className="font-display text-xl font-bold text-white">100% Python/SymPy Proof Check</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">AxiomCheck AI</code> runs{' '}
                        <code className="text-cyan-300">100% Python/SymPy</code> deterministic proof and
                        boundary-condition verification prior to contest launch.
                      </p>
                    </div>
                    <div className="rounded-xl border border-cyan-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-cyan-300">QuantumShuffler AI</div>
                      <div className="font-display text-xl font-bold text-white">2 Standby Reserves / Segment</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">QuantumShuffler AI</code> locks{' '}
                        <span className="text-white font-semibold">2 standby reserve problems per segment</span> in
                        encrypted cold vaults for instant fail-over.
                      </p>
                    </div>
                  </motion.div>
                )}

                {phase === 'p2' && (
                  <motion.div
                    key="p2"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -8}}
                    transition={{duration: 0.18}}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
                  >
                    <div className="rounded-xl border border-violet-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-violet-300">GridShield AI · 10s Ping</div>
                      <div className="font-display text-lg font-bold text-white">30s Outage Clock Freeze</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">GridShield AI</code> pings every{' '}
                        <code className="text-violet-300">10s</code> and freezes contest clocks (
                        <code className="text-rose-300">FROZEN</code>) after{' '}
                        <span className="text-white font-semibold">30 consecutive seconds</span> of outage, appending
                        exact lost recovery time.
                      </p>
                    </div>
                    <div className="rounded-xl border border-violet-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-violet-300">PulseWatcher AI · Leak Guard</div>
                      <div className="font-display text-lg font-bold text-white">30s Hot-Swap + 10m Bonus</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">PulseWatcher AI</code> executes a{' '}
                        <span className="text-white font-semibold">30-second</span> reserve problem hot-swap plus{' '}
                        <span className="text-white font-semibold">+10 min global bonus time</span> on confirmed leaks.
                      </p>
                    </div>
                    <div className="rounded-xl border border-violet-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-violet-300">Offline Resilience</div>
                      <div className="font-display text-lg font-bold text-white">IndexedDB Offline Vault</div>
                      <p className="ae-prose text-xs text-slate-400">
                        The <code className="text-slate-200">IndexedDB</code> Offline Vault seals millisecond-stamped
                        drafts locally so zero LaTeX or numeric work is lost during brief disconnects.
                      </p>
                    </div>
                    <div className="rounded-xl border border-violet-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-violet-300">Biometric Integrity</div>
                      <div className="font-display text-lg font-bold text-white">Optional Module 7</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <strong>Optional Module 7</strong> (<code className="text-violet-300">4.5s</code> Adaptive Gaze
                        Guard + 3-Axis Audio Trap) remains user-selectable on Mon–Sat rounds and mandatory only for
                        Sunday Mega &amp; World Cup.
                      </p>
                    </div>
                  </motion.div>
                )}

                {phase === 'p3' && (
                  <motion.div
                    key="p3"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -8}}
                    transition={{duration: 0.18}}
                    className="grid md:grid-cols-3 gap-5"
                  >
                    <div className="rounded-xl border border-amber-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-amber-300">Find the Flaw + Rejudge</div>
                      <div className="font-display text-xl font-bold text-white">2-Min SymPy Global Rejudge</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">Find the Flaw</code> (<code className="text-amber-300">6h</code>{' '}
                        daily / <code className="text-amber-300">2h</code> Sunday Mega) +{' '}
                        <span className="text-white font-semibold">2-minute</span> SymPy Global Rejudge awards{' '}
                        <span className="text-cyan-300">+25 to +100 pts</span> for problem flaws and{' '}
                        <span className="text-emerald-300">+5 to +50 pts</span> (
                        <span className="text-rose-300">-10 pts</span> penalty) for opponent hacks.
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-amber-300">Behavioral Forensics</div>
                      <div className="font-display text-xl font-bold text-white">MBTS Telemetry Clustering</div>
                      <p className="ae-prose text-xs text-slate-400">
                        Correlates keystroke entropy, LaTeX backtrack cadence, and multi-session timing signatures to
                        detect collusion and synthetic LLM bursts.
                      </p>
                    </div>
                    <div className="rounded-xl border border-amber-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-amber-300">Rating Safeguard</div>
                      <div className="font-display text-xl font-bold text-white">
                        Zero-Dampening Asymmetric Shield
                      </div>
                      <p className="ae-prose text-xs text-slate-400">
                        The <code className="text-slate-200">Zero-Dampening Asymmetric ELO Shield</code> ensures
                        legitimate high-ELO wins and post-rejudge restorations propagate without artificial dampening.
                      </p>
                    </div>
                  </motion.div>
                )}

                {phase === 'p4' && (
                  <motion.div
                    key="p4"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -8}}
                    transition={{duration: 0.18}}
                    className="grid md:grid-cols-2 gap-5"
                  >
                    <div className="rounded-xl border border-emerald-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-emerald-300">
                        ChronoVault AI + ComplianceGuard AI
                      </div>
                      <div className="font-display text-xl font-bold text-white">24-Hour Zero-PII JSONL Archival</div>
                      <p className="ae-prose text-xs text-slate-400">
                        <code className="text-slate-200">ChronoVault AI</code> +{' '}
                        <code className="text-slate-200">ComplianceGuard AI</code> scrub all Personally Identifiable
                        Information and push <code className="text-emerald-300">Zero-PII JSONL</code> cognitive vectors
                        to the private GitHub Data Lake every{' '}
                        <span className="text-white font-semibold">24 hours</span>.
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald-400/25 bg-slate-950/70 p-5 space-y-2">
                      <div className="text-xs font-mono-tabular text-emerald-300">Evolutionary Benchmark Loop</div>
                      <div className="font-display text-xl font-bold text-white">Contamination-Free Feedback</div>
                      <p className="ae-prose text-xs text-slate-400">
                        Clean anonymized proof trajectories calibrate future Question-Forge difficulty curves while
                        guaranteeing permanent GDPR/COPPA privacy boundaries.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Optional vs Mandatory Module 7 Proctoring Switcher */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs font-mono-tabular text-cyan-300">02 · Module 7 Privacy Mode Selector</div>
                <h2 className="section-title-fluid font-display font-bold text-white">
                  Optional vs. Mandatory Module 7
                </h2>
                <p className="ae-prose text-sm text-slate-300">
                  Students maintain full agency on Mon–Sat practice/daily rounds while safeguarding prestige on Sunday
                  Mega &amp; World Cup finals.
                </p>
                <label htmlFor="module7-round-type" className="block text-xs font-mono-tabular text-slate-400 pt-2">
                  Select Contest Tier
                </label>
                <select
                  id="module7-round-type"
                  value={module7Mode}
                  onChange={(e) => setModule7Mode(e.target.value as Module7Round)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white"
                >
                  <option value="daily">Daily Rated Contests (Mon–Sat)</option>
                  <option value="mega">Sunday Mega Arena &amp; Top 128 World Cup</option>
                </select>
              </div>
              <div className="lg:col-span-7 rounded-xl border border-cyan-400/35 bg-slate-950/80 p-6 space-y-3">
                <div className="text-xs font-mono-tabular text-cyan-300 uppercase">Enforcement Policy</div>
                {module7Mode === 'mega' ? (
                  <p className="ae-prose text-sm sm:text-base text-white leading-relaxed">
                    <span className="text-amber-300 font-semibold">Mandatory Verification:</span> Sunday Mega Arena
                    Contests and the Top 128 Annual World Cup require explicit opt-in verification via Module 7 (
                    <span className="font-mono-tabular">4.5s</span> Gaze Guard + 3-Axis Audio Trap). Local telemetry runs
                    in-browser—no raw camera video ever hits servers.
                  </p>
                ) : (
                  <p className="ae-prose text-sm sm:text-base text-white leading-relaxed">
                    <span className="text-emerald-400 font-semibold">Optional Client Choice:</span> During Monday–Saturday
                    daily rounds and practice sessions, Module 7 webcam gaze / 3-axis microphone proctoring is{' '}
                    <strong>100% optional</strong>. Solvers can toggle it on solely for Verified HonestyScore calibration.
                  </p>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: MBTS Behavioral Telemetry Clustering */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono-tabular text-cyan-300">03 · MBTS Clustering</div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Mathematical Behavioral Telemetry Signatures
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                Naive anti-cheat catches only copy-paste strings.{' '}
                <span className="text-white font-semibold">MBTS Clustering</span> builds a multidimensional baseline per
                contestant—measuring LaTeX backtrack cadence, scratchpad solve intervals, keystroke entropy, and mouse
                hesitation across clean rounds—flagging sudden synthetic LLM-assisted bursts without false-positive bans
                on fast mental calculators.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 text-xs pt-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-cyan-300 font-semibold">Solve Cadence</div>
                  <p className="text-slate-400 mt-1">Compares lemma discovery time against historical solve slopes.</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-violet-300 font-semibold">Keystroke Entropy</div>
                  <p className="text-slate-400 mt-1">Detects mechanical transcription vs. exploratory LaTeX editing.</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-emerald-300 font-semibold">Cohort Clustering</div>
                  <p className="text-slate-400 mt-1">Spots synchronized wrong-step bursts across colluding rooms.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 media-frame h-80 relative">
              <ResilientImage
                src={MEDIA.federatedNodes}
                alt="MBTS telemetry clustering analytics"
                accentColor="#00F0FF"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: 11-Flag Blackhole Escalation Ladder */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">04 · Progressive Fair-Play Sanctions</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              11-Flag &ldquo;Blackhole&rdquo; Escalation Ladder
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Progressive ELO nullification brackets escalate cleanly from minor rating lockouts up to permanent Gmail
              and hardware/IP blacklisting:
            </p>
          </div>
          <div className="ae-bento-grid-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-emerald-400/25">
              <div className="text-xs font-mono-tabular text-emerald-300">Flags 1 &amp; 2 · 1 Plus Contest Lockdown</div>
              <h3 className="font-display font-bold text-white">-5 ELO + 1 Match Nullified</h3>
              <p className="ae-prose text-xs text-slate-300">
                Immediate <span className="text-white font-semibold">-5 ELO</span> deduction plus the next{' '}
                <span className="text-white font-semibold">1</span> positive rated match&apos;s ELO gain is nullified to{' '}
                <span className="font-mono-tabular text-emerald-300">0 ELO</span>.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-amber-400/30">
              <div className="text-xs font-mono-tabular text-amber-300">Flags 3 through 8 · 2 Plus Contest Lockdown</div>
              <h3 className="font-display font-bold text-white">Next 2 Positive Matches Nullified</h3>
              <p className="ae-prose text-xs text-slate-300">
                Next <span className="text-white font-semibold">2</span> positive rated matches&apos; ELO gains are
                nullified to <span className="font-mono-tabular text-amber-300">0 ELO</span>.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-orange-400/35">
              <div className="text-xs font-mono-tabular text-orange-300">
                Flag 9 · 3 Plus Contest Lockdown (Final Warning)
              </div>
              <h3 className="font-display font-bold text-white">Next 3 Matches Nullified + Final Warning</h3>
              <p className="ae-prose text-xs text-slate-300">
                Next <span className="text-white font-semibold">3</span> positive rated matches&apos; ELO gains are
                nullified to <span className="font-mono-tabular text-orange-300">0 ELO</span> with an account-wide Final
                Warning.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-rose-400/35">
              <div className="text-xs font-mono-tabular text-rose-300">Flag 10 · 1-Month Temporary Ban</div>
              <h3 className="font-display font-bold text-white">30-Day Suspension + Hardware Reset</h3>
              <p className="ae-prose text-xs text-slate-300">
                Mandatory <span className="text-white font-semibold">30-day</span> suspension followed by a mandatory
                hardware security reset before match re-entry.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2 border-rose-500/50 md:col-span-2 lg:col-span-2">
              <div className="text-xs font-mono-tabular text-rose-400">Flag 11 · Permanent Gmail &amp; IP/Device Ban</div>
              <h3 className="font-display font-bold text-white">Irreversible Blacklist + 7-Day Appeal Window</h3>
              <p className="ae-prose text-xs text-slate-300">
                Irreversible <span className="text-white font-semibold">permanent Gmail blacklist + IP/hardware fingerprint ban</span>{' '}
                (retaining <span className="text-cyan-300">7-day</span> restricted access to the{' '}
                <span className="font-mono-tabular text-cyan-300">Subsite #11</span> Forensic Appeal Portal).
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: 4-Signal Alt / Sockpuppet Neutralization Engine */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">05 · Anti-Smurf &amp; Anti-Farming Defense</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              4-Signal Alt / Sockpuppet Neutralization Engine
            </h2>
          </div>
          <div className="ae-bento-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="text-xs font-mono-tabular text-cyan-300">Signal 01</div>
              <h3 className="font-display font-bold text-white">Hardware &amp; WebGL Fingerprint</h3>
              <p className="text-xs text-slate-400">
                Detects shared GPU/canvas entropy across supposedly independent freshman accounts.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="text-xs font-mono-tabular text-violet-300">Signal 02</div>
              <h3 className="font-display font-bold text-white">Notation Micro-Style</h3>
              <p className="text-xs text-slate-400">
                Identifies idiosyncratic LaTeX macros, variable naming habits, and bracket spacing.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="text-xs font-mono-tabular text-emerald-300">Signal 03</div>
              <h3 className="font-display font-bold text-white">Academy &amp; ISP Co-Location</h3>
              <p className="text-xs text-slate-400">
                Separates legitimate shared school computer labs (via Academy KYB whitelist) from home smurf farms.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="text-xs font-mono-tabular text-amber-300">Signal 04</div>
              <h3 className="font-display font-bold text-white">Rapid Rating Velocity</h3>
              <p className="text-xs text-slate-400">
                Quarantines &ldquo;new initiates&rdquo; solving 2400+ Archon lemmas in &lt;4 minutes during placement
                rounds.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: 4-Step Forensic Appeal & 5-Min Live Video Skill Audit */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              06 · Due Process &amp; Zero-Mistake Reinstatement
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              4-Step Forensic Appeal &amp; 5-Min Live Video Skill Audit
            </h2>
          </div>
          <div className="ae-bento-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="font-mono-tabular text-xs text-cyan-300">Step 01</div>
              <h3 className="font-display font-bold text-white">Encrypted Appeal Docket</h3>
              <p className="ae-prose text-xs text-slate-300">
                Contenders unlock full SHA-256 ChronoVault AI timelines, IndexedDB draft proofs, and MBTS flag
                summaries via Subsite #11.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="font-mono-tabular text-xs text-violet-300">Step 02</div>
              <h3 className="font-display font-bold text-white">Chief Arbiter Review</h3>
              <p className="ae-prose text-xs text-slate-300">
                A 750+ Chief Arbiter cross-examines telemetry logs with Supreme Headquarters AI diagnostics.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="font-mono-tabular text-xs text-emerald-300">Step 03</div>
              <h3 className="font-display font-bold text-white">5-Min Live Video Skill Audit</h3>
              <p className="ae-prose text-xs text-slate-300">
                Appellant explains their flagged contest solution verbally while solving a live unseen lemma on
                whiteboard.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-5 space-y-2">
              <div className="font-mono-tabular text-xs text-amber-300">Step 04</div>
              <h3 className="font-display font-bold text-white">Full Exoneration &amp; Restore</h3>
              <p className="ae-prose text-xs text-slate-300">
                Successful defense purges flags immediately, restores ELO, and issues a verified human-prodigy clearance
                badge.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: 14-Point Global & Bangladesh Legal Compliance Shield */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              07 · Statutory Protection &amp; Bangladesh / Global Compliance
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              14-Point Global &amp; Bangladesh Legal Compliance Shield
            </h2>
            <p className="ae-prose text-sm sm:text-base text-slate-400 prose-measure mt-2">
              Designed from day one by Rayaan Tasnim to unify Bangladesh statutory governance, international youth
              privacy, and global Merchant of Record tax compliance:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">01. Bangladesh Bank FX &amp; PRC Compliance:</span>{' '}
              Cross-border software/SaaS export inflows strictly channeled for Proceeds Realization Certificate (PRC)
              &amp; foreign exchange auditability.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">02. NBR e-TIN IT/ITES Export Tax Records:</span> Full
              National Board of Revenue (NBR) <code>e-TIN</code> alignment and verifiable IT/ITES export documentation.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">
                03. Zero-NID Data Minimization (Bangladesh Cyber Security Act):
              </span>{' '}
              Strict consent trails and zero National ID (NID) or unauthorized biometric harvesting under the Bangladesh
              Cyber Security Act.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">
                04. Merchant of Record Global VAT (Lemon Squeezy / Paddle):
              </span>{' '}
              Automated global VAT/GST collection, invoicing, and remittance via Merchant of Record infrastructure (
              <code>Lemon Squeezy / Paddle</code>).
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">
                05. Local Dispute Jurisdiction in Dhaka, Bangladesh:
              </span>{' '}
              Terms of Service and institutional contracts governed under exclusive local dispute jurisdiction in Dhaka,
              Bangladesh.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">06. COPPA &amp; GDPR-K Youth Privacy:</span> Parental
              consent hooks, zero ad-tracking, and underage telemetry encryption across all student accounts.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">07. EU GDPR Article 17 &amp; 24h PII Scrub:</span> Automated
              Right-to-Erasure workflows plus 24-hour PII purging by ChronoVault AI &amp; ComplianceGuard AI.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">08. EU Digital Services Act (DSA) Due Process:</span>{' '}
              Transparent algorithmic flag notices and mandatory 4-Step Forensic Appeals (including 7-day Flag 11 portal
              access).
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">09. Copyright Act &amp; Forge Originality:</span> 5-Pillar
              Forge gatekeeping + <code>&gt;75%</code> AoPS similarity block guarantees clean original IP.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">10. Guardian Financial Custodianship:</span> Minor founder
              revenue held under verified parent/guardian fiduciary governance until legal majority.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">11. Zero Gambling / Pay-to-Win Separation:</span>{' '}
              Subscriptions, Arithmo Wallet credits, and Wall of Patrons donations grant zero ELO points or moderation
              weights.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">12. Closed-Loop Wallet &amp; Academy KYB Controls:</span>{' '}
              Non-withdrawable Arithmo Credits plus manual KYB checks prevent money-laundering and seat reselling.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">13. Client-Side Biometrics &amp; Optional Module 7:</span>{' '}
              Module 7 stays opt-in Mon–Sat; video/audio frames run locally in-browser and never enter raw DB dumps.
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-cyan-300 font-semibold">14. Fair Rejudge &amp; IP Separation:</span> 2-minute SymPy
              Global Rejudges protect contenders on flawed problems while Secret Golden Vaults stay isolated from public
              repos.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
