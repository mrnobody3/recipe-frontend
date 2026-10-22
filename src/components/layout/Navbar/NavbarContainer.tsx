'use client';

import { usePathname } from 'next/navigation';
import { useToggleSidebar, useOpenModal } from '../../../store/hooks/useUI';
import { MAIN_NAV_ITEMS } from '../../../constants/navigation';
import { NavbarView } from './NavbarView';

export function NavbarContainer() {
  const pathname = usePathname();
  const toggleSidebar = useToggleSidebar();
  const openModal = useOpenModal();

  const handleOpenLogin = () => {
    openModal('login');
  };

  return (
    <NavbarView
      navLinks={MAIN_NAV_ITEMS}
      currentPath={pathname}
      onToggleSidebar={toggleSidebar}
      onOpenLoginModal={handleOpenLogin}
    />
  );
}
