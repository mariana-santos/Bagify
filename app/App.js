import { ThemeProvider } from './src/context/ThemeContext';
import { UserProvider } from './src/context/UserContext';
import { MainNavigation } from './src/navigation';

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </UserProvider>
  );
}
