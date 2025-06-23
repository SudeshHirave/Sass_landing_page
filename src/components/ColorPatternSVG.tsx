"use client"
import { useRef, useEffect, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  color: string;
  opacity: number;
  blinkPhase: number;
  blinkSpeed: number;
  visible: boolean;
}

interface BlinkingDotsPatternProps {
  colors?: string[];
  dotSize?: number;
  spacing?: number;
  blinkSpeed?: number;
  className?: string;
}

interface Dimensions {
  width: number;
  height: number;
}

interface ColorPreset {
  name: string;
  colors: string[];
}

export const BlinkingDotsPattern: React.FC<BlinkingDotsPatternProps> = ({ 
  colors = ['#22c55e', '#10b981', '#059669'], 
  dotSize = 3,
  spacing = 20,
  blinkSpeed = 2000,
  className = "w-full h-full"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
  
  // Update canvas size based on parent
  useEffect(() => {
    const updateSize = (): void => {
      const canvas = canvasRef.current;
      if (canvas && canvas.parentElement) {
        const parent = canvas.parentElement;
        const rect = parent.getBoundingClientRect();
        setDimensions({ 
          width: rect.width || 800, 
          height: rect.height || 400 
        });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Calculate grid
    const cols: number = Math.floor(dimensions.width / spacing);
    const rows: number = Math.floor(dimensions.height / spacing);
    
    // Create dots with random properties
    const dots: Dot[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: col * spacing + spacing / 2,
          y: row * spacing + spacing / 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random(),
          blinkPhase: Math.random() * Math.PI * 2,
          blinkSpeed: 0.002 + Math.random() * 0.003,
          visible: Math.random() > 0.3 // Some dots are initially invisible
        });
      }
    }
    
    const startTime: number = Date.now();
    
    const animate = (): void => {
      const currentTime: number = Date.now();
      const elapsed: number = currentTime - startTime;
      
      // Clear canvas with dark background
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw dots
      dots.forEach((dot: Dot) => {
        if (!dot.visible && Math.random() > 0.995) {
          dot.visible = true;
        }
        
        if (dot.visible) {
          // Calculate blinking opacity
          const phase: number = dot.blinkPhase + elapsed * dot.blinkSpeed;
          const baseOpacity: number = (Math.sin(phase) + 1) / 2;
          const opacity: number = baseOpacity * 0.8 + 0.2; // Keep minimum visibility
          
          // Randomly hide some dots
          if (Math.random() > 0.998) {
            dot.visible = false;
            return;
          }
          
          // Draw square dot
          const alphaHex: string = Math.floor(opacity * 255).toString(16).padStart(2, '0');
          ctx.fillStyle = dot.color + alphaHex;
          ctx.fillRect(
            dot.x - dotSize / 2, 
            dot.y - dotSize / 2, 
            dotSize, 
            dotSize
          );
          
          // Add subtle glow effect
          if (opacity > 0.7) {
            ctx.shadowColor = dot.color;
            ctx.shadowBlur = 2;
            ctx.fillRect(
              dot.x - dotSize / 2, 
              dot.y - dotSize / 2, 
              dotSize, 
              dotSize
            );
            ctx.shadowBlur = 0;
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, colors, dotSize, spacing, blinkSpeed]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{ display: 'block' }}
    />
  );
};