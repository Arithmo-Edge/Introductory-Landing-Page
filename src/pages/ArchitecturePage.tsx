import React, {useState} from 'react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {PortalExplorer14} from '../components/PortalExplorer14';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';
import {PORTALS_14, factorizeBigInt, isMillerRabinPrime} from '../data/ecosystem';

export const ArchitecturePage: React.FC = () => {
  const [selectedPortalId, setSelectedPortalId] = useState<string>(PORTALS_14[0].id);

  const [mathInput, setMathInput] = useState('1047290013');
  const [mathResult, setMathResult] = useState<{
    statusText: string;
    statusTone: 'emerald' | 'cyan' | 'amber' | 'rose';
    factorsText: string;
    timeText: string;
  }>(() => {
    const val = 1047290013n;
    const t0 = performance.now();
    const isP = isMillerRabinPrime(val);
    const factors = factorizeBigInt(val);
    const ms = Math.max(0.01, performance.now() - t0).toFixed(2);
    return {
      statusText: isP ? 'Verified Prime (Miller-Rabin 7-base)' : 'Composite Integer Verified',
      statusTone: isP ? 'emerald' : 'cyan',
      factorsText: `${val.toString()} = ${factors.map((f) => f.toString()).join(' × ')}`,
      timeText: `Solved deterministically in-browser in ${ms} ms`,
    };
  });

  const runFactorizer = () => {
    const clean = mathInput.trim().replace(/[^0-9]/g, '');
    if (!clean) {
      setMathResult({
        statusText: 'Enter a valid positive integer',
        statusTone: 'rose',
        factorsText: '—',
        timeText: '0.00 ms',
      });
      return;
    }
    if (clean.length > 18) {
      setMathResult({
        statusText: 'Capped at 18 digits for instant UI demo',
        statusTone: 'amber',
        factorsText: 'Shorten integer to <= 18 digits',
        timeText: '0.00 ms',
      });
      return;
    }

    const n = BigInt(clean);
    const t0 = performance.now();
    if (n < 2n) {
      setMathResult({
        statusText: 'Unit / Zero (Neither Prime nor Composite)',
        statusTone: 'amber',
        factorsText: n.toString(),
        timeText: `${(performance.now() - t0).toFixed(2)} ms`,
      });
      return;
    }

    const isP = isMillerRabinPrime(n);
    const factors = factorizeBigInt(n);
    const elapsed = (performance.now() - t0).toFixed(2);
    setMathResult({
      statusText: isP ? 'Verified Prime (Miller-Rabin 7-base)' : 'Composite Integer Verified',
      statusTone: isP ? 'emerald' : 'cyan',
      factorsText: `${n.toString()} = ${factors.map((f) => f.toString()).join(' × ')}`,
      timeText: `Solved deterministically in-browser in ${elapsed} ms`,
    });
  };

  const statusToneClass =
    mathResult.statusTone === 'emerald'
      ? 'text-xs font-semibold text-emerald-400'
      : mathResult.statusTone === 'rose'
        ? 'text-xs font-semibold text-rose-400'
        : mathResult.statusTone === 'amber'
          ? 'text-xs font-semibold text-amber-300'
          : 'text-xs font-semibold text-cyan-300';

  return (
    <>
      {/* Section 1: Federated Micro-Frontend Thesis */}
      <section className="relative overflow-hidden border-b border-slate-800/70">
        <WebGLHeroCanvas accentHex="#00F0FF" secondaryHex="#10B981" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050811]/35 to-[#050811]"
        />
        <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
              <HeroReveal delay={0.02}>
                <div className="text-xs text-cyan-300 font-medium">
                  01 · Federated Micro-Frontend Thesis · arithmo-edge.github.io
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  14-Website Federated Architecture
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Instead of cramming five arenas, 42 AI engines, institutional academies, and archival databases into one
                  fragile monolith, Arithmo-Edge deploys{' '}
                  <span className="text-white font-semibold">1 Core Portal + 13 Subsites</span> as isolated
                  micro-frontends on Free Forever GitHub Pages (
                  <code className="font-mono-tabular text-cyan-300">arithmo-edge.github.io/...</code>)—unified by{' '}
                  <code className="font-mono-tabular text-cyan-300">Arithmo-Core-SDK (engine.js)</code>.
                </p>
              </HeroReveal>
              <HeroReveal delay={0.2}>
                <div className="flex flex-wrap gap-3 text-xs text-slate-300 pt-1">
                  <span>Blast-Radius Isolation</span>
                  <span aria-hidden="true">·</span>
                  <span>Independent CI/CD Releases</span>
                  <span aria-hidden="true">·</span>
                  <span>Zero-Cost Edge Hosting</span>
                </div>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.16} className="h-full">
                <div className="h-full min-h-[280px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame group">
                  <ResilientImage
                    src={MEDIA.federatedNodes}
                    alt="Federated node lattice representing 14 Arithmo-Edge portals"
                    loading="eager"
                    accentColor="#00F0FF"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/40 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs text-cyan-300 font-mono-tabular">github.com/Arithmo-Edge</div>
                    <p className="ae-prose text-sm text-slate-200 mt-1">
                      Each subsite enforces its own domain security boundary while synchronizing Auth, 10 Core ELOs, and
                      Arithmo Wallet state in real time.
                    </p>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive 14-Portal Explorer */}
      <section
        id="portal-explorer"
        className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60"
      >
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs text-cyan-300 font-medium mb-1">02 · Interactive 14-Portal Explorer</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Click Any of the 14 Websites on arithmo-edge.github.io
              </h2>
              <p className="ae-prose text-sm text-slate-400 mt-2 prose-measure">
                Filter across the Core Portal, all 5 Mathematical Arenas, live Competition engines, AI tutoring,
                Institutional Academies, Forge, Socials, Headquarters, and the Arithmo Database—inspecting complete
                capabilities, subsystem specs, SDK hooks, 12-tier ELO ladders, and Golden Vault samples.
              </p>
            </div>
            <span className="text-xs text-slate-400">
              Subsite #13 (Arithmo Database) launches after Subsites #1–#12
            </span>
          </div>
        </ScrollReveal>

        <PortalExplorer14
          selectedPortalId={selectedPortalId}
          onSelectPortalId={(id) => setSelectedPortalId(id)}
        />

        <div className="mt-8">
          <SpotlightCard className="rounded-2xl overflow-hidden group">
            <div className="grid md:grid-cols-12 items-stretch">
              <div className="md:col-span-4 min-h-[190px] media-frame">
                <ResilientImage
                  src={MEDIA.academyArchive}
                  alt="Arithmo Database world Olympiad archives"
                  accentColor="#10B981"
                />
              </div>
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono-tabular text-emerald-400">
                    13 · Post-Launch Global Knowledge Archive · arithmo-edge.github.io/arithmo-database/
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    Subsite #13: Arithmo Database &amp; Editorials
                  </h3>
                  <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                    Catalogs historical Arithmo rounds across the 5 arenas alongside{' '}
                    <span className="text-white font-medium">IMO, Putnam, RMM, BMO, and BdMO</span> archives—enriched
                    with AI-Generated Step-by-Step Editorials.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPortalId('database');
                      document.getElementById('portal-explorer')?.scrollIntoView({behavior: 'smooth', block: 'start'});
                    }}
                    className="btn-glass px-4 py-2 text-xs whitespace-nowrap"
                  >
                    Inspect Subsite #13 in Explorer &uarr;
                  </button>
                  <a href="roadmap.html" className="text-xs text-emerald-300 hover:underline whitespace-nowrap">
                    Read Rollout Timeline &rarr;
                  </a>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Section 3: Centralized Arithmo-Core-SDK Sync */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs text-cyan-300 font-medium">03 · Centralized SDK Backbone</p>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Arithmo-Core-SDK (engine.js) Cross-Portal Sync
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                Every subsite imports the shared <code className="font-mono-tabular text-cyan-300">engine.js</code>{' '}
                runtime from <code className="font-mono-tabular">github.com/Arithmo-Edge/Arithmo-Core-SDK</code>. This
                guarantees unified Firebase Auth session hydration, synchronized 10 Core ELO telemetry, closed-loop
                Arithmo Wallet deduction checks, and instantaneous QPRT-4 contest lockouts without duplicating business
                logic across 14 repositories.
              </p>
            </div>
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 font-mono-tabular text-xs text-slate-300 space-y-2 overflow-x-auto">
              <div className="text-cyan-400">Arithmo-Core-SDK (engine.js) Federated Handshake</div>
              <pre className="leading-relaxed">{`1. Hydrate Gmail SSO Session & @handle Claim (Firebase Auth)
2. Resolve Dual-Handle Context (Personal vs Academy @handle)
3. Sync 10 Core Arena ELOs + HQ ELO + Contribution ELO
4. Enforce Contest Hard-Lock on Subsite #8 (Arithmo Personal AI)
5. Dispatch AES-256 Telemetry & IndexedDB Offline Draft Checkpoints`}</pre>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Dual-Storage Hybrid Data Lake */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-violet-300 font-medium">04 · Dual-Storage Hybrid Data Lake</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Hot Cloud Firestore + Cold 24-Hour Private GitHub Zero-PII JSONL Lake
            </h2>
          </div>
          <div className="ae-deep-grid grid lg:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono-tabular text-cyan-300">Hot Storage Layer · Real-Time State</div>
              <h3 className="font-display text-xl font-bold text-white">Unified Cloud Firestore</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Handles sub-second live match scores, 14 real-time leaderboards, active{' '}
                <code className="font-mono-tabular text-cyan-300">1v1 Bullet Blitz</code> rooms,{' '}
                <code className="font-mono-tabular text-cyan-300">Arithmo Wallet</code> ledger transactions,{' '}
                <code className="font-mono-tabular text-cyan-300">donors</code> Patron Wall webhooks, and live
                clarifications during active 100-minute contests.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono-tabular text-emerald-300">
                Cold Storage Layer · Automated 24h GitHub Actions
              </div>
              <h3 className="font-display text-xl font-bold text-white">Private Zero-PII JSONL Data Lake</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Every 24 hours, automated GitHub Actions strip all PII (emails, legal names, IPs), flush historical
                submissions, <code className="font-mono-tabular text-emerald-300">MBTS</code> telemetry, and{' '}
                <code className="font-mono-tabular text-emerald-300">Find the Flaw</code> traces into compressed{' '}
                <code className="font-mono-tabular">.jsonl</code> shards inside a private GitHub repository—keeping
                Firestore read/write footprints minimal while feeding AI model calibration.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Zero-Cost Caching & Read-Shield Engineering */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-amber-300 font-medium">05 · Zero-Cost Edge Defense</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Caching &amp; Read-Shield Engineering
            </h2>
          </div>
          <div className="ae-bento-grid ae-bento-grid-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="text-xs font-mono-tabular text-cyan-300">Cloudflare Worker Edge Proxy</div>
              <h3 className="font-display text-lg font-bold text-white">Token &amp; PAT Isolation</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Proxies read-only Golden Vault <code className="font-mono-tabular">.json</code> problem sets and
                Gemini/Qwen-Math API dispatches without exposing credentials on static GitHub Pages clients.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="text-xs font-mono-tabular text-violet-300">Read-Shield Snapshot Pattern</div>
              <h3 className="font-display text-lg font-bold text-white">98% Firestore Read Reduction</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Public standings and archive indexes compile into static JSON snapshots served at the edge, shielding
                Firestore free-tier quotas from traffic spikes.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-6 space-y-2">
              <div className="text-xs font-mono-tabular text-emerald-300">Stale-While-Revalidate</div>
              <h3 className="font-display text-lg font-bold text-white">Deterministic Local Cache</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Contest statements, LaTeX templates, and guidebook chapters cache cleanly in browser storage for instant
                resume across flaky connections.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Client-Side Deterministic Math Engine (Interactive) */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-400/30 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-cyan-300 font-medium">06 · Client-Side Deterministic Math Engine</p>
                <h2 className="section-title-fluid font-display font-bold text-white">
                  Live Browser Execution: Miller-Rabin + Brent-Pollard&apos;s Rho
                </h2>
              </div>
              <span className="font-mono-tabular text-xs text-slate-400">
                Zero Server Latency · Web Audio API · IndexedDB Vault
              </span>
            </div>

            <p className="ae-prose text-sm text-slate-300 leading-relaxed prose-measure">
              Numerical validation, primality screening, and factor verification run deterministically inside the
              contestant&apos;s browser using <span className="text-white font-medium">BigInt Miller-Rabin</span> and{' '}
              <span className="text-white font-medium">Brent-Pollard&apos;s Rho</span>, paired with{' '}
              <span className="text-white font-medium">Web Audio API</span> timer cues and{' '}
              <span className="text-white font-medium">IndexedDB</span> offline submission persistence. Test the live
              engine right here:
            </p>

            <div className="grid md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5">
                <label htmlFor="det-math-input" className="text-xs text-slate-400 block mb-1.5">
                  Enter Integer (&le; 18 digits) to Test Live:
                </label>
                <input
                  id="det-math-input"
                  type="text"
                  value={mathInput}
                  onChange={(e) => setMathInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') runFactorizer();
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 font-mono-tabular text-sm text-white focus:border-cyan-400 outline-none"
                />
              </div>
              <div className="md:col-span-3">
                <button type="button" onClick={runFactorizer} className="btn-cyber w-full py-3 px-4 text-sm">
                  Factorize in Browser
                </button>
              </div>
              <div className="md:col-span-4 p-3.5 rounded-xl bg-slate-950/85 border border-slate-800">
                <div className={statusToneClass}>{mathResult.statusText}</div>
                <div className="font-mono-tabular text-sm text-white mt-0.5 break-all">{mathResult.factorsText}</div>
                <div className="font-mono-tabular text-[11px] text-slate-400 mt-0.5">{mathResult.timeText}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: Open-Source Organization Repositories */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-xs text-cyan-300 font-medium">07 · Open-Source Organization Repositories</p>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Core Engineering Repositories under github.com/Arithmo-Edge
            </h2>
          </div>
          <div className="ae-bento-grid ae-bento-grid-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <SpotlightCard
              asAnchorHref="https://github.com/Arithmo-Edge"
              className="rounded-2xl p-6 space-y-2.5 h-full"
            >
              <div className="font-mono-tabular text-xs text-cyan-400">github.com/Arithmo-Edge/BluePrint</div>
              <h3 className="font-display text-lg font-bold text-white">BluePrint</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Master architectural specification, QPRT-4 mathematical proofs, 14-portal contracts, and governance
                blueprints.
              </p>
            </SpotlightCard>
            <SpotlightCard
              asAnchorHref="https://github.com/Arithmo-Edge"
              className="rounded-2xl p-6 space-y-2.5 h-full"
            >
              <div className="font-mono-tabular text-xs text-violet-400">github.com/Arithmo-Edge/JSON-Converter</div>
              <h3 className="font-display text-lg font-bold text-white">JSON-Converter</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Automated Schema v1.2 problem validator and LaTeX-to-JSON compiler powering Golden Vault ingestion.
              </p>
            </SpotlightCard>
            <SpotlightCard
              asAnchorHref="https://github.com/Arithmo-Edge"
              className="rounded-2xl p-6 space-y-2.5 h-full"
            >
              <div className="font-mono-tabular text-xs text-emerald-400">
                github.com/Arithmo-Edge/Arithmo-Core-SDK
              </div>
              <h3 className="font-display text-lg font-bold text-white">Arithmo-Core-SDK</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Centralized engine.js module synchronizing Firebase Auth, Dual-Handle routing, Wallet ledger, and ELO
                updates across all 14 sites.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
