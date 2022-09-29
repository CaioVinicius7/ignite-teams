import { Container, Subtitle, Title } from "./styles";

interface HighlightPops {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: HighlightPops) {
  return (
    <Container>
      <Title> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </Container>
  );
}
