import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Menu, X} from 'lucide-react';
import {NAV_ROUTES, PageId, TARGET_MIDNIGHT_MS} from '../data/ecosystem';
import {MotionProvider} from './MotionPrimitives';

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, TARGET_MIDNIGHT_MS - Date.now());
    return {
      days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
      hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    };
  });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, TARGET_MIDNIGHT_MS - Date.now());
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return timeLeft;
}

export const SiteShell: React.FC<{
  pageId: PageId;
  children: React.ReactNode;
}> = ({pageId, children}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerPanelRef = useRef<HTMLElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const countdown = useCountdown();

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  // Body scroll lock while drawer overlay is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Rock-solid single-tap/click outside-drawer dismissal + Escape listener
  useEffect(() => {
    if (!drawerOpen) return;

    const handleOutsideEvent = (event: Event) => {
      const target = event.target as Node | null;
      if (!target) return;
      const panelEl = drawerPanelRef.current;
      const toggleEl = toggleBtnRef.current;
      if (panelEl && panelEl.contains(target)) return;
      if (toggleEl && toggleEl.contains(target)) return;
      setDrawerOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideEvent, true);
    document.addEventListener('touchstart', handleOutsideEvent, {capture: true, passive: true});
    document.addEventListener('click', handleOutsideEvent, true);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleOutsideEvent, true);
      document.removeEventListener('touchstart', handleOutsideEvent, true);
      document.removeEventListener('click', handleOutsideEvent, true);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col">
        {/* Shared Fixed Glassmorphism Navbar */}
        <header className="fixed top-0 left-0 right-0 w-full z-[1000] glass-nav">
          <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <a href="index.html" className="nav-brand-link whitespace-nowrap shrink-0">
                <img src="favicon.jpg" alt="Arithmo Edge Logo" className="nav-brand-logo" />
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight brand-gradient">
                  Arithmo Edge
                </span>
              </a>
              <p className="hidden xl:block truncate max-w-xl text-xs text-slate-400 border-l border-slate-800 pl-4">
                The World&apos;s First Real-Time ELO-Rated Competitive Mathematics &amp; Olympiad Mega-Ecosystem
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://github.com/Arithmo-Edge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arithmo-Edge GitHub Organization"
                className="btn-glass px-3.5 py-2 text-xs sm:text-sm whitespace-nowrap shrink-0"
              >
                <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <button
                ref={toggleBtnRef}
                id="nav-drawer-toggle"
                type="button"
                onClick={toggleDrawer}
                aria-label={drawerOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={drawerOpen}
                aria-controls="nav-drawer-panel"
                className="btn-glass w-11 h-11 p-0 flex items-center justify-center text-slate-100 shrink-0"
              >
                {drawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Right-Side Slide-In Overlay Navigation Drawer (01-12) */}
        <AnimatePresence>
          {drawerOpen && (
            <>
              <motion.div
                id="nav-drawer-backdrop"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                onClick={closeDrawer}
                className="fixed inset-0 z-[1050] bg-slate-950/75 backdrop-blur-md"
              />
              <motion.aside
                ref={drawerPanelRef}
                id="nav-drawer-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Ecosystem Page Navigation"
                initial={{x: '100%'}}
                animate={{x: 0}}
                exit={{x: '100%'}}
                transition={{type: 'spring', stiffness: 360, damping: 36}}
                className="fixed top-0 right-0 z-[1060] h-full w-full max-w-md glass-drawer flex flex-col justify-between p-6 overflow-y-auto"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div>
                      <span className="font-display text-lg font-bold brand-gradient">Arithmo Edge</span>
                      <p className="text-xs text-slate-400">Powered by Olympiad Edge · 12-Page Showcase</p>
                    </div>
                    <button
                      id="nav-drawer-close"
                      type="button"
                      onClick={closeDrawer}
                      aria-label="Close Navigation Menu"
                      className="btn-glass w-11 h-11 p-0 flex items-center justify-center"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 p-3.5 rounded-xl border border-cyan-400/25 bg-slate-900/75">
                    <div className="flex items-center justify-between text-xs text-cyan-300 mb-2">
                      <span className="font-medium">Global Launch Target</span>
                      <span className="font-mono-tabular text-slate-400">Dec 31, 2026 · 12:00 AM</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="rounded-lg bg-slate-950/80 border border-slate-800 py-1.5">
                        <div className="font-mono-tabular text-base font-bold text-white">{countdown.days}</div>
                        <div className="text-[10px] text-slate-400">Days</div>
                      </div>
                      <div className="rounded-lg bg-slate-950/80 border border-slate-800 py-1.5">
                        <div className="font-mono-tabular text-base font-bold text-white">{countdown.hours}</div>
                        <div className="text-[10px] text-slate-400">Hours</div>
                      </div>
                      <div className="rounded-lg bg-slate-950/80 border border-slate-800 py-1.5">
                        <div className="font-mono-tabular text-base font-bold text-white">{countdown.minutes}</div>
                        <div className="text-[10px] text-slate-400">Mins</div>
                      </div>
                      <div className="rounded-lg bg-slate-950/80 border border-slate-800 py-1.5">
                        <div className="font-mono-tabular text-base font-bold text-cyan-400">{countdown.seconds}</div>
                        <div className="text-[10px] text-slate-400">Secs</div>
                      </div>
                    </div>
                  </div>

                  <nav className="mt-5 grid gap-1.5">
                    {NAV_ROUTES.map((route, idx) => {
                      const active = route.href === pageId;
                      return (
                        <motion.a
                          key={route.href}
                          href={route.href}
                          onClick={closeDrawer}
                          initial={{opacity: 0, x: 16}}
                          animate={{opacity: 1, x: 0}}
                          transition={{duration: 0.22, delay: idx * 0.018}}
                          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border text-sm transition-colors ${
                            active
                              ? 'border-cyan-400/50 bg-cyan-400/10 text-white font-medium'
                              : 'border-transparent hover:border-slate-700 hover:bg-slate-900/70 text-slate-300'
                          }`}
                        >
                          <span className="font-mono-tabular text-xs text-cyan-400">{route.num}</span>
                          <span>{route.label}</span>
                        </motion.a>
                      );
                    })}
                  </nav>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Powered by Olympiad Edge</span>
                  <a
                    href="https://github.com/Arithmo-Edge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/Arithmo-Edge
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Exact Shared Footer */}
        <footer className="border-t border-slate-800/80 bg-[#050811]/95 backdrop-blur-xl">
          <div className="ae-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-12 gap-8 pb-10">
              <div className="md:col-span-4 space-y-3">
                <div className="font-display text-xl font-bold brand-gradient">Arithmo Edge</div>
                <p className="text-sm text-slate-400 leading-relaxed ae-prose">
                  The World&apos;s First Real-Time ELO-Rated Competitive Mathematics &amp; Olympiad Mega-Ecosystem,
                  Powered by Olympiad Edge.
                </p>
                <div className="text-xs text-slate-400 space-y-1 pt-2">
                  <div>
                    GitHub:{' '}
                    <a
                      href="https://github.com/Arithmo-Edge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      https://github.com/Arithmo-Edge
                    </a>
                  </div>
                  <div>
                    Official Email:{' '}
                    <a href="mailto:rayaantasnim@gmail.com" className="text-cyan-400 hover:underline">
                      rayaantasnim@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  12-Page Showcase Matrix
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-400">
                  {NAV_ROUTES.map((route) => (
                    <a
                      key={route.href}
                      href={route.href}
                      className={route.href === pageId ? 'text-cyan-300 font-medium' : 'hover:text-cyan-300'}
                    >
                      {route.shortLabel}
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  Connect &amp; Community
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass px-3 py-2.5 text-xs justify-center"
                  >
                    GitHub
                  </a>
                  <a href="mailto:rayaantasnim@gmail.com" className="btn-glass px-3 py-2.5 text-xs justify-center">
                    Email
                  </a>
                  <a
                    href="https://www.youtube.com/@jaleeshabib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass px-3 py-2.5 text-xs justify-center"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.chess.com/member/jaiees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass px-3 py-2.5 text-xs justify-center"
                  >
                    Chess.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed space-y-1">
              <hr className="border-slate-800/80 mb-4" />
              <div className="text-center leading-relaxed">
                Authorized by Rayaan Tasnim <br />
                © All Rights Reserved <br />
                © Arithmo-Edge <br />
                Powered by Olympiad Edge
              </div>
            </div>
          </div>
        </footer>
      </div>
    </MotionProvider>
  );
};
