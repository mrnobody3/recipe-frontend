'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Close, Restaurant, Login } from '@mui/icons-material';
import type { NavItem } from '../../../types/navigation';

export interface SidebarDrawerViewProps {
  isOpen: boolean;
  navLinks: NavItem[];
  currentPath: string;
  onClose: () => void;
  onOpenLoginModal: () => void;
}

export function SidebarDrawerView({
  isOpen,
  navLinks,
  currentPath,
  onClose,
  onOpenLoginModal,
}: SidebarDrawerViewProps) {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: { width: 280, bgcolor: 'background.default' },
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Restaurant color="primary" />
          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
            RecipePortal
          </Typography>
        </Box>
        <IconButton onClick={onClose} edge="end" aria-label="close drawer">
          <Close />
        </IconButton>
      </Box>

      {/* Navigation List */}
      <List sx={{ px: 1, py: 2 }}>
        {navLinks.map((item) => {
          const isActive = currentPath === item.href;
          const IconComponent = item.icon;

          return (
            <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={onClose}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  '&.Mui-selected': {
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    '&:hover': {
                      bgcolor: 'primary.main',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'primary.contrastText',
                    },
                  },
                }}
              >
                {IconComponent && (
                  <ListItemIcon sx={{ minWidth: 40, color: isActive ? 'inherit' : 'text.secondary' }}>
                    <IconComponent />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: { fontWeight: isActive ? 600 : 500 },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<Login />}
          onClick={() => {
            onClose();
            onOpenLoginModal();
          }}
          sx={{ borderRadius: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Drawer>
  );
}
