'use client';

import Link from 'next/link';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { AccessTime, Bookmark, BookmarkBorder } from '@mui/icons-material';
import type { RecipeListDto, RecipeDifficulty } from '@/types/recipe';

interface RecipeCardViewProps {
  recipe: RecipeListDto;
  onToggleFavorite?: (id: number) => void;
}

const difficultyColors: Record<RecipeDifficulty, 'success' | 'warning' | 'error'> = {
  easy: 'success',
  medium: 'warning',
  hard: 'error',
};

export function RecipeCardView({ recipe, onToggleFavorite }: RecipeCardViewProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.(recipe.id);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="190"
          image={recipe.image_url || '/placeholder-recipe.jpg'}
          alt={recipe.title}
          sx={{ objectFit: 'cover', bgcolor: 'action.hover' }}
        />
        <IconButton
          aria-label="bookmark recipe"
          onClick={handleFavoriteClick}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(4px)',
            '&:hover': { bgcolor: 'white' },
          }}
          size="small"
        >
          {recipe.is_favorite ? <Bookmark color="primary" /> : <BookmarkBorder />}
        </IconButton>
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
          <Chip
            size="small"
            label={recipe.difficulty.toUpperCase()}
            color={difficultyColors[recipe.difficulty] || 'default'}
            sx={{ fontWeight: 600, fontSize: '0.7rem' }}
          />
          <Chip
            size="small"
            icon={<AccessTime fontSize="small" />}
            label={`${recipe.cooking_time_minutes} min`}
            variant="outlined"
            sx={{ fontSize: '0.7rem' }}
          />
        </Box>

        <Typography
          variant="h6"
          component={Link}
          href={`/recipes/${recipe.id}`}
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
            fontWeight: 600,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.3,
            mb: 1,
            '&:hover': { color: 'primary.main' },
          }}
        >
          {recipe.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {recipe.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            src={recipe.author.avatar_url || undefined}
            alt={recipe.author.username}
            sx={{ width: 24, height: 24, fontSize: '0.75rem' }}
          >
            {recipe.author.username[0]?.toUpperCase()}
          </Avatar>
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
            {recipe.author.username}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
