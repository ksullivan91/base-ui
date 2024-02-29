import { useState, useCallback } from 'react';

function useModal(open?: boolean) {
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
}

export default useModal;
