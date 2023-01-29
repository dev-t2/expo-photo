import { memo, useMemo } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import AuthStack, { AuthStackParamList } from './AuthStack';

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { headerShown: false };
  }, []);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="AuthStack" component={AuthStack} />
    </Navigator>
  );
};

export default memo(RootStack);
