import React, {useRef, useState} from 'react';
import {motion, MotionConfig} from 'motion/react';

export const MotionProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export const HeroReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({children, delay = 0, className = ''}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 18}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.48, delay, ease: [0.22, 1, 0.36, 1]}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({children, delay = 0, className = ''}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.12}}
      transition={{duration: 0.45, delay, ease: [0.22, 1, 0.36, 1]}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  asAnchorHref?: string;
}> = ({children, className = '', asAnchorHref}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  if (asAnchorHref) {
    return (
      <motion.a
        href={asAnchorHref}
        onMouseMove={handleMouseMove}
        whileHover={{y: -2}}
        transition={{duration: 0.18, ease: 'easeOut'}}
        className={`spotlight-card block ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const ResilientImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  accentColor?: string;
}> = ({src, alt, className = '', loading = 'lazy', accentColor = '#00F0FF'}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-slate-950 ${className}`}
        style={{
          backgroundImage: `radial-gradient(circle at 35% 35%, ${accentColor}26, transparent 65%), linear-gradient(135deg, #060913 0%, #0d152b 100%)`,
        }}
      >
        <div className="px-4 text-center">
          <div className="font-mono-tabular text-xs text-cyan-300">Arithmo-Edge Visual Module</div>
          <div className="mt-1 text-xs text-slate-400">{alt}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={loading === 'eager' ? 'high' : undefined}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
