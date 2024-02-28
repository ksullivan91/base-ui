import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../components/Badge';
import { Colors } from '../Colors';

describe('Badge Component Color Variations', () => {
  Object.entries(Colors).forEach(([variant, colorCode]) => {
    it(`renders the ${variant} variant correctly`, () => {
      const { getByText } = render(
        <Badge
          variant={variant as keyof typeof Colors}
        >{`${variant} Badge`}</Badge>
      );
      const badgeElement = getByText(`${variant} Badge`);
      expect(badgeElement).toBeInTheDocument();
      expect(badgeElement).toHaveStyle(`background-color: ${colorCode}`);
    });
  });
});
