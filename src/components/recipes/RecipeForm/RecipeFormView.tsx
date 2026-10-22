'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AddCircle } from '@mui/icons-material';

interface RecipeFormViewProps {
  isSubmitting?: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export function RecipeFormView({ isSubmitting = false, onSubmit }: RecipeFormViewProps) {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Create New Recipe
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Share your culinary masterpiece with the community.
      </Typography>

      <Paper
        component="form"
        onSubmit={onSubmit}
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TextField
              required
              fullWidth
              label="Recipe Title"
              placeholder="e.g. Classic Creamy Carbonara"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              required
              fullWidth
              multiline
              rows={3}
              label="Short Description"
              placeholder="A brief overview of the recipe, its origin or unique flavor profile."
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              required
              fullWidth
              type="number"
              label="Prep Time (minutes)"
              defaultValue={15}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              required
              fullWidth
              type="number"
              label="Cooking Time (minutes)"
              defaultValue={30}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <TextField
              required
              fullWidth
              type="number"
              label="Servings"
              defaultValue={4}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              fullWidth
              label="Difficulty"
              defaultValue="medium"
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Image URL"
              placeholder="https://example.com/photo.jpg"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              startIcon={<AddCircle />}
              sx={{ mt: 2, borderRadius: 2, px: 4 }}
            >
              {isSubmitting ? 'Publishing...' : 'Publish Recipe'}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
