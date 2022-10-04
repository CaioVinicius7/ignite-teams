import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>;
}

export function Input({ inputRef, ...props }: InputProps) {
  const { colors } = useTheme();

  return (
    <Container
      placeholderTextColor={colors.gray_300}
      ref={inputRef}
      {...props}
    />
  );
}
