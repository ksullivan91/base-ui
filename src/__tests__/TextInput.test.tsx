import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TextInput from '../TextInput';
import { Colors } from '../Colors';
import { Status } from '../utils/useStatus';

describe('TextInput Component', () => {
  test('renders with placeholder text', () => {
    render(<TextInput placeholder='Enter your name' />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  test('displays label text when provided', () => {
    const labelText = 'Username';
    render(<TextInput labelText={labelText} />);
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  test('updates value on user input', async () => {
    const user = userEvent.setup();
    render(<TextInput />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'John Doe');
    expect(input).toHaveValue('John Doe');
  });

  test('displays status message when provided', () => {
    const status: Status = { type: 'error', message: 'Invalid input' };
    render(<TextInput status={status} />);
    expect(screen.getByText(status.message as string)).toBeInTheDocument();
    expect(screen.getByText(status.message as string)).toHaveStyle(
      `color: ${Colors.darkPink}`
    );
  });

  test('applies disabled state correctly', () => {
    render(<TextInput disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('triggers onChange callback when user types', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'Hello');
    expect(handleChange).toHaveBeenCalledTimes(5); // Called once for each character typed
  });
});
