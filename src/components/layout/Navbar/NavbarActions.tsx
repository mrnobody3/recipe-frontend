'use client';

import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { AccountCircleSharp as AccountCircleSharpIcon } from '@mui/icons-material';

export interface NavbarActionsProps {
  onOpenLoginModal: () => void;
}

export function NavbarActions({ onOpenLoginModal }: NavbarActionsProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Button
        component={Link}
        href="/login"
        variant="text"
        color="primary"
        size="small"
        startIcon={<AccountCircleSharpIcon />}
        sx={{
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 2,
          display: { xs: 'none', sm: 'inline-flex' },
        }}
      >
        Sign In
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={onOpenLoginModal}
        sx={{ textTransform: 'none', borderRadius: 100 }}
      >
        Sign Up
      </Button>
    </Box>
  );
}
