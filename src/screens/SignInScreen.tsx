import { FC, memo, useCallback } from 'react';
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
  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <Container>
      <Text>SignIn</Text>

      <Input
        title="EMAIL"
        icon="email"
        placeholder="Please enter your email"
        keyboardType="email-address"
        returnKeyType="next"
      />

      <Button title="SignUp" onPress={onSignUp} />
    </Container>
  );
};

export default memo(SignInScreen);
