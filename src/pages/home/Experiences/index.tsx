import React, { useState } from "react";
import { ContainerExperience, ButtonsNav, Experience } from "./style";
const Experiences = () => {
  const dados = [
    {
      title: "Desenvolvedor Full Stack",
      date: "2020 - Presente",
      company: "CASA",
      description:
        " web e mobile com ReactJS, React Native, NodeJS, Express, MongoDB, TypeScript, React-Native-Web, React-Native-Paper e React-Native-Camera.",
    },
    {
      title: "Desenvolvedor Full Stack",
      date: "2020 - Presente",
      company: "NASA",
      description:
        "Desenvolvimento de aplicações web e mobile com ReactJS, React Native, NodeJS, Express, MongoDB, TypeScript, React-Native-Web, React-Native-Paper e React-Native-Camera.",
    },
    {
      title: "Desenvolvedor Full Stack",
      date: "2020 - Presente",
      company: "CAMA",
      description:
        "Desenvolvimento de aplicações web e NodeJS, Express, MongoDB, TypeScript, React-Native-Web, React-Native-Paper e React-Native-Camera.",
    },
    {
      title: "Desenvolvedor Full Stack",
      date: "2020 - Presente",
      company: "SALA",
      description:
        "Desenvolvimento de aplicações web e mobile com ReactJS, React Native, NodeJS, Express, MongoDB, TypeScript, React-Native-Web, React-Native-Paper e React-Native-Camera.",
    },
  ];
  const [experience, setExperience] = useState(dados[0]);

  return (
    <div id="experiencias">
      <ContainerExperience>
        <h2 style={{ padding: "1rem 0" }}>EXPERIÊNCIAS</h2>
        <ButtonsNav>
          <ul>
            {dados.map((dado, index) => (
              <li
                key={index + dado.title + " nav"}
                onClick={(e) => {
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

        <Experience>
          <div>
            <h3>{experience.title}</h3> <span>{experience.date}</span>
          </div>
          <p>{experience.company}</p>
          <p>{experience.description}</p>
        </Experience>
      </ContainerExperience>
    </div>
  );
};

export default Experiences;
