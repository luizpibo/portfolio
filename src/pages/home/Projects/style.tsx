import Styled from "styled-components";

const ContainerProjects = Styled.section`
    background: ${(props) => props.theme.neutralColors.dark200};
    color: ${(props) => props.theme.neutralColors.light};
    h2 {
        padding-top: 1rem;
        padding-left: 7rem;
    }
`;
const Projects = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    aling-items: flex-start;
`;
const Project = Styled.div`
    width: 30rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 1;
    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }
    img {
        width: 100%;
        border-left: 0.5rem solid ${(props) => props.theme.colors.blue};
        border-radius: 0.3rem;
    }
    p{
        color: ${(props) => props.theme.neutralColors.grayLight}
    }

    @media(max-width: 500px){
        width: 100%;
    }
`;

export { ContainerProjects, Projects, Project };
