'use client';

import { Suspense, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import { NavbarContainer } from './Navbar/NavbarContainer';
import { SidebarDrawerContainer } from './SidebarDrawer/SidebarDrawerContainer';
import { FooterView } from './Footer/FooterView';
import { LoginModalContainer } from '../auth/LoginModal/LoginModalContainer';
import { LoadingState } from '../common/LoadingState';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Suspense fallback={null}>
        <NavbarContainer />
        <SidebarDrawerContainer />
      </Suspense>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Suspense fallback={<LoadingState minHeight="60vh" />}>
          {children}
        </Suspense>
      </Box>
      <FooterView />
      <LoginModalContainer />
    </Box>
  );
}
