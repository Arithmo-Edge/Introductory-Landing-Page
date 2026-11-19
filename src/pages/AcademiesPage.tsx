import React, {useState} from 'react';
import {MEDIA} from '../assets/media';
import {HeroReveal, ResilientImage, ScrollReveal, SpotlightCard} from '../components/MotionPrimitives';
import {WebGLHeroCanvas} from '../components/WebGLHeroCanvas';

type AcademyTierKey = 'general' | 'premium' | 'supreme' | 'enterprise';

interface AcademyTierConfig {
  label: string;
  base: number;
  firstMonth?: number;
  max: number;
  due: number;
  admins: string;
  tokens: number;
  perks: string;
}

const ACADEMY_TIERS: Record<AcademyTierKey, AcademyTierConfig> = {
  general: {
    label: 'Academy General ($29.99/mo · Max 100 · $0.99/member)',
    base: 29.99,
    max: 100,
    due: 0.99,
    admins: '1–5 Admins',
    tokens: 20,
    perks: 'Standard Institutional Dashboard · Inter-Academy Clash & Edu Lab Paid Add-ons',
  },
  premium: {
    label: 'Academy Premium ($49.99/mo · Max 500 · $2.99/member)',
    base: 49.99,
    max: 500,
    due: 2.99,
    admins: '1–5 Admins',
    tokens: 80,
    perks: 'Batch Radar Included · Inter-Academy Clash ($4.99) & Virtual Edu Lab ($2.99/24h)',
  },
  supreme: {
    label: 'Academy Supreme ($79.99/mo · Max 1,000 · $6.99/member)',
    base: 79.99,
    max: 1000,
    due: 6.99,
    admins: '1–5 Admins',
    tokens: 200,
    perks: 'ALL Institutional Add-ons FREE (Clash, Guidebook $14.99/mo, Edu Lab, On-Demand Contests)',
  },
  enterprise: {
    label: 'Academy Enterprise ($149.99 1st mo / $79.99/mo · Unlimited)',
    base: 79.99,
    firstMonth: 149.99,
    max: 2000,
    due: 5.99,
    admins: '1–10 Admins',
    tokens: 200,
    perks:
      'Unlimited Roster Scaling · $5.99/member (<1,000) / $7.99/member (>1,000) · +15 Guild AI Tokens per 50 extra members · All Supreme Perks Free',
  },
};

export const AcademiesPage: React.FC = () => {
  const [tierKey, setTierKey] = useState<AcademyTierKey>('general');
  const [rawMembers, setRawMembers] = useState<number>(100);

  const tier = ACADEMY_TIERS[tierKey];
  const members = tierKey === 'enterprise' ? rawMembers : Math.min(rawMembers, tier.max);
  const sliderMax = tierKey === 'enterprise' ? 2000 : tier.max;

  let memberFeeSum = 0;
  let tokens = tier.tokens;
  if (tierKey === 'enterprise') {
    const under1000 = Math.min(members, 1000);
    const over1000 = Math.max(0, members - 1000);
    memberFeeSum = under1000 * 5.99 + over1000 * 7.99;
    tokens = 200 + Math.floor(over1000 / 50) * 15;
  } else {
    memberFeeSum = members * tier.due;
  }

  const monthlyTotal = tier.base + memberFeeSum;
  const baseDisplay = tierKey === 'enterprise' ? '$149.99 1st mo / $79.99 base' : `$${tier.base.toFixed(2)}/mo`;
  const dueDisplay = tierKey === 'enterprise' ? '$5.99 (<1k) / $7.99 (>1k)' : `$${tier.due.toFixed(2)}/member`;

  const handleTierChange = (nextKey: AcademyTierKey) => {
    setTierKey(nextKey);
    const nextTier = ACADEMY_TIERS[nextKey];
    if (nextKey !== 'enterprise' && rawMembers > nextTier.max) {
      setRawMembers(nextTier.max);
    }
  };

  return (
    <>
      {/* Section 1: B2B Institutional Olympiad Vision */}
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
                  01 · arithmo-edge.github.io/academy/ · B2B School &amp; Club Workspace
                </div>
              </HeroReveal>
              <HeroReveal delay={0.08}>
                <h1 className="hero-title-fluid font-display font-bold text-white">Arithmo Academy Arena</h1>
              </HeroReveal>
              <HeroReveal delay={0.14}>
                <p className="ae-prose text-base sm:text-lg text-slate-300 leading-relaxed prose-measure">
                  Built for Olympiad training centers, high schools, university math guilds, and national coaching
                  programs. Manage rosters from 100 to 2,000+ students, waive 1–10 Admin seat dues, deploy custom
                  Syllabus &amp; Batch Radar AI, and battle rival institutions in rated{' '}
                  <span className="text-white font-semibold">Inter-Academy Clashes</span>.
                </p>
              </HeroReveal>
            </div>
            <div className="lg:col-span-5">
              <HeroReveal delay={0.18} className="h-full">
                <div className="h-full min-h-[280px] rounded-2xl border border-slate-800 overflow-hidden relative media-frame">
                  <ResilientImage
                    src={MEDIA.academyArchive}
                    alt="Institutional mathematics academy collaboration"
                    loading="eager"
                    accentColor="#00F0FF"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/45 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="text-xs font-mono-tabular text-cyan-300 mb-1">Dual-Context Institutional SaaS</div>
                    <div className="font-display text-lg font-bold text-white">
                      KYB-Verified Schools · 6 Dedicated Guild AI Engines
                    </div>
                  </div>
                </div>
              </HeroReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Academy Roster & Guild AI Calculator */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">02 · Real-Time Institutional Estimator</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              Interactive Roster &amp; Guild AI Calculator
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <label htmlFor="acad-tier-select" className="block text-xs font-mono-tabular text-slate-400 mb-2">
                    Select Academy Tier
                  </label>
                  <select
                    id="acad-tier-select"
                    value={tierKey}
                    onChange={(e) => handleTierChange(e.target.value as AcademyTierKey)}
                    className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {(Object.keys(ACADEMY_TIERS) as AcademyTierKey[]).map((key) => (
                      <option key={key} value={key}>
                        {ACADEMY_TIERS[key].label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <label htmlFor="acad-members-slider" className="text-slate-400">
                      Active Roster Size
                    </label>
                    <span className="font-mono-tabular text-cyan-300 font-semibold">
                      {members.toLocaleString()} Members
                    </span>
                  </div>
                  <input
                    id="acad-members-slider"
                    type="range"
                    min={10}
                    max={sliderMax}
                    value={members}
                    step={10}
                    onChange={(e) => setRawMembers(Number(e.target.value))}
                    className="cyber-range w-full"
                  />
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-300 space-y-1">
                  <div className="text-cyan-300 font-semibold">Included Roles:</div>
                  <div>{tier.admins} (Fee Waived) · 1–15 Mentors</div>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/75 p-5">
                  <div className="text-xs text-slate-400">Base Subscription</div>
                  <div className="font-mono-tabular text-xl font-bold text-white mt-1">{baseDisplay}</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/75 p-5">
                  <div className="text-xs text-slate-400">Per-Member Monthly Due</div>
                  <div className="font-mono-tabular text-xl font-bold text-white mt-1">{dueDisplay}</div>
                </div>
                <div className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-5">
                  <div className="text-xs text-cyan-300">Projected Monthly Total</div>
                  <div className="font-mono-tabular text-2xl font-bold text-white mt-1">
                    ${monthlyTotal.toFixed(2)}/mo
                  </div>
                </div>
                <div className="rounded-xl border border-violet-400/40 bg-violet-400/10 p-5">
                  <div className="text-xs text-violet-300">Monthly Guild AI Allowance</div>
                  <div className="font-mono-tabular text-xl font-bold text-white mt-1">
                    {tokens} Guild AI Messages/mo
                  </div>
                </div>
                <div className="sm:col-span-2 rounded-xl border border-slate-800 bg-slate-950/75 p-4 text-xs text-slate-300">
                  <span className="text-cyan-300 font-semibold">Included Suite &amp; Add-ons:</span>{' '}
                  <span>{tier.perks}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 3: All 4 Academy Tiers & Member Dues Comparison Matrix */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">03 · Institutional Tier Breakdown</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              All 4 Academy Tiers &amp; Member Dues
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotlightCard className="rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono-tabular text-slate-400">Tier 01 · Starter Club</div>
              <h3 className="font-display text-xl font-bold text-white">Academy General</h3>
              <div className="font-mono-tabular text-2xl font-bold text-cyan-300">
                $29.99<span className="text-xs text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>· Max 100 Members ($0.99/member due)</li>
                <li>· 1–5 Admins (100% Fee Waived)</li>
                <li>· 1–15 Mentors</li>
                <li>· 20 Guild AI Messages/mo</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-3 border-violet-400/35">
              <div className="text-xs font-mono-tabular text-violet-300">Tier 02 · Growing School</div>
              <h3 className="font-display text-xl font-bold text-white">Academy Premium</h3>
              <div className="font-mono-tabular text-2xl font-bold text-violet-300">
                $49.99<span className="text-xs text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>· Max 500 Members ($2.99/member due)</li>
                <li>· 1–5 Admins + 1–15 Mentors</li>
                <li>· 80 Guild AI Messages/mo</li>
                <li>· Batch Radar Diagnostics Unlocked</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-3 border-cyan-400/45">
              <div className="text-xs font-mono-tabular text-cyan-300">Tier 03 · All-Inclusive</div>
              <h3 className="font-display text-xl font-bold text-white">Academy Supreme</h3>
              <div className="font-mono-tabular text-2xl font-bold text-cyan-300">
                $79.99<span className="text-xs text-slate-400 font-normal">/mo</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                <li>· Max 1,000 Members ($6.99/member due)</li>
                <li>· 200 Guild AI Messages/mo</li>
                <li>
                  · <span className="text-emerald-300 font-semibold">ALL Paid Institutional Add-ons FREE</span>
                </li>
                <li>· Free Clash, Edu Lab, Guidebook &amp; Contests</li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-3 border-amber-400/45">
              <div className="text-xs font-mono-tabular text-amber-300">Tier 04 · National / University</div>
              <h3 className="font-display text-xl font-bold text-white">Academy Enterprise</h3>
              <div className="font-mono-tabular text-xl font-bold text-amber-300">
                $149.99 <span className="text-xs text-slate-400 font-normal">1st mo</span>
              </div>
              <div className="text-xs font-mono-tabular text-slate-300">Then $79.99/mo Base</div>
              <ul className="text-xs text-slate-300 space-y-1.5 pt-1">
                <li>· Unlimited Members ($5.99 &lt;1,000 / $7.99 &gt;1,000)</li>
                <li>· 1–10 Admins (Waived) + 1–15 Mentors</li>
                <li>· +15 Guild AI Tokens per 50 extra members</li>
                <li>· All Supreme Institutional Add-ons FREE</li>
              </ul>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 4: 3-Role Academy Hierarchy & Centralized Task Tab */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">04 · Governance &amp; Classroom Operations</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              3-Role Hierarchy &amp; Centralized Task Tab
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="ae-bento-grid-3 grid md:grid-cols-3 gap-6">
            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-cyan-400/30">
              <div className="text-xs font-mono-tabular text-cyan-300">Role 01 · Admins (1–5 or 1–10)</div>
              <h3 className="font-display text-lg font-bold text-white">Seat-Waived Governors</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All 1–5 Admins (1–10 on Enterprise) have monthly seat dues waived. They manage KYB status, Guild AI
                budgets, Inter-Academy Clashes, and Mentor permissions.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">Role 02 · Mentors (1–15)</div>
              <h3 className="font-display text-lg font-bold text-white">Instructors &amp; Problem Curators</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Assign practice sets inside the Centralized Task Tab, inspect Batch Radar cohort bottlenecks, and run
                Edu Lab proof walkthroughs.
              </p>
            </SpotlightCard>

            <SpotlightCard className="rounded-2xl p-6 space-y-2 border-emerald-400/30">
              <div className="text-xs font-mono-tabular text-emerald-300">Role 03 · Enrolled Members</div>
              <h3 className="font-display text-lg font-bold text-white">Synchronized Student Contenders</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Compete simultaneously under institutional tasks in the Task Tab and climb individual global arena ELO
                ratings.
              </p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 5: Dual-Handle Context Routing & KYB Onboarding */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono-tabular text-cyan-300">05 · Clean Context Separation</div>
              <h2 className="section-title-fluid font-display font-bold text-white">
                Dual-Handle Context Routing &amp; Pop-Up KYB
              </h2>
              <p className="ae-prose text-sm sm:text-base text-slate-300 leading-relaxed">
                A student studying under Dhaka Math Club carries both their personal handle (
                <span className="font-mono-tabular text-cyan-300">@username</span>) and an isolated academy workspace key
                (<span className="font-mono-tabular text-violet-300">@username-academyname</span>). Academy tasks and
                mock scores never pollute global ELO ledgers unless competing in an official rated Inter-Academy Clash.
                New academies complete instant <span className="text-white font-semibold">Pop-Up KYB verification</span>{' '}
                with manual document checks.
              </p>
            </div>
            <div className="lg:col-span-6 glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <span className="font-mono-tabular text-xs text-cyan-300">@student</span>
                <span className="text-xs text-slate-400">
                  Personal Global ELO Profile · Arithmo Wallet · Individual Rounds
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <span className="font-mono-tabular text-xs text-violet-300">@student-dhakamath</span>
                <span className="text-xs text-slate-400">Academy Context · Task Tab · Edu Lab · Clash Squad</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 6: 5-Layer Institutional Anti-Reselling Shield */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <ScrollReveal>
          <div className="mb-8">
            <div className="text-xs font-mono-tabular text-cyan-300 mb-2">06 · SaaS Seat Integrity</div>
            <h2 className="section-title-fluid font-display font-bold text-white">
              5-Layer Institutional Anti-Reselling Shield
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <SpotlightCard className="rounded-2xl p-4 space-y-1.5">
              <div className="text-cyan-300 font-semibold">01 · KYB Entity Bind</div>
              <p className="text-slate-400">
                Seats bind strictly to verified school/academy domains and registration IDs.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-4 space-y-1.5">
              <div className="text-violet-300 font-semibold">02 · Member Churn Throttle</div>
              <p className="text-slate-400">Blocks rapid swap/resell rotation of enrolled student handles mid-month.</p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-4 space-y-1.5">
              <div className="text-emerald-300 font-semibold">03 · Geo-IP Coherence</div>
              <p className="text-slate-400">
                Flags disparate commercial resale subnets masquerading as one local campus.
              </p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-4 space-y-1.5">
              <div className="text-amber-300 font-semibold">04 · Guild Token Watermark</div>
              <p className="text-slate-400">Audits anomalous 24/7 API bot harvesting against Guild AI quotas.</p>
            </SpotlightCard>
            <SpotlightCard className="rounded-2xl p-4 space-y-1.5">
              <div className="text-rose-300 font-semibold">05 · Contractual Revocation</div>
              <p className="text-slate-400">Immediate suspension of third-party gray-market seat brokers.</p>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Section 7: Paid Add-Ons (Free on Supreme/Enterprise) & Dual Standings */}
      <section className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="ae-deep-grid grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono-tabular text-cyan-300">
                07 · À-La-Carte Add-ons (Free on Supreme &amp; Enterprise)
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Institutional Add-On Modules</h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between gap-3 border-b border-slate-800 pb-2">
                  <span className="text-white">Inter-Academy Clash Ticket</span>
                  <span className="font-mono-tabular text-cyan-300 whitespace-nowrap">$4.99 / clash</span>
                </div>
                <div className="flex justify-between gap-3 border-b border-slate-800 pb-2">
                  <span className="text-white">Institutional Guidebook Publishing</span>
                  <span className="font-mono-tabular text-cyan-300 whitespace-nowrap">$14.99 / mo</span>
                </div>
                <div className="flex justify-between gap-3 border-b border-slate-800 pb-2">
                  <span className="text-white">Virtual Edu Lab (Collaborative Board)</span>
                  <span className="font-mono-tabular text-cyan-300 whitespace-nowrap">$2.99 / 24h</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-white">Supreme &amp; Enterprise Tiers</span>
                  <span className="font-mono-tabular text-emerald-400 font-semibold whitespace-nowrap">
                    ALL INCLUDED FREE
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border-violet-400/30">
              <div className="text-xs font-mono-tabular text-violet-300">arithmo-edge.github.io/standings/</div>
              <h3 className="font-display text-2xl font-bold text-white">Dual Academy Standings System</h3>
              <p className="ae-prose text-sm text-slate-300 leading-relaxed">
                Small elite Olympiad boutiques and giant urban schools compete fairly across two parallel institutional
                rankings:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-cyan-300 font-semibold text-sm">Academy Score</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Computed from the Top 50% Roster Average ELO—rewarding deep cohort-wide mastery.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="text-amber-300 font-semibold text-sm">Academy Prestige</div>
                  <p className="text-xs text-slate-400 mt-1">
                    Sum of Top 15 Members&apos; ELO + Inter-Academy Clash crowns—spotlighting peak Olympiad talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};
