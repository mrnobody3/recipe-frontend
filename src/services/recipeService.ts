import api from '../lib/api';
import type { PaginatedResponseDto } from '../types/api';
import type {
  RecipeCreateRequestDto,
  RecipeDetailDto,
  RecipeFilterParamsDto,
  RecipeListDto,
  RecipeUpdateRequestDto,
} from '../types/recipe';

export const recipeService = {
  /**
   * Fetches paginated list of recipes with optional filters
   */
  async getRecipes(params?: RecipeFilterParamsDto): Promise<PaginatedResponseDto<RecipeListDto>> {
    const response = await api.get<PaginatedResponseDto<RecipeListDto>>('/recipes/', {
      params,
    });
    return response.data;
  },

  /**
   * Fetches full detail of a specific recipe
   */
  async getRecipeById(id: string | number): Promise<RecipeDetailDto> {
    const response = await api.get<RecipeDetailDto>(`/recipes/${id}/`);
    return response.data;
  },

  /**
   * Creates a new recipe
   */
  async createRecipe(payload: RecipeCreateRequestDto): Promise<RecipeDetailDto> {
    const response = await api.post<RecipeDetailDto>('/recipes/', payload);
    return response.data;
  },

  /**
   * Updates an existing recipe
   */
  async updateRecipe(id: string | number, payload: RecipeUpdateRequestDto): Promise<RecipeDetailDto> {
    const response = await api.patch<RecipeDetailDto>(`/recipes/${id}/`, payload);
    return response.data;
  },

  /**
   * Deletes a recipe
   */
  async deleteRecipe(id: string | number): Promise<void> {
    await api.delete(`/recipes/${id}/`);
  },

  /**
   * Toggles bookmark / favorite status for a recipe
   */
  async toggleFavorite(id: number): Promise<{ is_favorite: boolean }> {
    const response = await api.post<{ is_favorite: boolean }>(`/recipes/${id}/favorite/`);
    return response.data;
  },
};
