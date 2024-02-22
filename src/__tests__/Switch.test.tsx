import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '../Switch'; // Replace with the actual path to your Switch component

describe('Switch', () => {
  it('should toggle the switch', () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should be checked when the checked prop is true', () => {
    render(<Switch checked />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeChecked();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Switch disabled />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });
});
