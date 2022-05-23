import { Container, Wrapper, Presentetion, Buttons } from "./style";
import Elipse from "../../../components/elipse_home";
import GradientButton from "../../../components/GradientButton";

const HeaderComponent = () => {
  return (
    <Container>
      <nav>
        Luiz Fernando
        <ul>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Experiência</li>
          <li>Projetos</li>
        </ul>
      </nav>
      <Wrapper>
        <Presentetion>
          <h2>OLÁ, EU SOU</h2>
          <h1>LUIZ FERNANDO</h1>
          <h3>DESENVOLVEDOR FRONT-END</h3>
          <Buttons>
            <GradientButton
              icon="linkedin"
              color="blue"
              url="#"
              text="Linkedin"
            />
            <GradientButton icon="GitHub" color="pink" url="#" text="GitHub" />
          </Buttons>
        </Presentetion>
        <Elipse />
      </Wrapper>
    </Container>
  );
};

export default HeaderComponent;
