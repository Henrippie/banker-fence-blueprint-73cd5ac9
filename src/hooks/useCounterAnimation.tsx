import { useEffect, useState } from 'react';

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  isInView: boolean;
}

export const useCounterAnimation = ({ 
  end, 
  duration = 2000, 
  start = 0,
  isInView 
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start, isInView]);

  return count;
};
