'use client';

import { Suspense, use } from 'react';
import { Container } from '@mui/material';
import { useRecipeDetail, useToggleFavoriteMutation } from '@/hooks/queries/useRecipesQuery';
import { RecipeDetailView } from '@/components/recipes/RecipeDetail/RecipeDetailView';
import { LoadingState } from '@/components/common/LoadingState';
import { ErrorState } from '@/components/common/ErrorState';

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

function RecipeDetailContent({ params }: RecipePageProps) {
  const resolvedParams = use(params);
  const recipeId = resolvedParams.id;

  const { data: recipe, isLoading, isError, error, refetch } = useRecipeDetail(recipeId);
  const toggleFavoriteMutation = useToggleFavoriteMutation();

  const handleToggleFavorite = (id: number) => {
    toggleFavoriteMutation.mutate(id);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {isLoading && <LoadingState message="Loading recipe details..." minHeight="50vh" />}

      {isError && (
        <ErrorState
          title="Recipe Not Found"
          message={error instanceof Error ? error.message : 'Could not find the requested recipe.'}
          onRetry={() => refetch()}
        />
      )}

      {recipe && <RecipeDetailView recipe={recipe} onToggleFavorite={handleToggleFavorite} />}
    </Container>
  );
}

export default function RecipeDetailPage({ params }: RecipePageProps) {
  return (
    <Suspense fallback={<LoadingState message="Loading recipe details..." minHeight="50vh" />}>
      <RecipeDetailContent params={params} />
    </Suspense>
  );
}
