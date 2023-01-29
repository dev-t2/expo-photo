import { memo, useMemo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useTheme } from '@emotion/react';

import { SignInScreen, SignUpScreen } from '../screens';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;
export type SignUpScreenProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo<NativeStackNavigationOptions>(() => {
    return { contentStyle: { backgroundColor: theme.colors.white } };
  }, [theme.colors]);

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="SignUp" component={SignUpScreen} />
    </Navigator>
  );
};

export default memo(AuthStack);
