import { cloneElement, useEffect, useRef, useState } from 'react';

function usePortalContainer<T extends HTMLElement>(): [
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
interface PortalContainerProps {
  children: React.ReactNode;
}

export const PortalContainer: React.FC<PortalContainerProps> = ({
  children,
  ...props
}) => {
  const [containerRef, isPortalReady] = usePortalContainer<HTMLDivElement>();

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

export default usePortalContainer;
