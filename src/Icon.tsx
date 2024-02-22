import React from 'react';
import { Colors } from './Colors';

export type IconProps = {
  variant: IconVariant;
} & React.SVGProps<SVGSVGElement>;

export const HouseIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z'
    />
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9 22V12h6v10'
    />
  </svg>
);

export const HelpIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z'
    />
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 16v.5'
    />
  </svg>
);

export const SuccessIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M22 11.08V12a10 10 0 1 1-5.93-9.14'
    />
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M22 4 12 14.01l-3-3'
    />
  </svg>
);

export const ErrorIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0v0ZM12 9v4M12 16v.5'
    />
  </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z'
    />
  </svg>
);

export const CartIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'
    />
  </svg>
);

export const PinIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z'
    />
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
    />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM16 2v4M8 2v4M3 10h18'
    />
  </svg>
);

export const EditIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'
    />
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5Z'
    />
  </svg>
);

export const DropdownIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m4 8 8 8 8-8'
    />
  </svg>
);

export const BellIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a1.999 1.999 0 0 1-3.46 0'
    />
  </svg>
);

export const UploadIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <g
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      clip-path='url(#a)'
    >
      <path d='m16 16-4-4-4 4M12 12v9' />
      <path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3' />
      <path d='m16 16-4-4-4 4' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3'
    />
  </svg>
);

export const BarchartIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M18 20V10M12 20V4M6 20v-6'
    />
  </svg>
);

export const InboxIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M22 12h-6l-2 3h-4l-2-3H2'
    />
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11v0Z'
    />
  </svg>
);

export const FilterIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M22 3H2l8 9.46V19l4 2v-8.54L22 3Z'
    />
  </svg>
);

export const MapIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4ZM8 2v16M16 6v16'
    />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M13 2 3 14h9l-1 8 10-12h-9l1-8Z'
    />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98'
    />
  </svg>
);

export const ChatIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.379 8.379 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z'
    />
  </svg>
);

export const CreditcardIcon: React.FC<IconProps> = (props) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z'
      stroke={props.stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1 10H23'
      stroke={props.stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35'
    />
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
    />
  </svg>
);

export const CrossIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M18 6 6 18M6 6l12 12'
    />
  </svg>
);

export const IconVariants = {
  house: HouseIcon,
  help: HelpIcon,
  success: SuccessIcon,
  error: ErrorIcon,
  star: StarIcon,
  cart: CartIcon,
  pin: PinIcon,
  calendar: CalendarIcon,
  edit: EditIcon,
  dropdown: DropdownIcon,
  bell: BellIcon,
  upload: UploadIcon,
  download: DownloadIcon,
  barchart: BarchartIcon,
  inbox: InboxIcon,
  filter: FilterIcon,
  zap: ZapIcon,
  share: ShareIcon,
  chat: ChatIcon,
  creditcard: CreditcardIcon,
  search: SearchIcon,
  user: UserIcon,
  cross: CrossIcon,
  map: MapIcon,
};

export const variants: IconVariant[] = Object.keys(
  IconVariants
) as IconVariant[];

export type IconVariant = keyof typeof IconVariants;

const Icon: React.FC<IconProps> = ({ variant, ...props }) => {
  const SvgIcon = IconVariants[variant] || null;
  return SvgIcon ? <SvgIcon variant={variant} {...props} /> : null;
};

Icon.defaultProps = {
  stroke: Colors.monoGrayFour,
};

export default Icon;
