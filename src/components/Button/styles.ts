import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

interface ButtonProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.colors.green_700 : theme.colors.red_dark};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.MD}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold}px;
`;
