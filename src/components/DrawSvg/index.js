import { Container } from './style';

export const DrawSvg = ({ svg: Svg = false }) => {
  return (
    <Container>
      <Svg className="draw-path" />
    </Container>
  );
};
