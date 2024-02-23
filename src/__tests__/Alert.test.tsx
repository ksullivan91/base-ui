import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alerts from '../components/Alert';

describe('Alerts Component', () => {
  it('renders a success message', () => {
    render(<Alerts status='success' message='Success message' />);
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('renders an error message', () => {
    render(<Alerts status='error' message='Error message' />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('closes the alert when the close icon is clicked', () => {
    render(<Alerts status='success' message='Closable message' />);
    fireEvent.click(screen.getByRole('button')); // Assuming the close icon has a role of 'button'
    // Additional logic needed to check for closed state, depending on implementation
  });

  // Add more tests as needed
});
