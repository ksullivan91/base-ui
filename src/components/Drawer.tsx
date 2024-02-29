import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalBackdrop } from './Modal';

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 100;
`;

const DrawerBackdrop = styled(ModalBackdrop)<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 50;
`;

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <DrawerBackdrop isOpen={isOpen} onClick={toggleDrawer} />
      <DrawerContainer isOpen={isOpen}>
        {/* Add your drawer content here */}
      </DrawerContainer>
    </>
  );
};

export default Drawer;
