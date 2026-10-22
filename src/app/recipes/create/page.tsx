'use client';

import Container from '@mui/material/Container';
import { useCreateRecipeMutation } from '../../../hooks/queries/useRecipesQuery';
import { RecipeFormView } from '../../../components/recipes/RecipeForm/RecipeFormView';

export default function CreateRecipePage() {
  const createMutation = useCreateRecipeMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder handler awaiting Formik + Yup setup
    alert('Recipe form submitted! Formik + Yup validation will be wired next.');
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <RecipeFormView
        isSubmitting={createMutation.isPending}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
