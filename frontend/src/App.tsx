import {ThemeProvider} from "@/components/theme-provider.tsx";
import { Toaster } from "@/components/ui/sonner"
import { SampleDataProvider } from "@/contexts/SampleDataContext";
import SimpleRouter from "@/routes/SimpleRoutes.tsx";

function App() {
  return (
    <ThemeProvider>
      <SampleDataProvider>
        <SimpleRouter />
        <Toaster />
      </SampleDataProvider>
    </ThemeProvider>
  )
}

export default App
