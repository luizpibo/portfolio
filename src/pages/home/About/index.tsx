import GradiendButton from "../../../components/GradientButton";
import {
  ContainerAbout,
  Buttons,
  ImageContainer,
  TextContainer,
} from "./styles";
const infos = {
  localization: "Brasília-DF",
  texto:
    "Graduando em ciência da computação, sempre fui apaixonado por tecnologias e inovação, desde 2018 venho desenvolvendo minhas competências relacionadas a desenvolvimento de software, desenvolvendo diversos projetos adquiri conhecimentos com o front e back-end de aplicações web, atualmente tenho mais conhecimentos sobre desenvolvimento front-end web e mobile usando react.",
};
const About = () => {
  return (
    <div id="sobre">
      <ContainerAbout>
        <ImageContainer>
          <img src="https://www.github.com/luizpibo.png" />
        </ImageContainer>

        <TextContainer>
          <h2> Sobre mim</h2>
          <address>{infos.localization}</address>
          <p>{infos.texto}</p>
          <Buttons>
            <GradiendButton
              color="pink"
              icon="download"
              text="Currículo"
              url="#"
            />
            <GradiendButton color="blue" icon="email" text="E-mail" url="#" />
          </Buttons>
        </TextContainer>
      </ContainerAbout>
    </div>
  );
};

export default About;
