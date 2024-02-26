import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Dropdown, { MenuItemProps } from '../components/Dropdown';
import { Colors } from '../Colors';
import { useDropdown } from '../utils/useDropdown';

const TestHookDropdown: React.FC<{ menuItems: MenuItemProps[] }> = ({
  menuItems,
}) => {
  const { selectedMenuItem } = useDropdown({
    menuItems,
    label: 'Dropdown Label',
  });
  return <Dropdown selected={selectedMenuItem} menuItems={menuItems} />;
};

describe('Dropdown Component', () => {
  const menuItems = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ];

  it('renders correctly with initial selected item', async () => {
    render(<Dropdown selected="Option 1" menuItems={menuItems} />);

    expect(screen.getByRole('button')).toHaveTextContent('Option 1');
  });

  it('renders correctly with label', async () => {
    const menuItems = [{ label: 'Option 1', value: 'option1' }];
    render(<TestHookDropdown menuItems={menuItems} />);
    expect(screen.getByRole('button')).toHaveTextContent('Dropdown Label');
    const dropdownButton = screen.getByRole('button');
    userEvent.click(dropdownButton);
    const option1 = await screen.findByRole('menuitem', { name: /option 1/i });
    expect(option1).toBeInTheDocument();
  });

  it('opens dropdown and displays menu items on click', async () => {
    render(<Dropdown selected="Option 1" menuItems={menuItems} />);
    const dropdownButton = screen.getByRole('button');
    userEvent.click(dropdownButton);

    const option1 = await screen.findByRole('menuitem', { name: /option 1/i });
    const option2 = await screen.findByRole('menuitem', { name: /option 2/i });
    const option3 = await screen.findByRole('menuitem', { name: /option 3/i });

    expect(option1).toBeVisible();
    expect(option2).toBeVisible();
    expect(option3).toBeVisible();
  });

  it('handles item click and updates selected item', async () => {
    render(<Dropdown selected="Option 1" menuItems={menuItems} />);
    const dropdownButton = screen.getByRole('button');
    userEvent.click(dropdownButton);

    const option3 = await screen.findByRole('menuitem', { name: /option 3/i });
    fireEvent.click(option3);

    expect(dropdownButton).toHaveTextContent('Option 3');
  });

  it('styles icon color based on hover state', async () => {
    render(<Dropdown selected="Option 1" menuItems={menuItems} />);
    const icon = screen.getByTestId('dropdown-icon');
    expect(icon).toHaveAttribute('stroke', Colors.monoGrayFour);

    const dropdown = screen.getByTestId('dropdown-wrapper');
    fireEvent.mouseEnter(dropdown);
    expect(icon).toHaveAttribute('stroke', Colors.pink);
  });

  it('disables menu item interaction when disabled is true', async () => {
    render(<Dropdown selected="Option 1" menuItems={menuItems} />);
    const dropdownButton = screen.getByRole('button');
    userEvent.click(dropdownButton);

    const option2 = await screen.findByText('Option 2');
    expect(option2.closest('li')).toHaveAttribute('aria-disabled', 'true');
    userEvent.click(option2);
    expect(dropdownButton).toHaveTextContent('Option 1');
  });
});
