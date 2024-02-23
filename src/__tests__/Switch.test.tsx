import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '../components/Switch'; // Replace with the actual path to your Switch component

describe('Switch', () => {
  it('should toggle the switch', () => {
    render(<Switch aria-label='Switch' />);
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toBeChecked();
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });

  it('should be checked when the checked prop is true', () => {
    render(<Switch checked />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeChecked();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Switch disabled />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeDisabled();
  });
});
