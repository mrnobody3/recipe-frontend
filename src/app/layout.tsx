import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

export const metadata: Metadata = {
  title: 'Recipe Portal',
  description: 'Find your next favorite recipe!',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
