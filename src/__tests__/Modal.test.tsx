import {
  render,
  screen,
  fireEvent,
  renderHook,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../components/Modal';
import { useModal } from '../utils/useModal';

describe('ModalComponent', () => {
  test('it renders and can be closed', () => {
    const handleClose = jest.fn();
    render(
      <Modal open={true} onClose={handleClose}>
        <button onClick={handleClose}>close</button>
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalled();
  });

  test('opens the modal on button click', () => {
    const ModalTriggerComponent = () => {
      const { isOpen, openModal } = useModal();
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal open={isOpen} onClose={() => {}}>
            <div data-testid="modal">Modal Content</div>
          </Modal>
        </div>
      );
    };
    render(<ModalTriggerComponent />);
    const openButton = screen.getByRole('button', { name: /open modal/i });
    fireEvent.click(openButton);

    // Assuming your modal has a role or a test id for identification
    const modal = screen.getByTestId('modal');
    expect(modal).toBeVisible();
  });

  test('handles open and close actions', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
