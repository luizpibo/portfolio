import { Container } from "./style";

const GradiendButton = ({
  color,
  icon,
  text,
  url,
}: {
  color: string;
  icon: string;
  text: string;
  url: string;
}) => {
  return (
    <Container href={url} color={color}>
      {/* <img src={icon} /> */}
      {text}
    </Container>
  );
};

export default GradiendButton;
