import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { SampleDataProvider } from './contexts/SampleDataContext';
import { Toaster } from './components/ui/sonner';
import { router } from './routes/SimpleRoutes';

function App() {
  return (
    <ThemeProvider>
      <SampleDataProvider>
        <RouterProvider router={router} />
        <Toaster />
      </SampleDataProvider>
    </ThemeProvider>
  );
}

export default App;
