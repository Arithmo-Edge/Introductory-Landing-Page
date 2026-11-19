import React, {useState} from 'react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

const TOPUP_OPTIONS = [5, 10, 25, 50] as const;

export const PricingPage: React.FC = () => {
  const [selectedTopup, setSelectedTopup] = useState<number>(25);

  const bonus = Number((selectedTopup * 0.1).toFixed(2));
  const totalCredits = Number((selectedTopup + bonus).toFixed(2));

  return (
    <>
      {/* Section 1: Zero Pay-to-Win Competitive Integrity Charter */}
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
                <div className="text-xs text-cyan-300 font-medium">01 · Zero Pay-to-Win Constitutional Charter</div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">
                  Subscriptions, Token Store &amp; Closed-Loop Wallet
                </h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Every daily contest, Sunday Mega Arena, 1v1 Bullet Blitz, Virtual Gym ghost run, and Top 128 World
                  Cup qualification is <span className="text-white font-semibold">100% Free Forever</span>. Paid tiers
                  fund personal AI tutoring compute, offline problem packs, and institutional classroom tools—never ELO
                  boosts or extra contest time.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.18} className="h-full">
                <div className="h-full min-h-[260px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame">
                  <ResilientImage
                    src={MEDIA.federatedNodes}
                    alt="Zero Pay-to-Win transparent pricing infrastructure"
                    loading="eager"
                    accentColor="#10B981"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-emerald-300 mb-1">100% Meritocratic Competition</div>
                    <div className="font-display text-lg font-bold text-white">
                      Compute Subsidized · Never ELO-for-Sale
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 4 Personal Subscription Plans */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              02 · Personal Plans ($0 to $12.99/mo · 7-Day One-Time Free Trial on Paid Tiers)
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">4 Personal Subscription Tiers</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono-tabular text-slate-400">Plan 01</div>
              <h3 className="font-display text-xl font-bold text-white">Free</h3>
              <div className="font-mono-tabular text-2xl font-bold text-white">
                $0.00<span className="text-xs text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>
                  · <span className="text-white font-semibold">5</span> monthly queries on Arithmo Personal AI: General
                  (1x)
                </li>
                <li>
                  · <span className="text-white font-semibold">5</span> lifetime free 1v1 Bullet Blitz global pool
                  challenges (±100 ELO)
                </li>
                <li>· All Daily &amp; Sunday Mega Contests + Unlimited Solo Virtual Gym</li>
                <li>· Free Printable Community Guidebook</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-3 border-cyan-400/35">
              <div className="text-xs font-mono-tabular text-cyan-300">Plan 02 · Unlocked Free @ 100+ HQ ELO</div>
              <h3 className="font-display text-xl font-bold text-white">Plus</h3>
              <div className="font-mono-tabular text-2xl font-bold text-cyan-300">
                $2.99<span className="text-xs text-slate-400 font-normal">/mo · 7-Day Trial</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>
                  · <span className="text-white font-semibold">40</span> monthly queries on Arithmo Personal AI: General
                  (1x)
                </li>
                <li>
                  · <span className="text-white font-semibold">5</span> daily 1v1 Bullet Blitz challenges
                </li>
                <li>
                  · 100% Ad-Free UI &amp; <span className="text-white font-semibold">10</span> monthly Virtual Gym
                  simulations
                </li>
                <li>
                  · <span className="text-white font-semibold">200</span>-problem bookmark vault
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-3 border-violet-400/40">
              <div className="text-xs font-mono-tabular text-violet-300">Plan 03 · Unlocked Free @ 300+ HQ ELO</div>
              <h3 className="font-display text-xl font-bold text-white">Pro</h3>
              <div className="font-mono-tabular text-2xl font-bold text-violet-300">
                $5.99<span className="text-xs text-slate-400 font-normal">/mo · 7-Day Trial</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>
                  · <span className="text-white font-semibold">150</span> monthly AI queries (
                  <span className="text-white font-semibold">30</span> Premium 2x Deep Analysis +{' '}
                  <span className="text-white font-semibold">120</span> General 1x via in-chat selector)
                </li>
                <li>
                  · <span className="text-white font-semibold">20</span> daily 1v1 matches + Direct{' '}
                  <span className="font-mono-tabular text-cyan-300">@handle</span> Friend Challenges
                </li>
                <li>· Unlimited Virtual Gym + Private Rooms (max 10 members)</li>
                <li>· V10.3 Smart Mistake Deck</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-3 border-amber-400/45">
              <div className="text-xs font-mono-tabular text-amber-300">
                Plan 04 · Unlocked Free @ 750+ HQ ELO &amp; Academy Supreme/Enterprise
              </div>
              <h3 className="font-display text-xl font-bold text-white">Singularity</h3>
              <div className="font-mono-tabular text-2xl font-bold text-amber-300">
                $12.99<span className="text-xs text-slate-400 font-normal">/mo · 7-Day Trial</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>
                  · <span className="text-white font-semibold">100% UNLIMITED</span> Arithmo Personal AI: Premium (2x
                  Hybrid Gemini Pro/Flash + Qwen-Math + SymPy)
                </li>
                <li>· Unlimited 1v1 Duels &amp; Private Group Rooms</li>
                <li>· Arithmo Forge contest hosting (1500+ ELO + 6 clean matches)</li>
                <li>· Priority Forensic Appeal Desk</li>
              </ul>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: 8 Pay-As-You-Go Token Packs Storefront */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              03 · Zero Expiration on Token Packs · @handle Friend Gifting Enabled
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">8-Pack Pay-As-You-Go Token Store</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-cyan-300">Pack 01</div>
              <div className="font-display font-bold text-white">AI General Starter Pack</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$0.99 · 20 Tokens</div>
              <p className="text-xs text-slate-400">
                20 permanent no-deadline tokens for Arithmo Personal AI: General (1x).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-cyan-300">Pack 02</div>
              <div className="font-display font-bold text-white">AI Premium 2x Deep Pack</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$2.99 · 30 Tokens</div>
              <p className="text-xs text-slate-400">
                30 permanent no-deadline tokens for Arithmo Personal AI: Premium (2x) (Hybrid Models &amp; High Queue
                Priority).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-violet-300">Pack 03</div>
              <div className="font-display font-bold text-white">24-Hour AI Grandmaster Sprint</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$3.99 · 24 Hours</div>
              <p className="text-xs text-slate-400">
                24 hours of UNLIMITED access to BOTH General (1x) and Premium (2x) models.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-violet-300">Pack 04</div>
              <div className="font-display font-bold text-white">Duelist 5-Pack</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$0.99 · 5 Tokens</div>
              <p className="text-xs text-slate-400">
                5 permanent no-deadline tokens for 1v1 Bullet Blitz &amp; Direct Friend Challenges (@handle/Link).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-amber-300">Pack 05</div>
              <div className="font-display font-bold text-white">24-Hour Unlimited Arena &amp; Room Pass</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$1.99 · 24 Hours</div>
              <p className="text-xs text-slate-400">
                24 hours of UNLIMITED 1v1 duels + Private Virtual Gym Rooms (max 10 members).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-amber-300">Pack 06</div>
              <div className="font-display font-bold text-white">Forge Contest Host Token</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$2.49 · 1 Host Pass</div>
              <p className="text-xs text-slate-400">
                One-time pass to host 1 custom contest on Subsite #10 (Arithmo Forge) (1500+ ELO required).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-emerald-300">Pack 07</div>
              <div className="font-display font-bold text-white">Deep Contest Post-Mortem &amp; Mistake Deck</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$0.99 · Full Report</div>
              <p className="text-xs text-slate-400">
                Complete solve-time heatmap, weak-tag report &amp; 50-card spaced-repetition flashcard deck for any
                completed contest.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-5 space-y-1.5">
              <div className="text-xs font-mono-tabular text-rose-300">Pack 08</div>
              <div className="font-display font-bold text-white">Arithmo Wallet Credit Top-Up Bundles</div>
              <div className="text-lg font-mono-tabular text-emerald-300">$5 / $10 / $25 / $50</div>
              <p className="text-xs text-slate-400">
                Instant +10% free bonus credit usable for packs, friend @handle gifting, and monthly academy member
                dues.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: Closed-Loop Arithmo Wallet (+10% Bonus Simulator) */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">
              04 · Closed-Loop Credits + Contribution Rewards
            </div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Arithmo Wallet (+10% Top-Up Bonus Simulator)
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                  Preload <span className="text-white font-semibold">Arithmo Credits</span> ($5–$50) with an automatic{' '}
                  <span className="text-emerald-400 font-semibold">+10% Top-Up Bonus</span>. Earn automatic free wallet
                  credit rewards at <span className="font-mono-tabular text-cyan-300">+50</span>,{' '}
                  <span className="font-mono-tabular text-cyan-300">+100</span>,{' '}
                  <span className="font-mono-tabular text-cyan-300">+250</span>, and{' '}
                  <span className="font-mono-tabular text-cyan-300">+500 Contribution ELO</span> milestones via approved
                  Forge problemsetting, Blog-to-Lab promotions, and community Guidebooks. Closed-loop rules strictly
                  prohibit external cash-out.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {TOPUP_OPTIONS.map((amount) => {
                    const isActive = selectedTopup === amount;
                    return (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedTopup(amount)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-mono-tabular transition-colors whitespace-nowrap ${
                          isActive
                            ? 'border-cyan-400 bg-cyan-400/15 text-white font-semibold'
                            : 'border-slate-700 bg-slate-950/70 text-slate-300 hover:border-slate-500 hover:text-white'
                        }`}
                      >
                        ${amount} Top-Up
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/75 p-4 text-center">
                  <div className="text-xs text-slate-400">Cash Deposit</div>
                  <div className="font-mono-tabular text-xl font-bold text-white mt-1">
                    ${selectedTopup.toFixed(2)}
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-400/35 bg-emerald-400/10 p-4 text-center">
                  <div className="text-xs text-emerald-300">+10% Wallet Bonus</div>
                  <div className="font-mono-tabular text-xl font-bold text-emerald-300 mt-1">
                    +${bonus.toFixed(2)} (+10% Bonus)
                  </div>
                </div>
                <div className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4 text-center">
                  <div className="text-xs text-cyan-300">Final Balance</div>
                  <div className="font-mono-tabular text-lg font-bold text-white mt-1">
                    ${totalCredits.toFixed(2)} Arithmo Credits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Institutional vs. Personal Value Comparison */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">05 · Personal vs. School Scaling</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Institutional vs. Personal Value Comparison
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-deep-grid grid md:grid-cols-2 gap-6">
            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Personal Contenders</div>
              <h3 className="font-display text-xl font-bold text-white">Individual Growth &amp; Self-Study</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Includes Free-forever rated arenas across all 5 topics, optional AI token packs ($0.99+), and
                automatic free subscription upgrades unlocked purely through Headquarters stewardship (100+ to 1000+ HQ
                ELO).
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 sm:p-8 space-y-3 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">Schools &amp; Academies</div>
              <h3 className="font-display text-xl font-bold text-white">
                Cohort Analytics &amp; Inter-Academy Clashes
              </h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Starts at $29.99/mo with $0.99/member dues, waiving up to 10 Admin seats, adding Guild AI Batch Radar,
                Virtual Edu Labs, and official Inter-Academy Clash tickets (included free on Supreme &amp; Enterprise).
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: Transparent Billing Terms & Guardian Custodianship */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono-tabular text-cyan-300">
                06 · Ethical Youth-First Billing &amp; MoR Tax Compliance
              </div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Transparent Billing &amp; Guardian Custodianship
              </h2>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Strict <span className="text-white font-semibold">1-month minimum billing cycle</span> and{' '}
                <span className="text-white font-semibold">Zero-Refund Policy</span> once compute tokens or billing
                cycles are provisioned. All global transactions, VAT/GST, and tax compliance run through our{' '}
                <span className="text-white font-semibold">Merchant of Record (Lemon Squeezy / Paddle)</span>. Credits
                remain <span className="text-white font-semibold">Closed-Loop Non-Cash Credits (No Cash-Out)</span>,
                and all commercial proceeds operate under verified{' '}
                <span className="text-white font-semibold">Parent/Guardian Financial Custodianship</span> until the
                Founder &amp; Chief System Architect reaches statutory adulthood.
              </p>
            </div>
            <a href="pioneers.html" className="btn-cyber px-5 py-3 text-sm whitespace-nowrap">
              Read Governance &amp; Equity Charter
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
