import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export function FooterView() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 RecipePortal. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/recipes"
              style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.875rem' }}
            >
              Explore Recipes
            </Link>
            <Link
              href="/favorites"
              style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.875rem' }}
            >
              Favorites
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
