'use client';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';

interface LoginModalViewProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function LoginModalView({ isOpen, onClose, onSubmit }: LoginModalViewProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: { borderRadius: 3, p: 1 },
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Sign In
        </Typography>
        <IconButton size="small" onClick={onClose} aria-label="close">
          <Close />
        </IconButton>
      </DialogTitle>

      <Box component="form" onSubmit={onSubmit}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, pt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Sign in to bookmark recipes, submit new recipes, and leave reviews.
          </Typography>
          <TextField
            autoFocus
            required
            label="Email or Username"
            type="text"
            fullWidth
            size="small"
          />
          <TextField
            required
            label="Password"
            type="password"
            fullWidth
            size="small"
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button onClick={onClose} color="inherit" sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'none', px: 3 }}>
            Sign In
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
