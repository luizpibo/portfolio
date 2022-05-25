import { Container } from "./style";
import {
  ImLink,
  ImLinkedin2,
  ImMail3,
  ImGithub,
  ImFolderDownload,
} from "react-icons/im";

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
  function switchIcons(icon: string) {
    switch (icon) {
      case "download":
        return <ImFolderDownload />;
      case "email":
        return <ImMail3 />;
      case "linkedin":
        return <ImLinkedin2 />;
      case "github":
        return <ImGithub />;
      default:
        return <ImLink />;
    }
  }

  return (
    <Container href={url} color={color}>
      {switchIcons(icon)}
      {text}
    </Container>
  );
};

export default GradiendButton;
