import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const loadingStages = [
  'Calibrating the interface',
  'Loading selected work',
  'Almost ready',
];

const MotionMain = motion.main;
const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionButton = motion.button;

const Loader = ({ onFinish }) => {
  const [percentage, setPercentage] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 45 });
  const animationFrame = useRef(null);
  const finishTimeout = useRef(null);
  const hasFinished = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const finishLoading = useCallback(() => {
    if (hasFinished.current) return;
    hasFinished.current = true;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    setPercentage(100);
    setIsFinishing(true);
    finishTimeout.current = setTimeout(onFinish, prefersReducedMotion ? 0 : 520);
  }, [onFinish, prefersReducedMotion]);

  useEffect(() => {
    const duration = prefersReducedMotion ? 250 : 1900;
    let startTime;

    const updateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const nextPercentage = Math.min(100, Math.round((elapsed / duration) * 100));

      setPercentage(nextPercentage);

      if (nextPercentage < 100) {
        animationFrame.current = requestAnimationFrame(updateProgress);
      } else {
        finishLoading();
      }
    };

    animationFrame.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (finishTimeout.current) clearTimeout(finishTimeout.current);
    };
  }, [finishLoading, prefersReducedMotion]);

  const handlePointerMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const bounds = currentTarget.getBoundingClientRect();

    setPointer({
      x: ((clientX - bounds.left) / bounds.width) * 100,
      y: ((clientY - bounds.top) / bounds.height) * 100,
    });
  };

  const stage = loadingStages[Math.min(loadingStages.length - 1, Math.floor(percentage / 34))];

  return (
    <MotionMain
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0c16] px-6 text-white"
      onPointerMove={handlePointerMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: isFinishing ? 0 : 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeInOut' }}
      aria-label="Loading portfolio"
    >
      <div className="loader-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(168, 85, 247, 0.19), transparent 28%)`,
        }}
        aria-hidden="true"
      />
      <MotionDiv
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, 110, 0], y: [0, -45, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <MotionDiv
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-pink-500/15 blur-3xl"
        animate={prefersReducedMotion ? undefined : { x: [0, -80, 0], y: [0, -55, 0], scale: [1, 1.16, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        aria-hidden="true"
      />

      <section className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <MotionDiv
          className="relative mb-8 flex h-28 w-28 items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <MotionSpan
            className="absolute inset-0 rounded-full border border-purple-400/40"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <MotionSpan
            className="absolute inset-3 rounded-full border border-dashed border-pink-300/70"
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
          <div className="loader-monogram flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white shadow-2xl shadow-purple-500/30 backdrop-blur-sm">
            AY
          </div>
        </MotionDiv>

        <p className="mb-2 text-xs font-medium uppercase tracking-[0.32em] text-purple-200">
          Arun Yadav
        </p>
        <div className="mb-3 h-16 overflow-hidden">
          <MotionSpan
            key={stage}
            className="block text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          >
            {stage}
          </MotionSpan>
        </div>

        <div className="mb-3 flex w-full items-end justify-between text-sm text-slate-300">
          <span aria-live="polite">{isFinishing ? 'Welcome in' : 'Please wait a moment'}</span>
          <span className="tabular-nums text-base font-semibold text-white">{percentage}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/10 p-[2px]" aria-hidden="true">
          <MotionDiv
            className="h-full rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400"
            initial={{ width: '0%' }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          />
        </div>

        <MotionButton
          type="button"
          onClick={finishLoading}
          className="mt-8 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-slate-300 transition-colors hover:border-purple-300/60 hover:bg-purple-400/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
          whileHover={prefersReducedMotion ? undefined : { y: -2 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          aria-label="Skip loading animation"
        >
          Skip intro <span aria-hidden="true">&rarr;</span>
        </MotionButton>
      </section>
    </MotionMain>
  );
};

export default Loader;
