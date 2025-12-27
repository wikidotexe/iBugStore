"use client";
import { useEffect, useRef, useState, ElementType, ReactNode, HTMLAttributes } from "react";

interface ScrollAnimationProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}

export default function ScrollAnimation({ children, className = "", as: Component = "div", ...props }: ScrollAnimationProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`${className} ${isVisible ? "animate-up" : "opacity-0"}`} {...props}>
      {children}
    </Component>
  );
}
