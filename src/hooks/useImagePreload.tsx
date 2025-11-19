import { useEffect, useState } from 'react';

interface UseImagePreloadProps {
  images: string[];
  priority?: boolean;
}

export const useImagePreload = ({ images, priority = false }: UseImagePreloadProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!priority || images.length === 0) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    const loadedSet = new Set<string>();

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          if (mounted) {
            loadedSet.add(src);
            setLoadedImages(new Set(loadedSet));
          }
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    Promise.all(images.map(preloadImage))
      .then(() => {
        if (mounted) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        if (mounted) {
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [images, priority]);

  return { loadedImages, isLoading };
};
