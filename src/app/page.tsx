'use client';

import { useRecipes, useToggleFavoriteMutation } from '../hooks/queries/useRecipesQuery';
import { HomeView } from '../components/home/HomeView';

export default function HomePage() {
  const { data, isLoading } = useRecipes({ page_size: 6 });
  const toggleFavoriteMutation = useToggleFavoriteMutation();

  const handleToggleFavorite = (id: number) => {
    toggleFavoriteMutation.mutate(id);
  };

  const featuredRecipes = data?.results || [];

  return (
    <HomeView
      featuredRecipes={featuredRecipes}
      isLoading={isLoading}
      onToggleFavorite={handleToggleFavorite}
    />
  );
}
