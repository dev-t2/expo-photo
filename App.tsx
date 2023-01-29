import { memo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@emotion/react';

import theme from './src/theme';
import RootStack from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />

        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default memo(App);
