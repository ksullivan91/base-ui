import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Portal, PortalProps } from '@mui/base';
import Icon from './Icon';
import { Colors } from './Colors';
import { StatusType } from './utils/useStatus';
import { hexToRGBA } from './utils/hexToRGBA';
import { Typography } from './Typography';

const AlertColors = {
  error: Colors.error,
  success: Colors.success,
  notification: Colors.notification,
  monoBlack: Colors.monoBlack,
};

interface AlertProps {
  $status: Exclude<StatusType, 'inactive' | 'label'>;
}

const StyledAlert = styled.div<AlertProps>`
  position: relative;
  padding: 16px;
  padding-right: 48px;
  margin: 4px 0;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 730px;
  width: 100%;
  ${({ $status }) => css`
    background-color: ${hexToRGBA(AlertColors[$status], 0.1)};
  `}
`;

const CloseIconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  cursor: pointer;
`;

// Extending AlertsProps to include PortalProps for flexibility
interface AlertsProps extends PortalProps {
  status: Exclude<StatusType, 'inactive' | 'label'>;
  message: string | React.ReactNode;
}

const Alerts: React.FC<AlertsProps> = ({
  container = document.body,
  status = 'notification',
  message,
  ...portalProps
}) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  if (!open) return null;

  return (
    <Portal {...portalProps} container={container}>
      <StyledAlert
        $status={status}
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <Icon
          variant={
            status === 'success'
              ? 'success'
              : status === 'error'
              ? 'error'
              : 'bell'
          }
          stroke={AlertColors[status] || AlertColors.notification}
        />
        <Typography variant='p' color={AlertColors[status]}>
          {message}
        </Typography>
        <CloseIconContainer
          onClick={handleClose}
          role='button'
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              handleClose();
            }
          }}
          aria-label='Close alert'
        >
          <Icon variant='cross' stroke={AlertColors.monoBlack} />
        </CloseIconContainer>
      </StyledAlert>
    </Portal>
  );
};

export default Alerts;
