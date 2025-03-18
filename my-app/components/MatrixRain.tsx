'use client';
import { useEffect, useRef, memo } from 'react';

interface MatrixRainProps {
  className?: string;
}

const MatrixRain = memo(({ className = '' }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const dropsRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(0);
  const FPS = 20; 
  const frameDelay = 1000 / FPS;
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '0';

    const ctx = canvas.getContext('2d', { 
      alpha: false,
      willReadFrequently: false
    });
    if (!ctx) return;

    const dpr = 1;
    const updateCanvasSize = (): { width: number; height: number } => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      return { width, height };
    };

    const { width } = updateCanvasSize();

    const matrixColor = '#5B21B6';
    const characters = 'ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ';
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    
    if (dropsRef.current.length === 0) {
      dropsRef.current = Array(columns).fill(1);
    }

    const charCache = new Map<string, HTMLCanvasElement>();
    const preRenderChar = (char: string) => {
      if (charCache.has(char)) return charCache.get(char);
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d', { alpha: false });
      if (tempCtx) {
        tempCanvas.width = fontSize;
        tempCanvas.height = fontSize;
        tempCtx.font = `${fontSize}px 'Noto Sans Lao', monospace`;
        tempCtx.fillStyle = matrixColor;
        tempCtx.textBaseline = 'top';
        tempCtx.fillText(char, 0, 0);
        charCache.set(char, tempCanvas);
      }
      return tempCanvas;
    };

    const reducedChars = characters.slice(0, 15);
    reducedChars.split('').forEach(preRenderChar);

    const draw = (timestamp: number) => {
      if (!ctx || !canvas || !isVisibleRef.current) return;

      if (timestamp - lastTimeRef.current < frameDelay) {
        animationFrameRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      for (let i = 0; i < dropsRef.current.length; i += 2) {
        if (Math.random() > 0.7) continue; 

        const char = reducedChars.charAt(Math.floor(Math.random() * reducedChars.length));
        const cachedChar = charCache.get(char);
        if (cachedChar) {
          ctx.drawImage(cachedChar, i * fontSize, dropsRef.current[i] * fontSize);
        }

        if (dropsRef.current[i] * fontSize > canvas.height / dpr && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }
        dropsRef.current[i]++;
      }

      lastTimeRef.current = timestamp;
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver((entries) => {
      isVisibleRef.current = entries[0].isIntersecting;
    }, { threshold: 0 });
    
    observer.observe(canvas);

    const handleResize = () => {
      const { width: newWidth } = updateCanvasSize();
      const newColumns = Math.floor(newWidth / fontSize);
      dropsRef.current = Array(newColumns).fill(1);
    };

    const debouncedResize = debounce(handleResize, 250);

    window.addEventListener('resize', debouncedResize);
    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', debouncedResize);
      observer.disconnect();
      charCache.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block' }}
    />
  );
});

function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | undefined;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

MatrixRain.displayName = 'MatrixRain';

export default MatrixRain;
