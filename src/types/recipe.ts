export type RecipeDifficulty = 'easy' | 'medium' | 'hard';

export interface AuthorDto {
  id: number;
  username: string;
  avatar_url?: string | null;
}

export interface TagDto {
  id: number;
  name: string;
  slug: string;
}

export interface IngredientDto {
  id?: number;
  name: string;
  amount: string;
  unit?: string;
}

export interface RecipeStepDto {
  step_number: number;
  instruction: string;
}

/**
 * Lightweight DTO for recipe list cards (matches Django RecipeListSerializer)
 */
export interface RecipeListDto {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  cooking_time_minutes: number;
  difficulty: RecipeDifficulty;
  author: AuthorDto;
  tags: TagDto[];
  likes_count: number;
  is_favorite?: boolean;
  created_at: string;
}

/**
 * Comprehensive DTO for recipe detail view (matches Django RecipeDetailSerializer)
 */
export interface RecipeDetailDto {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  cooking_time_minutes: number;
  prep_time_minutes: number;
  servings: number;
  difficulty: RecipeDifficulty;
  author: AuthorDto;
  tags: TagDto[];
  ingredients: IngredientDto[];
  steps: RecipeStepDto[];
  likes_count: number;
  is_favorite?: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Request payload for creating a new recipe
 */
export interface RecipeCreateRequestDto {
  title: string;
  description: string;
  image_url?: string;
  cooking_time_minutes: number;
  prep_time_minutes: number;
  servings: number;
  difficulty: RecipeDifficulty;
  tag_ids?: number[];
  ingredients: Omit<IngredientDto, 'id'>[];
  steps: RecipeStepDto[];
}

/**
 * Request payload for updating an existing recipe
 */
export type RecipeUpdateRequestDto = Partial<RecipeCreateRequestDto>;

/**
 * Query filter parameters for listing recipes
 */
export interface RecipeFilterParamsDto {
  search?: string;
  tag?: string;
  difficulty?: RecipeDifficulty;
  ordering?: string;
  page?: number;
  page_size?: number;
}
