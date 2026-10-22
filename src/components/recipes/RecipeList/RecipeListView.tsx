'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import { Search } from '@mui/icons-material';
import type { RecipeListDto, RecipeDifficulty } from '../../../types/recipe';
import { RecipeGridView } from '../RecipeGrid/RecipeGridView';
import { EmptyState } from '../../common/EmptyState';

interface RecipeListViewProps {
  recipes: RecipeListDto[];
  isLoading: boolean;
  searchQuery: string;
  selectedDifficulty?: RecipeDifficulty;
  page: number;
  totalPages: number;
  onSearchChange: (value: string) => void;
  onDifficultyChange: (difficulty?: RecipeDifficulty) => void;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  onToggleFavorite?: (id: number) => void;
}

const difficulties: { label: string; value?: RecipeDifficulty }[] = [
  { label: 'All Difficulties', value: undefined },
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
];

export function RecipeListView({
  recipes,
  isLoading,
  searchQuery,
  selectedDifficulty,
  page,
  totalPages,
  onSearchChange,
  onDifficultyChange,
  onPageChange,
  onToggleFavorite,
}: RecipeListViewProps) {
  return (
    <Box sx={{ py: 2 }}>
      {/* Header & Controls */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Explore Recipes
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Discover delicious recipes curated by our community.
        </Typography>

        {/* Search & Filter Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: { xs: 'stretch', sm: 'center' },
            justifyContent: 'space-between',
          }}
        >
          <TextField
            placeholder="Search recipes, ingredients..."
            size="small"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ maxWidth: { sm: 360 }, width: '100%' }}
          />

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {difficulties.map((item) => {
              const isSelected = selectedDifficulty === item.value;
              return (
                <Chip
                  key={item.label}
                  label={item.label}
                  clickable
                  color={isSelected ? 'primary' : 'default'}
                  variant={isSelected ? 'filled' : 'outlined'}
                  onClick={() => onDifficultyChange(item.value)}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* Grid Content */}
      {!isLoading && recipes.length === 0 ? (
        <EmptyState
          title="No recipes found"
          description={
            searchQuery
              ? `No recipes matched your search for "${searchQuery}". Try a different keyword or reset filters.`
              : 'There are no recipes available currently. Be the first to add one!'
          }
          actionLabel={searchQuery ? 'Clear Search' : 'Add Recipe'}
          onAction={searchQuery ? () => onSearchChange('') : undefined}
        />
      ) : (
        <RecipeGridView
          recipes={recipes}
          isLoading={isLoading}
          onToggleFavorite={onToggleFavorite}
        />
      )}

      {/* Pagination */}
      {!isLoading && totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={onPageChange}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}
    </Box>
  );
}
