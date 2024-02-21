import React, { useState, ReactElement } from 'react';

export interface RadioSelectProps {
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

interface RadioGroupProps {
  children: ReactElement<RadioSelectProps>[]; // Specify that children should be an array of React elements with RadioSelectProps
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
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioSelectProps>(child)) {
          return React.cloneElement(child, {
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
