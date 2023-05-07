import { YellowBox } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { UserProvider } from './src/context/UserContext';
import { MainNavigation } from './src/navigation';

export default function App() {
  // Disable all warnings
  console.disableYellowBox = true;
  YellowBox.ignoreWarnings(['']);

  return (
    <UserProvider>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </UserProvider>
  );
}
