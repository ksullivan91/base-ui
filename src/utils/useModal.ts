import { useState, useCallback } from 'react';

export const useModal = (open?: boolean) => {
  const [isOpen, setIsOpen] = useState(open ?? false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
