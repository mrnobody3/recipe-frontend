'use client';

import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Menu, Restaurant, AddCircle, Login } from '@mui/icons-material';
import type { NavItem } from '../../../types/navigation';

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
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 64 }}>
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
              <Restaurant color="primary" sx={{ fontSize: 28 }} />
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '.05rem',
                  color: 'primary.main',
                }}
              >
                RecipePortal
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
                  color={isActive ? 'primary' : 'inherit'}
                  variant={isActive ? 'outlined' : 'text'}
                  startIcon={IconComponent ? <IconComponent /> : undefined}
                  sx={{
                    fontWeight: isActive ? 600 : 500,
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 2,
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Right Action buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              component={Link}
              href="/recipes/create"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<AddCircle />}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 2,
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              New Recipe
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="small"
              startIcon={<Login />}
              onClick={onOpenLoginModal}
              sx={{ textTransform: 'none', borderRadius: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
