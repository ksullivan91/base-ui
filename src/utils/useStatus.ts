import { useState } from 'react';

export type StatusType =
  | 'inactive'
  | 'success'
  | 'error'
  | 'label'
  | 'notification';

export interface Status {
  type: StatusType;
  message: string | React.ReactNode;
}

function useStatus(initialStatus: Status = { type: 'inactive', message: '' }) {
  const [status, setStatus] = useState<Status>(initialStatus);

  const updateStatus = (
    type: StatusType,
    message: string | React.ReactNode = ''
  ) => {
    setStatus({ type, message });
  };

  return { status, updateStatus };
}

export default useStatus;
