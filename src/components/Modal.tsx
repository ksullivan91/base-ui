import React from 'react';
import {
  Modal as MuiModal,
  ModalProps as MUIModalProps,
} from '@mui/base/Modal';
import styled from 'styled-components';
import { Colors } from '../Colors';
import { hexToRGBA, Icon, Typography } from '..';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${hexToRGBA(Colors.monoGrayThree, 0.4)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled(MuiModal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: ${Colors.monoWhite};
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  z-index: 1000;
  position: relative;
`;

export const ModalCloseIcon = styled(Icon)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const ModalHeader = styled(Typography)<{ variant?: 'h3' }>`
  margin-bottom: 16px;
`;
ModalHeader.defaultProps = { variant: 'h3' };

export const ModalBody = styled(Typography)<{ variant?: 'p' }>`
  margin-bottom: 24px;
`;
ModalBody.defaultProps = { variant: 'p' };

export interface ModalProps extends MUIModalProps {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  onClose(): void;
}

export const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBackdrop onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalCloseIcon variant="cross" onClick={onClose} />
          {children}
        </ModalContent>
      </ModalBackdrop>
    </StyledModal>
  );
};

export default Modal;
