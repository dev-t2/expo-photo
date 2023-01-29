import { memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const SignUpScreen = () => {
  return (
    <Container>
      <Text>SignUp</Text>
    </Container>
  );
};

export default memo(SignUpScreen);
