import React, { useState } from 'react';
import { RadioProps } from './Radio';

export interface RadioGroupProps {
  children: React.ReactNode;
  name: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div role='radiogroup'>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<RadioProps>(child)) {
          return React.cloneElement(child, {
            id: `${name}-${index}`,
            checked: child.props.value === value,
            onChange: handleChange,
            name: name,
          });
        }
        return child;
      })}
    </div>
  );
};

export default RadioGroup;
