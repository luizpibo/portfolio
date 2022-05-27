import React from "react";
import { Container, Wrapper, Presentetion, Buttons } from "./style";
import Elipse from "../../../components/elipse_home";
import GradientButton from "../../../components/GradientButton";
import NavBar from "../../../components/NavBar";

const HeaderComponent = () => {
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Presentetion>
          <h1>Olá, seja bem-vindo</h1>
          {/* <div>

          </div>
          <h4>DESENVOLVEDOR FRONT-END</h4> */}
          <h2>
            <span>Eu sou o</span> Luiz Fernando
          </h2>
          <Buttons>
            <GradientButton
              icon="linkedin"
              color="blue"
              url="https://www.linkedin.com/in/luiz-fernando-lima-e-silva-858192125/"
              text="Linkedin"
            />
            <GradientButton
              icon="GitHub"
              color="pink"
              url="https://www.github.com/luizpibo"
              text="GitHub"
            />
          </Buttons>
        </Presentetion>
        <Elipse />
      </Wrapper>
    </Container>
  );
};

export default HeaderComponent;
