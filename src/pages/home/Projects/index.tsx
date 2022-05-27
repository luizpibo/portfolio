import { ContainerProjects, Projects, Project } from "./style";
import GradiendButton from "../../../components/GradientButton";
const ProjectsComponent = () => {
  const projects = [
    {
      name: "GoChamp",
      description:
        "Trabalho da matéria de desenvolvimento web usando express, node, sequelize e handlebars.",
      image: "/GoChamp.png",
      link: "https://github.com/luizpibo/GoChamp",
    },
    {
      name: "Busca clima",
      description:
        "SPA feita em react que usa a api do clima para buscar o clima de uma cidade.",
      image: "/busca_clima.png",
      link: "https://github.com/luizpibo/busca_clima/",
    },
    {
      name: "Grid teamplate",
      description: "site de noticias sobre jogos feita usando display grid.",
      image: "/grid.png",
      link: "https://github.com/luizpibo/display_grid",
    },
    {
      name: "UNIT UPIXELS",
      description:
        "Estou trabalhando na migraçao da PWA para o novo layout. A plataforma usa postgresql, next.js, styled-components e tailwind.",
      image: "/upixels.png",
      link: "https://upixels.com.br/",
    },
    {
      name: "Despensa domestica",
      description:
        "Trabalhando em finalizar um aplicativo para ajudar a gerenciar a despensa domestica.",
      image: "https://via.placeholder.com/300x200",
      link: "https://github.com/luizpibo/Despensa_domestica",
    },
  ];

  return (
    <ContainerProjects id="projetos">
      {/* <h2>Projects</h2> */}
      <Projects>
        {projects.map((project, index) => (
          <Project data-aos="zoom-in" key={"Projeto-" + project.name + index}>
            <img
              src={project.image}
              alt={`imagem do projeto ${project.name}`}
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <GradiendButton
              color="red"
              icon="link"
              text="Visualizar"
              url={project.link}
              key={project.name + index}
            />
          </Project>
        ))}
      </Projects>
    </ContainerProjects>
  );
};

export default ProjectsComponent;
