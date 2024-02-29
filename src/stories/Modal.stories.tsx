import { Meta, StoryObj } from '@storybook/react';
import Modal, {
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalProps,
  StyledModal,
} from '../components/Modal';
import useModal from '../utils/useModal';
import {
  AlternativeButton,
  ButtonProps,
  SecondaryButton,
} from '../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { Colors } from '../Colors';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

const StyledSecondaryButton = styled(SecondaryButton)<ButtonProps>`
  border-color: ${Colors.lightPink};
  &:hover,
  &:focus {
    border-color: ${Colors.darkPink};
  }
  label {
    color: ${Colors.darkPink} !important;
  }
`;

const StyledAlternativeButton = styled(AlternativeButton)<ButtonProps>`
  margin-top: 32px;
  width: 100%;
  background-color: ${Colors.pink};
  &:hover,
  &:focus {
    background-color: ${Colors.darkPink};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DefaultModal: StoryObj<ModalProps> = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
      <Container>
        <SecondaryButton onClick={openModal}>Open Modal</SecondaryButton>
        <Modal {...args} open={isOpen} onClose={closeModal}>
          <>
            <ModalHeader>Modal Header</ModalHeader>
            <ModalBody>Modal Content</ModalBody>
          </>
        </Modal>
      </Container>
    );
  },
  args: {},
};

export const CustomizedModalWithHook: StoryObj<ModalProps> = {
  render: args => {
    const { isOpen, openModal, closeModal } = useModal();

    const StyledModalBackdrop = styled(ModalBackdrop)`
      background-color: ${Colors.darkPink};
    `;

    const StyledModalContent = styled(ModalContent)`
      background-color: white;
      border-radius: 8px;
      padding: 32px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      width: 100%;
      z-index: 1000;
      position: relative;
    `;

    const StyledModalHeader = styled(ModalHeader)`
      margin-bottom: 32px;
      color: #000;
      font-size: 24px;
      font-family: 'Comic Sans MS', sans-serif;
    `;

    const StyledModalBody = styled(ModalBody)`
      margin-bottom: 24px;
      color: #333;
      font-family: 'Comic Sans MS', sans-serif;
      font-size: 16px;
    `;

    return (
      <Container>
        <StyledSecondaryButton onClick={openModal}>
          Open Modal
        </StyledSecondaryButton>
        <StyledModal {...args} open={isOpen} onClose={closeModal}>
          <StyledModalBackdrop onClick={closeModal}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
              <StyledModalHeader>Modal Header</StyledModalHeader>
              <StyledModalBody>Modal Content</StyledModalBody>
              <StyledAlternativeButton onClick={closeModal}>
                Close Modal
              </StyledAlternativeButton>
            </StyledModalContent>
          </StyledModalBackdrop>
        </StyledModal>
      </Container>
    );
  },
};

export default meta;
