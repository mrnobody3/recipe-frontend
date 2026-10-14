import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Home() {

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Recipe Portal
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Connected to Django REST API
        </Typography>
        <Button variant="contained" color="primary">
          Test MUI Button
        </Button>
      </Box>
    </Container>
  );
}
