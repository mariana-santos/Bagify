import { ThemeProvider } from './src/context/ThemeContext';
import { MainNavigation } from './src/navigation';

export default function App() {
  return (
    <ThemeProvider>
      <MainNavigation />
    </ThemeProvider>
  );
}
