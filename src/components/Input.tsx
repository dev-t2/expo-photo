import { FC, memo, Ref } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from '@emotion/native';

const Container = styled.View({
  width: '100%',
});

const Title = styled.Text({
  fontWeight: '700',
});

const InputContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  borderBottomWidth: 1,
  marginTop: 4,
});

const StyledTextInput = styled.TextInput({
  flex: 1,
  height: 40,
  paddingLeft: 10,
});

interface IInput extends TextInputProps {
  inputRef?: Ref<TextInput>;
  title: string;
  icon: 'email' | 'lock';
  value: string;
}

const Input: FC<IInput> = ({ inputRef, title, icon, value, ...props }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <InputContainer>
        <MaterialCommunityIcons name={icon} size={20} />

        <StyledTextInput
          {...props}
          ref={inputRef}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          value={value}
        />
      </InputContainer>
    </Container>
  );
};

export default memo(Input);
