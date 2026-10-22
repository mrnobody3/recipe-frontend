import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export interface NavItem {
  label: string;
  href: string;
  icon?: ComponentType<SvgIconProps>;
  badge?: number;
}
