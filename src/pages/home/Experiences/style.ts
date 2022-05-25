import styled from "styled-components";

const ContainerExperience = styled.section`
  background-color: ${(props) => props.theme.neutralColors.dark};
  color: ${(props) => props.theme.neutralColors.light};
  display: flex;
  gap: 3rem;
  padding: 5rem 7rem;

  @media (max-width: 730px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

const ButtonsNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 0.5rem;

    li {
      padding: 1rem 2.25rem;
      border-left: 0.2rem solid ${(props) => props.theme.neutralColors.dark200};
      transition: 1s;
      background: linear-gradient(
        45deg,
        ${(props) => props.theme.neutralColors.dark200},
        ${(props) => props.theme.neutralColors.dark}
      );
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.neutralColors.dark200};
        border-left: 0.2rem solid ${(props) => props.theme.colors.blue};
        transition: 1s;
      }

    }
  }

  @media (max-width: 730px) {
    padding: 1rem;
    ul {
      flex-direction: row;
    }
    overflow-x: scroll;
  }
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 75%;
  transition: 1s;
  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 730px) {
    width: 100%;
  }
`;

export { ContainerExperience, ButtonsNav, Experience };
