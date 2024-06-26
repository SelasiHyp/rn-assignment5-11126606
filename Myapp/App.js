// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider, useTheme } from './ThemeContext'; // Ensure correct import
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();

function Main() {
  const { theme, paperTheme } = useTheme();

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}
