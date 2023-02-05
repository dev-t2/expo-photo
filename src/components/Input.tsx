import { FC, memo, Ref, useCallback, useMemo, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  width: '100%',
});

interface ITitle {
  isActive: boolean;
}

const Title = styled.Text<ITitle>(({ theme, isActive }) => ({
  fontWeight: '700',
  color: isActive ? theme.colors.orange[500] : theme.colors.gray[500],
}));

interface IInputContainer {
  isActive: boolean;
}

const InputContainer = styled.View<IInputContainer>(({ theme, isActive }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: isActive ? theme.colors.orange[500] : theme.colors.gray[500],
  marginHorizontal: 10,
}));

interface IStyledTextInput {
  isActive: boolean;
}

const StyledTextInput = styled.TextInput<IStyledTextInput>(({ theme, isActive }) => ({
  flex: 1,
  height: 40,
  color: isActive ? theme.colors.orange[500] : theme.colors.gray[500],
  paddingHorizontal: 10,
}));

interface IInput extends TextInputProps {
  inputRef?: Ref<TextInput>;
  types: 'email' | 'password';
  value?: string;
}

const Input: FC<IInput> = ({ inputRef, types, value, ...props }) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const { title, placeholder, secureTextEntry } = useMemo(() => {
    if (types === 'email') {
      return {
        title: 'EMAIL',
        placeholder: 'Please enter your email',
        secureTextEntry: false,
      };
    }

    if (types === 'password') {
      return {
        title: 'PASSWORD',
        placeholder: 'Please enter your password',
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

  const keyboardType = useMemo(() => {
    return types === 'email' ? 'email-address' : 'default';
  }, [types]);

  const isActive = useMemo(() => isFocused || !!value, [isFocused, value]);

  const IconColor = useMemo(() => {
    return isActive ? theme.colors.orange[500] : theme.colors.gray[500];
  }, [isActive, theme.colors]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Title isActive={isActive}>{title}</Title>

      <InputContainer isActive={isActive}>
        <MaterialCommunityIcons name={icon} size={24} color={IconColor} />

        <StyledTextInput
          {...props}
          ref={inputRef}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          isActive={isActive}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputContainer>
    </Container>
  );
};

export default memo(Input);
