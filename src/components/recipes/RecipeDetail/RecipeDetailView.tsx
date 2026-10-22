'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {
  AccessTime,
  People,
  Bookmark,
  BookmarkBorder,
  ArrowBack,
  CheckCircleOutlined,
} from '@mui/icons-material';
import type { RecipeDetailDto } from '../../../types/recipe';

interface RecipeDetailViewProps {
  recipe: RecipeDetailDto;
  onToggleFavorite?: (id: number) => void;
}

export function RecipeDetailView({ recipe, onToggleFavorite }: RecipeDetailViewProps) {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 2 }}>
      {/* Top Bar: Back & Favorite action */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Button
          component={Link}
          href="/recipes"
          startIcon={<ArrowBack />}
          color="inherit"
          sx={{ textTransform: 'none' }}
        >
          Back to Recipes
        </Button>
        <Button
          variant={recipe.is_favorite ? 'contained' : 'outlined'}
          color="primary"
          startIcon={recipe.is_favorite ? <Bookmark /> : <BookmarkBorder />}
          onClick={() => onToggleFavorite?.(recipe.id)}
          sx={{ borderRadius: 2, textTransform: 'none' }}
        >
          {recipe.is_favorite ? 'Saved' : 'Save Recipe'}
        </Button>
      </Box>

      {/* Recipe Title & Meta Header */}
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        {recipe.title}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
        {recipe.description}
      </Typography>

      {/* Author and Date */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
        <Avatar src={recipe.author.avatar_url || undefined}>
          {recipe.author.username[0]?.toUpperCase()}
        </Avatar>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {recipe.author.username}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Published on {new Date(recipe.created_at).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>

      {/* Hero Image */}
      {recipe.image_url && (
        <Card sx={{ borderRadius: 4, mb: 4, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="420"
            image={recipe.image_url}
            alt={recipe.title}
            sx={{ objectFit: 'cover' }}
          />
        </Card>
      )}

      {/* Key Stats Bar */}
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 3,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          mb: 4,
          display: 'flex',
          justifyContent: 'space-around',
          textAlign: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            <AccessTime fontSize="small" color="primary" />
            <Typography variant="caption" color="text.secondary">
              Prep Time
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {recipe.prep_time_minutes} min
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            <AccessTime fontSize="small" color="primary" />
            <Typography variant="caption" color="text.secondary">
              Cook Time
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {recipe.cooking_time_minutes} min
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            <People fontSize="small" color="primary" />
            <Typography variant="caption" color="text.secondary">
              Servings
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {recipe.servings}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box>
          <Typography variant="caption" color="text.secondary">
            Difficulty
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, textTransform: 'capitalize' }}>
            {recipe.difficulty}
          </Typography>
        </Box>
      </Paper>

      {/* Content: Ingredients & Steps */}
      <Grid container spacing={4}>
        {/* Ingredients Column */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
            Ingredients
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
            }}
          >
            <List disablePadding>
              {recipe.ingredients.map((item, idx) => (
                <ListItem key={idx} sx={{ px: 0, py: 1, borderBottom: idx < recipe.ingredients.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleOutlined fontSize="small" color="action" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.amount} {item.unit || ''}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Tags */}
          {recipe.tags && recipe.tags.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {recipe.tags.map((tag) => (
                  <Chip key={tag.id} label={`#${tag.name}`} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
          )}
        </Grid>

        {/* Instructions Column */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
            Instructions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {recipe.steps.map((step) => (
              <Paper
                key={step.step_number}
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  display: 'flex',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {step.step_number}
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.6, pt: 0.25 }}>
                  {step.instruction}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
