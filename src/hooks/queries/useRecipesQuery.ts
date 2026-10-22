import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { recipeService } from '../../services/recipeService';
import type {
  RecipeCreateRequestDto,
  RecipeFilterParamsDto,
} from '../../types/recipe';

export const recipeKeys = {
  all: ['recipes'] as const,
  lists: () => [...recipeKeys.all, 'list'] as const,
  list: (params?: RecipeFilterParamsDto) => [...recipeKeys.lists(), params] as const,
  details: () => [...recipeKeys.all, 'detail'] as const,
  detail: (id: string | number) => [...recipeKeys.details(), id] as const,
};

/**
 * Hook to fetch paginated recipes list
 */
export function useRecipes(params?: RecipeFilterParamsDto) {
  return useQuery({
    queryKey: recipeKeys.list(params),
    queryFn: () => recipeService.getRecipes(params),
  });
}

/**
 * Hook to fetch single recipe details
 */
export function useRecipeDetail(id: string | number) {
  return useQuery({
    queryKey: recipeKeys.detail(id),
    queryFn: () => recipeService.getRecipeById(id),
    enabled: Boolean(id),
  });
}

/**
 * Hook to create a recipe
 */
export function useCreateRecipeMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RecipeCreateRequestDto) => recipeService.createRecipe(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: recipeKeys.lists() });
    },
  });
}

/**
 * Hook to toggle favorite status
 */
export function useToggleFavoriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => recipeService.toggleFavorite(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: recipeKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: recipeKeys.lists() });
    },
  });
}
