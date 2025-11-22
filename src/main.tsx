import './i18n/index.ts';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import AppRoutes from './routes/Routes.tsx'
import { ThemeProvider } from './common/componentShadcn/theme/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
)