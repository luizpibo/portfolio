import React from "react";
import { Container, Wrapper, Presentetion, Buttons } from "./style";
import Elipse from "../../../components/elipse_home";
import GradientButton from "../../../components/GradientButton";
import NavBar from "../../../components/NavBar";

const HeaderComponent = () => {
  return (
    <Container>
      <NavBar />
      <Wrapper data-aos="fade-up">
        <Presentetion data-aos="fade-right">
          <h3>Olá, seja bem-vindo</h3>
          <h1>
            <span>Eu sou</span> Luiz Fernando
          </h1>
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
