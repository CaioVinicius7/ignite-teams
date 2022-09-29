import { TouchableOpacityProps } from "react-native";

import { Container, Icon } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {}

export function ButtonIcon({ ...props }: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon name="house" type="PRIMARY" />
    </Container>
  );
}
