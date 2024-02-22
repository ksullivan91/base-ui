import React from 'react';
import useConditionalPortal from './useConditionalPortal';

interface ConditionalPortalWrapperProps {
  children: React.ReactNode;
}

const ConditionalPortalWrapper: React.FC<ConditionalPortalWrapperProps> = ({
  children,
  ...props
}) => {
  const [containerRef, isPortalReady] = useConditionalPortal<HTMLDivElement>();

  return (
    <>
      <div ref={containerRef} />
      {isPortalReady &&
        React.cloneElement(children as React.ReactElement, {
          container: containerRef.current,
          ...props,
        })}
    </>
  );
};

export default ConditionalPortalWrapper;
