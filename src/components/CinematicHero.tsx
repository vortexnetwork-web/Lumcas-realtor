import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CINEMATIC_VIDEO_URL, createWhatsAppLink, WHATSAPP_MESSAGES } from '../data/lumcasData';
import { ArrowDown, MessageSquare, ChevronRight, Compass } from 'lucide-react';

interface CinematicHeroProps {
  onExploreClick?: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Animation state refs for rAF loop
  const targetProgressRef = useRef(0);
  const currentVideoTimeRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Update target progress on scroll without expensive heavy tasks
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const raw = -rect.top / totalScrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      targetProgressRef.current = clamped;
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous smooth interpolation animation loop using requestAnimationFrame
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSeeking = false;

    const handleSeeked = () => {
      isSeeking = false;
    };

    video.addEventListener('seeked', handleSeeked);

    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = timestamp;

      if (!prefersReducedMotion && video && video.duration && !isNaN(video.duration)) {
        const targetTime = targetProgressRef.current * video.duration;

        // Formula: current += (target - current) * (1 - Math.exp(-dt * 8))
        const step = 1 - Math.exp(-dt * 8);
        currentVideoTimeRef.current += (targetTime - currentVideoTimeRef.current) * step;

        const diff = Math.abs(video.currentTime - currentVideoTimeRef.current);
        if (diff > 0.012 && !isSeeking && video.readyState >= 2) {
          try {
            isSeeking = true;
            video.currentTime = currentVideoTimeRef.current;
          } catch {
            isSeeking = false;
          }
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (video) {
        video.removeEventListener('seeked', handleSeeked);
      }
    };
  }, [videoLoaded, prefersReducedMotion]);

  const handleMetadataLoaded = useCallback(() => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      if (!isNaN(dur) && dur > 0) {
        setVideoDuration(dur);
        setVideoLoaded(true);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, []);

  // Jump to specific milestone on clicking the scrubber
  const handleScrubberJump = (progressRatio: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + progressRatio * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  // Compute reveal opacities based on scroll progress
  const phase1Opacity = scrollProgress < 0.32 ? 1 - scrollProgress * 2.6 : 0;
  const phase1TranslateY = scrollProgress * 40;

  const phase2Active = scrollProgress >= 0.32 && scrollProgress <= 0.72;
  const phase2Opacity =
    scrollProgress >= 0.32 && scrollProgress < 0.48
      ? (scrollProgress - 0.32) / 0.16
      : scrollProgress >= 0.48 && scrollProgress <= 0.72
      ? 1 - (scrollProgress - 0.48) / 0.24
      : 0;

  const phase3Active = scrollProgress >= 0.75;
  const phase3Opacity = Math.min(1, (scrollProgress - 0.75) / 0.15);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320vh] bg-white"
      id="hero-track"
      aria-label="Cinematic Real Estate Showcase"
    >
      {/* Sticky Full-Screen Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden select-none">
        {/* Cinematic Video Element */}
        <video
          ref={videoRef}
          src={CINEMATIC_VIDEO_URL}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleMetadataLoaded}
          className="absolute inset-0 w-screen h-screen object-cover pointer-events-none"
        />

        {/* Soft light scrims for flawless readability in light aesthetic */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/90 via-white/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

        {/* Brand Geographical Trust Pill */}
        <div className="absolute top-22 left-6 md:left-12 z-10 hidden sm:flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-neutral-800 font-mono bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-neutral-200/80 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#9333ea] animate-pulse" />
          <span className="font-semibold">Benin City · Edo State</span>
          <span className="text-neutral-300">|</span>
          <span className="tabular-nums text-neutral-600">6.3350° N, 5.6037° E</span>
        </div>

        {/* PHASE 1 OVERLAY: Curved Frosted Hero Card */}
        <div
          className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-22 px-6 md:px-12 max-w-7xl mx-auto pointer-events-none transition-all duration-300"
          style={{
            opacity: phase1Opacity,
            transform: `translateY(${phase1TranslateY}px)`,
            display: phase1Opacity <= 0.01 ? 'none' : 'flex',
          }}
        >
          <div className="max-w-2xl bg-white/92 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-3xl border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] space-y-6 pointer-events-auto">
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#9333ea] rounded-full" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#9333ea] font-bold">
                LUMCAS Realtor & Properties Ltd
              </p>
            </div>

            <h1
              className="font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-neutral-900 font-light"
              style={{ textWrap: 'balance' }}
            >
              Find a Place Worth Coming Home To.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed">
              LUMCAS Realtor & Properties Ltd connects people with thoughtfully selected real estate
              opportunities in Benin City and beyond.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#properties"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 hover:bg-[#9333ea] text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore Properties</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink(WHATSAPP_MESSAGES.consultation)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#9333ea] border-2 border-[#9333ea]/30 hover:border-[#9333ea] hover:bg-purple-50 font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] rounded-full transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#9333ea]" />
                <span>Talk to LUMCAS</span>
              </a>
            </div>
          </div>
        </div>

        {/* PHASE 2 OVERLAY: Spatial Architectural Curved Card */}
        {phase2Active && (
          <div
            className="absolute inset-0 flex items-center justify-start px-6 md:px-12 max-w-7xl mx-auto pointer-events-none transition-opacity duration-500"
            style={{ opacity: phase2Opacity }}
          >
            <div className="max-w-xl bg-white/94 backdrop-blur-md p-8 md:p-10 rounded-3xl border-l-4 border-l-[#9333ea] border border-white/80 shadow-2xl space-y-4 pointer-events-auto">
              <p className="text-xs uppercase tracking-[0.24em] text-[#9333ea] font-bold">
                Architectural Integrity · Benin City
              </p>
              <h2
                className="font-serif text-3xl sm:text-4xl text-neutral-900 font-light leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Master-Planned Land. Enduring Living Spaces.
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Every LUMCAS development is grounded in transparent land tenure, registered survey
                beacons, and elevated terrain across prime Benin City corridors.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-700">
                <span className="bg-purple-50 text-[#9333ea] px-3 py-1 rounded-full font-medium">Free Documentation</span>
                <span className="bg-purple-50 text-[#9333ea] px-3 py-1 rounded-full font-medium">Verified Titles</span>
                <span className="bg-purple-50 text-[#9333ea] px-3 py-1 rounded-full font-medium">Elevated Ground</span>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 3 OVERLAY: Transition into Section 02 */}
        {phase3Active && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none transition-opacity duration-500"
            style={{ opacity: phase3Opacity }}
          >
            <div className="bg-white/94 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/80 shadow-2xl max-w-lg mx-auto">
              <p className="text-xs uppercase tracking-[0.25em] text-[#9333ea] font-bold mb-2">
                Section 02
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-neutral-900 font-light tracking-tight mb-3">
                Property, With Purpose.
              </h2>
              <p className="text-neutral-600 text-sm max-w-md mx-auto">
                Scroll to discover LUMCAS signature estates and verified land portfolios in Benin City.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Interactive HUD: Scroll Indicator & Scrubber */}
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-12 z-20 flex items-end justify-between pointer-events-auto">
          {/* Scroll cue */}
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-neutral-700 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200/80 shadow-md">
            <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3 h-3 text-[#9333ea]" />
            </span>
            <span className="hidden sm:inline font-medium">
              {scrollProgress > 0.85 ? 'Continue scrolling' : 'Scroll down to advance cinematic'}
            </span>
          </div>

          {/* Interactive Timeline Scrubber (Curved Rounded-Full) */}
          <div className="flex items-center gap-3.5 bg-white/92 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200/80 shadow-lg">
            <div className="text-[12px] font-mono tabular-nums text-[#9333ea] font-bold">
              {Math.round(scrollProgress * 100)}%
            </div>

            <div
              className="w-24 sm:w-36 h-2 bg-neutral-200 rounded-full relative cursor-pointer group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                handleScrubberJump(ratio);
              }}
              title="Click to jump timeline"
            >
              <div
                className="h-full bg-gradient-to-r from-[#9333ea] to-purple-400 rounded-full transition-all duration-75"
                style={{ width: `${scrollProgress * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#9333ea] border-2 border-white rounded-full shadow-md group-hover:scale-125 transition-transform"
                style={{ left: `calc(${scrollProgress * 100}% - 7px)` }}
              />
            </div>

            <div className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase font-medium hidden sm:block">
              {scrollProgress < 0.35 ? 'Scene 01' : scrollProgress < 0.75 ? 'Scene 02' : 'Scene 03'}
            </div>
          </div>
        </div>

        {/* Video Loading State Fallback */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-30 transition-opacity duration-700">
            <div className="w-12 h-12 border-3 border-purple-200 border-t-[#9333ea] rounded-full animate-spin mb-4" />
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-600 font-mono font-medium">
              Loading LUMCAS Cinematic Stream
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
