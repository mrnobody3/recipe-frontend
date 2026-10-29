'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Container } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { SproutIcon } from '@/components/icons/SproutIcon';
import type { NavItem } from '@/types/navigation';
import { NavbarActions } from './NavbarActions';

export interface NavbarViewProps {
  navLinks: NavItem[];
  currentPath: string;
  onToggleSidebar: () => void;
  onOpenLoginModal: () => void;
}

export function NavbarView({
  navLinks,
  currentPath,
  onToggleSidebar,
  onOpenLoginModal,
}: NavbarViewProps) {
  return (
    <AppBar position="sticky" elevation={1} color="default" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 88 }}>
          {/* Left section: Mobile menu icon & Brand Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onToggleSidebar}
              sx={{ display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>

            <Link
              href="/"
              prefetch
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <SproutIcon color="primary" sx={{ fontSize: 28 }} />
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '.0rem',
                  color: 'primary.black',
                }}
              >
                смак.
              </Typography>
            </Link>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navLinks.map((item) => {
              const isActive = currentPath === item.href;
              const IconComponent = item.icon;

              return (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  color={isActive ? 'primary' : 'secondary'}
                  variant="text"
                  startIcon={IconComponent ? <IconComponent /> : undefined}
                  sx={{
                    fontWeight: isActive ? 600 : 500,
                    textTransform: 'none',
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Right Action buttons */}
          <NavbarActions onOpenLoginModal={onOpenLoginModal} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
