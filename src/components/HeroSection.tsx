import { FC, useEffect, useRef, useState } from 'react';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260713_140344_79e1296a-86d7-43fd-9b5f-63ffe560f291.png&w=1280&q=85";
const FRONT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_162101_0d7498c5-29bb-47bf-a99f-2773c0a880a9.mp4";
const OVERLAY_IMAGE = "https://soft-zoom-63098134.figma.site/_assets/v11/3f10f1876e118f72a396e05a6c2d099569478272.png";

export const HeroSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maskDivRef = useRef<HTMLDivElement>(null);

  // Mouse position targets
  const targetPos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const smoothPos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  
  // Grid parallax offset
  const gridOffset = useRef({ x: 0, y: 0 });

  const [maskDataUrl, setMaskDataUrl] = useState<string>('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    let animFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const radius = 260; // 260px radius

    const render = () => {
      // Lerp cursor position (factor 0.1)
      smoothPos.current.x += (targetPos.current.x - smoothPos.current.x) * 0.1;
      smoothPos.current.y += (targetPos.current.y - smoothPos.current.y) * 0.1;

      // Parallax offset for Grid
      const windowWidth = window.innerWidth || 1000;
      const windowHeight = window.innerHeight || 800;
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;

      const targetGridX = ((targetPos.current.x - centerX) / centerX) * 16;
      const targetGridY = ((targetPos.current.y - centerY) / centerY) * 16;

      gridOffset.current.x += (targetGridX - gridOffset.current.x) * 0.06;
      gridOffset.current.y += (targetGridY - gridOffset.current.y) * 0.06;

      // Apply Grid transform
      const gridEl = document.getElementById('hero-grid-bg');
      if (gridEl) {
        gridEl.style.transform = `translate3d(${gridOffset.current.x}px, ${gridOffset.current.y}px, 0)`;
      }

      // Update mask canvas
      const scale = 0.5;
      const width = Math.max(300, Math.floor(windowWidth * scale));
      const height = Math.max(300, Math.floor(windowHeight * scale));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = smoothPos.current.x * scale;
      const cy = smoothPos.current.y * scale;
      const r = radius * scale;

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      gradient.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
      gradient.addColorStop(0.4, 'rgba(255, 255, 255, 1.0)');
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
      gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
      gradient.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
      gradient.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const url = canvas.toDataURL('image/png');
      setMaskDataUrl(url);

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black select-none font-helvetica-neue flex flex-col justify-between"
    >
      {/* Hidden Canvas for drawing radial gradient mask */}
      <canvas 
        ref={canvasRef} 
        className="hidden pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Layer 1 — Grid Background (z-0, opacity 0.1) */}
      <div 
        id="hero-grid-bg"
        className="absolute inset-0 z-0 opacity-10 pointer-events-none transition-transform ease-out duration-75"
        style={{ willChange: 'transform' }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id="grid-pattern" 
              width="48" 
              height="48" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 48 0 L 0 0 0 48" 
                fill="none" 
                stroke="#64748b" 
                strokeWidth="0.6" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Layer 2 — Background Image (z-10) */}
      <div 
        className="absolute inset-0 z-10 bg-center bg-cover bg-no-repeat pointer-events-none opacity-90"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* Layer 3 — Hero Text & Subtitle (z-20) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 sm:top-24 md:top-28 z-20 pointer-events-none text-center w-full px-4">
        <h1 
          className="font-instrument-serif uppercase text-white leading-[0.9] tracking-tight text-[5rem] xs:text-[6.5rem] sm:text-[11rem] md:text-[14rem] lg:text-[17rem] drop-shadow-2xl whitespace-nowrap"
        >
          KhanhLinh
        </h1>
        <p className="text-white/90 font-medium tracking-[0.2em] text-xs sm:text-sm md:text-base uppercase mt-2 sm:mt-1 md:mt-0 max-w-3xl mx-auto drop-shadow-md">
          K62 – Accounting and Auditing with ACCA orientation
        </p>
      </div>

      {/* Layer 4 — Overlay Image (z-25) */}
      <img 
        src={OVERLAY_IMAGE} 
        alt="Atmospheric Depth Overlay"
        className="absolute inset-0 z-25 w-full h-full object-cover pointer-events-none"
      />

      {/* Layer 5 — Spotlight Reveal (z-30) */}
      <div 
        ref={maskDivRef}
        className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
        style={{
          clipPath: 'inset(40% 0 0 0)',
          WebkitClipPath: 'inset(40% 0 0 0)',
          maskImage: maskDataUrl ? `url(${maskDataUrl})` : undefined,
          WebkitMaskImage: maskDataUrl ? `url(${maskDataUrl})` : undefined,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        <video 
          ref={videoRef}
          src={FRONT_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Scroll Indicator Pill */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40">
        <a 
          href="#about" 
          className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 text-white/80 hover:text-white text-xs tracking-wider uppercase transition-colors shadow-lg"
        >
          <span>Explore Portfolio</span>
          <svg className="w-3.5 h-3.5 animate-bounce text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
