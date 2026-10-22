'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Explore, AddCircle, MenuBook, Star, Speed } from '@mui/icons-material';
import type { RecipeListDto } from '../../types/recipe';
import { RecipeGridView } from '../recipes/RecipeGrid/RecipeGridView';

interface HomeViewProps {
  featuredRecipes: RecipeListDto[];
  isLoading: boolean;
  onToggleFavorite?: (id: number) => void;
}

export function HomeView({
  featuredRecipes,
  isLoading,
  onToggleFavorite,
}: HomeViewProps) {
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: { xs: 0, sm: 4 },
          p: { xs: 4, md: 8 },
          mb: 6,
          mt: { xs: 0, sm: 2 },
          textAlign: 'center',
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.15, fontWeight: 800 }}
          >
            Discover, Cook & Share Great Recipes
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.5,
            }}
          >
            Explore hundreds of community-crafted culinary masterpieces with clear, step-by-step guidance.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/recipes"
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<Explore />}
              sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 700 }}
            >
              Browse Recipes
            </Button>
            <Button
              component={Link}
              href="/recipes/create"
              variant="outlined"
              size="large"
              startIcon={<AddCircle />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Create Recipe
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* Feature Highlights */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'primary.light',
                  color: 'primary.main',
                  display: 'flex',
                }}
              >
                <MenuBook />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Diverse Cuisines
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  From quick 15-minute dinners to artisan baked goods.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'success.light',
                  color: 'success.dark',
                  display: 'flex',
                }}
              >
                <Speed />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Step-by-Step Cooking
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clear instructions and exact ingredient measurements.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'warning.light',
                  color: 'warning.dark',
                  display: 'flex',
                }}
              >
                <Star />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Save Your Favorites
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Bookmark recipes to cook anytime on any device.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Recipes Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Featured Recipes
          </Typography>
          <Button
            component={Link}
            href="/recipes"
            color="primary"
            sx={{ fontWeight: 600, textTransform: 'none' }}
          >
            View All →
          </Button>
        </Box>

        <RecipeGridView
          recipes={featuredRecipes}
          isLoading={isLoading}
          onToggleFavorite={onToggleFavorite}
        />
      </Container>
    </Box>
  );
}
