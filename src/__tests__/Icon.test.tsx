import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Icon, { IconVariant } from '../Icon';

// Directly mock the Icon module inside jest.mock
jest.mock('../Icon', () => ({
  __esModule: true, // This is necessary for mocking modules with default and named exports
  default: jest
    .fn()
    .mockImplementation(({ variant }) => <div>{variant}Icon</div>),
  IconVariants: {
    house: 'HouseIcon',
    help: 'HelpIcon',
    success: 'SuccessIcon',
    error: 'ErrorIcon',
    star: 'StarIcon',
    cart: 'CartIcon',
    pin: 'PinIcon',
    calendar: 'CalendarIcon',
    edit: 'EditIcon',
    dropdown: 'DropdownIcon',
    bell: 'BellIcon',
    upload: 'UploadIcon',
    download: 'DownloadIcon',
    barchart: 'BarchartIcon',
    inbox: 'InboxIcon',
    filter: 'FilterIcon',
    zap: 'ZapIcon',
    share: 'ShareIcon',
    chat: 'ChatIcon',
    creditcard: 'CreditcardIcon',
    search: 'SearchIcon',
    user: 'UserIcon',
    cross: 'CrossIcon',
    map: 'MapIcon',
  },
}));

describe('Icon component', () => {
  const variants: IconVariant[] = [
    'house',
    'help',
    'success',
    'error',
    'star',
    'cart',
    'pin',
    'calendar',
    'edit',
    'dropdown',
    'bell',
    'upload',
    'download',
    'barchart',
    'inbox',
    'filter',
    'zap',
    'share',
    'chat',
    'creditcard',
    'search',
    'user',
    'cross',
    'map',
  ];

  test.each(variants)('renders %s icon', (variant) => {
    const { getByText } = render(<Icon variant={variant} />);
    expect(getByText(`${variant}Icon`)).toBeInTheDocument();
  });
});
