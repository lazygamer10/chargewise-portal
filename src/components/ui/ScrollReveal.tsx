
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  direction?: 'up' | 'right' | 'left';
  delay?: 'none' | 'sm' | 'md' | 'lg';
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  direction = 'up',
  delay = 'none'
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getRevealClass = () => {
    switch(direction) {
      case 'right':
        return 'reveal-right';
      case 'left':
        return 'reveal-left';
      case 'up':
      default:
        return 'reveal';
    }
  };

  const getDelayClass = () => {
    switch(delay) {
      case 'sm':
        return 'reveal-delay-300';
      case 'md':
        return 'reveal-delay-500';
      case 'lg':
        return 'reveal-delay-700';
      case 'none':
      default:
        return '';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getRevealClass()} ${getDelayClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
