import { cloneElement, useEffect, useRef, useState } from 'react';

function useConditionalPortal<T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean
] {
  const ref = useRef<T>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(!!ref.current);
  }, [ref.current]);

  return [ref, isReady];
}
interface ConditionalPortalWrapperProps {
  children: React.ReactNode;
}

export const ConditionalPortalWrapper: React.FC<
  ConditionalPortalWrapperProps
> = ({ children, ...props }) => {
  const [containerRef, isPortalReady] = useConditionalPortal<HTMLDivElement>();

  return (
    <>
      <div ref={containerRef} />
      {isPortalReady &&
        cloneElement(children as React.ReactElement, {
          container: containerRef.current,
          ...props,
        })}
    </>
  );
};

export default useConditionalPortal;
