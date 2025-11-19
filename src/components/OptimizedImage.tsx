import { ImgHTMLAttributes, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = '100vw',
  className,
  objectFit = 'cover',
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Generate srcset for responsive images
  const generateSrcSet = (url: string) => {
    if (url.includes('unsplash.com')) {
      const widths = [400, 800, 1200, 1600, 2000];
      return widths
        .map(w => `${url.split('?')[0]}?q=80&w=${w}&fm=webp ${w}w`)
        .join(', ');
    }
    return undefined;
  };

  const srcSet = generateSrcSet(src);
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src.split('?')[0]}?q=80&fm=webp&w=${width || 1200}` 
    : src;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : undefined}
        srcSet={isInView ? srcSet : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          objectFit: objectFit,
        }}
        className={cn(
          'transition-all duration-500 ease-out',
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          'w-full h-full'
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
