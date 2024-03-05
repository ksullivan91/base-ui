import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextLink from '../components/TextLink';

describe('TextLinks Component', () => {
  test('renders with correct text', () => {
    render(<TextLink>Test Link</TextLink>);
    const linkElement = screen.getByText('Test Link');
    expect(linkElement).toBeInTheDocument();
  });
});
