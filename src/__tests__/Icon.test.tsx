import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon, { IconVariant } from '../Icon';

// Mock icon components
jest.mock('../Icon', () => ({
  HouseIcon: jest.fn().mockReturnValue('HouseIcon'),
  CircleIcon: jest.fn().mockReturnValue('CircleIcon'),
  NotificationIcon: jest.fn().mockReturnValue('NotificationIcon'),
  StarIcon: jest.fn().mockReturnValue('StarIcon'),
  SmallCircleIcon: jest.fn().mockReturnValue('SmallCircleIcon'),
  PlusIcon: jest.fn().mockReturnValue('PlusIcon'),
  AdjustedArrowIcon: jest.fn().mockReturnValue('AdjustedArrowIcon'),
  TreeIcon: jest.fn().mockReturnValue('TreeIcon'),
  BuildingIcon: jest.fn().mockReturnValue('BuildingIcon'),
  BalloonIcon: jest.fn().mockReturnValue('BalloonIcon'),
  DocumentIcon: jest.fn().mockReturnValue('DocumentIcon'),
  ZigzagIcon: jest.fn().mockReturnValue('ZigzagIcon'),
  BridgeIcon: jest.fn().mockReturnValue('BridgeIcon'),
  ArrowIcon: jest.fn().mockReturnValue('ArrowIcon'),
  CrossIcon: jest.fn().mockReturnValue('CrossIcon'),
  SquareIcon: jest.fn().mockReturnValue('SquareIcon'),
  TriangleIcon: jest.fn().mockReturnValue('TriangleIcon'),
  DetailedStarIcon: jest.fn().mockReturnValue('DetailedStarIcon'),
  HeartIcon: jest.fn().mockReturnValue('HeartIcon'),
  WatchIcon: jest.fn().mockReturnValue('WatchIcon'),
  OfficeBuildingIcon: jest.fn().mockReturnValue('OfficeBuildingIcon'),
  LampIcon: jest.fn().mockReturnValue('LampIcon'),
  FlagIcon: jest.fn().mockReturnValue('FlagIcon'),
  KeyIcon: jest.fn().mockReturnValue('KeyIcon'),
}));

const variants: [IconVariant, string][] = [
  ['house', 'HouseIcon'],
  ['circle', 'CircleIcon'],
  ['notification', 'NotificationIcon'],
  ['star', 'StarIcon'],
  ['smallCircle', 'SmallCircleIcon'],
  ['plus', 'PlusIcon'],
  ['adjustedArrow', 'AdjustedArrowIcon'],
  ['tree', 'TreeIcon'],
  ['building', 'BuildingIcon'],
  ['balloon', 'BalloonIcon'],
  ['document', 'DocumentIcon'],
  ['zigzag', 'ZigzagIcon'],
  ['bridge', 'BridgeIcon'],
  ['arrow', 'ArrowIcon'],
  ['cross', 'CrossIcon'],
  ['square', 'SquareIcon'],
  ['triangle', 'TriangleIcon'],
  ['detailedStar', 'DetailedStarIcon'],
  ['heart', 'HeartIcon'],
  ['watch', 'WatchIcon'],
  ['officeBuilding', 'OfficeBuildingIcon'],
  ['lamp', 'LampIcon'],
  ['flag', 'FlagIcon'],
  ['key', 'KeyIcon'],
];

describe('Icon component', () => {
  test.each(variants)(
    'renders %s icon',
    (variant: IconVariant, iconName: string) => {
      const { getByTestId } = render(
        <Icon variant={variant} data-testid='icon' />
      );
      const iconElement = getByTestId('icon');
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveAttribute('variant', variant);
      expect(iconElement).toHaveTextContent(iconName);
    }
  );
});
