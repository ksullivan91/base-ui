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
interface PortalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PortalContainer: React.FC<PortalContainerProps> = ({
  children,
  style = undefined,
  ...props
}) => {
  const [containerRef, isPortalReady] = usePortalContainer<HTMLDivElement>();

  return (
    <>
      <div ref={containerRef} style={style} />
      {isPortalReady &&
        cloneElement(children as React.ReactElement, {
          container: containerRef.current,
          ...props,
        })}
    </>
  );
};

export default usePortalContainer;
