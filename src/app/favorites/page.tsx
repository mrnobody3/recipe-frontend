'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BookmarkBorder } from '@mui/icons-material';
import { useRecipes, useToggleFavoriteMutation } from '../../hooks/queries/useRecipesQuery';
import { RecipeGridView } from '../../components/recipes/RecipeGrid/RecipeGridView';
import { EmptyState } from '../../components/common/EmptyState';
import { ErrorState } from '../../components/common/ErrorState';

export default function FavoritesPage() {
  // Query saved/favorite recipes from Django backend
  const { data, isLoading, isError, error, refetch } = useRecipes({
    ordering: '-created_at',
  });

  const toggleFavoriteMutation = useToggleFavoriteMutation();

  const handleToggleFavorite = (id: number) => {
    toggleFavoriteMutation.mutate(id);
  };

  // Filter recipes marked as favorite
  const favoriteRecipes = data?.results ? data.results.filter((recipe) => recipe.is_favorite) : [];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Saved Recipes
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your personal collection of bookmarked culinary ideas.
        </Typography>
      </Box>

      {isError && (
        <ErrorState
          title="Could not load favorites"
          message={error instanceof Error ? error.message : 'Please check your connection.'}
          onRetry={() => refetch()}
        />
      )}

      {!isLoading && !isError && favoriteRecipes.length === 0 ? (
        <EmptyState
          icon={<BookmarkBorder sx={{ fontSize: 56, opacity: 0.7 }} />}
          title="No saved recipes yet"
          description="Whenever you find a recipe you love, click the bookmark icon on the card to save it here."
        />
      ) : (
        <RecipeGridView
          recipes={favoriteRecipes}
          isLoading={isLoading}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </Container>
  );
}
