import { FC, memo, useCallback, useState } from 'react';
import { Button, Text } from 'react-native';
import styled from '@emotion/native';

import { SignInScreenProps } from '../navigations/AuthStack';
import { Input } from '../components';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email.trim());
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(password.trim());
  }, []);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container>
      <Text>SignIn</Text>

      <Input types="email" returnKeyType="next" value={email} onChangeText={onChangeEmail} />

      <Input
        types="password"
        returnKeyType="done"
        value={password}
        onChangeText={onChangePassword}
      />

      <Button title="SignUp" onPress={onSignUp} />
    </Container>
  );
};

export default memo(SignInScreen);
