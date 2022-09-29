import { TouchableOpacityProps } from "react-native";

import { Container, FilterStylesProps, Title } from "./styles";

interface FilterProps extends TouchableOpacityProps, FilterStylesProps {
  title: string;
}

export function Filter({ title, isActive, ...props }: FilterProps) {
  return (
    <Container isActive={isActive} {...props}>
      <Title> {title} </Title>
    </Container>
  );
}
