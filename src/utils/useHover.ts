import { useCallback, useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean
] => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const hoverRef = useRef<T>(null);
  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const target = hoverRef.current;
    if (target) {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
      target.addEventListener('focusin', handleMouseEnter);
      target.addEventListener('focusout', handleMouseLeave);

      return () => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
        target.removeEventListener('focusin', handleMouseEnter);
        target.removeEventListener('focusout', handleMouseLeave);
      };
    }
  }, [handleMouseEnter, handleMouseLeave]);

  return [hoverRef, isHovered];
};
