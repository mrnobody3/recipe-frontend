'use client';

import { useState } from 'react';
import Container from '@mui/material/Container';
import { useRecipes, useToggleFavoriteMutation } from '../../hooks/queries/useRecipesQuery';
import { RecipeListView } from '../../components/recipes/RecipeList/RecipeListView';
import { ErrorState } from '../../components/common/ErrorState';
import type { RecipeDifficulty } from '../../types/recipe';

const PAGE_SIZE = 9;

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<RecipeDifficulty | undefined>();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, refetch } = useRecipes({
    search: searchQuery || undefined,
    difficulty: selectedDifficulty,
    page,
    page_size: PAGE_SIZE,
  });

  const toggleFavoriteMutation = useToggleFavoriteMutation();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  const handleDifficultyChange = (difficulty?: RecipeDifficulty) => {
    setSelectedDifficulty(difficulty);
    setPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleFavorite = (id: number) => {
    toggleFavoriteMutation.mutate(id);
  };

  const recipes = data?.results || [];
  const totalCount = data?.count || 0;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  return (
    <Container maxWidth="lg">
      {isError ? (
        <ErrorState
          title="Could not load recipes"
          message={error instanceof Error ? error.message : 'Please check your connection.'}
          onRetry={() => refetch()}
        />
      ) : (
        <RecipeListView
          recipes={recipes}
          isLoading={isLoading}
          searchQuery={searchQuery}
          selectedDifficulty={selectedDifficulty}
          page={page}
          totalPages={totalPages}
          onSearchChange={handleSearchChange}
          onDifficultyChange={handleDifficultyChange}
          onPageChange={handlePageChange}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </Container>
  );
}
