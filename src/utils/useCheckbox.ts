import React from 'react';
// Define the structure for a single checkbox's state
export interface CheckboxState {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Define the hook's return type
export interface UseCheckboxesReturn {
  [key: string]: CheckboxState;
}

// Define the hook itself
export function useCheckboxes(defaultStates: {
  [key: string]: boolean;
}): UseCheckboxesReturn {
  const [states, setStates] = React.useState<{ [key: string]: boolean }>(
    defaultStates
  );

  const createChangeHandler = React.useCallback(
    (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setStates((prevStates) => ({
        ...prevStates,
        [key]: event.target.checked,
      }));
    },
    []
  );

  // Transform the states into the desired return structure
  const checkboxes = Object.keys(states).reduce<UseCheckboxesReturn>(
    (acc, key) => {
      acc[key] = {
        checked: states[key],
        onChange: createChangeHandler(key),
      };
      return acc;
    },
    {}
  );

  return checkboxes;
}

export default useCheckboxes;
