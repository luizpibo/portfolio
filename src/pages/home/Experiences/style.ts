import styled from "styled-components";

const ContainerExperience = styled.section`
  display: flex;
  width: 100%;
  padding: 3rem 7rem;
  gap: 3rem;
  background-color: ${(props) => props.theme.neutralColors.dark};
  color: ${(props) => props.theme.neutralColors.light};
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
      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.neutralColors.dark200};
        border-left: 0.2rem solid ${(props) => props.theme.colors.blue};
        transition: 1s;
      }

      &:focus {
        background-color: ${(props) => props.theme.neutralColors.dark200};
        border-left: 0.2rem solid ${(props) => props.theme.colors.blue};
      }
    }
  }
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 75%;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export { ContainerExperience, ButtonsNav, Experience };
