import { Home, MenuBook, FavoriteBorder, AddCircle } from '@mui/icons-material';
import type { NavItem } from '../types/navigation';

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Recipes',
    href: '/recipes',
    icon: MenuBook,
  },
  {
    label: 'Favorites',
    href: '/favorites',
    icon: FavoriteBorder,
  },
  {
    label: 'Add Recipe',
    href: '/recipes/create',
    icon: AddCircle,
  },
];
