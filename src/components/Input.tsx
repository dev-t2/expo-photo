import { FC, memo, Ref, useCallback, useMemo, useState } from 'react';
import { KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
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
  borderBottomWidth: 1,
  marginHorizontal: 10,
});

const StyledTextInput = styled.TextInput({
  flex: 1,
  height: 40,
  paddingHorizontal: 10,
});

interface IInput extends TextInputProps {
  inputRef?: Ref<TextInput>;
  types: 'email' | 'password';
  returnKeyType?: ReturnKeyTypeOptions;
  value?: string;
}

const Input: FC<IInput> = ({ inputRef, types, returnKeyType = 'done', value, ...props }) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const { title, placeholder, keyboardType, secureTextEntry } = useMemo(() => {
    if (types === 'email') {
      return {
        title: 'EMAIL',
        placeholder: 'Please enter your email',
        keyboardType: 'email-address' as KeyboardTypeOptions,
        secureTextEntry: false,
      };
    }

    if (types === 'password') {
      return {
        title: 'PASSWORD',
        placeholder: 'Please enter your password',
        keyboardType: 'default' as KeyboardTypeOptions,
        secureTextEntry: true,
      };
    }

    return {};
  }, [types]);

  const icon = useMemo(() => {
    if (types === 'email') {
      return isFocused ? 'email' : 'email-outline';
    }

    if (types === 'password') {
      return isFocused ? 'lock' : 'lock-outline';
    }
  }, [types, isFocused]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Title>{title}</Title>

      <InputContainer>
        <MaterialCommunityIcons name={icon} size={24} color={theme.colors.black} />

        <StyledTextInput
          {...props}
          ref={inputRef}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputContainer>
    </Container>
  );
};

export default memo(Input);
