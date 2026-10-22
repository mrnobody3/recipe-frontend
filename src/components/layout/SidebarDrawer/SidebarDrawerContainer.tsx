'use client';

import { usePathname } from 'next/navigation';
import { useIsSidebarOpen, useSetSidebarOpen, useOpenModal } from '../../../store/hooks/useUI';
import { MAIN_NAV_ITEMS } from '../../../constants/navigation';
import { SidebarDrawerView } from './SidebarDrawerView';

export function SidebarDrawerContainer() {
  const pathname = usePathname();
  const isOpen = useIsSidebarOpen();
  const setSidebarOpen = useSetSidebarOpen();
  const openModal = useOpenModal();

  const handleClose = () => {
    setSidebarOpen(false);
  };

  const handleOpenLogin = () => {
    openModal('login');
  };

  return (
    <SidebarDrawerView
      isOpen={isOpen}
      navLinks={MAIN_NAV_ITEMS}
      currentPath={pathname}
      onClose={handleClose}
      onOpenLoginModal={handleOpenLogin}
    />
  );
}
