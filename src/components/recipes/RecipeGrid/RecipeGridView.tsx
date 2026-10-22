'use client';

import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { RecipeListDto } from '../../../types/recipe';
import { RecipeCardView } from '../RecipeCard/RecipeCardView';

interface RecipeGridViewProps {
  recipes?: RecipeListDto[];
  isLoading?: boolean;
  onToggleFavorite?: (id: number) => void;
}

export function RecipeGridView({
  recipes = [],
  isLoading = false,
  onToggleFavorite,
}: RecipeGridViewProps) {
  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: 3, height: '100%' }}>
              <Skeleton variant="rectangular" height={190} />
              <CardContent>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Skeleton variant="rounded" width={60} height={24} />
                  <Skeleton variant="rounded" width={80} height={24} />
                </Box>
                <Skeleton variant="text" height={28} width="85%" sx={{ mb: 1 }} />
                <Skeleton variant="text" height={20} width="100%" />
                <Skeleton variant="text" height={20} width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <RecipeCardView recipe={recipe} onToggleFavorite={onToggleFavorite} />
        </Grid>
      ))}
    </Grid>
  );
}
