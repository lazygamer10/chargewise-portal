
import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  className = 'number-stat'
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animate = (timestamp: number, startValue: number, endValue: number, startTime: number) => {
      const runtime = timestamp - startTime;
      const progress = runtime / duration;
      const currentCount = Math.round(startValue + (endValue - startValue) * progress);
      
      if (runtime < duration) {
        setCount(currentCount);
        requestAnimationFrame((timestamp) => animate(timestamp, startValue, endValue, startTime));
      } else {
        setCount(endValue);
      }
    };

    const startAnimation = () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.disconnect();
      }
      
      requestAnimationFrame((timestamp) => animate(timestamp, 0, value, timestamp));
    };

    // Use Intersection Observer to start animation when element is visible
    if (countRef.current && !observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [value, duration]);

  return (
    <span ref={countRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
