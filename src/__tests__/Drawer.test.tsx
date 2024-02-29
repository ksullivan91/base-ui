import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Drawer from '../components/Drawer';

describe('<Drawer />', () => {
  test('it should mount', () => {
    render(<Drawer />);
    const drawer = screen.getByTestId('Drawer');
    expect(drawer).toBeInTheDocument();
  });

  test('it should toggle drawer on button click', () => {
    render(<Drawer />);
    const toggleButton = screen.getByRole('button', { name: /toggle drawer/i });
    fireEvent.click(toggleButton);
    const drawer = screen.getByTestId('Drawer');
    expect(drawer).toHaveStyle('transform: translateX(0)');
    fireEvent.click(toggleButton);
    expect(drawer).toHaveStyle('transform: translateX(-100%)');
  });
});
