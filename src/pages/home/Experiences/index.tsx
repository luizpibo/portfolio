import React, { useState } from "react";
import { ContainerExperience, ButtonsNav, Experience } from "./style";
const Experiences = () => {
  const dados = [
    {
      title: "Front-end",
      company: "HTML CSS JS",
      description:
        "HTML5/CSS3, semântica HTML, Flexbox, CSS Grid, Arquitetura CSS, Layouts responsivos, Listas, formulários, tabelas, JavaScript para web, protocolo HTTP e otimização de SEO",
    },
    {
      title: "SPA",
      company: "React JS",
      description:
        "ciclo de vida de componentes, function components, hooks, context, navegação em uma SPA, testes automatizados usando Ract JS, material UI e Styled Components",
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Next.js",
      description:
        "Desenvolvimento de aplicações web e mobile com ReactJS, React Native, NodeJS, Express, MongoDB, TypeScript, React-Native-Web, React-Native-Paper e React-Native-Camera.",
    },
    {
      title: "API",
      company: "Express",
      description:
        "SSR (Server-side Rendering), SEO, SSG(Static Site Generation), Routing, API Routes",
    },
  ];
  const [experience, setExperience] = useState(dados[0]);

  return (
    <ContainerExperience id="experiencias">
      <div data-aos="zoom-in">
        {/* <h2 style={{ paddingBottom: "1rem" }}>EXPERIÊNCIAS</h2> */}
        <ButtonsNav>
          <ul>
            {dados.map((dado, index) => (
              <li
                key={index + dado.title + " nav"}
                onMouseUp={() => {
                  setExperience(dado);
                }}
              >
                <div>
                  <span>{dado.company}</span>
                </div>
              </li>
            ))}
          </ul>
        </ButtonsNav>
      </div>
      <Experience data-aos="fade-left">
        <div>
          <h3>{experience.company}</h3>
        </div>
        <p>{experience.title}</p>
        <p>{experience.description}</p>
      </Experience>
    </ContainerExperience>
  );
};

export default Experiences;
